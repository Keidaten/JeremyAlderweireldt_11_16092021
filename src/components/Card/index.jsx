//React
import React from 'react';
import { Link } from 'react-router-dom';

class Card extends React.Component {
	render() {
		// const titleProps = this.props.titleProps;
		// const coverProps = this.props.coverProps;
		const { titleProps, coverProps, id } = this.props;

		return (
			<figure>
				<Link to={`/lodging/${id}`}>
					<img src={coverProps} alt={'Photo du logements' + titleProps} />
					<figcaption>{titleProps}</figcaption>
				</Link>
			</figure>
		);
	}
}

export default Card;
