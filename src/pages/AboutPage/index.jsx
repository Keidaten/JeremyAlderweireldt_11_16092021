//React
import React from 'react';

//Components
import Banner from '../../components/Banner';

//Assets
import bannerImg from '../../assets/aboutbanner.png';

class AboutPage extends React.Component {
	render() {
		return <Banner bannerImgProps={bannerImg} altProps="Bannière photo : montagne enneigée" bannerTextProps="Chez vous, partout et ailleurs" />;
	}
}

export default AboutPage;
