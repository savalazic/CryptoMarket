import { ActionTypes } from './newsActions';

const newsReducer = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.GET_NEWS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export default newsReducer;
