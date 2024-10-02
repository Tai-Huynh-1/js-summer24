import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import SignUp from "./components/SignUp";
import ClockC from "./components/ClockC";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<BrowserRouter>
		<ClockC />
	</BrowserRouter>
);
