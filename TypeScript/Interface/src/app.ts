interface IPerson {
	name: string;
	readonly age: number;
	greet(): void;
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
