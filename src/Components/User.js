import React, { useContext } from 'react';
import { Text, TextInput, View } from 'react-native';

import Context from '../Store/Context';

const User = () => {
	const { user, setUserName } = useContext(Context);

	return (
		<View>
			<Text style={{ fontSize: 35, marginTop: 20 }}>
				User:{user.name}
			</Text>
			<TextInput
				style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
				onChangeText={text => setUserName(text)}
				value={user.name}
			/>
		</View>
	);
};

export default User;
