import { createStackNavigator } from 'react-navigation';

import LoginScreen from './LoginScreen';

const AuthStack = createStackNavigator(
  {
    Login: LoginScreen,
  },
  {
    headerMode: 'none',
  },
);

export default AuthStack;
