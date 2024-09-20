import { useState } from "react";
import FancyBorder from "./FancyBorder";
import Button from "../Button";

export default function WelcomeDialog() {
	const [cIndex, setCIndex] = useState(0);
	const colors = ["blue", "red", "green"];
	const handleChangeBorderColor = () => {
		setCIndex((prevIndex) => ++prevIndex % colors.length);
	};

	const buttons = [
		{
			color: "primary",
			text: "Cycle Color",
		},
		{
			color: "success",
			text: "Second Button",
		},
		{
			color: "danger",
			text: "Third Button",
		},
	];
	return (
		<FancyBorder borderColor={colors[cIndex]}>
			<h1 className="Dialog-title">Welcome</h1>
			<p className="Dialog-message">Thank you for visiting our spacecraft!</p>

			{buttons.map(({ color, text }) => (
				<Button key={text} onClick={handleChangeBorderColor} color={color}>
					{text}
				</Button>
			))}
		</FancyBorder>
	);
}
