import React, { Component } from 'react';

export default class App extends Component {
	state = {
		time: new Date()
	};

	componentDidMount() {
		setInterval(() => {
			this.setState({
				time: new Date()
			});
		}, 1000);
	}

	render() {
		return (
			<div>
				<h1>REACT.MEMO TUTORIAL</h1>
				<h3>{this.state.time.toString()}</h3>
			</div>
		);
	}
}
