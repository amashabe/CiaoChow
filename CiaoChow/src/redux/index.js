import { combineReducers } from 'redux';
import authReducer from './AuthReducers.js';

const rootReducer = combineReducers({
    auth: authReducer
});

export default rootReducer;