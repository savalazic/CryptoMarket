import {
  getLoaderStatus,
  getAllLoadersFromState,
  getAllErrorsFromState,
  getErrorStatus,
} from '../utils';

describe('utils', () => {
  it('should get loading status', () => {
    const mockedActionName = 'TEST_NAME_REQUEST';

    const loaders = {
      TEST_NAME: true,
    };

    const result = getLoaderStatus(loaders, mockedActionName);

    expect(result).toEqual(true);
  });

  it('should return loaders from state', () => {
    const state = {
      services: {
        utils: {
          loaders: {
            testLoader: true,
          },
        },
      },
    };

    const expectedResult = {
      testLoader: true,
    };

    const result = getAllLoadersFromState(state);

    expect(result).toEqual(expectedResult);
  });
  it('should return errors', () => {
    const state = {
      services: {
        utils: {
          errors: {
            testError: 'test',
          },
        },
      },
    };
    const expectedResult = {
      testError: 'test',
    };
    expect(getAllErrorsFromState(state)).toEqual(expectedResult);
  });
  it('should error status', () => {
    const mockedAction = 'TEST_NAME_FAILURE';
    const errors = {
      TEST_NAME: 'error',
    };
    expect(getErrorStatus(errors, mockedAction)).toEqual('error');
  });
});
