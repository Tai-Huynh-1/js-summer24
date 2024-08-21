// ES6
class Store {
	// properites
	name;
	isOpen;
	numberOfEmployees;
	yearOpen;

	// constructor function
	constructor(name, numberOfEmployees, yearOpen) {
		this.name = name;
		this.numberOfEmployees = numberOfEmployees;
		this.yearOpen = yearOpen;

		this.isOpen = false;
		// this.customMethod = function () {};
	}

	// class methods
	openStore() {
		this.isOpen = true;
	}

	closeStore() {
		this.isOpen = false;
	}

	getIsOpen() {
		return this.isOpen;
	}

	getNumberOfEmployees() {
		return this.numberOfEmployees;
	}

	// encapsulation / private variables
	// setNumberOfEmployees(newNumber)
}

const paneraBread = new Store("Panera Bread", 10, "2024");
// console.log(paneraBread);

// oop principle: inheritance - inheriting properties/methods from

// abstraction: is the process of simplying and regrouping complex objects into more primitive structures (differents ways of defining basic characteristics without care for implementation detail)
// Java: abstract classes, interfaces

// base class / parent class / super class
class Vehicle {
	#year;
	#make;
	#model;
	#color;

	// constructor
	constructor(year, make, model, color) {
		this.#year = year;
		this.#make = make;
		this.#model = model;
		this.#color = color;
	}

	// methods for gets: why?
	getYear() {
		return this.#year;
	}

	getMake() {
		return this.#make;
	}

	getModel() {
		return this.#model;
	}

	getColor() {
		return this.#color;
	}

	useHorn() {
		console.log("Vehicle: beep beep!");
	}

	start() {
		console.log("starting Vehicle");
	}

	stop() {
		console.log("turning off Vehicle");
	}

	prep() {
		console.log("prepping vehicle to start");
	}
}

// child / derived class: SUV, Minivan, Sedan, Crossover
class SUV extends Vehicle {
	// properties unique to SUV
	#seats;

	// SUV constructor
	constructor(year, make, model, color, seats) {
		super(year, make, model, color); // call parent class constructor and pass on arguments that it maintains - super() is the parent constructor function

		this.#seats = seats; // this property we maintain in this class, so we set the value here
	}

	// SUV methods
	getSeats() {
		return this.#seats;
	}

	setSeats(num) {
		if (typeof num !== "number") return;
		if (num < 5 || num > 8) return;
		this.#seats = num;
	}

	// overriding (polymorphism)
	// useHorn() {
	// 	console.log("SUV: honk honk!");
	// }
	useHorn(sound) {
		console.log(sound);
	}
}

class Sedan {
	// year;
	// make;
	// model;
	// color;
	seats;

	constructor(year, make, model, color, seats) {
		// super(year, make, model, color);
		// this.year = year;
		// this.make = make;
		// this.model = model;
		// this.color = color;
		this.seats = seats;
	}

	getSeats() {
		return this.seats;
	}

	// getYear() {
	// 	return this.year;
	// }

	// getMake() {
	// 	return this.make;
	// }

	// getModel() {
	// 	return this.model;
	// }

	// getColor() {
	// 	return this.color;
	// }

	// useHorn() {
	// 	console.log("Sedan: beep beep!");
	// }

	// start() {
	// 	console.log("starting Sedan");
	// }

	// stop() {
	// 	console.log("turning off Sedan");
	// }
}

const suv1 = new SUV("2015", "toyota", "highlander", "white", 7);
const sedan1 = new Sedan("2020", "honda", "civic", "grey", 5);

suv1.setSeats(6);
console.log(suv1.getSeats());

// OOP principle: polymorphism: replace parent's implementation
// override / overload methods
// suv1.useHorn("custom suv horn sound");

// OOP principle: encapsulation: privatize properties and methods, exposing only what is allowed. Control logic in the methods

// static methods:
class Shape {
	// general utility methods that does not require an instance
	static compareArea(shape1, shape2) {
		if (shape1.calculateArea() > shape2.calculateArea()) return 1;
		if (shape1.calculateArea() === shape2.calculateArea()) return 0;
		return -1; // if area of shape1 < shape2
	}

	#name;
	constructor(name) {
		this.#name = name;
	}

	getName() {
		return this.#name;
	}
}

class Circle extends Shape {
	#radius;
	constructor(n, r) {
		super(n);
		this.#radius = r;
	}
	calculateArea() {
		return this.#radius * this.#radius * 3.14;
	}
}

class Rectangle extends Shape {
	#width;
	#height;
	constructor(n, w, h) {
		super(n);
		this.#width = w;
		this.#height = h;
	}
	calculateArea() {
		return this.#width * this.#height;
	}
}
// 12.56 > 8
console.log("shape compare: ", Shape.compareArea(new Circle("circle", 2), new Rectangle("rect", 2, 4)));
