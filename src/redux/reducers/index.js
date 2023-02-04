import { combineReducers } from 'redux';

import counterReducer from './testReducer';

const allReducers = combineReducers({
  counterReducer,
  // add more reducers here
});

export default allReducers;
