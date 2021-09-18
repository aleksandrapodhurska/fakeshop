import React from 'react';
import {NavLink} from 'react-router-dom';

import './nav.css';

const Nav = () => {
	return (
		<div className="nav">
			<div>
				<NavLink to="/" className="link" activeClassName="active">LOGO</NavLink>
			</div>
			<div>
				<NavLink to="/body" className="link" activeClassName="active">Body</NavLink>
				<NavLink to="/wishlist" className="link" activeClassName="active">Wish List</NavLink>
				<NavLink to="/cart" className="link" activeClassName="active">Cart</NavLink>
			</div>
		</div>
	)
}

export default Nav
