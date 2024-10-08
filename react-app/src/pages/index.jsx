import React, { useEffect, useState } from "react";

const Home = () => {
	const [user, setUser] = useState(null);
	const [err, setErr] = useState(null);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users/1")
			.then((response) => {
				console.log("response", response);
				if (!response.ok) {
					throw Error(`Unable to fetch user, status code ${response.status}`);
				}
				return response.json();
			})
			.then((user) => {
				console.log("user", user);
				setUser(user);
			})
			.catch((error) => {
				console.log("error", error);
				setErr(error);
			});
	}, []);

	if (err) {
		return (
			<div>
				<h1>{err?.message}</h1>
			</div>
		);
	}

	return (
		<div>
			<h1>Welcome back, {user?.name}</h1>
		</div>
	);
};

export default Home;
