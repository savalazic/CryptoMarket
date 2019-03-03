// @flow
import React, { type Node } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

type Props = {
  isLoading: boolean,
  children: Node,
};

const LoadingContainer = ({ isLoading, children }: Props) => (
  <View style={{ flex: 1 }}>
    {isLoading ? (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    ) : (
      children
    )}
  </View>
);

export default LoadingContainer;
