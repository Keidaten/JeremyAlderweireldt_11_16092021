//React
import React from 'react';

//Datas
import { lodgings } from '../../datas/lodgings';

//Components
import Card from '../../components/Card';

//CSS
import '../../styles/gallery.scss';

class Gallery extends React.Component {
	render() {
		return (
			<ul className="gallery">
				{lodgings.map((lodging) => (
					<li key={lodging.id} className="gallery__items">
						<Card id={lodging.id} titleProps={lodging.title} coverProps={lodging.cover} />
					</li>
				))}
			</ul>
		);
	}
}

export default Gallery;
