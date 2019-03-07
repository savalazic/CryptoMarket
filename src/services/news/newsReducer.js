import { ActionTypes } from './newsActions';

export const initialState = [];

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_NEWS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export default newsReducer;
