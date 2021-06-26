import {
    POST_REGISTER,
    POST_LOGIN,
    POST_SUCCESS,
    POST_ERROR,
    PUT_USER,
    PUT_ERROR,
    PUT_SUCCESS,
    DELETE_USER,
    DELETE_ERROR,
    DELETE_SUCCESS
} from '../actions';

const initialState = {
    username: '',
    password: ''
}

const userReducer = ( state = initialState, actions ) => {

};

export default userReducer;