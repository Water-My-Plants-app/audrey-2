import { GET_PLANTS, GET_SUCCESS, GET_ERROR } from '../actions';

const initialData = {
    data: [],
    isFetching: false,
    error: ''
};

const reducer = ( state=initialData, action ) => {

    switch(action.type){
        case GET_PLANTS:
            return({
                ...state,
                data: [],
                isFetching: true
            });
        case GET_SUCCESS:
            return({
                ...state,
                isFetching: false,
                data: [...action.payload]
            });
        case GET_ERROR:
            return({
                ...state,
                isFetching: false,
                error: action.payload 
            });
        default:
            return state;
    }
}
export default reducer;
