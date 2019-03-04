// @flow
import React, { Node } from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

type Props = {
  children: Node,
  style?: any,
  p?: number,
};

const Container = ({ children, style, p = 15 }: Props) => (
  <View style={[styles.container, { padding: p }, style]}>{children}</View>
);

export default Container;
