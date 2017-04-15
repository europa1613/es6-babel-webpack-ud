class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	toString() {
		return `Name: ${this.name}, Age: ${this.age}`;
	}

	getName() {
		return this.name;
	}

	getAge() {
		return this.age;
	}

	static getUpperCaseName(name) {
		return name.toUpperCase();
	}
}

export default Person;