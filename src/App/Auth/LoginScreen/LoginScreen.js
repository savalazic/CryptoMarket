// @flow
import React, { Component } from 'react';
import { View } from 'react-native';
import {
  Headline, TextInput, HelperText, Button,
} from 'react-native-paper';
import { connect } from 'react-redux';

import { login } from '@services/auth/authActions';
import { getLoginError } from '@services/auth/authSelectors';

type Props = {
  login: (email: string, password: string) => void,
  loginError: string,
};

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

  onSubmit = () => this.props.login(this.state.email, this.state.password);

  render() {
    const { loginError } = this.props;

    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'space-around',
          paddingHorizontal: 20,
          paddingVertical: 60,
        }}
      >
        <Headline style={{ textAlign: 'center' }}>Welcome</Headline>
        <View>
          <View>
            <TextInput
              autoCapitalize="none"
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
              autoCapitalize="none"
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
        <View>
          <HelperText
            type="error"
            visible={loginError}
            style={{ textAlign: 'center', marginBottom: 20 }}
          >
            {loginError}
          </HelperText>
          <Button
            style={{ padding: 15 }}
            mode="contained"
            onPress={this.onSubmit}
          >
            Sign In
          </Button>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  loginError: getLoginError(state),
});

const actions = {
  login,
};

export default connect(
  mapStateToProps,
  actions,
)(LoginScreen);
