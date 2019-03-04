import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import TabBarIcon from '../components/TabBarIcon';

import { theme } from '../theme';

import AppLoadingScreen from './AppLoadingScreen';
import AuthStack from './Auth';
import SymbolStack from './Symbol';
import WatchlistStack from './Watchlist';

const setTabBarIcon = (name, props) => TabBarIcon({ name, ...props });

const AppNavigator = createMaterialBottomTabNavigator(
  {
    Symbol: {
      screen: SymbolStack,
      navigationOptions: () => ({
        tabBarIcon: props => setTabBarIcon('list', props),
        tabBarLabel: 'Market Search',
        activeTintColor: theme.colors.primary,
      }),
    },
    Watchlist: {
      screen: WatchlistStack,
      navigationOptions: () => ({
        tabBarIcon: props => setTabBarIcon('favorite', props),
        tabBarLabel: 'Favorites',
        activeTintColor: theme.colors.primary,
      }),
    },
  },
  {
    barStyle: { backgroundColor: '#fff' },
  },
);

const AppContainer = createAppContainer(
  createSwitchNavigator({
    AppLoading: AppLoadingScreen,
    Auth: AuthStack,
    App: AppNavigator,
  }),
);

export default AppContainer;
