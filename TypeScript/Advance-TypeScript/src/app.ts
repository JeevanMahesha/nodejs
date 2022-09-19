/**
 * "The Logger function takes a string and returns a function that takes a constructor and logs the
 * string."
 *
 * The Logger function is a factory function that returns a function.
 *
 * The returned function is a decorator.
 *
 * The decorator takes a constructor and logs the string
 * @param {string} logString - string - This is the string that we want to log out.
 * @returns A function that takes a constructor function as an argument.
 */
function Logger(logString: string) {
	return (constructor: Function) => {
		console.log(logString);
		console.log(constructor);
	};
}

/**
 * It takes a template string and a hookId string as arguments, and returns a function that takes a
 * constructor as an argument
 * @param {string} templet - string - The HTML template to use.
 * @param {string} hookId - The id of the element in the DOM that we want to render the component to.
 * @returns A function that takes a constructor and returns a function that takes a constructor.
 */
function WithTemplate(templet: string, hookId: string) {
	console.log("withTemplet");

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
@WithTemplate("<h1>My Person Object</h1>", "app")
class Person {
	name = "Jeevan";
	constructor() {
		console.log("Creating Person object.....");
	}
}

const p1 = new Person();

console.log(p1);
