import React from 'react';
import {NavLink} from 'react-router-dom'; 

const CartItem = ({item, addToWishList, addCartItem, subtractCartItem, removeFromCart}) => {
	return (
		<div>
			<div className="card">
			<div className="card-image">
				<img src={item.image} alt="" />
			</div>
			<div className="card-body">
				<h4 className="card-title">{	item.title.length > 80 ? item.title.slice(0, 66) : item.title}</h4>
				<p className="card-price"><span>Price:</span> ${item.price}</p>
				<div className="qty-group">
					<button onClick={() => subtractCartItem(item)}>-</button>
					<span className="qty">{item.qty}</span>
					<button onClick={()=> addCartItem(item)} >+</button>
				</div>
			</div>	
			<div className="btn-block">
			<NavLink to={`/${item.id}`}>
				<button
					className="btn show-more"
				>
					Show more
				</button>
			</NavLink>
			<button onClick={() => addToWishList(item)} className="btn wl">Add to WL</button>
			<button onClick={() => removeFromCart(item)} className="btn add-cart">Remove from Cart</button>
			</div>
		</div>
		</div>
	)
}

export default CartItem