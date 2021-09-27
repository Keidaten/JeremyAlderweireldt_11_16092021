//React
import React from 'react';

//Assets
import nextArrow from '../../assets/nextArrow.png';
import prevArrow from '../../assets/prevArrow.png';

//CSS
import '../../styles/carousel.scss';

class Carousel extends React.Component {
	constructor(props) {
		super(props);
		this.state = { picIndex: 0 };
	}

	nextPicture() {
		let arrayPicsLength = this.props.pictures.length - 1;
		this.setState((state) => ({
			picIndex: state.picIndex === arrayPicsLength ? 0 : state.picIndex + 1,
		}));
		console.log(arrayPicsLength);
	}

	prevPicture() {
		let arrayPicsLength = this.props.pictures.length - 1;
		this.setState((state) => ({
			picIndex: state.picIndex === 0 ? (state.picIndex = arrayPicsLength - 1) : state.picIndex - 1,
		}));
	}

	render() {
		const { title, pictures } = this.props;

		return (
			<div className="carousel">
				{pictures.length === 1 ? (
					<img className="carousel__img" src={pictures[0]} alt={'Illustration de ' + title} />
				) : (
					<React.Fragment>
						<img className="carousel__arrows carousel__arrows--prevArrow" src={prevArrow} alt="" onClick={() => this.prevPicture()} />
						<img className="carousel__img" src={pictures[this.state.picIndex]} alt={'Illustration de ' + title} />
						<img className="carousel__arrows carousel__arrows--nextArrow" src={nextArrow} alt="" onClick={() => this.nextPicture()} />
					</React.Fragment>
				)}
			</div>
		);
	}
}

export default Carousel;
