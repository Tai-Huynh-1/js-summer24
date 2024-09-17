import { Component } from "react";

const data = [
	{
		id: "1",
		label: "INSTALLATION",
		content: "Installation instruction",
	},
	{
		id: "2",
		label: "MAIN CONCEPTS",
		content: "React concepts",
	},
	{
		id: "3",
		label: "ADVANCED GUIDES",
		content: "Advanced React concepts",
	},
	{
		id: "4",
		label: "API REFERENCE",
		content: "React's API",
	},
];

// 1. hide tab content unless expanded is true
// 2. add a toggle for expanding / contracting
// TODO: add toggle functionality to the tab label
function AccordionTab({ tab: { label, content, expanded } }) {
	return (
		<div id="tab-container">
			<div id="tab-label" onClick={}>
				<strong>{label}</strong>
			</div>
			{expanded && <div id="tab-content">{content}</div>}
		</div>
	);
}

class Accordion extends Component {
	constructor(props) {
		super(props);
		this.state = { data: null };

        this.handleToggle = this.handleToggle.bind(this)
	}

	componentDidMount() {
		this.setState({ data: data.map((tab) => ({ ...tab, expanded: false })) });
	}

    // TODO: write the toggle logic
    // clicking on 1 tab will toggle that expanded state for that single tab only
    // all other tab's expanded state should remain the same
    handleToggle() {
        
    }

	render() {
		return <div id="accordion-container">{this.state.data && this.state.data.map((tab) => <AccordionTab key={tab.id} tab={tab} />)}</div>;
	}
}

export default Accordion;
