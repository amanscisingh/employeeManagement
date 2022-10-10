import userReducer from './userReducer';
import dataReducer from './dataReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    userReducer,
    dataReducer
});

export default rootReducer;