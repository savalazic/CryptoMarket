// @flow
import React, { type Node } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';

import Box from '@components/Box';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  isLoading: {
    opacity: 0.5,
  },
  loader: {
    position: 'absolute',
    alignSelf: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  flex: {
    flex: 1,
  },
});

type Props = {
  isLoading: boolean,
  children: Node,
};

const LoadingContainer = ({ isLoading, children }: Props) => (
  <View style={[styles.container, isLoading && styles.isLoading]}>
    {isLoading && <ActivityIndicator style={styles.loader} />}
    <Box f={1} style={isLoading && styles.isLoading}>
      {children}
    </Box>
  </View>
);

export default LoadingContainer;
