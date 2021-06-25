import { GET_PLANTS, GET_SUCCESS } from '../actions';

const initialData = {
    data: [],
    isFetching: false
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
            })
        default:
            return state;
    }
}
export default reducer;