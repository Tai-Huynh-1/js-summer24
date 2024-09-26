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
	console.log(transformed);
	return transformed;
}

export default function FilterableProductTable() {
	// TODO: setup state to maintain products list, default list should be empty or null
	// transform original product list and set it as state in useEffect hook
	// const [] = useState([]);

	return (
		<div className="filterable-product-table">
			<SearchBar />
			<ProductTable filteredProducts={productsTransformed} />
		</div>
	);
}
