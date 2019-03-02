export const saveLoadingFlag = (actionName) => {
  const matches = /(.*)_(REQUEST|SUCCESS|FAILURE)/.exec(actionName);
  if (matches) {
    const [, requestName, requestState] = matches;
    return {
      [requestName]: requestState === 'REQUEST',
    };
  }
  return null;
};

export const saveError = (action) => {
  const matches = /(.*)_(REQUEST|FAILURE)/.exec(action.type);
  if (matches) {
    const [, requestName, requestState] = matches;
    if (requestState === 'FAILURE') {
      return {
        // @TODO: see what error field we should put here
        [requestName]: action.payload,
      };
    }
    delete [requestName];
  }
  return null;
};

export const initialState = {
  loaders: {},
  errors: {},
};

const utilsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return {
        ...state,
        loaders: {
          ...state.loaders,
          ...saveLoadingFlag(action.type),
        },
        errors: {
          ...state.errors,
          ...saveError(action),
        },
      };
  }
};

export default utilsReducer;
