import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../redux/index';

const initState = {};

const middleware = applyMiddleware(thunk, logger);

const store = createStore(rootReducer, initState, middleware)

export default store;