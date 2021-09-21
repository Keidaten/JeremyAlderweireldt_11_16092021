//React
import React from 'react';

//Assets
import nextArrow from '../../assets/nextArrow.png';
import prevArrow from '../../assets/prevArrow.png';

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
			<div>
				{pictures.length === 1 ? (
					<img src={pictures[0]} alt={'Illustration de ' + title} />
				) : (
					<div>
						<img src={prevArrow} alt="" onClick={() => this.prevPicture()} />
						<img src={pictures[this.state.picIndex]} alt={'Illustration de ' + title} />
						<img src={nextArrow} alt="" onClick={() => this.nextPicture()} />
						<p>{this.state.picIndex}</p>
					</div>
				)}
			</div>
		);
	}
}

export default Carousel;
