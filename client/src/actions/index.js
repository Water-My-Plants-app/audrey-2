import { axiosWithAuth } from "../utilities/axiosCalls";

export const GET_PLANTS = "GET_PLANTS";
export const GET_SUCCESS = "GET_SUCCESS";
export const GET_ERROR = "GET_ERROR";

export const POST_REGISTER = "POST_REGISTER";
export const POST_LOGIN = "POST_LOGIN";
export const POST_PLANTS = "POST_PLANTS";
export const POST_SUCCESS = "POST_SUCCESS";
export const POST_ERROR = "POST_ERROR";

export const PUT_PLANT = "PUT_PLANT";
export const PUT_ERROR = "PUT_ERROR";
export const PUT_SUCCESS = "PUT_SUCCESS";

export const DELETE_PLANT = "DELETE_PLANT";
export const DELETE_ERROR = "DELETE_ERROR";
export const DELETE_SUCCESS = "DELETE_SUCCESS";

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
}