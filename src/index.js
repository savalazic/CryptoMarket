// @flow
import React from 'react';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';

import App from './App';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#008b7d',
    accent: '#e22b6f',
  },
};

export default () => (
  <PaperProvider theme={theme}>
    <App />
  </PaperProvider>
);
