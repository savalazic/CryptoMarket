import React, { Component } from 'react';
import { Appbar } from 'react-native-paper';

class Header extends Component {
  _goBack = () => console.log('Went back');

  render() {
    return (
      <Appbar.Header>
        <Appbar.BackAction onPress={this._goBack} />
        <Appbar.Content
          title="Title"
          titleStyle={{ fontSize: 20, fontWeight: 'bold' }}
        />
      </Appbar.Header>
    );
  }
}

export default Header;
