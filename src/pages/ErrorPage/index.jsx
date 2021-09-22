//React
import React from 'react';
import { Link } from 'react-router-dom';

class ErrorPage extends React.Component {
	render() {
		return (
			<div>
				<span>Page 404</span>
				<p>Oups, la page que vous demandez n'existe pas</p>
				<Link to="/">
					<p>Retourner sur la page d'accueil</p>
				</Link>
			</div>
		);
	}
}

export default ErrorPage;
