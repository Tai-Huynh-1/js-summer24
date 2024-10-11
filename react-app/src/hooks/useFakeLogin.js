import axios from "axios";
import { useCallback } from "react";

// used for both access and refresh tokens
function generateToken() {
	return `${Math.floor(Math.random() * 100)}`;
}

const useFakeLogin = () => {
	const fakeLogin = useCallback(() => {
		const url = `https://jsonplaceholder.typicode.com/users/1`;
		return axios.get(url);
	}, []);

	return { fakeLogin, generateToken };
};

export default useFakeLogin;
