import axios from "axios";

import { AUTH_API_URL } from "../Stringconstant-reusecode";

export const register = (registeruser) => axios.post(`${AUTH_API_URL}/registerappionment`, registeruser);
// export const userLogin = (user) => {
//     try{
//          const userLogin =(User) =>axios.post(`${AUTH_API_URL}/login`,User);
//     }
//     catch(error){

//         console.log(erro)

//     }
// }
export const userLogin =(User) =>axios.post(`${AUTH_API_URL}/login`,User);

// export const userLogin = (user) => {
//      axios.post(`${AUTH_API_URL}/login`, user).then((response) => {
//         if (response.status == "200") {

//             console.log("status", response.status);
//             console.log("data",response.data)
//             return JSON.parse(response.data)
//         }
//     })




export const forgot = (forgotUser) => axios.put(`${AUTH_API_URL}/forgot`, forgotUser);



    // try {
    //     const result = await axios.post(`${AUTH_API_URL}/registerappionment`,user);
    //     console.log("DATAVALUES12",result);
    //     console.log("DATAVALUES12",user);
    // }
    // catch (err) {
    //     console.error(err.message);

    // }

