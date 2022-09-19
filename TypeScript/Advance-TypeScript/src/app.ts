function Logger(logString: string) {
	return (constructor: Function) => {
		console.log(logString);
		console.log(constructor);
	};
}

function WithTemplet(templet: string, hookId: string) {
	return (constructor: any) => {
		const hookEle = document.getElementById(hookId);
		if (hookEle) {
			hookEle.innerHTML = templet;
			const p = new constructor();
			hookEle.querySelector("h1")!.textContent = p.name;
		}
	};
}

@Logger("Person")
@WithTemplet("<h1>My Person Object</h1>", "app")
class Person {
	name = "Jeevan";
	constructor() {
		console.log("Creating Person object.....");
	}
}

const p1 = new Person();

console.log(p1);
