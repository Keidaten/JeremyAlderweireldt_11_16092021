//React
import React from 'react';

//Assets
import upArrow from '../../assets/upArrow.png';
import downArrow from '../../assets/downArrow.png';

//CSS
import '../../styles/dropdown.scss';

class Dropdown extends React.Component {
	constructor(props) {
		super(props);
		this.state = { isClose: true };
	}

	updateDropDownState() {
		this.setState((state) => ({
			isClose: !state.isClose,
		}));
	}

	render() {
		const { title, content } = this.props;

		return (
			<div className="dropdown">
				<div className="dropdown__button" onClick={() => this.updateDropDownState()}>
					<div className="dropdown__title">{title}</div>
					{this.state.isClose ? <img className="dropdown__arrow" src={downArrow} alt="Flèche vers le bas" /> : <img className="dropdown__arrow" src={upArrow} alt="Flèche vers le haut" />}
				</div>
				{this.state.isClose ? null : <div className="dropdown__content">{content}</div>}
			</div>
		);
	}
}

export default Dropdown;
