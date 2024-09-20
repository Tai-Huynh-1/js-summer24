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

		const fields = [
			{
				id: "name",
				name: "name",
				type: "text",
				value: name,
				label: "Name: ",
			},
			{
				id: "email",
				name: "email",
				type: "email",
				value: email,
				label: "Email: ",
			},
			{
				id: "password",
				name: "password",
				type: "password",
				value: password,
				label: "Password: ",
			},
		];
		return (
			<form id="signup-form-container" onSubmit={this.handleSubmit}>
				<div id="title-container">
					<h1>Welcome to React!</h1>
				</div>

				{/* name, email, password */}
				<div id="signup-form-input-container">
					{fields.map(({ id, name, type, value, label }) => (
						<label id={id} key={id}>
							{label}
							<input id={id} type={type} name={name} onChange={this.handleChange} value={value} />
						</label>
					))}
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
