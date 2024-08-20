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
		this.customMethod = function () {};
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
console.log(paneraBread);

// oop principle: inheritance
// base class / parent class / super class
class Vehicle {
	year;
	make;
	model;
	color;

	// constructor
	constructor(year, make, model, color) {
		this.year = year;
		this.make = make;
		this.model = model;
		this.color = color;
	}

	// methods for gets: why?
	getYear() {
		return this.year;
	}

	getMake() {
		return this.make;
	}

	getModel() {
		return this.model;
	}

	getColor() {
		return this.color;
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
	seats;

	// SUV constructor
	constructor(year, make, model, color, seats) {
		super(year, make, model, color); // call parent class constructor and pass on arguments that it maintains - super() is the parent constructor function

		this.seats = seats; // this property we maintain in this class, so we set the value here
	}

	// SUV methods
	getSeats() {
		return this.seats;
	}

	// setSeats(num) {
	// 	if (typeof num !== "number") return;
	// 	this.seats = num;
	// }

	// overriding (polymorphism)
}

// search and time complexity of array vs object, MockMap class
