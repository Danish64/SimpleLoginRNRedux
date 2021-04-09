import {all, put, takeLatest} from 'redux-saga/effects';
import {loginSuccess, loginFailure} from '../actions/auth';
import {mockLoginApi} from '../../services/mockApi';

function* loginRequest(obj) {
  // console.log('In Login Request Generator with', obj);
  const response = yield mockLoginApi(obj.data.email, obj.data.password);
  // console.log("In loginRequest Generator Function",response);
  let successResponse = {message: 'Successfully Logged In', userId: 1};
  let failedResponse = {message: 'User Authentication Failed'};
  if (response) {
    yield put(loginSuccess(successResponse));
  } else {
    yield put(loginFailure(failedResponse));
  }
}

export default function* watcher() {
  yield all([takeLatest('LOGIN_REQUEST', loginRequest)]);
}
