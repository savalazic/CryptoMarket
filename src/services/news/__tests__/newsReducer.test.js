import newsReducer, { initialState } from '../newsReducer';
import { ActionTypes } from '../newsActions';

describe('newsReducer', () => {
  const newsMock = [{ id: 1, title: 'News 1' }, { id: 2, title: 'News 2' }];

  it('should return initial state', () => {
    expect(newsReducer(undefined, {})).toEqual(initialState);
  });

  it(`should update state for ${ActionTypes.GET_NEWS_SUCCESS} action`, () => {
    const action = {
      type: ActionTypes.GET_NEWS_SUCCESS,
      payload: newsMock,
    };

    const result = newsReducer(initialState, action);
    expect(result).toEqual(newsMock);
  });
});
