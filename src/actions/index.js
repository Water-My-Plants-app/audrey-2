import { axiosWithAuth } from "../utilities/axiosCalls";

export const GET_PLANTS = "GET_PLANTS";
export const GET_USER = "GET_USER";
export const GET_SUCCESS = "GET_SUCCESS";
export const GET_ERROR = "GET_ERROR";

export const getPlants = ()=> (dispatch)=>{
    dispatch({type: GET_PLANTS})
    axiosWithAuth()
    .get('/api/plants')
    .then(res=>{
        dispatch({
            type: GET_SUCCESS, payload: res.data
        });
    })
    .catch(err=>{
        dispatch({
            type: GET_ERROR, payload: JSON.stringify(err)
        })
    })
};

export const getUser = ()=> (dispatch)=>{
    dispatch({type: GET_USER})
    axiosWithAuth()
    .get('/api/users/:id')
    .then(res=>{
        dispatch({
            type: GET_SUCCESS, payload: res.data
        });
    })
    .catch(err=>{
        dispatch({
            type: GET_ERROR, payload: JSON.stringify(err)
        })
    })
};
