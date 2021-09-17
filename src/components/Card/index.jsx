//React
import React from 'react';

class Card extends React.Component {
	render() {
		// const titleProps = this.props.titleProps;
		// const coverProps = this.props.coverProps;
		const { titleProps, coverProps } = this.props;

		return (
			<figure>
				<img src={coverProps} alt={'Photo du logements' + titleProps} />
				<figcaption>{titleProps}</figcaption>
			</figure>
		);
	}
}

export default Card;
