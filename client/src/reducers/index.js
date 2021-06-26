  
import { combineReducers } from 'redux';
import plantReducer from './plantReducer';
import userReducer from './userReducer';

export default combineReducers({
    plants: plantReducer
    user: userReducer
});