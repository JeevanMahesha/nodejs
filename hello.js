// console.log("Hello World")
// run node filename.js to see the output

const fs = require('fs');
const path = require('path');
fileNameArray = fs.readdirSync(__dirname);
fileNameToDelete = 'node_modules'
fileNameArray.forEach(element => {
    let data = path.join(element, fileNameToDelete)
    if (fs.existsSync(data)) {
        fs.rmdirSync(data, { recursive: true })
        console.log(data);
    }
});