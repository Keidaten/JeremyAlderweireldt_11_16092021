//React
import React from 'react';

//CSS
import '../../styles/banner.scss';

class Banner extends React.Component {
	render() {
		// const titleProps = this.props.titleProps;
		// const coverProps = this.props.coverProps;
		const { bannerImgProps, bannerTextProps, altProps } = this.props;

		return (
			<div className="banner">
				<h2 className="banner__title">{bannerTextProps}</h2>
				<img className="banner__img" src={bannerImgProps} alt={altProps} />
				<div className="banner__shadow"></div>
			</div>
		);
	}
}

export default Banner;
