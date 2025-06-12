// src/pages/api/files/[...path].js
import fs from 'fs/promises';
import path from 'path';

export async function GET({ params, url }) {
  try {
    console.log('Raw params:', params);
    
    // Get the path from the URL instead of params to avoid parsing issues
    const urlPath = new URL(url).pathname;
    const pathMatch = urlPath.match(/^\/api\/files\/(.+)$/);
    
    if (!pathMatch || !pathMatch[1]) {
      return new Response('Invalid path', { status: 400 });
    }
    
    const requestedPath = pathMatch[1];
    console.log('Requested path:', requestedPath);
    
    // Construct the full file path
    const filePath = path.join(process.cwd(), 'data', requestedPath);
    console.log('Full file path:', filePath);
    
    // Check if file exists
    try {
      await fs.access(filePath);
    } catch (e) {
      console.error('File not found:', filePath);
      return new Response('File not found', { status: 404 });
    }
    
    // Read the file
    const fileContent = await fs.readFile(filePath);
    
    // Determine content type based on file extension
    const ext = path.extname(filePath).toLowerCase();
    let contentType = 'application/octet-stream';
    
    switch (ext) {
      case '.pdf':
        contentType = 'application/pdf';
        break;
      case '.ppt':
      case '.pptx':
        contentType = 'application/vnd.ms-powerpoint';
        break;
      case '.odp':
        contentType = 'application/vnd.oasis.opendocument.presentation';
        break;
    }
    
    // Get filename for download
    const filename = path.basename(filePath);
    
    // Return the file
    return new Response(fileContent, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Content-Disposition': `attachment; filename="${filename}"`,
        'Content-Length': fileContent.length.toString(),
        'Cache-Control': 'public, max-age=3600'
      }
    });
    
  } catch (error) {
    console.error('Error serving file:', error);
    return new Response('Internal server error', { status: 500 });
  }
}