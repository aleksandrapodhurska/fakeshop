import React from "react";
import { Route, Switch, useRouteMatch, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import ProductList from "./ProductList/ProductList";
import Item from './ProductList/Item';
import DetailedProductItem from "./ProductList/DetailedProductItem/DetailedProductItem";

import "./body.css";

const Body = ({addToWishList, addToCart}) => {
	let { path } = useRouteMatch();
	let location = useLocation();
	console.log(location.pathname);
	console.log(path + ' - path');
	return (
		<div className="body">
			<aside>
				<Sidebar />
			</aside>
			<section>
				<Switch>
					<Route exact path={path} component={Item}/>
					<Route path={`${path}/:id`}>
						{location.pathname === "/body/productList" ? (
							<ProductList
								category={""}
								addToWishList={addToWishList}
								addToCart={addToCart}
							/>
						) : (
							<ProductList
								category={location.pathname.slice(6)}
								addToWishList={addToWishList}
								addToCart={addToCart}
							/>
						)}
					</Route>
				</Switch>
			</section>
		</div>
	);
};

export default Body;
