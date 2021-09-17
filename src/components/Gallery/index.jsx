//React
import React from 'react';

//Datas
import { lodgings } from '../../datas/lodgings';

//Components
import Card from '../../components/Card';

class LodgingsList extends React.Component {
	render() {
		return (
			<ul>
				<li>
					{lodgings.map((lodging) => (
						<Card key={lodging.id} titleProps={lodging.title} coverProps={lodging.cover} />
					))}
				</li>
			</ul>
		);
	}
}

export default LodgingsList;
