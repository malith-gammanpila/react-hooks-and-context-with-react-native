import React, { useContext } from 'react';
import { Text, Button, View } from 'react-native';

import Context from '../Store/Context';

const Counter = () => {
	const { counter, increaseCounter, decreaseCounter } = useContext(Context);

	return (
		<View>
			<Text style={{ fontSize: 35 }}>Counter:{counter.value}</Text>
			<Button onPress={() => increaseCounter()} title={'Increase'} />
			<Button
				onPress={() => decreaseCounter()}
				title={'Decrease'}
				color={'black'}
			/>
		</View>
	);
};

export default Counter;
