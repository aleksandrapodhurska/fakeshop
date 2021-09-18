import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import useFetch from "../../../../useFetch";
import Spinner from "./../../../Spinner/Spinner";
import {MdKeyboardBackspace, MdFavoriteBorder, MdShoppingCart} from 'react-icons/md';
import Rating from '../../../Rating';

import "./detailedProductItem.css";

const DetailedProductItem = ({ addToWishList, addToCart }) => {
	const id = useParams();
	let history = useHistory();
	const { data: item, error, isPending } = useFetch(
		"https://fakestoreapi.com/products/" + id.id
	);

	const [qty, setQty] = useState(1);

	const addQty = (item) => {
		return (item = {
			id: item.id,
			title: item.title,
			image: item.image,
			price: item.price,
			rating: item.rating,
			qty: qty,
		});
	};

	return (
		<div className="wrapper">
			{isPending && <Spinner />}
			{error && <div>Could not get data from the resourse</div>}
			{item.rating && (
				<div className="card-detailed">
					<button
						className="back-button"
						onClick={() => history.goBack()}
					>
						<MdKeyboardBackspace/> Back
					</button>
					<div className="image-detailed">
						<img src={item.image} alt={item.image} />
					</div>
					<div className="info-detailed">
						<h1>{item.title}</h1>
						{item.rating && <Rating rating={item.rating}/>}
						<p className="card-price">
							<span>Price:</span> ${item.price}
						</p>
						<p>{item.description}</p>
						<button
							onClick={() => addToWishList(item)}
							className="btn wl"
						>
							<MdFavoriteBorder/>
						</button>
					</div>
					<div className="price-area">
						<div className="qty-group">
							<button
								onClick={() => setQty(qty > 0 ? qty - 1 : 0)}
							>
								-
							</button>
							<span className="qty">{qty}</span>
							<button onClick={() => setQty(qty + 1)}>+</button>
						</div>
						<button
							onClick={() => addToCart(addQty(item))}
							className="btn add-cart"
						>
							Add to cart <MdShoppingCart />
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default DetailedProductItem;
