// const toggle = {
// 	name: "toggle",
// 	handleClick: function () {
// 		console.log("this --->", this);
// 		this.setState();
// 	},

// 	setState: function () {
// 		console.log("set state from TOGGLE");
// 	},
// };

// function button(onClick, children) {
// 	const button = {
// 		name: "button",
// 		children: children,
// 		// unbound will call: button.setState(), but this method is not defined
// 		// bound will call: toggle.setState(), this is okay, bcos setState is defined on "toggle" object
// 		onClick: onClick, // function() {this.setState()}
// 		// setState() {
// 		// 	console.log("set state from BUTTON");
// 		// },
// 	};
// 	return button;
// }

class Toggle {
	constructor() {
		this.name = "toggle";
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		console.log("this --->", this);
		this.setState();
	}

	setState() {
		console.log("set state from TOGGLE");
	}
}

class Button {
	constructor(onClick, children) {
		this.name = "button";
		this.children = children;
		this.onClick = onClick;
	}
}

const toggle = new Toggle();
const button1 = new Button(toggle.handleClick, "ON");
// toggle.handleClick();
button1.onClick();
