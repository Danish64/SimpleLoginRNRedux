import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from '../actions/actionTypes';

const initialState = {
  isLoading: false,
  loginResponse: {},
  loggedInStatus: false,
};

const authInformation = (state = initialState, action) => {
  if (action.type === LOGIN_REQUEST) {
    return {...state, isLoading: true};
  } else if (action.type === LOGIN_SUCCESS) {
    // console.log('In login success case', action.data);
    return {
      ...state,
      isLoading: false,
      loginResponse: action.data,
      loggedInStatus: true,
    };
  } else if (action.type === LOGIN_FAILURE) {
    return {
      ...state,
      isLoading: false,
      loginResponse: action.data,
      loggedInStatus: false,
    };
  } else {
    return state;
  }
};

export default authInformation;
