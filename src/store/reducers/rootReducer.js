import { combineReducers } from 'redux';
import authReducer from './authReducer';
import parkReducer from './parkReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    park: parkReducer
});

export default rootReducer;