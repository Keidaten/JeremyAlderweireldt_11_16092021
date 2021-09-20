//React
import React from 'react';

//Components
import Banner from '../../components/Banner';
import Dropdown from '../../components/Dropdown';

//Assets
import bannerImg from '../../assets/aboutbanner.png';

class AboutPage extends React.Component {
	render() {
		return (
			<div>
				<Banner bannerImgProps={bannerImg} altProps="Bannière photo : montagne enneigée" bannerTextProps="Chez vous, partout et ailleurs" />
				<Dropdown title="Test" content="Testcontent" />
			</div>
		);
	}
}

export default AboutPage;
