import { useState } from "react";
import FancyBorder from "./FancyBorder";
import Button from "../Button";

export default function WelcomeDialog() {
	const [cIndex, setCIndex] = useState(0);
	const colors = ["blue", "red", "green"];
	const handleChangeBorderColor = () => {
		setCIndex((prevIndex) => ++prevIndex % colors.length);
	};

	return (
		<FancyBorder borderColor={colors[cIndex]}>
			<h1 className="Dialog-title">Welcome</h1>
			<p className="Dialog-message">Thank you for visiting our spacecraft!</p>

			<Button onClick={handleChangeBorderColor} color={"primary"} className="custom-btn">
				Cycle Color
			</Button>
			<Button onClick={handleChangeBorderColor} color={"success"}>
				Second Button
			</Button>
			<Button onClick={handleChangeBorderColor} color={"danger"}>
				Third Button
			</Button>
		</FancyBorder>
	);
}
