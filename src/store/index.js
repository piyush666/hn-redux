import rootReducer from '../reducers';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';

const saga = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(saga, createLogger()));

saga.run(rootSaga);
export default store;