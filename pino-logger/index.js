const express = require("express");
const { pino } = require("pino");

const app = express();
PORT = 6000;
let person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };
const dest = pino.destination(__dirname + "/log/file.log");

const logger = pino(
	{
		formatters: {
			level: (level) => ({ level: level }),
		},
		timestamp: () => `,"time":"${new Date(Date.now()).toISOString()}"`,
	},
	dest
);

// const logger = pino({
// 	transport: {
// 		target: "pino-pretty",
// 		options: {
// 			messageFormat: false,
// 			translateTime: "SYS:dd-mm-yyyy, h:MM:ss TT",
// 		},
// 	},
// });

const timeOut = () => {
	setTimeout(() => {
		logger.fatal("asda");
		logger.error(person);
	}, PORT);
};

app.get("/", function (req, res) {
	logger.info(person);
	console.log(a);
	res.send({ data: "Hello World" });
});

app.listen(PORT, () => {
	console.log(`\n\nhttp://localhost:${PORT}\n\n`);
	timeOut();
});
