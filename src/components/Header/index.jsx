//React
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

//Assets
import logo from '../../assets/logo.png';

//CSS
import '../../styles/header.scss';

class Header extends React.Component {
	render() {
		return (
			<header className="header">
				<Link to="/">
					<img src={logo} alt="Logo de Kasa" className="header__logo" />
				</Link>
				<nav className="header__nav">
					<NavLink exact activeClassName="--active" to="/" className="header__links">
						Accueil
					</NavLink>
					<NavLink activeClassName="--active" to="/about" className="header__links">
						A propos
					</NavLink>
				</nav>
			</header>
		);
	}
}

export default Header;
