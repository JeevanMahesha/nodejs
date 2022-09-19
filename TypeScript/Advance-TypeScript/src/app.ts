function Logger(constructor: Function) {
	console.log("Logging................");
	console.log(constructor);
}

@Logger
class Person {
	name = "Jeevan";
	constructor() {
		console.log("Creating Person object.....");
	}
}

const p1 = new Person();

console.log(p1);
