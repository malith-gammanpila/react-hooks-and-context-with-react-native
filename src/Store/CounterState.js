import { useState } from 'react';

const CounterState = () => {
	const [counter, setCounter] = useState({ value: 356 });

	increaseCounter = () => {
		setCounter({ ...counter, value: counter.value + 1 });
	};

	decreaseCounter = () => {
		setCounter({ ...counter, value: counter.value - 1 });
	};

	return {
		counter,
		increaseCounter,
		decreaseCounter,
	};
};

export default CounterState;
