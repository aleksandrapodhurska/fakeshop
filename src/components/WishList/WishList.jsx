import React from 'react';
import WishListItem from './WishListItem/WishListItem';

const WishList = ({wishList, setWishList, removeFromWishList, addToCart}) => {
	return (
		<div className="card-container">
			{wishList.map(item => <WishListItem item={item} removeFromWishList={removeFromWishList} addToCart={addToCart}/>)}
			<button className="btn-clear" onClick={() => setWishList([])}>Clear</button>
		</div>
	)
}

export default WishList
