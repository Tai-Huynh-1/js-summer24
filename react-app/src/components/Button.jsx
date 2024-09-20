import "./Button.css";

// type color = "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark"

export default function Button({ children, type, color, ...otherProps }) {
	console.log("otherProps", otherProps);
	return (
		<button type={type || "button"} {...otherProps} className={`btn btn-${color}`}>
			{children}
		</button>
	);
}
