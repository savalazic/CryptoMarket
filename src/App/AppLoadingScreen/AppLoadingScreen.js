import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';

class AppLoadingScreen extends Component {
  state = {
    isLoggedIn: true,
  };

  componentDidMount() {
    this.props.navigation.navigate(this.state.isLoggedIn ? 'App' : 'Auth');
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <ActivityIndicator />
      </View>
    );
  }
}

export default AppLoadingScreen;
