import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdFavoriteBorder, MdRemoveShoppingCart } from "react-icons/md";

const CartItem = ({
	item,
	addToWishList,
	addCartItem,
	subtractCartItem,
	removeFromCart,
}) => {
	const [price, setPrice] = useState(item.price.toFixed(2));

	return (
		<div className="card">
			<div className="card-image">
				<NavLink to={`/${item.id}`}>
					<img src={item.image} alt="" />
				</NavLink>
			</div>
			<div className="card-body">
				<NavLink to={`/${item.id}`}>
					<h4 className="card-title">
						{item.title.length > 80
							? item.title.slice(0, 66)
							: item.title}
					</h4>
				</NavLink>
				<div className="qty-group">
					<button
						onClick={() => (
							subtractCartItem(item),
							setPrice((item.price * item.qty).toFixed(2))
						)}
					>
						-
					</button>
					<span className="qty">{item.qty}</span>
					<button
						onClick={() => (
							addCartItem(item),
							setPrice((item.price * item.qty).toFixed(2))
						)}
					>
						+
					</button>
				</div>
			</div>
			<div className="btn-block">
				<p className="card-price">${price}</p>
				<button
					onClick={() => removeFromCart(item)}
					className="btn add-cart"
				>
					<MdRemoveShoppingCart />
				</button>
			</div>
			<button onClick={() => addToWishList(item)} className="btn wl">
				<MdFavoriteBorder />
			</button>
		</div>
	);
};

export default CartItem;
