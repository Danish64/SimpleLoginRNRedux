import {all} from 'redux-saga/effects';

import authWatcher from './sagas';

export default function* rootWatchers() {
  yield all([authWatcher()]);
}
