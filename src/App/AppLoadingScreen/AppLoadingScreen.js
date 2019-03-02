// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { type InjectedProps } from 'react-navigation-tabs';

import { getUser } from '@services/auth/authSelectors';

type Props = InjectedProps & {
  user: any,
};

class AppLoadingScreen extends Component<Props> {
  componentDidMount() {
    const { user } = this.props;
    this.props.navigation.navigate(user ? 'App' : 'Auth');
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

const mapStateToProps = state => ({
  user: getUser(state),
});

export default connect(mapStateToProps)(AppLoadingScreen);
