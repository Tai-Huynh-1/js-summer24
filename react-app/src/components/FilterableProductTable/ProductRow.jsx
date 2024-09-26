import "./FilterableProductTable.css";

export default function ProductRow({ product }) {
	return (
		<div className="product-row">
			{product.name} ------- {product.price}
		</div>
	);
}
