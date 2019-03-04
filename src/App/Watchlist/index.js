import { createStackNavigator } from 'react-navigation';

import { theme } from '../../theme';

import WatchlistScreen from './WatchlistScreen';

const WatchlistStack = createStackNavigator({
  Watchlist: {
    screen: WatchlistScreen,
    navigationOptions: () => ({
      title: 'Favorites',
      headerStyle: {
        backgroundColor: theme.colors.primary,
      },
      headerTintColor: 'white',
    }),
  },
});

export default WatchlistStack;
