//React
import React from 'react';

//Datas
import { lodgings } from '../../datas/lodgings';

//Components
import Dropdown from '../../components/Dropdown';

class LodgingPage extends React.Component {
	render() {
		const { id } = this.props.match.params;
		const specificLodging = lodgings.filter((lodging) => lodging.id === id)[0];

		const { title, cover, description, host, rating, location, equipments, tags } = specificLodging;

		return (
			<main>
				<img src={cover} alt={'Illustration de ' + title} />
				<div>
					<div>
						<h1>
							{title} {id}
						</h1>
						<span>{location}</span>
					</div>
					<div>
						{host.name} <img src={host.picture} alt={'Photo de ' + host.name} />{' '}
					</div>
				</div>
				<div>
					<div>{tags}</div>
					<div>{rating}</div>
				</div>
				<Dropdown title="Descritpion" content={description} />
				<Dropdown title="Équipements" content={equipments} />
			</main>
		);
	}
}

export default LodgingPage;
