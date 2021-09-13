const fs = require('fs')

const folderName = '/home/mrhero/Desktop/test12'

try {
  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName)
    console.log("create file");
  }
} catch (err) {
  console.error(err)
}