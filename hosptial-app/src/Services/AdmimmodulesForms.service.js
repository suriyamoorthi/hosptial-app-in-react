import axios from "axios";
import {API_URL_Admin } from "../Stringconstant-reusecode";




export const addReceptionForm = (recptionUser)=>axios.post(`${API_URL_Admin }/addreception`,recptionUser);

export const addDoctorForm =(doctorUser)=>axios.post(`${API_URL_Admin }/adddoctor`,doctorUser);

export const addAdminForm =(adminUser)=>axios.post(`${API_URL_Admin }/addAdmin`,adminUser);