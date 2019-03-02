// @flow
import React, { Component } from 'react';
import { View } from 'react-native';
import {
  Headline, TextInput, HelperText, Button,
} from 'react-native-paper';
import { connect } from 'react-redux';

import { login } from '@services/auth/authActions';

type Props = {};
type State = {
  email: string,
  password: string,
};

class LoginScreen extends Component<Props, State> {
  state = {
    email: '',
    password: '',
  };

  onChangeEmail = (email: string) => this.setState({ email });

  onChangePassword = (password: string) => this.setState({ password });

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'space-around',
          paddingHorizontal: 20,
          paddingVertical: 60,
        }}
      >
        <Headline style={{ textAlign: 'center' }}>Login!</Headline>
        <View>
          <View>
            <TextInput
              label="Email"
              value={this.state.email}
              onChangeText={this.onChangeEmail}
            />
            <HelperText
              type="error"
              visible={
                this.state.email.length > 0 && !this.state.email.includes('@')
              }
            >
              Email address is invalid!
            </HelperText>
          </View>
          <View>
            <TextInput
              label="Password"
              value={this.state.password}
              onChangeText={this.onChangePassword}
              secureTextEntry
            />
            <HelperText
              type="error"
              visible={
                this.state.password.length > 0 && this.state.password.length < 8
              }
            >
              Password must be at least 8 characters long!
            </HelperText>
          </View>
        </View>
        <Button style={{ padding: 15 }} mode="contained">
          Sign In
        </Button>
      </View>
    );
  }
}

const actions = {
  login,
};

export default connect(
  null,
  actions,
)(LoginScreen);
