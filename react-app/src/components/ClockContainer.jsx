import { useState } from "react";
import Button from "./Button";
import ClockC from "./ClockC";

export default function ClockContainer() {
	const [show, setShow] = useState(false);

	function handleClick() {
		setShow((prevState) => !prevState);
	}

	return (
		<div>
			{show ? <ClockC /> : <div>Clock is Hidden</div>}
			<Button color="primary" onClick={handleClick}>
				Toggle Clock
			</Button>
		</div>
	);
}
