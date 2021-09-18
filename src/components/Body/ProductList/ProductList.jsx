import React from 'react';
import ProductItem from './ProductItem/ProductItem';
import Spinner from '../../Spinner/Spinner';
import useFetch from '../../../useFetch';

import './productList.css';

const ProductList = ({category, addToWishList, addToCart}) => {
	const {data, error, isPending} = useFetch( 
		category ?
		'https://fakestoreapi.com/products/category/' + category :
		'https://fakestoreapi.com/products');
	
	const rewriteData = (data) => {
		data = data.map(item => {
			return {
				...item,
				qty: 1,
			}
		})
		console.log(data);
		return data;
	}

	return (
		<div className="card-container">
			{isPending && <Spinner/>}
			{error && <div>Could not get data from the resourse</div>}
			{rewriteData(data) && rewriteData(data).map(item => (<ProductItem key={item.id} item={item} addToWishList={addToWishList} addToCart={addToCart} />))}
		</div>
	)
}

export default ProductList
