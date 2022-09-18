const names: Array<string> = []; // string[]

const promise: Promise<string> = new Promise((resolve, _reject) => {
	setTimeout(() => {
		resolve("This is Finished");
	}, 2000);
});

// =============================================================================================

// extends refers the type of T / U must be Object
function merge<T extends object, U extends object>(
	objectA: T,
	objectB: U
): T & U {
	return Object.assign(objectA, objectB);
}

/* 

? This is once way 

function merge<T, U>(objectA: T, objectB: U): T & U {
	return Object.assign({}, objectA, objectB);
}
 */
const mergedObj = merge({ name: "NAME" }, { age: 20 });

// console.log(mergedObj);

interface ILengthy {
	length: number;
}

function countAndPrint<T extends ILengthy>(element: T): [T, string] {
	let descriptionText = "Length is 0";
	if (element.length > 0) {
		descriptionText = "Length is " + element.length;
	}
	return [element, descriptionText];
}

console.log(countAndPrint("Jeevan"));

/* 

? keyof is used to set a constrain that T object will have the property which U value

*/
function extractConvert<T extends object, U extends keyof T>(obj: T, key: U) {
	return obj[key];
}

console.log(extractConvert({ name: "jeevan" }, "name"));
