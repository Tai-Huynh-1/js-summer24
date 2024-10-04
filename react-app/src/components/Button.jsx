import "./Button.css";

// type color = "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark"

export default function Button({ children, type = "button", color, disabled, ...otherProps }) {
	// console.log("otherProps", otherProps);

	const cn = `btn btn-${color} ${disabled ? "btn-disabled" : ""}`;
	return (
		// {...otherProps} and className order matters, we put className last to override any user-defined classNames (user-defined classNames are NOT supported)
		<button type={type || "button"} {...otherProps} className={cn}>
			{children}
		</button>
	);
}
