import { all, fork } from 'redux-saga/effects';
// import eventsSaga from './eventSaga';
import compA from '../components/CompA/compAsaga'

export default function* rootSaga() {
    yield all([
        // fork(eventsSaga),
        fork(compA)
    ])
}