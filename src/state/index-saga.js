import {all, fork} from 'redux-saga/effects';
import coffeeSagas from './features/coffee/sagas';
import commentSagas from './features/comment/sagas';


export default function* IndexSagas() {
    yield all([
        fork(commentSagas),
        fork(coffeeSagas)
    ])
}