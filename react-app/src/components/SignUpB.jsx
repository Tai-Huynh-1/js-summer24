const initalFormState = { name: "", email: "", password: "" };
export function SignUpB() {
	useState(initalFormState);
}

// function useCustomState(initialState) {
// 	const state = { initialState };
// 	return [state.initialState, function (callback) {}];
// }
