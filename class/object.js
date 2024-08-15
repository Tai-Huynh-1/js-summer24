// objects are a collection of <key: value> pairs separated by ,
// ORDER DOES NOT MATTER, WHAT MATTERS IS THE KEY VALUE
// don't get confused with these other notations/syntaxes
// function myFunc() {}, myFunc()
// const arr = () => {}, arr()
// const func = function () {}, func()

// create
const student1 = {
	firstName: "Anne",
	email: "anne@gmail.com",
	phone: {
		home: "",
		cell: "",
	},
	age: 15,
	isActive: true,
	address: {
		mailingAddress: "123 Main St",
		shippingAddress: "321 Wall St", // <----
	},
	enrollment: ["cs101", "math1a", "chem2a"], // <---- chem2a
	gradYear: null,

	// methods
	getName: function () {
		return this.getName;
	},

	// ES6 new notation does not need a ":" or "function" keyword
	// phoneType: "home", "cell"
	getPhone(phoneType) {
		return this.phone[phoneType];
	},

	// 2 methods
	// add course method, param: newCourse
	addCourse: function (newCourse) {
		if (newCourse === "") return false;
		if (this.enrollment.includes(newCourse)) return false;
		this.enrollment.push(newCourse);
		return true;
	},

	// remove an existing course, param: courseToRemove
	removeCourse(courseToRemove) {
		const index = this.enrollment.indexOf(courseToRemove);
		if (index > -1) {
			this.enrollment.splice(index, 1);
			return true;
		}
		return false;
	},
};

student1.addCourse("lang04");
student1.removeCourse("math1a");
console.log(student1);

// access/read data in an object => we use the "." (students1.email) or <object>["key"] (ex: student1["email"])
// console.log(student1.email);
// console.log(student1["email"]);
// console.log(student1.address.shippingAddress);
// console.log(student1.enrollment[2]);
// console.log(student1["enrollment"][2]);

// updates
// shipping -> 4321 Wall St
// chem2a -> bio101
student1.address.shippingAddress = "4321 Wall St";
student1.enrollment[2] = "bio101";

// update gradYear to "2025"
student1.gradYear = "2025";

// adding new properties after creation
// gpa: 4.0
student1.gpa = 4.0;
// Object.freeze(student1);
student1.gpa = 3.5;

// delete / remove keys
delete student1.gradYear;
// console.log(student1);

// variable can store a function as well
// const myFunc = function() {}
// function myFunc1() {}

// functions in an object is called a "method"
student1.getEmail = function () {
	return this.email;
};
// console.log(student1.getEmail());

// write method for returning the mailing address
student1.getMailingAddress = function () {
	console.log("this from student object", this);
	return this.address.mailingAddress;
};

student1.address.getMailingAddress = function () {
	console.log("this from address object", this);
	return this.mailingAddress;
};

// console.log("address: ", student1.getMailingAddress());
// student1.address.getMailingAddress();

// try "this" with arrow function
student1.getShippingAddress = () => {
	console.log("this from arrow function: ", this);
	return this.address.shippingAddress;
};

// console.log(student1.getShippingAddress());

// globalThis and arrow functions
// DON'T USE "THIS" in arrow functions, if your code uses "THIS", use "function" declaration
