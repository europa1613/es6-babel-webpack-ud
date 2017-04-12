/* export */ function add(n1, n2) {
	return n1 + n2;
}

/* export */ function subtract(n1, n2) {
	return n1 - n2;
}

/* export */ function multiply(n1, n2) {
	return n1 * n2;
}

/* export */ function divide(n1, n2) {
	return n1 / n2;
}

/* export */ function remainder(n1, n2) {
	return n1 % n2;
}

/* export */ var pi = 3.141514154;

/* export */ class Person {
	toString() {
		return 'This a Mathh Person!';
	}
}


//use collective export
//also es6 object property shorthand
export {
	add,
	subtract,
	multiply,
	divide,
	remainder,
	pi,
	Person
};