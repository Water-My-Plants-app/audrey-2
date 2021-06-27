// import axios from 'axios';
//
// export const axiosWithAuth =() => {
//     const token = localStorage.getItem('token');
//
//     return axios.create({
//         headers: {
//             Authorization: token,
//         },
//     });
// };

import axios from 'axios';

export const axiosWithAuth = () =>{
    const token = localStorage.getItem('token')
    return axios.create({
        // baseURL:'https://buildweekplants.herokuapp.com',
        baseURL:'https://backendanew.herokuapp.com',
        headers: {
            Authorization: token
        },
        validateStatus: () => true
    });
};
