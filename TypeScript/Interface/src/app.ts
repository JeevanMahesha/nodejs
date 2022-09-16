interface IGreet {
	greet(): void;
}

interface IPerson extends IGreet {
	name: string;
	readonly age: number;
}

class Person implements IPerson {
	name: string;
	age: number;

	constructor(n: string, a: number) {
		this.name = n;
		this.age = a;
	}

	greet(): void {
		console.info(this.name + " Welcome");
	}
}
