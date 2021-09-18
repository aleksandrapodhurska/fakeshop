import React from "react";
import { NavLink } from "react-router-dom";
import { MdFavoriteBorder, MdShoppingCart } from "react-icons/md";

import "./productItem.css";

const ProductItem = ({ item, addToWishList, addToCart }) => {
	return (
		<div className="card">
			<div className="card-image">
				<NavLink to={`/${item.id}`}>
					<img src={item.image} alt="" />
				</NavLink>
			</div>
			<NavLink to={`/${item.id}`}>
				<div className="card-body">
					<h4 className="card-title">
						{item.title.length > 80
							? item.title.slice(0, 66)
							: item.title}
					</h4>
				</div>
			</NavLink>
			<div className="btn-block">
				<p className="card-price">${item.price.toFixed(2)}</p>
				<button
					onClick={() => addToCart(item)}
					className="btn add-cart"
				>
					<MdShoppingCart />
				</button>
			</div>
			<button onClick={() => addToWishList(item)} className="btn wl">
				<MdFavoriteBorder />
			</button>
		</div>
	);
};

export default ProductItem;
