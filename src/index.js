import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

// Pages
import HomePage from './pages/HomePage';
import LodgingPage from './pages/LodgingPage';
import AboutPage from './pages/AboutPage';
import ErrorPage from './pages/ErrorPage';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

//CSS
import './styles/index.scss';

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Header />
			{/* get only the first route who match url  */}
			<Switch>
				<Route exact path="/">
					<HomePage />
				</Route>
				{/* give access to match object by props */}
				<Route path="/lodging/:id" render={(props) => <LodgingPage {...props} />}></Route>
				<Route path="/about">
					<AboutPage />
				</Route>
				<Route>
					<Redirect to="/404" />
					<ErrorPage />
				</Route>
			</Switch>
			<Footer />
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
);
