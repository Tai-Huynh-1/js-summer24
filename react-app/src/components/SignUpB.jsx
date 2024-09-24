import { useState } from "react";

const initalFormState = { name: "", email: "", password: "" };

export function SignUpB() {
	const [form, setForm] = useState(initalFormState);
	const { name, email, password } = form;

	const handleChange = (event) => {
		const { id, value } = event.target;
		setForm((prevData) => ({
			...prevData,
			[id]: value,
		}));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		alert("Form submitted: " + JSON.stringify(form));
	};

	return (
		<form onSubmit={handleSubmit}>
			<input id="name" type="text" name="name" value={name} onChange={handleChange} placeholder="Name" />
			<input id="email" type="email" name="email" value={email} onChange={handleChange} placeholder="Email" />
			<input id="password" type="password" name="password" value={password} onChange={handleChange} placeholder="Password" />
			<button type="submit">Sign Up</button>
		</form>
	);
}

// function useCustomState(initialState) {
// 	const state = { initialState };
// 	return [state.initialState, function (callback) {}];
// }
