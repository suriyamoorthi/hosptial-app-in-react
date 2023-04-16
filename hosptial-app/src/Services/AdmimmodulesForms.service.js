import axios from "axios";


const AUTH_API_URL ="https://hosptial-app.onrender.com/adminappionment";


export const addReceptionForm = (recptionUser)=>axios.post(`${AUTH_API_URL}/addreception`,recptionUser);

export const addDoctorForm =(doctorUser)=>axios.post(`${AUTH_API_URL}/adddoctor`,doctorUser);

export const addAdminForm =(adminUser)=>axios.post(`${AUTH_API_URL}/addAdmin`,adminUser);