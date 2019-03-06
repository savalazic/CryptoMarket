// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { type NavigationScreenProp } from 'react-navigation';

import { getToken } from '@services/auth/authSelectors';
import { getUserInfo, getUserAccounts } from '@services/user/userActions';
import { getUserInfoId } from '@services/user/userSelectors';

type Props = {
  accessToken: string,
  userId: string,
  navigation: NavigationScreenProp<{}>,
  getUserInfo: () => void,
  getUserAccounts: (id: string) => void,
};

class AppLoadingScreen extends Component<Props> {
  componentDidMount() {
    const { accessToken, userId } = this.props;
    this.props.navigation.navigate(accessToken ? 'App' : 'Auth');

    if (accessToken) {
      this.props.getUserInfo();
      this.props.getUserAccounts(userId);
    }
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
  userId: getUserInfoId(state),
});

const actions = { getUserInfo, getUserAccounts };

export default connect(
  mapStateToProps,
  actions,
)(AppLoadingScreen);
