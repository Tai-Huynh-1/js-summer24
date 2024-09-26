import "./FilterableProductTable.css";

/**
 * Wire up the 2 input fields here to be controlled components
 *
 */
export default function SearchBar() {
	return (
		<div className="search-bar-container">
			<input type="text" placeholder="Search..." />

			<label htmlFor="in-stock">
				<input id="in-stock" type="checkbox" /> Only show products in stock
			</label>
		</div>
	);
}
