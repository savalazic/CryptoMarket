import { StyleSheet } from 'react-native';

import { theme } from '../../../theme';

export default StyleSheet.create({
  SymbolPrice: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: '600',
  },
  Heading: {
    textTransform: 'uppercase',
    color: theme.colors.primary,
    fontWeight: '600',
    marginBottom: 10,
  },
  Button: {
    marginVertical: 20,
  },
});
