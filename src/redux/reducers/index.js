import {combineReducers} from 'redux';
import authInformation from './auth';

const appReducer = combineReducers({
  authInformation,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
