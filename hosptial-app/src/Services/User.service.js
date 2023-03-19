import axios from "axios";

const AUTH_API_URL = "http://localhost:3001/Appionment";
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

export const postUserappionmentvalidation = (appionmentUser) => axios.post(`${AUTH_API_URL}/appionmentService`, appionmentUser);
export const getPatientvisityhistory = (visityhistoryUser) => axios.get(`${AUTH_API_URL}`, visityhistoryUser);
export const getCurrentDayAppionmentPatientList12 =(currentDayAppionmentUser)=>axios.get(`${AUTH_API_URL}/getCurrentDayAppionmentPatientList?Date=${currentDate}`,currentDayAppionmentUser);
export const  PatientListRecptionModuleUser=(PatientList)=>axios.get(`${AUTH_API_URL}/PatientListRecptionModuleT`,PatientList);
export const  DoctorListPatientModuleUser=(DoctorList)=>axios.get(`${AUTH_API_URL}/DoctorListPatientModule`,DoctorList);

export const assgnDoctor=(assgnDoctorDatas)=>axios.get(`${AUTH_API_URL}/AssignDoctor`,assgnDoctorDatas)