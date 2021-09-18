import React from 'react';
import {NavLink, useRouteMatch} from 'react-router-dom';

import './productItem.css';

const ProductItem = ({item, addToWishList, addToCart}) => {
	return (
		<div className="card">
			<div className="card-image">
				<img src={item.image} alt="" />
			</div>
			<div className="card-body">
				<h4 className="card-title">{	item.title.length > 80 ? item.title.slice(0, 66) : item.title}</h4>
				<p className="card-price"><span>Price:</span> ${item.price}</p>
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
			<button onClick={() => addToCart(item)}className="btn add-cart">Add to Cart</button>
			</div>
		</div>
	)
}

export default ProductItem
