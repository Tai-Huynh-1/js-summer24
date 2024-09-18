import { Component } from "react";

class SignUp extends Component {
	constructor(props) {
		super(props);
		this.state = { name: "InitialName", email: "", password: "" };

		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
	}

	handleNameChange(event) {
		const nameInputValue = event.target.value;
		this.setState({
			name: nameInputValue,
		});
	}

	handleEmailChange(event) {}

	handlePasswordChange(event) {}

	handleSubmit(event) {}

	render() {
		console.log("state ", this.state);
		return (
			<form id="signup-form-container" onSubmit={this.handleSubmit}>
				<div id="title-container">
					<h1>Welcome to React!</h1>
				</div>

				{/* name, email, password */}
				<div id="signup-form-input-container">
					<label id="name">
						Name:
						<input id="name" type="text" name="name" onChange={this.handleNameChange} value={this.state.name} />
					</label>

					<label id="email">
						Email:
						<input id="email" type="email" name="email" />
					</label>

					<label id="password">
						Password:
						<input id="password" type="password" name="password" />
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
