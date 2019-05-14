/**
 * @format
 */

import { AppRegistry } from 'react-native';
import StateProvider from './StateProvider';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => StateProvider);
