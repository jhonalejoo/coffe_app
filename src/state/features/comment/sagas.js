import { call, all, put, takeEvery } from 'redux-saga/effects';
import {createCommentsErrors, createCommentsLoading, createCommentsSuccess, getCommentsErrors, getCommentsLoading, getCommentsSuccess } from './reducers';
import { createComments, getComments } from '../../../api/comment';


function* getCommentsFlow(action) {
    try {
        const comments = yield call(getComments);
        yield put(getCommentsSuccess(comments));
    } catch (error) {
        yield put(getCommentsErrors(error));
    }
}
function* createCommentsFlow(action) {
    try {
         const comment = yield call(createComments,action.payload);
         yield put(createCommentsSuccess(comment));
    } catch (error) {
        yield put(createCommentsErrors(error));
    }
}

function* CommentsWatcher() {
    yield all([
        takeEvery(getCommentsLoading.type, getCommentsFlow),
        takeEvery(createCommentsLoading.type,createCommentsFlow)
    ])
}

export default CommentsWatcher;