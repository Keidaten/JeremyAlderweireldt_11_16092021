//React
import React from 'react';
import { Link } from 'react-router-dom';

//CSS
import '../../styles/card.scss';

class Card extends React.Component {
	render() {
		// const titleProps = this.props.titleProps;
		// const coverProps = this.props.coverProps;
		const { titleProps, coverProps, id } = this.props;

		return (
			<Link to={`/lodging/${id}`}>
				<figure className="card">
					<img className="card__img" src={coverProps} alt={'Photo du logements' + titleProps} />
					<figcaption className="card__title">{titleProps}</figcaption>
					<div className="card__shadow"></div>
				</figure>
			</Link>
		);
	}
}

export default Card;
