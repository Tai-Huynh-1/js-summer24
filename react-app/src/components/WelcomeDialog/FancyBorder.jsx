import "./FancyBorder.css";

export default function FancyBorder({ borderColor, children }) {
	return <div className={`fancy-border-${borderColor}`}>{children}</div>;
}
