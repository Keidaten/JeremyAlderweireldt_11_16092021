//React
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

//Assets
import logo from '../../assets/logo.png';

class Header extends React.Component {
	render() {
		return (
			<header>
				<Link to="/">
					<img src={logo} alt="Logo de Kasa" />
				</Link>
				<nav>
					<NavLink to="/">accueil</NavLink>
					<NavLink to="/about">à propos</NavLink>
				</nav>
			</header>
		);
	}
}

export default Header;
