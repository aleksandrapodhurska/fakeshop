import React from 'react';
import {NavLink} from 'react-router-dom';

import './nav.css';

const Nav = () => {
	return (
		<nav>
			<div>
				<NavLink to="/" className="link" activeClassName="active">Home</NavLink>
			</div>
			<div>LOGO</div>
			<div>
				<NavLink to="/body" className="link" activeClassName="active">Body</NavLink>
				<NavLink to="/wishlist" className="link" activeClassName="active">Wish List</NavLink>
				<NavLink to="/cart" className="link" activeClassName="active">Cart</NavLink>
			</div>
		</nav>
	)
}

export default Nav
