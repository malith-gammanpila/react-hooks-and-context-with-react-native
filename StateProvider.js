import React from 'react';

import App from './App';
import CounterState from './src/Store/CounterState';
import UserState from './src/Store/UserState';
import Context from './src/Store/Context';

const StateProvider = () => {
	const store = { ...CounterState(), ...UserState() };

	return (
		<Context.Provider value={store}>
			<App />
		</Context.Provider>
	);
};

export default StateProvider;
