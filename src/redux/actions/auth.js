import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE} from './actionTypes';

export const loginRequest = (obj) => ({
  type: LOGIN_REQUEST,
  data: obj,
});

export const loginSuccess = (response) => ({
  type: LOGIN_SUCCESS,
  data: response,
});
export const loginFailure = (response) => ({
  type: LOGIN_FAILURE,
  data: response,
});
