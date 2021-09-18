import React from 'react'
import CartItem from './CartItem/CartItem';

const Cart = ({cartList, setCartList, addToWishList, addCartItem, subtractCartItem, removeFromCart}) => {
	return (
		<div className="card-container">
			{cartList.map(item => <CartItem key={item.id} item={item} addToWishList={addToWishList} addCartItem={addCartItem} subtractCartItem={subtractCartItem} removeFromCart={removeFromCart}/>)}
			<button className="btn-clear" onClick={() => setCartList([])}>Clear</button>
		</div>
	)
}

export default Cart
