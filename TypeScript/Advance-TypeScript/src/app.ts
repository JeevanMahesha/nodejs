// Code goes here!

type Admin = {
	name: string;
	privileges: string[];
};

type Employee = {
	name: string;
	startDate: Date;
};

// ? Intersection type
type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
	name: "Max",
	privileges: ["create-server"],
	startDate: new Date(),
};

interface IAdmin {
	name: string;
	privileges: string[];
}

interface IEmployee {
	name: string;
	startDate: Date;
}

interface IElevatedEmployee extends IAdmin, IEmployee {}

const e2: ElevatedEmployee = {
	name: "jeevan",
	privileges: ["create-server"],
	startDate: new Date(),
};
