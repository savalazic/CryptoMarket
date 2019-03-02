import { createStackNavigator } from 'react-navigation';

import WatchlistScreen from './WatchlistScreen';

const WatchlistStack = createStackNavigator({
  Watchlist: WatchlistScreen,
});

export default WatchlistStack;
