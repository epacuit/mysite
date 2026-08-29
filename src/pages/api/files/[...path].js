import fs from 'fs/promises';
import path from 'path';

import { dataRoot, parseCatchAllPath, resolveInside } from '../../../utils/safeDataPath.js';

const contentTypes = new Map([
  ['.ipynb', 'application/x-ipynb+json'],
  ['.odp', 'application/vnd.oasis.opendocument.presentation'],
  ['.pdf', 'application/pdf'],
  ['.ppt', 'application/vnd.ms-powerpoint'],
  ['.pptx', 'application/vnd.openxmlformats-officedocument.presentationml.presentation'],
]);

export async function GET({ params }) {
  const pathParts = parseCatchAllPath(params.path);
  const filePath = pathParts ? resolveInside(dataRoot, ...pathParts) : null;

  if (!filePath) return new Response('Invalid path', { status: 400 });

  const extension = path.extname(filePath).toLowerCase();
  const contentType = contentTypes.get(extension);
  if (!contentType) return new Response('Unsupported file type', { status: 415 });

  try {
    const fileInfo = await fs.stat(filePath);
    if (!fileInfo.isFile()) return new Response('File not found', { status: 404 });

    const fileContent = await fs.readFile(filePath);
    const filename = path.basename(filePath).replace(/["\r\n]/g, '_');

    return new Response(fileContent, {
      status: 200,
      headers: {
        'Cache-Control': 'public, max-age=3600',
        'Content-Disposition': `attachment; filename="${filename}"`,
        'Content-Length': fileContent.length.toString(),
        'Content-Type': contentType,
        'X-Content-Type-Options': 'nosniff',
      },
    });
  } catch (error) {
    if (error?.code === 'ENOENT' || error?.code === 'ENOTDIR') {
      return new Response('File not found', { status: 404 });
    }
    return new Response('Internal server error', { status: 500 });
  }
}
