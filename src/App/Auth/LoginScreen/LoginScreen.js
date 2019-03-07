// @flow
import React, { Component } from 'react';
import { View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {
  Text, TextInput, HelperText, Button,
} from 'react-native-paper';
import { connect } from 'react-redux';

import { login } from '@services/auth/authActions';
import { getLoginError, getLoginLoading } from '@services/auth/authSelectors';
import { isEmailValid } from '@utils/validation';

import Container from '@components/Container';
import Box from '@components/Box';

import styles from './LoginScreen.styles';

type Props = {
  login: (email: string, password: string) => void,
  loginError: string,
  isLoginLoading: boolean,
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
    const { loginError, isLoginLoading } = this.props;
    const { email, password, touched } = this.state;

    return (
      // $FlowFixMe
      <KeyboardAwareScrollView
        resetScrollToCoords={{ x: 0, y: 0 }}
        scrollEnabled={false}
        enableOnAndroid
      >
        <Container>
          <Box justify="between" py={120}>
            <Text style={styles.Header}>Welcome</Text>
            <View>
              <View style={styles.Input}>
                <TextInput
                  autoCapitalize="none"
                  label="Email"
                  value={email}
                  onChangeText={this.onChangeEmail}
                  onBlur={this.handleBlur('email')}
                  error={touched.email && !isEmailValid(email)}
                />
                <HelperText
                  type="error"
                  visible={touched.email && !isEmailValid(email)}
                >
                  Email address is invalid!
                </HelperText>
              </View>
              <View style={styles.Input}>
                <TextInput
                  autoCapitalize="none"
                  label="Password"
                  value={password}
                  onChangeText={this.onChangePassword}
                  secureTextEntry
                  onBlur={this.handleBlur('password')}
                  error={touched.password && password.length === 0}
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
                loading={isLoginLoading}
                disabled={isLoginLoading}
              >
                Sign In
              </Button>
            </View>
          </Box>
        </Container>
      </KeyboardAwareScrollView>
    );
  }
}

const mapStateToProps = state => ({
  loginError: getLoginError(state),
  isLoginLoading: getLoginLoading(state),
});

const actions = {
  login,
};

export default connect(
  mapStateToProps,
  actions,
)(LoginScreen);
