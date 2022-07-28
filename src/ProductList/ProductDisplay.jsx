import React from "react";
import "./ProductList.scss";

const ProductDisplay = ({product}) => {
	return (
		<div className='product-component'>
			<img src={product.images[0].url} alt='poduct-image' />
			<h3>{product.restaurant_name}</h3>
			<p>Cake pastry, Pastas Connuaght place, New Delhi</p>
			<div className='icons'>
				<i class='fas fa-star color-icon'></i>
				<i class='fas fa-star color-icon'></i>
				<i class='fas fa-star color-icon'></i>
				<i class='fas fa-star color-icon'></i>
			</div>
			<h2 className='amount'>${product.avg_cost_for_two}</h2>
		</div>
	);
};

export default ProductDisplay;
