import { createStackNavigator } from 'react-navigation';

import { theme } from '../../theme';

import SymbolsScreen from './SymbolsScreen';
import SymbolScreen from './SymbolScreen';

const SymbolStack = createStackNavigator({
  Symbols: {
    screen: SymbolsScreen,
    navigationOptions: () => ({
      title: 'Market Search',
      headerStyle: {
        backgroundColor: theme.colors.primary,
      },
      headerTintColor: 'white',
    }),
  },
  SingleSymbol: {
    screen: SymbolScreen,
    navigationOptions: () => ({
      headerStyle: {
        backgroundColor: theme.colors.primary,
      },
      headerTintColor: 'white',
    }),
  },
});

export default SymbolStack;
