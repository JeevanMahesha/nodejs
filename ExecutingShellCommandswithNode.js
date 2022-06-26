const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");
fs.readdirSync(__dirname).forEach((folderName) => {
	if (!folderName.includes(".")) {
		console.log(folderName);
		exec("npm i --prefix ./" + folderName);
	}
});
