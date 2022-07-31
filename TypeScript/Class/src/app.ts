class Department {
	// name: string;
	protected employees: string[] = [];

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

console.log(userOne);

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

class AccountingDepartment extends Department {
	constructor(id: string, private reports: string[]) {
		super(id, "Account");
	}

	addEmployee(employee: string): void {
		if (employee === "EMP1") {
			return;
		}
		this.employees.push(employee);
	}

	addReport(text: string) {
		this.reports.push(text);
	}

	printReports() {
		console.log(this.reports);
	}
}

const account001 = new AccountingDepartment("003", []);

account001.addEmployee("EMP1");
account001.addEmployee("EMP2");

account001.addReport("REPORT TEXT");

account001.printReports();

account001.printEmployeeInformation();

console.log(account001);
