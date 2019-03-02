import React, { Component } from 'react';
import { Text, View } from 'react-native';

class SymbolScreen extends Component {
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
        <Text>Symbol!</Text>
      </View>
    );
  }
}

export default SymbolScreen;
