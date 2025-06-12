// src/pages/api/download-all-slides/[...path].js
import JSZip from 'jszip';
import fs from 'fs/promises';
import path from 'path';

export async function POST({ params, request }) {
  try {
    // Extract parameters from the path
    // params.path could be a string or array depending on Astro version
    let pathParts;
    if (Array.isArray(params.path)) {
      pathParts = params.path;
    } else if (typeof params.path === 'string') {
      pathParts = params.path.split('/');
    } else {
      // Fallback: try to parse from the URL
      const { days } = await request.json();
      console.error('Unexpected params.path format:', params.path);
      return new Response(JSON.stringify({ error: 'Invalid path format' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    const [summerschool, year, coursename] = pathParts;
    
    const { days } = await request.json();
    
    console.log('Download request:', { 
      summerschool, 
      year, 
      coursename, 
      days,
      pathParts,
      paramsPath: params.path
    });
    
    // Create a new zip file
    const zip = new JSZip();
    
    // Base directory for course files
    const courseDir = path.join(process.cwd(), 'data', summerschool, year, coursename);
    console.log('Looking in directory:', courseDir);
    
    // Check if directory exists
    try {
      await fs.access(courseDir);
    } catch (e) {
      console.error('Course directory not found:', courseDir);
      return new Response(JSON.stringify({ error: 'Course directory not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    // Track if we found any files
    let filesAdded = 0;
    const errors = [];
    
    // Add each file to the zip
    for (const dayInfo of days) {
      try {
        const fileName = dayInfo.file;
        
        if (fileName) {
          const filePath = path.join(courseDir, fileName);
          console.log(`Attempting to read: ${filePath}`);
          
          try {
            const fileContent = await fs.readFile(filePath);
            zip.file(fileName, fileContent);
            filesAdded++;
            console.log(`Successfully added ${fileName} to zip`);
          } catch (readError) {
            console.error(`Failed to read ${fileName}:`, readError.message);
            errors.push(`Could not read ${fileName}`);
          }
        }
      } catch (e) {
        console.error(`Error processing day:`, e);
        errors.push(e.message);
      }
    }
    
    if (filesAdded === 0) {
      return new Response(JSON.stringify({ 
        error: 'No slide files could be added to zip',
        details: errors 
      }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    console.log(`Creating zip with ${filesAdded} files...`);
    
    // Generate the zip file
    const zipContent = await zip.generateAsync({ 
      type: 'nodebuffer',
      compression: 'DEFLATE',
      compressionOptions: { level: 6 }
    });
    
    console.log(`Zip created successfully, size: ${zipContent.length} bytes`);
    
    // Return the zip file
    return new Response(zipContent, {
      status: 200,
      headers: {
        'Content-Type': 'application/zip',
        'Content-Disposition': `attachment; filename="${coursename}-slides.zip"`,
        'Content-Length': zipContent.length.toString()
      }
    });
    
  } catch (error) {
    console.error('Unexpected error in download API:', error);
    return new Response(JSON.stringify({ 
      error: 'Internal server error',
      message: error.message,
      stack: error.stack 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

// Handle GET for debugging
export async function GET({ params }) {
  // Handle both array and string formats
  let pathParts;
  if (Array.isArray(params.path)) {
    pathParts = params.path;
  } else if (typeof params.path === 'string') {
    pathParts = params.path.split('/');
  } else {
    pathParts = [];
  }
  
  return new Response(JSON.stringify({ 
    message: 'Download API endpoint',
    method: 'Use POST to download files',
    path: pathParts.join('/'),
    pathParts: pathParts,
    paramsPath: params.path,
    expectedPath: '[summerschool]/[year]/[coursename]'
  }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}