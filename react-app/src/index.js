import ReactDOM from "react-dom/client";
import WelcomeDialog from "./components/WelcomeDialog";
import SplitPane from "./components/SplitPane";
import SignUp from "./components/SignUp";
import Clock from "./components/Clock";
import FancyBorder from "./components/WelcomeDialog/FancyBorder";
import Counter from "./components/Counter";
import { SignUpB } from "./components/SignUpB";
import ClockC from "./components/ClockC";
import ClockContainer from "./components/ClockContainer";
// import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<div>
		<ClockContainer />
	</div>
);
