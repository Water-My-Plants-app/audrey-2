import {
    DELETE_ERROR,
    DELETE_SUCCESS,
    DELETE_USER,
    POST_ERROR,
    POST_LOGIN,
    POST_REGISTER,
    POST_SUCCESS,
    PUT_ERROR,
    PUT_SUCCESS,
    PUT_USER
} from '../actions';

const initialState = {
    user: {},
    loading: false,
    error: ''
}

const userReducer = (state = initialState, actions) => {
    switch (action.type) {
        case POST_REGISTER:
            return{
                ...state,
                loading:true,
                user:{},
                error:''
            }
        case POST_LOGIN:
            return{
                ...state,
                loading: true,
                user:{},
                error:''
            }
        case POST_SUCCESS:
            return{
                ...state,
                loading:false,
                user: action.payload,
                error:''
            }
        case POST_ERROR:
            return{
                ...state,
                loading:false,
                user:{},
                error: action.payload
            }
        case PUT_USER:
            return {
                ...state,
                loading: true,
                user: {},
                error: '',
            }
        case PUT_ERROR:
            return{
                ...state,
                loading:false,
                user:{},
                error: action.payload
            }
        case PUT_SUCCESS:
            return{
                ...state,
                loading:false,
                user: action.payload,
                error:''
            }
        case DELETE_USER:
            return {
                ...state,
                loading: true,
                user: {},
                error: '',
            }
        case DELETE_ERROR:
            return{
                ...state,
                loading:false,
                user:{},
                error: action.payload
            }
        case DELETE_SUCCESS:
            return{
                ...state,
                loading:false,
                user: action.payload,
                error:''
            }
        default:
            return state;
    }
};

export default userReducer;