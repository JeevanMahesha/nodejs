class Department {
	// name: string;
	private employees: string[] = [];

	// constructor(userName: string) {
	// 	this.name = userName;
	// }

	constructor(private readonly id: string, public name: string) {}

	describe(this: Department) {
		console.log(this.id, this.name);
	}

	addEmployee(employee: string): void {
		this.employees.push(employee);
	}

	printEmployeeInformation() {
		console.log(this.employees.length);
		console.log(this.employees);
	}
}

const userOne = new Department("001", "Jeevan");

userOne.addEmployee("EMP1");
userOne.addEmployee("EMP2");
userOne.printEmployeeInformation();

userOne.describe();

class ITDepartment extends Department {
	admins: string[] = [];
	constructor(id: string, admins: string[]) {
		super(id, "IT");
		this.admins = admins;
	}
}

const ITDepartment1 = new ITDepartment("002222222222", ["READ"]);

ITDepartment1.describe();

console.log(ITDepartment1);
