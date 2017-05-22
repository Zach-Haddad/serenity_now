// import { combineReducers } from 'redux';
//
// const rootReducer = combineReducers({
// });
//
// export default rootReducer;

import merge from 'lodash/merge';

const rootReducer = (state, action) => {
  Object.freeze(state);
  let nextState = merge({}, state);

  switch(action.type) {
    default:
      return state;
  }
};

export default rootReducer;
