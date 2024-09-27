import "./FilterableProductTable.css";

/**
 * Wire up the 2 input fields here to be controlled components
 *
 */
export default function SearchBar({ search, inStock, handleSearchChange, handleCheckInStockChange }) {
	return (
		<div className="search-bar-container">
			<input type="text" placeholder="Search..." value={search} onChange={handleSearchChange} />

			<label htmlFor="in-stock">
				<input id="in-stock" type="checkbox" checked={inStock} onChange={handleCheckInStockChange} /> Only show products in stock
			</label>
		</div>
	);
}
