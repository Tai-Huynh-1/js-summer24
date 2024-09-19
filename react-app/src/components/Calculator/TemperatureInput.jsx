import { Component } from "react";

const scaleNames = {
	c: "Celsius",
	f: "Fahrenheit",
};

export default class TemperatureInput extends Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		this.props.onTempChange(e.target.value);
	}

	render() {
		const { temperature, scale } = this.props;
		return (
			<fieldset>
				<legend>Enter temperature in {scaleNames[scale]}:</legend>
				<input value={temperature} onChange={this.handleChange} />
			</fieldset>
		);
	}
}
