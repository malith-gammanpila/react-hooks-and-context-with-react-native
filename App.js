import React, { Component } from 'react';
import { Text, View } from 'react-native';

import Counter from './src/Components/Counter';
import User from './src/Components/User';

export default class App extends Component {
	render() {
		return (
			<View>
				<Counter />
				<User />
			</View>
		);
	}
}
