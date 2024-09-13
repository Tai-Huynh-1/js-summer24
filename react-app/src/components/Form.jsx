function Form() {
	function handleSubmit(e) {
		e.preventDefault();

		console.log("event object", e);
	}

	return (
		<form onSubmit={handleSubmit}>
			<button type="submit">Submit</button>
		</form>
	);
}

export default Form;
