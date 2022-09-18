const names: Array<string> = []; // string[]

const promise: Promise<string> = new Promise((resolve, _reject) => {
	setTimeout(() => {
		resolve("This is Finished");
	}, 2000);
});

// =============================================================================================

function merge<T extends object, U>(objectA: T, objectB: U): T & U {
	return Object.assign(objectA, objectB);
}

/* 

? This is once way 

function merge<T, U>(objectA: T, objectB: U): T & U {
	return Object.assign({}, objectA, objectB);
}
 */
const mergedObj = merge({ name: "NAME" }, { age: 20 });

console.log(mergedObj);
