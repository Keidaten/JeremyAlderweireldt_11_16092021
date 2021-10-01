//React
import React from 'react';
import { Link } from 'react-router-dom';

//CSS
import '../../styles/404.scss';

class ErrorPage extends React.Component {
	render() {
		return (
			<main className="errorPage">
				<h1 className="errorPage__title">404</h1>
				<p className="errorPage__content">Oups, la page que vous demandez n'existe pas</p>
				<Link to="/">
					<p className="errorPage__link">Retourner sur la page d'accueil</p>
				</Link>
			</main>
		);
	}
}

export default ErrorPage;
