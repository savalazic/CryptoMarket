import { createStackNavigator } from 'react-navigation';

import SymbolsScreen from './SymbolsScreen';
import SymbolScreen from './SymbolScreen';

const SymbolStack = createStackNavigator({
  Symbols: SymbolsScreen,
  SingleSymbol: SymbolScreen,
});

export default SymbolStack;
