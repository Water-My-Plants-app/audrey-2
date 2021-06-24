  
import { combineReducers } from 'redux';
import plantReducer from './plantReducer'

export default combineReducers({
    plants: plantReducer
});