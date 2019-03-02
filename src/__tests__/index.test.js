import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import App from '../index';

jest.mock('react-native-gesture-handler', () => {});

it('renders without crashing', () => {
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered).toBeTruthy();
});
