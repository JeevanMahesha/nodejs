function calculateTax(income: number, taxYear = 2022): number {
	let x = 0;
	if (taxYear <= 1999) {
		return income * 2;
	} else {
		return income * 3;
	}
}

calculateTax(10000, 2000);
