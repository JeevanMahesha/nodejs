class Department {
	name: string;
	private employees: string[] = [];

	constructor(userName: string) {
		this.name = userName;
	}

	addEmployee(employee: string): void {
		this.employees.push(employee);
	}

	printEmployeeInformation() {
		console.log(this.employees.length);
		console.log(this.employees);
	}
}

const userOne = new Department("Jeevan");

userOne.addEmployee("EMP1");
userOne.addEmployee("EMP2");
userOne.printEmployeeInformation();
