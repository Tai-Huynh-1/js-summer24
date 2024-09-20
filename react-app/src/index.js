import ReactDOM from "react-dom/client";
import WelcomeDialog from "./components/WelcomeDialog";
import SplitPane from "./components/SplitPane";
import SignUp from "./components/SignUp";
import Clock from "./components/Clock";
import FancyBorder from "./components/WelcomeDialog/FancyBorder";
// import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<div>
		<WelcomeDialog />
		<SplitPane
			left={
				<FancyBorder borderColor={"green"}>
					<Clock />
				</FancyBorder>
			}
			right={
				<FancyBorder borderColor={"red"}>
					<SignUp />
				</FancyBorder>
			}
		/>
	</div>
);
