import React from 'react';
import {NavLink, useRouteMatch} from 'react-router-dom';

import './sidebar.css';

const Sidebar = () => {
	let { url } = useRouteMatch();
	const categories =  [
		"electronics",
		"jewelery",
		"men's clothing",
		"women's clothing"
		];
		
	return (
		<div className="sidebar">
			<NavLink to={`${url}/productList`} className="link" activeClassName="active">All</NavLink>
			{categories.map(category => {
				return <NavLink key={category} to={`${url}/${category}`} className="link" activeClassName="active">{category}</NavLink>
			})}
		</div>
	)
}

export default Sidebar