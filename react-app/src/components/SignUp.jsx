import { Component, createRef } from "react";
import "./SignUp.css";

class SignUp extends Component {
	constructor(props) {
		super(props);
		this.state = { name: "", email: "", password: "" };

		this.pwRef = createRef();
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		console.log(event);
		const { id, value } = event.target;
		this.setState({
			[id]: value,
		});
	}

	handleSubmit(event) {
		event.preventDefault();
		alert("Submitting the form: " + JSON.stringify(this.state));
	}

	render() {
		console.log("state ", this.state);
		const { name, email, password } = this.state;
		return (
			<form id="signup-form-container" onSubmit={this.handleSubmit}>
				<div id="title-container">
					<h1>Welcome to React!</h1>
				</div>

				{/* name, email, password */}
				<div id="signup-form-input-container">
					<label id="name">
						Name:
						<input id="name" type="text" name="name" onChange={this.handleChange} value={name} />
					</label>

					<label id="email">
						Email:
						<input id="email" type="email" name="email" onChange={this.handleChange} value={email} />
					</label>

					<label id="password">
						Password:
						<input id="password" type="password" name="password" onChange={this.handleChange} value={password} />
					</label>
				</div>

				<div id="signup-form-submit-container">
					<button type="submit">Create Account</button>
					{/* <button type="reset">Reset Fields</button> */}
				</div>
			</form>
		);
	}
}

export default SignUp;
