function Logger(logString: string) {
	return (constructor: Function) => {
		console.log(logString);
		console.log(constructor);
	};
}

@Logger("Person")
class Person {
	name = "Jeevan";
	constructor() {
		console.log("Creating Person object.....");
	}
}

const p1 = new Person();

console.log(p1);
