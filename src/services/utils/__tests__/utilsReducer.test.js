import utils, {
  saveLoadingFlag,
  saveError,
  initialState,
} from '../utilsReducer';

describe('utilsReducer', () => {
  it('should return initial state', () => {
    expect(utils(undefined, {})).toEqual(initialState);
  });

  describe('utils functions', () => {
    describe('saveLoadingFlag', () => {
      it('should return true', () => {
        const actionName = 'TEST_REQUEST';

        const expectedResult = {
          TEST: true,
        };

        const result = saveLoadingFlag(actionName);
        expect(result).toEqual(expectedResult);
      });
      it('should return false', () => {
        const actionName = 'TEST_SUCCESS';

        const expectedResult = {
          TEST: false,
        };

        const result = saveLoadingFlag(actionName);
        expect(result).toEqual(expectedResult);
      });

      it('should return null because of wrong request name', () => {
        const actionName = 'TEST_TEST';

        const expectedResult = null;

        const result = saveLoadingFlag(actionName);
        expect(result).toEqual(expectedResult);
      });
    });

    describe('saveError', () => {
      it('should return error for failed request', () => {
        const action = {
          type: 'TEST_FAILURE',
          payload: {
            message: 'error',
          },
        };

        const expectedResult = {
          TEST: 'error',
        };

        const result = saveError(action);
        expect(result).toEqual(expectedResult);
      });

      it('should delete error for request', () => {
        const action = {
          type: 'TEST_REQUEST',
        };

        const expectedResult = null;

        const result = saveError(action);
        expect(result).toEqual(expectedResult);
      });

      it('should return null because of wrong request name', () => {
        const action = {
          type: 'TEST_TEST',
        };

        const expectedResult = null;

        const result = saveError(action);
        expect(result).toEqual(expectedResult);
      });
    });
  });
});
