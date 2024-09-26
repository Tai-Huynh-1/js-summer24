import "./FilterableProductTable.css";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

export default function ProductTable({ filteredProducts }) {
	return (
		<div className="product-table">
			<div className="product-table-title-container">
				<div className="title-name">Name</div>
				<div className="title-price">Price</div>
			</div>

			<div className="products">
				{filteredProducts.map((category) => {
					return (
						<div key={category.categoryName} className="category-row-container">
							<ProductCategoryRow categoryName={category.categoryName} />

							<div className="product-row-container">
								{category.products.map((product) => (
									<ProductRow key={product.name} product={product} />
								))}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
