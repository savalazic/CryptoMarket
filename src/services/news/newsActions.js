export const ActionTypes = {
  GET_NEWS_REQUEST: 'GET_NEWS_REQUEST',
  GET_NEWS_SUCCESS: 'GET_NEWS_SUCCESS',
  GET_NEWS_FAILURE: 'GET_NEWS_FAILURE',
};

export const getNews = (limit, offset) => ({
  type: ActionTypes.GET_NEWS_REQUEST,
  payload: { limit, offset },
});

export const getNewsSuccess = news => ({
  type: ActionTypes.GET_NEWS_SUCCESS,
  payload: news,
});

export const getNewsFailure = error => ({
  type: ActionTypes.GET_NEWS_FAILURE,
  payload: error,
});
