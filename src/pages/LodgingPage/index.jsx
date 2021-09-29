//React
import React from 'react';
import { Redirect } from 'react-router-dom';

//Datas
import { lodgings } from '../../datas/lodgings';

//Components
import Dropdown from '../../components/Dropdown';
import Carousel from '../../components/Carousel';
import Stars from '../../components/Stars';

//CSS
import '../../styles/lodgingPage.scss';

class LodgingPage extends React.Component {
	render() {
		//useParams alternative for class components
		//get URL param
		const { id } = this.props.match.params;

		//get datas for matching loding ID
		const specificLodging = lodgings.filter((lodging) => lodging.id === id)[0];
		if (!specificLodging) return <Redirect to="/404" />;

		const { title, pictures, description, host, rating, location, equipments, tags } = specificLodging;
		const { name, picture } = host;
		const ratingNumber = Number(rating);

		const splittedName = name.split(' ');
		const brokenName = splittedName.map((name, index) => <span key={index + '-' + index}>{name}</span>);

		const brokenEquipments = (
			<ul>
				{equipments.map((name, index) => (
					<li key={index + '-' + index}>{name}</li>
				))}
			</ul>
		);

		return (
			<main>
				<Carousel title={title} pictures={pictures} />
				<div className="lodgingInfos">
					<div className="lodgingInfos__heading">
						<h1 className="lodgingInfos__title">{title}</h1>
						<span className="lodgingInfos__location">{location}</span>
						<div className="lodgingInfos__tagsContainer">
							{tags.map((tag, index) => (
								<div key={tag + '-' + index} className="lodgingInfos__tags">
									{tag}
								</div>
							))}
						</div>
					</div>
					<div className="lodgingInfos__subHeading">
						<Stars rating={ratingNumber} />
						<div className="lodgingInfos__ownerContainer">
							<span className="lodgingInfos__ownerName">{brokenName}</span>
							<img className="lodgingInfos__picture" src={picture} alt={'Photo de ' + host.name} />
						</div>
					</div>
				</div>
				<div className="dropdownContainer dropdownContainer--lodgingPage">
					<Dropdown page="lodgingPage" title="Descritpion" content={description} />
					<Dropdown page="lodgingPage" title="Équipements" content={brokenEquipments} />
				</div>
			</main>
		);
	}
}

export default LodgingPage;
