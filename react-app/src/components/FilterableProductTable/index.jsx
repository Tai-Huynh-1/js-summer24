import { useEffect, useMemo, useState } from "react";
import "./FilterableProductTable.css";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";
import Button from "./../Button";
import useDebounce from "../../hooks/useDebounce";

const products = [
	{ category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
	{ category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
	{ category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
	{ category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
	{ category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
	{ category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" },
	{ category: "Health", price: "$199.99", stocked: true, name: "Lotion" },
	{ category: "Household Supplies", price: "$199.99", stocked: true, name: "Frying Pan" },
];

const productsTransformed = [
	{
		categoryName: "Sporting Goods",
		products: [
			{ category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
			{ category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
			{ category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
		],
	},
	{
		categoryName: "Electronics",
		products: [
			{ category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
			{ category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
			{ category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" },
		],
	},
];

function transformProducts(products) {
	const transformed = [];
	const categories = {};

	for (const product of products) {
		if (product.category in categories) {
			categories[product.category].push(product);
		} else {
			categories[product.category] = [product];
		}
	}

	for (const category in categories) {
		transformed.push({
			categoryName: category,
			products: categories[category],
		});
	}
	return transformed;
}

function filter(categories, filterText, checkInStock) {
	console.log("filter is running");
	if (filterText === "" && !checkInStock) return categories;

	filterText = filterText.toLowerCase();
	return categories?.map((category) => {
		return {
			...category,
			products: category.products.filter((product) => {
				const matchedFilteredText = product.name.toLowerCase().includes(filterText);
				// if checkInStock is true then return true if both matchedFilteredText && stocked is true
				return checkInStock ? matchedFilteredText && product.stocked : matchedFilteredText;
			}),
		};
	});
}

export default function FilterableProductTable() {
	const [categories, setCategories] = useState([]);
	const [search, setSearch] = useState("");
	const delayedSearch = useDebounce(search, 500);

	const [inStock, setInStock] = useState(false);
	const [unRelatedState, setUnrelatedState] = useState(false);

	useEffect(() => {
		const transformed = transformProducts(products);
		setCategories(transformed);
	}, []);

	const handleSearchChange = (event) => {
		setSearch(event.target.value);
	};

	const handleCheckInStockChange = (event) => {
		setInStock(event.target.checked);
	};

	// derived state, useMemo to cache values, only rerun when dependencies have changed
	const filteredCategories = useMemo(() => {
		return filter(categories, delayedSearch, inStock);
	}, [categories, delayedSearch, inStock]);

	// console.log("component is re-rendering");
	return (
		<div className="filterable-product-table">
			<SearchBar search={search} inStock={inStock} handleSearchChange={handleSearchChange} handleCheckInStockChange={handleCheckInStockChange} />
			<ProductTable filteredProducts={filteredCategories} />
			<Button color="primary" onClick={() => setUnrelatedState((prev) => !prev)}>
				Update Unrelated State
			</Button>
			<p>{unRelatedState ? "true" : "false"}</p>
		</div>
	);
}
