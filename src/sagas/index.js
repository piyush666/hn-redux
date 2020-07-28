import { takeEvery, all } from 'redux-saga/effects';
import { STORIES_FETCH } from '../constants/actionsTypes';
import { handleFetchStories } from './fetchStorySaga';

function* watchAll() {
    yield all([
        takeEvery(STORIES_FETCH, handleFetchStories),
    ])
}

export default watchAll;