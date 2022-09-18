const names: Array<string> = []; // string[]

const promise: Promise<string> = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("This is Finished");
	}, 2000);
});
