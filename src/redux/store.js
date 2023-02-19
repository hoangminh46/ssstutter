import { combineReducers } from 'redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const composedEnhancers = composeWithDevTools();

const allReducers = combineReducers({
  rootReducer,
  // add more reducers here
});

const store = createStore(allReducers, composedEnhancers);

export default store;
