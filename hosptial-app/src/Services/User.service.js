import axios from "axios";
import { API_URL_APPIONMENT } from "../Stringconstant-reusecode";




const currentDate = new Date().toJSON().slice(0, 10);


 export const GetPercriptiondata ={
  Email: "",
  Date:"",
  set Emailvalues(value) {
    this.Email = value;
    this.Date = value;
  }
};
export const getemail ={
  Email: "",
  set Emailvalues(value) {
    this.Email = value;
  }
};
 const Graphemail ={
  Email: "",
  set Emailvalues(value) {
    this.Email = value;
  }
};
export default Graphemail;

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

const patientsessiondata =()=>{
   const doctorsessionvalue =sessionStorage.getItem("PatientToken");
   console.log("doctorsessionvalue",doctorsessionvalue);

   if(doctorsessionvalue.length >0){

     const sessiondata = JSON.parse(sessionStorage.getItem("PatientToken"));
     var Patientfullnamesession= sessiondata[0].Fullname;
     console.log("Patientfullnamesession",Patientfullnamesession)
     return Patientfullnamesession;
   }
   else{
     return "";
   }
       
}

// const patientsessiondatadoctorname =()=>{
//    const doctorsessionvalue =sessionStorage.getItem("PatientToken");
//    console.log("doctorsessionvalue",doctorsessionvalue);

//    if(doctorsessionvalue.length >0){

//      const sessiondata = JSON.parse(sessionStorage.getItem("PatientToken"));
//      var Patientfullnamesession= sessiondata[0].Doctorfullname;
//      console.log("Patientfullnamesession",Patientfullnamesession)
//      return Patientfullnamesession;
//    }
//    else{
//      return "";
//    }
       
// }



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
export const getPatientvisityhistory = (visityhistoryUser) => axios.get(`${API_URL_APPIONMENT}/getPatientVisityHistory?Fullname=${patientsessiondata()}`, visityhistoryUser);
export const getCurrentDayAppionmentPatientList12 = (currentDayAppionmentUser) => axios.get(`${API_URL_APPIONMENT}/getCurrentDayAppionmentPatientList?Date=${currentDate}`, currentDayAppionmentUser);
export const PatientListRecptionModuleUser = (PatientList) => axios.get(`${API_URL_APPIONMENT}/PatientListRecptionModuleT`, PatientList);
export const DoctorListPatientModuleUser = (DoctorList) => axios.get(`${API_URL_APPIONMENT}/DoctorListPatientModule?Fullname=${patientsessiondata()}`, DoctorList);

export const assginDoctorlist = (assgnDoctorDatas) => axios.get(`${API_URL_APPIONMENT}/AssignDoctor`, assgnDoctorDatas);
export const assginDoctorForPostUser = (PostUser12) => axios.post(`${API_URL_APPIONMENT}/patientVatilas12`, PostUser12);
export const allPaitentListDoctorModule = (allpatientList) => axios.get(`${API_URL_APPIONMENT}/doctormoduleallpatient?Doctorfullname=${doctorsessiondata()}`, allpatientList);
export const CurrentDayAppionmentDoctorModuleTable=(tableUser)=>axios.get(`${API_URL_APPIONMENT}/doctorModuleCurrentPatientList?Doctorfullname=${doctorsessiondata()}&Date=${currentDate}`,tableUser);
// console.log("GRap vvalue",graphemail);
export const BpGraphDisplayData =(graphemailuser)=>axios.get(`${API_URL_APPIONMENT}/BPgeraphdata?Email=${Graphemail.Email}`,graphemailuser);
export const WeightGerapDatas=(Datas)=>axios.get(`${API_URL_APPIONMENT}/Weightgraph?Email=${Graphemail.Email}`,Datas);
export const DoctorAssginPrecription=(DatasUser)=>axios.post(`${API_URL_APPIONMENT}/Precription`,DatasUser);
export const GetPercriptiondataListDable =(PercriptiondataList)=>axios.get(`${API_URL_APPIONMENT}/Prescriptiondetailsdata?Email=${GetPercriptiondata.Email}&Date=${GetPercriptiondata.Date}`,PercriptiondataList);