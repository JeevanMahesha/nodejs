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

const e2: IElevatedEmployee = {
	name: "jeevan",
	privileges: ["create-server"],
	startDate: new Date(),
};
// ! Type Guards
type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
	console.log("Name " + emp.name);
	// ? in is used to check the property exist in the object or not
	if ("privileges" in emp) {
		console.log("Privileges " + emp.privileges);
	}

	if ("startDate" in emp) {
		console.log("Start Date " + emp.startDate);
	}
}

printEmployeeInformation(e2);
// printEmployeeInformation({ name: "dummy", startDate: new Date() });

class Car {
	drive() {
		console.log("Driving a car........");
	}
}
class Truck {
	drive() {
		console.log("Driving a Truck........");
	}

	loadCargo(amount: number) {
		console.log("Load Cargo " + amount);
	}
}

const v1 = new Car();
const v2 = new Truck();

type Vehicle = Car | Truck;

function useVehicle(vehicle: Vehicle) {
	vehicle.drive();
	// ? instanceof can be used only when we have Class
	if (vehicle instanceof Truck) {
		vehicle.loadCargo(5000);
	}
}

useVehicle(v1);
useVehicle(v2);
