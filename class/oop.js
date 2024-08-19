// Object-oriented programming: 4 main principles: inheritance, encapsulation, abstraction, polymorphism

// Creationg a normal object
const car1 = {
	brand: "Ford",
	year: "1998",
	color: "red",
	model: "mustang",
};

const car2 = {
	brand: "Toyota",
	year: "1998",
	color: "white",
	model: "camry",
};

function generateCar(brand, year, color, model) {
	return {
		brand: brand,
		year: year,
		color, // new ES6 notation allow you to omit ":" when key & value share same name
		model, // same
	};
}

const car3 = generateCar("tesla", "2020", "white", "model y");

// OOP: we use constructor function to create objects
// difference vs normal functions: capitalize function name for the object, no "return" keyword is used & don't create object to return
function Car(brand, year, color, model) {
	this.brand = brand;
	this.year = year;
	this.color = color;
	this.model = model;
	this.fahrTemp = 0;

	this.customMethod = function () {};
}

const car4 = new Car("tesla", "2020", "red", "model 3");
// console.log("car3", car3);
// console.log("car4", car4);

// accessing properties on object
// console.log(car4.brand, car4.color, car4["year"]);

// adding methods to Car after creation
Car.prototype.honk = function () {
	console.log("beep beep!");
};
car4.honk();

Car.prototype.setAc = function (fahrTemp) {
	this.fahrTemp = fahrTemp;
	console.log("ac is set to:", this.fahrTemp);
};
car4.setAc(70);

// const car4 = {
//     // custom properties,
//     prototype: {                     <----------------- prototype object allows us to "share" the same blueprint with all instance of "Car"
//         honk: function () {
//             console.log("beep beep!");
//         },

//         setAc: function (fahrTemp) {
//             this.fahrTemp = fahrTemp;
//             console.log("ac is set to:", this.fahrTemp);
//         }
//     }
// }

const car5 = new Car("honda", "2019", "grey", "civic");
car5.setAc(85);

// search and time complexity of array vs object, MockMap class
