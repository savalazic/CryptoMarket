import React, { Component } from 'react';
import { Text, View } from 'react-native';

class SymbolsScreen extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
        }}
      >
        <Text>Symbols!</Text>
      </View>
    );
  }
}

export default SymbolsScreen;
