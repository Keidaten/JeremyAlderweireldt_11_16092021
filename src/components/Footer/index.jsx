//React
import React from 'react';

//Assets
import logo from '../../assets/logofooter.png';

//CSS
import '../../styles/footer.scss';

class Footer extends React.Component {
	render() {
		return (
			<footer className="footer">
				<img src={logo} alt="Logo de Kasa" className="footer__logo" />
				<span className="footer__text">© 2020 Kasa. All rights reserved</span>
			</footer>
		);
	}
}

export default Footer;
