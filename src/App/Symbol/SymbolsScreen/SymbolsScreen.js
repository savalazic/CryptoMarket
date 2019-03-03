// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import { Button } from 'react-native-paper';

import { logout } from '@services/auth/authActions';
import { getUserInfoId } from '@services/user/userSelectors';
import { getSymbols } from '@services/symbol/symbolActions';

type Props = {
  userId: string,
  getSymbols: (userId: string) => void,
};

class SymbolsScreen extends Component<Props> {
  componentDidMount() {
    this.props.getSymbols(this.props.userId);
  }

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

const mapStateToProps = state => ({
  userId: getUserInfoId(state),
});

const actions = {
  logout,
  getSymbols,
};

export default connect(
  mapStateToProps,
  actions,
)(SymbolsScreen);
