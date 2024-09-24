// state updates using callback function

import { useState } from "react";

export default function Counter() {
	const [counter, setCounter] = useState(0);

	const handleClick = () => {
		for (let i = 0; i < 5; i++) {
			setCounter((prevCounter) => prevCounter + 1);
		}
	};

	return (
		<div>
			<p>You click {counter} times</p>
			<button onClick={handleClick}>Click me</button>
		</div>
	);
}

// this.state = { counter: 0 };
// this.setState
