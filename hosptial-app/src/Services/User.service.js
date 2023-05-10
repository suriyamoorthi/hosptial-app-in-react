import axios from "axios";
import { API_URL_APPIONMENT } from "../Stringconstant-reusecode";



const currentDate = new Date().toJSON().slice(0, 10);

const doctorsessiondata =()=>{
    const doctorsessionvalue =sessionStorage.getItem("DoctorToken");

    if(doctorsessionvalue.length >0){

      const sessiondata = JSON.parse(sessionStorage.getItem("DoctorToken"));
      var Doctorfullnamesession= sessiondata[0].Doctorfullname;
      return Doctorfullnamesession;
    }
    else{
      return "";
    }
        
}


export const getuserdetailfromsession = async () => {
   const emailValues = window.sessionStorage.getItem("PatientToken")
   try {

      const sessiondata = await JSON.parse(emailValues);
      console.log("detailsvalue", sessiondata);
      return sessiondata;

   }
   // return data;
   catch (err) {
      console.log(err);
   }
}

export const postUserappionmentvalidation = (appionmentUser) => axios.post(`${API_URL_APPIONMENT}/appionmentService`, appionmentUser);
export const getPatientvisityhistory = (visityhistoryUser) => axios.get(`${API_URL_APPIONMENT}/getPatientVisityHistory`, visityhistoryUser);
export const getCurrentDayAppionmentPatientList12 = (currentDayAppionmentUser) => axios.get(`${API_URL_APPIONMENT}/getCurrentDayAppionmentPatientList?Date=${currentDate}`, currentDayAppionmentUser);
export const PatientListRecptionModuleUser = (PatientList) => axios.get(`${API_URL_APPIONMENT}/PatientListRecptionModuleT`, PatientList);
export const DoctorListPatientModuleUser = (DoctorList) => axios.get(`${API_URL_APPIONMENT}/DoctorListPatientModule`, DoctorList);

export const assginDoctorlist = (assgnDoctorDatas) => axios.get(`${API_URL_APPIONMENT}/AssignDoctor`, assgnDoctorDatas);
export const assginDoctorForPostUser = (PostUser12) => axios.post(`${API_URL_APPIONMENT}/patientVatilas12`, PostUser12);
export const allPaitentListDoctorModule = (allpatientList) => axios.get(`${API_URL_APPIONMENT}/doctormoduleallpatient?Doctorfullname=${doctorsessiondata()}`, allpatientList);
export const CurrentDayAppionmentDoctorModuleTable=(tableUser)=>axios.get(`${API_URL_APPIONMENT}/doctorModuleCurrentPatientList?Doctorfullname=${doctorsessiondata()}&Date=${currentDate}`,tableUser);