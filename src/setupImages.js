// This is a helper script to download the space background image
const fs = require('fs');
const https = require('https');
const path = require('path');

// Create the images directory if it doesn't exist
const imagesDir = path.join(__dirname, '../public/images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// URL of a space background image (you can replace with any suitable image)
const imageUrl = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80';
const imagePath = path.join(imagesDir, 'space-bg.jpg');

// Download the image
const file = fs.createWriteStream(imagePath);
https.get(imageUrl, (response) => {
  response.pipe(file);
  file.on('finish', () => {
    file.close();
    console.log('Space background image downloaded successfully!');
  });
}).on('error', (err) => {
  fs.unlink(imagePath);
  console.error('Error downloading the image:', err.message);
});