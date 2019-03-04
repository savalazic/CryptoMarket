// @flow
import React, { Component } from 'react';
import { View } from 'react-native';
import {
  Headline, TextInput, HelperText, Button,
} from 'react-native-paper';
import { connect } from 'react-redux';

import { login } from '@services/auth/authActions';
import { getLoginError } from '@services/auth/authSelectors';
import { isEmailValid } from '@utils/validation';

type Props = {
  login: (email: string, password: string) => void,
  loginError: string,
};

type State = {
  email: string,
  password: string,
  touched: {
    email: boolean,
    password: boolean,
  },
};

class LoginScreen extends Component<Props, State> {
  state = {
    email: '',
    password: '',
    touched: {
      email: false,
      password: false,
    },
  };

  onChangeEmail = (email: string) => this.setState({ email });

  onChangePassword = (password: string) => this.setState({ password });

  handleBlur = field => () => {
    this.setState(prevState => ({
      touched: { ...prevState.touched, [field]: true },
    }));
  };

  onSubmit = () => this.props.login(this.state.email, this.state.password);

  render() {
    const { loginError } = this.props;
    const { email, password, touched } = this.state;

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
              value={email}
              onChangeText={this.onChangeEmail}
              onBlur={this.handleBlur('email')}
            />
            <HelperText
              type="error"
              visible={touched.email && !isEmailValid(email)}
            >
              Email address is invalid!
            </HelperText>
          </View>
          <View>
            <TextInput
              autoCapitalize="none"
              label="Password"
              value={password}
              onChangeText={this.onChangePassword}
              secureTextEntry
              onBlur={this.handleBlur('password')}
            />
            <HelperText
              type="error"
              visible={touched.password && password.length === 0}
            >
              Password is required
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
