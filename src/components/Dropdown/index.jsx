//React
import React from 'react';

//Assets
import upArrow from '../../assets/upArrow.png';
import downArrow from '../../assets/downArrow.png';

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
			<div>
				<div onClick={() => this.updateDropDownState()}>
					{title}
					{this.state.isClose ? <img src={downArrow} alt="Flèche vers le bas" /> : <img src={upArrow} alt="Flèche vers le haut" />}
				</div>
				{this.state.isClose ? null : <div>{content}</div>}
			</div>
		);
	}
}

export default Dropdown;
