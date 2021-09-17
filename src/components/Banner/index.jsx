//React
import React from 'react';

class Banner extends React.Component {
	render() {
		// const titleProps = this.props.titleProps;
		// const coverProps = this.props.coverProps;
		const { bannerImgProps, bannerTextProps, altProps } = this.props;

		return (
			<div>
				<h2>{bannerTextProps}</h2>
				<img src={bannerImgProps} alt={altProps} />
			</div>
		);
	}
}

export default Banner;
