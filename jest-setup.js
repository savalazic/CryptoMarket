/* eslint-disable */
jest.mock('react-native-gesture-handler', () => {});
jest.mock('react-navigation-stack', () => {});

jest.mock('react-navigation', () => ({
  createAppContainer: jest.fn().mockReturnValue(() => null),
  createDrawerNavigator: jest.fn(),
  createMaterialTopTabNavigator: jest.fn(),
  createMaterialBottomTabNavigator: jest.fn(),
  createStackNavigator: jest.fn(),
  StackActions: {
    push: jest
      .fn()
      .mockImplementation(x => ({ ...x, type: 'Navigation/PUSH' })),
    replace: jest
      .fn()
      .mockImplementation(x => ({ ...x, type: 'Navigation/REPLACE' })),
  },
  NavigationActions: {
    navigate: jest.fn().mockImplementation(x => x),
    init: () => {},
  },
}));

jest.mock('react-navigation-redux-helpers', () => ({
  createNavigationReducer: () => (state = {}, action) => state,
  createReactNavigationReduxMiddleware: () => () => () => () => {},
  reduxifyNavigator: () => () => {},
}));
