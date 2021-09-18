import React from "react";
import { NavLink } from "react-router-dom";

import { MdFavorite, MdShoppingCart } from "react-icons/md";

const WishListItem = ({ item, removeFromWishList, addToCart }) => {
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
			<button onClick={() => removeFromWishList(item)} className="btn wl">
				<MdFavorite />
			</button>
		</div>
	);
};

export default WishListItem;
