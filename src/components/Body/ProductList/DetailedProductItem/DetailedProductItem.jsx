import React, {useState} from 'react'
import { useHistory, useParams } from 'react-router-dom';
import useFetch from '../../../../useFetch';

import './detailedProductItem.css';

const DetailedProductItem = ({ addToWishList, addToCart}) => {
	const id = useParams();
	let history = useHistory();
	const {data: item, error, isPending} = useFetch('https://fakestoreapi.com/products/' + id.id);	
	
	const [qty, setQty] = useState(1);
	
	const addQty = (item) => {
		return item = {
				id: item.id,
				title: item.title,
				image: item.image,
				price: item.price,
				qty: qty,
			}
	}

	return (
		<div className="wrapper">
			{item && (
			<div className="card-detailed">
				<button className="back-button"
					onClick={() => history.goBack()}	
				>x</button>
				<div className="image-detailed">
					<img src={item.image} alt={item.image}/>
				</div>
				<div className="info-detailed">
					<h3>{item.title}</h3>
					<p>{item.description}</p>
					
				</div>
				<div className="price-area">
						<div>
							<p className="card-price"><span>Price:</span> ${item.price}</p>
						</div>
							<button onClick={() => addToWishList(item)} className="btn wl">Add to WL</button>
						<div className="cart-block">
							<div className="qty-group">
								<button onClick={() => setQty(qty > 0 ? qty-1 : 0)}>-</button>
								<span className="qty">{qty}</span>
								<button onClick={() => setQty(qty+1)}>+</button>
							</div>
							<button onClick={() => addToCart(addQty(item))} className="btn add-cart">Add to Cart</button>
						</div>
					</div>

			</div>
			)}
		</div>
	)
}

export default DetailedProductItem
