import React from "react";
import Nav from "./Nav/Nav";
import { NavLink } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import { useMediaQuery } from "react-responsive";

import "./header.css";

const Header = () => {
	const isSmallScreen = useMediaQuery({ query: "(max-width: 600px)" });
	const isNormalScreen = useMediaQuery({ query: "(min-width: 601px)" });

	return (
		<div className="header">
			{isSmallScreen && (
				<>
					<div>
						<NavLink
							to="/"
							className="link"
							activeClassName="active"
						>
							LOGO
						</NavLink>
					</div>
					<Menu>
						<NavLink
							to="/body"
							className="link"
							activeClassName="active"
						>
							Body
						</NavLink>
						<NavLink
							to="/wishlist"
							className="link"
							activeClassName="active"
						>
							Wish List
						</NavLink>
						<NavLink
							to="/cart"
							className="link"
							activeClassName="active"
						>
							Cart
						</NavLink>
					</Menu>
					
				</>
			)}
			{isNormalScreen && <Nav/>}
		</div>
	);
};

export default Header;
