import axios from "axios";
import { API_URL_APPIONMENT } from "../Stringconstant-reusecode";


const currentDate = new Date().toJSON().slice(0, 10);
        console.log(currentDate); // "2022-06-17"

export const getuserdetailfromsession = async () => {
   const emailValues = window.sessionStorage.getItem("PatientToken")
   try {

      const sessiondata = await JSON.parse(emailValues);
      console.log("detailsvalue", sessiondata);
      return sessiondata;

   }
   // return data;
   catch (err) {
   }
}

export const postUserappionmentvalidation = (appionmentUser) => axios.post(`${API_URL_APPIONMENT}/appionmentService`, appionmentUser);
export const getPatientvisityhistory = (visityhistoryUser) => axios.get(`${API_URL_APPIONMENT}/getPatientVisityHistory`, visityhistoryUser);
export const getCurrentDayAppionmentPatientList12 =(currentDayAppionmentUser)=>axios.get(`${API_URL_APPIONMENT}/getCurrentDayAppionmentPatientList?Date=${currentDate}`,currentDayAppionmentUser);
export const  PatientListRecptionModuleUser=(PatientList)=>axios.get(`${API_URL_APPIONMENT}/PatientListRecptionModuleT`,PatientList);
export const  DoctorListPatientModuleUser=(DoctorList)=>axios.get(`${API_URL_APPIONMENT}/DoctorListPatientModule`,DoctorList);

export const assginDoctorlist=(assgnDoctorDatas)=>axios.get(`${API_URL_APPIONMENT}/AssignDoctor`,assgnDoctorDatas);
export const assginDoctorForPostUser =(PostUser12)=>axios.post(`${API_URL_APPIONMENT}/patientVatilas12`,PostUser12);
