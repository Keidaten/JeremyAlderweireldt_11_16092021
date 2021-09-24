//React
import React from 'react';

//Components
import Banner from '../../components/Banner';
import Gallery from '../../components/Gallery';

//Assets
import bannerImg from '../../assets/homebanner.png';

class Home extends React.Component {
	render() {
		return (
			<main>
				<Banner bannerImgProps={bannerImg} altProps="Bannière photo : montagne enneigée" bannerTextProps={'Chez vous, partout et ailleurs'} pageProps="--homePage" />
				<Gallery />
			</main>
		);
	}
}

export default Home;
