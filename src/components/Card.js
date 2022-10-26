import React from 'react';

class Card extends React.Component {
	constructor(props) {
		super(props);
		this.state = {isFlipped: false}
	}

	handleClick = () => {
		//if currently face up, will be face down after click, need to decrease
		//if currently face down, will be face up after click, need to increase
		this.props.handleCountFlipped(this.state.isFlipped);
		this.props.handleChoices(this.props.cardText);
		this.setState(state => ({isFlipped: !state.isFlipped}));
	}

	render() {
		if(this.state.isFlipped === false) {
			return (
				<div style={{height:'100px', width:'75px', backgroundColor:'black', borderStyle:'solid', borderColor:'red'}}
					onClick={this.handleClick}></div>
			);
		}
		return (
			<div style={{height:'100px', width:'75px', backgroundColor:'lightblue', borderStyle:'solid', borderColor:'red'}}
				onClick={this.handleClick}>{this.props.cardText}</div>
		);
	}
}

export default Card;