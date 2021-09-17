import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Pages
import HomePage from './pages/HomePage';
import LodgingPage from './pages/LodgingPage';
import AboutPage from './pages/AboutPage';
import ErrorPage from './pages/ErrorPage';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Header />
			<Switch>
				<Route exact path="/">
					<HomePage />
				</Route>
				<Route path="/lodging">
					<LodgingPage />
				</Route>
				<Route path="/about">
					<AboutPage />
				</Route>
				<ErrorPage />
			</Switch>
			<Footer />
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
);
