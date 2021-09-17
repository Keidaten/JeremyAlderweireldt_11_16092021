import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Pages
import HomePage from './pages/HomePage';
import LodgingPage from './pages/LodgingPage';
import AboutPage from './pages/AboutPage';

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Route exact path="/">
				<HomePage />
			</Route>
			<Route path="/lodging">
				<LodgingPage />
			</Route>
			<Route path="/about">
				<AboutPage />
			</Route>
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
);
