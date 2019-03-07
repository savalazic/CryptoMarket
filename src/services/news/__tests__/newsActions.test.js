import {
  ActionTypes,
  getNews,
  getNewsSuccess,
  getNewsFailure,
} from '../newsActions';

const newsMock = [{ id: 1, title: 'News 1' }, { id: 2, title: 'News 2' }];
const newsErrorMock = {
  status: 404,
  data: {
    message: 'Not found',
  },
};

describe('newsActions', () => {
  describe('getNews', () => {
    const params = {
      limit: 5,
      offset: 0,
    };

    it(`should return ${ActionTypes.GET_NEWS_REQUEST} action`, () => {
      const expectedAction = {
        type: ActionTypes.GET_NEWS_REQUEST,
        payload: params,
      };

      const result = getNews(params.limit, params.offset);
      expect(result).toEqual(expectedAction);
    });
  });

  describe('getNewsSuccess', () => {
    it(`should return ${ActionTypes.GET_NEWS_SUCCESS} action`, () => {
      const expectedAction = {
        type: ActionTypes.GET_NEWS_SUCCESS,
        payload: newsMock,
      };

      const result = getNewsSuccess(newsMock);
      expect(result).toEqual(expectedAction);
    });
  });

  describe('getNewsFailure', () => {
    it(`should return ${ActionTypes.GET_NEWS_FAILURE} action`, () => {
      const expectedAction = {
        type: ActionTypes.GET_NEWS_FAILURE,
        payload: newsErrorMock,
      };

      const result = getNewsFailure(newsErrorMock);
      expect(result).toEqual(expectedAction);
    });
  });
});
