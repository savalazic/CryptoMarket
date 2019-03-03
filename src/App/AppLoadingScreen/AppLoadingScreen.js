// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { type InjectedProps } from 'react-navigation-tabs';

import { getToken } from '@services/auth/authSelectors';
import { getUser } from '@services/user/userActions';

type Props = InjectedProps & {
  accessToken: string,
};

class AppLoadingScreen extends Component<Props> {
  componentDidMount() {
    const { accessToken } = this.props;
    this.props.navigation.navigate(accessToken ? 'App' : 'Auth');
    this.props.getUser();
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
  accessToken: getToken(state),
});

const actions = { getUser };

export default connect(
  mapStateToProps,
  actions,
)(AppLoadingScreen);
