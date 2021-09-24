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
					<li className="gallery__items">
						<Card key={lodging.id} id={lodging.id} titleProps={lodging.title} coverProps={lodging.cover} />
					</li>
				))}
			</ul>
		);
	}
}

export default Gallery;
