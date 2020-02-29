import React, { Component } from 'react';
import Rerender from './components/Rerender';

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
				<h2>{this.state.time.toString()}</h2>
				<Rerender seconds={1} />
			</div>
		);
	}
}
