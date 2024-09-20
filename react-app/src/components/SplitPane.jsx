import "./SplitPane.css";

export default function SplitPane({ left, right }) {
	return (
		<div className="split-pane">
			<div className="split-pane-left">{left}</div>

			<div className="split-pane-right">{right}</div>
		</div>
	);
}
