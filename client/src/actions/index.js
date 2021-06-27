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
export const PUT_USER = "PUT_USER";
export const PUT_ERROR = "PUT_ERROR";
export const PUT_SUCCESS = "PUT_SUCCESS";

export const DELETE_PLANT = "DELETE_PLANT";
export const DELETE_USER = "DELETE_USER";
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

export const postRegister = (user) => (dispatch)=>{
    dispatch({type: POST_REGISTER})
    axiosWithAuth()
        .post('/api/auth/register', user)
        .then(res=>{
            dispatch({
                type: POST_SUCCESS, payload: res.data
            });
        })
        .catch(err=>{
            dispatch({
                type: POST_ERROR, payload: JSON.stringify(err)
            })
        })
}

export const postLogin = ()=> (dispatch)=>{
    dispatch({type: POST_LOGIN})
    axiosWithAuth()
        .get('/api/auth/login')
        .then(res=>{
            dispatch({
                type: POST_SUCCESS, payload: res.data
            });
        })
        .catch(err=>{
            dispatch({
                type: POST_ERROR, payload: JSON.stringify(err)
            })
        })
}

export const postPlants = ()=> (dispatch)=>{
    dispatch({type: POST_PLANTS})
    axiosWithAuth()
        .get('/api/plants')
        .then(res=>{
            dispatch({
                type: POST_SUCCESS, payload: res.data
            });
        })
        .catch(err=>{
            dispatch({
                type: POST_ERROR, payload: JSON.stringify(err)
            })
        })
}

export const putPlants = ()=> (dispatch)=>{
    dispatch({type: PUT_PLANT})
    axiosWithAuth()
        .get('/api/plants/:id')
        .then(res=>{
            dispatch({
                type: PUT_SUCCESS, payload: res.data
            });
        })
        .catch(err=>{
            dispatch({
                type: PUT_ERROR, payload: JSON.stringify(err)
            })
        })
}

// export const putUser = ()=> (dispatch)=>{
//     dispatch({type: PUT_USER})
//     axiosWithAuth()
//         .get('/admin/users/:id')
//         .then(res=>{
//             dispatch({
//                 type: PUT_SUCCESS, payload: res.data
//             });
//         })
//         .catch(err=>{
//             dispatch({
//                 type: PUT_ERROR, payload: JSON.stringify(err)
//             })
//         })
// }
