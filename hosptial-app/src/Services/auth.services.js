import axios from "axios";

const AUTH_API_URL = "http://localhost:3001/LoginRegister";

export const register = (registeruser) =>axios.post(`${AUTH_API_URL}/registerappionment`,registeruser);

export const userLogin =(User) =>axios.post(`${AUTH_API_URL}/login`,User);

export const forgot = (forgotUser)=>axios.put(`${AUTH_API_URL}/forgot`,forgotUser);



    // try {
    //     const result = await axios.post(`${AUTH_API_URL}/registerappionment`,user);
    //     console.log("DATAVALUES12",result);
    //     console.log("DATAVALUES12",user);
    // }
    // catch (err) {
    //     console.error(err.message);

    // }

