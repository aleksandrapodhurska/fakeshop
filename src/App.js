import React, { useState } from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import WishList from './components/WishList/WishList';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';
import DetailedProductItem from './components/Body/ProductList/DetailedProductItem/DetailedProductItem';

import './App.css';

const App = () => {

	const [wishList, setWishList] = useState([]);
	const [cartList, setCartList] = useState([]);

	const hasDuplicates = (item, array = wishList) => {
		return array.findIndex(elem => elem.id === item.id);
	} 

	const addToWishList = (item) => {
		if (hasDuplicates(item) === -1) {
			setWishList([...wishList, item])
			console.log(wishList);
		} else return;
	}

	const removeFromWishList = (item) => {
		setWishList(
			wishList.filter(elem => elem.id !== item.id)
		)
	}

	const addToCart = (item) => {
		if (hasDuplicates(item, cartList) > -1) {
			let index = cartList.findIndex(elem => elem.id === item.id);
			cartList[index].qty = cartList[index].qty + item.qty;
			setCartList([...cartList]);
		} else {
			setCartList([
				...cartList,
				{
					id: item.id,
					title: item.title,
					image: item.image,
					price: item.price,
					qty: item.qty ? item.qty : 1,
				},
			]);
		}
	}

	const removeFromCart = (item) => {
		setCartList(
			cartList.filter(elem => elem.id !== item.id)
		)
	}
	
	const addCartItem = (item) => {
		let index = cartList.findIndex(elem => elem.id === item.id);
		cartList[index].qty++;
		setCartList([...cartList]);
	}

	const subtractCartItem = (item) => {
		let index = cartList.findIndex(elem => elem.id === item.id);
		if (cartList[index].qty > 0) {
			cartList[index].qty--;
			setCartList([...cartList]);
		}
	}

	return (
		<BrowserRouter>
			<div className="app-grid">
				<header>
					<Header />
				</header>
				<main>
					<Switch>
						<Route
							path="/body"
							render={() => (
								<Body
									addToWishList={addToWishList}
									addToCart={addToCart}
								/>
							)}
						/>
						<Route
							path="/wishlist"
							render={() => (
								<WishList
									wishList={wishList}
									setWishList={setWishList}
									removeFromWishList={removeFromWishList}
									addToCart={addToCart}
								/>
							)}
						/>
						<Route
							path="/cart"
							render={() => (
								<Cart
									cartList={cartList}
									setCartList={setCartList}
									addCartItem={addCartItem}
									subtractCartItem={subtractCartItem}
									addToWishList={addToWishList}
									removeFromCart={removeFromCart}
								/>
							)}
						/>
						<Route path="/:id" render={() => (
								<DetailedProductItem 
									addToWishList={addToWishList}
									addToCart={addToCart}
								/>
							)}
						/>
					</Switch>
				</main>
				<footer>
					<Footer />
				</footer>
			</div>
		</BrowserRouter>
	);
}

export default App;
