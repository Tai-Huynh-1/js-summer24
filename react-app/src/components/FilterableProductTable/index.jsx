import { useEffect, useState } from "react";
import "./FilterableProductTable.css";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

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
	// console.log(transformed);
	return transformed;
}

function filter(categories, filterText, checkInStock) {
	for (const category of categories) {
		const categoryProduct = category.products;
		const filteredProducts = categoryProduct.filter((product) => {
			const name = product.name.toLowerCase();
			const matchedFilteredText = name.includes(filterText);
			// if checkInStock is true then return true if both matchedFilteredText && stocked is true
			return checkInStock ? matchedFilteredText && product.stocked : matchedFilteredText;
		});
		category.products = filteredProducts;
	}
	return categories;
}

export default function FilterableProductTable() {
	const [categories, setCategories] = useState([]);
	const [search, setSearch] = useState("");
	const [inStock, setInStock] = useState(false);

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

	console.log(filter(categories, search, inStock));

	return (
		<div className="filterable-product-table">
			<SearchBar search={search} inStock={inStock} handleSearchChange={handleSearchChange} handleCheckInStockChange={handleCheckInStockChange} />
			<ProductTable filteredProducts={productsTransformed} />
		</div>
	);
}
