//React
import React from 'react';

//Assets
import emptyStar from '../../assets/emptyStar.svg';

import '../../styles/stars.css';

class Stars extends React.Component {
	render() {
		// const titleProps = this.props.titleProps;
		// const coverProps = this.props.coverProps;
		const { rating } = this.props;

		const ratingMeasure = [1, 2, 3, 4, 5];

		return <div>{ratingMeasure.map((index) => (rating >= index ? <img key={index} className="--filled" src={emptyStar} alt="" /> : <img key={index} src={emptyStar} alt="" />))}</div>;
	}
}

export default Stars;
