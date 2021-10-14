
const fs = require('fs');
const path = require('path');
fs.readdirSync(__dirname).forEach(element => {
    let data = path.join(element, 'node_modules')
    if (fs.existsSync(data)) {
        fs.rmdirSync(data, { recursive: true })
        console.log(data);
    }
});