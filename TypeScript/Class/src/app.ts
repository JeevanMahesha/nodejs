class Department {
	name: string;

	constructor(userName: string) {
		this.name = userName;
	}
}

const userOne = new Department("Jeevan");
console.log(userOne);
