import {
  createSwitchNavigator,
  createBottomTabNavigator,
  createAppContainer,
} from 'react-navigation';

import AppLoadingScreen from './AppLoadingScreen';
import AuthStack from './Auth';
import SymbolStack from './Symbol';
import WatchlistStack from './Watchlist';

const AppNavigator = createBottomTabNavigator({
  Symbol: SymbolStack,
  Watchlist: WatchlistStack,
});

const AppContainer = createAppContainer(
  createSwitchNavigator({
    AppLoading: AppLoadingScreen,
    Auth: AuthStack,
    App: AppNavigator,
  }),
);

export default AppContainer;
