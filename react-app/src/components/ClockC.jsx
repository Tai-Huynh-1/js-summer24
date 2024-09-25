import { useEffect, useState } from "react";

function FormattedDate(props) {
	return <h2>It is {props.date.toLocaleTimeString()}</h2>;
}

export default function ClockC() {
	// maintain state with hook
	const [date, setDate] = useState(new Date());

	function tick() {
		setDate(new Date());
	}

	function intervalCb() {
		tick();
	}

	// perform side effects with useEffect hook
	// equivalent to componentDidMount & componentWillUnmount
	useEffect(() => {
		console.log("useEffect: componentDidMount");
		const timerId = setInterval(intervalCb, 1000);

		return () => {
			console.log("useEffect: componentWillUnmount");
			clearInterval(timerId);
		};
	}, []);

	console.log("rendering (generating jsx)");
	return (
		<div>
			<h1>Hello world</h1>
			<FormattedDate date={date} />
		</div>
	);
}
