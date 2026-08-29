import JSZip from 'jszip';
import fs from 'fs/promises';
import path from 'path';

import {
  dataRoot,
  isPlainFilename,
  parseCatchAllPath,
  resolveInside,
} from '../../../utils/safeDataPath.js';

const allowedFileExtensions = new Set(['.ipynb', '.odp', '.pdf', '.ppt', '.pptx']);

function jsonResponse(body, status) {
  return Response.json(body, {
    status,
    headers: { 'Cache-Control': 'no-store' },
  });
}

export async function POST({ params, request }) {
  const pathParts = parseCatchAllPath(params.path);
  if (!pathParts || pathParts.length !== 3) {
    return jsonResponse({ error: 'Invalid course path' }, 400);
  }

  const [summerSchool, year, courseName] = pathParts;
  if (
    !['esslli', 'nasslli'].includes(summerSchool) ||
    !/^\d{4}$/.test(year) ||
    !/^[a-z0-9][a-z0-9-]*$/.test(courseName)
  ) {
    return jsonResponse({ error: 'Invalid course path' }, 400);
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return jsonResponse({ error: 'Request body must be valid JSON' }, 400);
  }

  if (!Array.isArray(body?.days) || body.days.length === 0 || body.days.length > 10) {
    return jsonResponse({ error: 'days must be a non-empty list of at most 10 entries' }, 400);
  }

  const requestedFiles = [];
  for (const day of body.days) {
    const filename = day?.file;
    if (!isPlainFilename(filename) || !allowedFileExtensions.has(path.extname(filename).toLowerCase())) {
      return jsonResponse({ error: 'Invalid slide filename' }, 400);
    }
    if (!requestedFiles.includes(filename)) requestedFiles.push(filename);
  }

  const courseDirectory = resolveInside(dataRoot, summerSchool, year, courseName);
  if (!courseDirectory) return jsonResponse({ error: 'Invalid course path' }, 400);

  try {
    const courseInfo = await fs.stat(courseDirectory);
    if (!courseInfo.isDirectory()) return jsonResponse({ error: 'Course not found' }, 404);
  } catch (error) {
    if (error?.code === 'ENOENT' || error?.code === 'ENOTDIR') {
      return jsonResponse({ error: 'Course not found' }, 404);
    }
    return jsonResponse({ error: 'Internal server error' }, 500);
  }

  const zip = new JSZip();
  const missingFiles = [];

  for (const filename of requestedFiles) {
    const filePath = resolveInside(courseDirectory, filename);
    if (!filePath) return jsonResponse({ error: 'Invalid slide filename' }, 400);

    try {
      const fileInfo = await fs.stat(filePath);
      if (!fileInfo.isFile()) {
        missingFiles.push(filename);
        continue;
      }
      zip.file(filename, await fs.readFile(filePath));
    } catch (error) {
      if (error?.code === 'ENOENT' || error?.code === 'ENOTDIR') {
        missingFiles.push(filename);
        continue;
      }
      return jsonResponse({ error: 'Internal server error' }, 500);
    }
  }

  if (Object.keys(zip.files).length === 0) {
    return jsonResponse({ error: 'No requested slide files were found' }, 404);
  }

  const zipContent = await zip.generateAsync({
    type: 'nodebuffer',
    compression: 'DEFLATE',
    compressionOptions: { level: 6 },
  });

  return new Response(zipContent, {
    status: 200,
    headers: {
      'Cache-Control': 'no-store',
      'Content-Disposition': `attachment; filename="${courseName}-slides.zip"`,
      'Content-Length': zipContent.length.toString(),
      'Content-Type': 'application/zip',
      'X-Content-Type-Options': 'nosniff',
      ...(missingFiles.length > 0 ? { 'X-Missing-Files': missingFiles.length.toString() } : {}),
    },
  });
}

export function GET() {
  return new Response('Method not allowed', {
    status: 405,
    headers: { Allow: 'POST' },
  });
}
