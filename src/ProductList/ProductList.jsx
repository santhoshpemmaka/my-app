import React, {useEffect, useState} from "react";
import axios from "axios";
import {useData} from "../Context/Context";
import ProductDisplay from "./ProductDisplay";
import "./ProductList.scss";

const ProductList = () => {
	const {state, dispatch} = useData();
	useEffect(() => {
		(async () => {
			let token = localStorage.getItem("token");
			const config = {headers: {Authorization: token}};
			let response = await axios.get(
				"https://staging.fastor.in/v1/m/restaurant?city_id=118&&",
				config
			);
			if (response.status === 200 || response.status === 201) {
				dispatch({type: "PRODUCTS", payload: response.data});
			}
		})();
	}, []);
	return (
		<div className='product-container'>
			<h2>Connaught place</h2>
			<div className='display-grid'>
				{state.products &&
					state.products?.map((product) => (
						<ProductDisplay product={product} key={product.restaurant_uuid} />
					))}
			</div>
		</div>
	);
};

export default ProductList;
