import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

const user = {
	firstName: "Josh",
	lastName: "Perez",
	age: 20,
};

function formatName({ firstName, lastName }) {
	return `${firstName} ${lastName}`;
}

function getGreeting(user) {
	if (user) return <h1>Hello, {formatName(user)}!</h1>;
	return <h1>Hello, Guest User!</h1>;
}

const link = (
	<a href="https://www.reactjs.org" target="_blank">
		Learn React
	</a>
);
const element = (
	<div>
		{getGreeting(user)}
		{link}
	</div>
);
console.log("element", element);

root.render(element);

// <React.StrictMode>
//   <App />
// </React.StrictMode>
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
