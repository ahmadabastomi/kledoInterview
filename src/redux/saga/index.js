import { all } from 'redux-saga/effects';
import LoadSagas from './watcher';

export default function* Saga() {
  yield all(LoadSagas);
}