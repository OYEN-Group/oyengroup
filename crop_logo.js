const sharp = require('sharp');
const fs = require('fs');

async function processLogo() {
  try {
    const inputPath = 'public/images/logo_transparent.png';
    const outputPath = 'src/app/icon.png';
    
    // First, trim the image to remove transparent boundaries
    const metadata = await sharp(inputPath).metadata();
    
    // The symbol is usually the left part. Let's assume the symbol is roughly square.
    // We will extract a square from the left side of the trimmed image.
    // But first, let's just get the image, trim it, and then extract the left square.
    
    const trimmed = sharp(inputPath).trim();
    const trimmedBuffer = await trimmed.toBuffer();
    const trimmedMeta = await sharp(trimmedBuffer).metadata();
    
    console.log(`Trimmed size: ${trimmedMeta.width}x${trimmedMeta.height}`);
    
    // Assuming the symbol is on the left and is square, we take width = height from the left.
    // Some padding might be good, but we can just use sharp's extract.
    const cropSize = Math.min(trimmedMeta.width, trimmedMeta.height);
    
    await sharp(trimmedBuffer)
      .extract({ left: 0, top: 0, width: cropSize, height: cropSize })
      .toFile(outputPath);
      
    console.log(`Created icon at ${outputPath}`);
  } catch (error) {
    console.error('Error:', error);
  }
}

processLogo();
