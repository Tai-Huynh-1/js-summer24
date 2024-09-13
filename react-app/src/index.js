import ReactDOM from "react-dom/client";
import Toggle from "./components/Toggle";
// import "./index.css";

// function Clock(props) {
// 	const time = new Date().toLocaleTimeString();

// 	const element = (
// 		<div>
// 			<h1>Hello world</h1>
// 			<h2>It is {time}</h2>
// 		</div>
// 	);
// 	return element;
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<div>
		<Toggle />
	</div>
);
