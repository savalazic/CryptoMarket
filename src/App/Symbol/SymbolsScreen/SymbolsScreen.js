import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import { Button } from 'react-native-paper';

import { logout } from '@services/auth/authActions';

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
        <Button onPress={() => this.props.logout()}>Logout</Button>
      </View>
    );
  }
}

const mapStateToProps = state => ({});
const actions = {
  logout,
};

export default connect(
  mapStateToProps,
  actions,
)(SymbolsScreen);
