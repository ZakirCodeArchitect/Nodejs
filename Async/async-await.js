const fs = require('fs').promises;

async function readFile() {
  try {
    const data = await fs.readFile('example.txt', 'utf8');  // Wait for file to be read
    console.log(data);  // Log the file contents
  } catch (error) {
    console.error('Error reading file:', error);  // Handle any errors
  }
}

readFile();  // Call the async function
