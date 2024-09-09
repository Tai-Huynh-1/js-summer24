import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";

function Welcome(props) {
	console.log("props", props);

	return (
		<div>
			<h1>Hello, {props.name}</h1>
		</div>
	);
}

const root = ReactDOM.createRoot(document.getElementById("root"));

const element = (
	<div>
		<Welcome name="Sara">
			<div>DIV</div>
			<h1>H1</h1>
		</Welcome>

		<Welcome name="Derek">
			<div>DIV</div>
			<h1>H1</h1>
		</Welcome>

		<Welcome name="Harshil">
			<div>DIV</div>
			<h1>H1</h1>
		</Welcome>
	</div>
);

console.log("element", element);

// function tick() {
// 	const time = new Date().toLocaleTimeString();

// 	const element = (
// 		<div>
// 			<h1>Hello world</h1>
// 			<h2>It is {time}</h2>
// 		</div>
// 	);

// 	root.render(element);
// }

// setInterval(tick, 1000);

root.render(element);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
