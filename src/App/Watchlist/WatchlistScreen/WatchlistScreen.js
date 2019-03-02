import React, { Component } from 'react';
import { Text, View } from 'react-native';

class WatchlistScreen extends Component {
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
        <Text>Watchlist!</Text>
      </View>
    );
  }
}

export default WatchlistScreen;
