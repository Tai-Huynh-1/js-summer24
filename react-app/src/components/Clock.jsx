import { Component } from "react";

// proper functional React component (should be in its own file)
// but I'm not doing that due to laziness
function FormattedDate(props) {
	return <h2>It is {this.state.date.toLocaleTimeString()}</h2>;
}

class Clock extends Component {
	constructor(props) {
		super(props);
		this.state = { username: "Terry", date: new Date() }; // assignment here is okay
	}

	// lifecycle method React will call when your component has just mounted to the DOM
	// set up any resources here
	componentDidMount() {
		this.timerID = setInterval(() => this.tick(), 1000);
	}

	// lifecycle method React will call when your component is about to get unmounted from the DOM
	// remove / clean up any resources here
	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	// this method updates our state object which will trigger a re-render by React automatically
	// perform a state update (the correct way by using this.setState())
	tick() {
		// this.state = { date: new Date()} // wrong way, cannot reassign
		// this.state.date = new Date() // also wrong way

		const newState = { date: new Date() };
		this.setState(newState); // NEED TO USE THIS METHOD TO UPDATE STATE
	}

	// the method that returns the JSX we want to display to the UI
	// React will also call this method on its own, we just need to define it, hence React is declarative
	render() {
		return (
			<div>
				<h1>Hello world. I'm {this.state.username}</h1>
				<FormattedDate />
			</div>
		);
	}
}

export default Clock;
