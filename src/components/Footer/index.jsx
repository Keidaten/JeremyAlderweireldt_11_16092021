//React
import React from 'react';

//Assets
import logo from '../../assets/logofooter.png';

class Footer extends React.Component {
	render() {
		return (
			<footer>
				<img src={logo} alt="Logo de Kasa" />
				<span>© 2020 Kasa. All rights reserved</span>
			</footer>
		);
	}
}

export default Footer;
