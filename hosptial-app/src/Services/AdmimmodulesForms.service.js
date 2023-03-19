import axios from "axios";


const AUTH_API_URL ="http://localhost:3001/adminappionment";


export const addReceptionForm = (recptionUser)=>axios.post(`${AUTH_API_URL}/addreception`,recptionUser);

export const addDoctorForm =(doctorUser)=>axios.post(`${AUTH_API_URL}/adddoctor`,doctorUser);