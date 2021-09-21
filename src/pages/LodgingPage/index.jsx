//React
import React from 'react';
import { Redirect } from 'react-router-dom';

//Datas
import { lodgings } from '../../datas/lodgings';

//Components
import Dropdown from '../../components/Dropdown';
import Carousel from '../../components/Carousel';

//Assets
import emptyStar from '../../assets/emptyStar.svg';

import '../../styles/index.css';

class LodgingPage extends React.Component {
	render() {
		const { id } = this.props.match.params;

		const specificLodging = lodgings.filter((lodging) => lodging.id === id)[0];
		if (!specificLodging) return <Redirect to="/404" />;

		const { title, pictures, description, host, rating, location, equipments, tags } = specificLodging;

		const ratingNumber = Number(rating);

		const ratingMeasure = [1, 2, 3, 4, 5];

		return (
			<main>
				<Carousel title={title} pictures={pictures} />
				<div>
					<div>
						<h1>{title}</h1>
						<span>{location}</span>
					</div>
					<div>
						{host.name} <img src={host.picture} alt={'Photo de ' + host.name} />{' '}
					</div>
				</div>
				<div>
					<div>{tags}</div>
					<div>{rating}</div>
					<div>{ratingMeasure.map((index) => (ratingNumber >= index ? <img key={index} className="--filled" src={emptyStar} alt="" /> : <img key={index} src={emptyStar} alt="" />))}</div>
				</div>
				<Dropdown title="Descritpion" content={description} />
				<Dropdown title="Équipements" content={equipments} />
			</main>
		);
	}
}

export default LodgingPage;
