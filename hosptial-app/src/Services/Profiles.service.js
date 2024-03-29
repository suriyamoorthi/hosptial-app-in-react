import axios from "axios";
import { PROFILE_API_URL } from "../Stringconstant-reusecode";



export const getProfiledetails =async()=>{
    const profileValues =window.sessionStorage.getItem("PatientToken");
    console.log("profileValues", profileValues);
    try{
        const sessiondata = await JSON.parse(profileValues);
           console.log(sessiondata);
           console.log("SESSIONDATA", sessiondata);
           return sessiondata;
    
        }
           // return data;
        catch(err){
        }
}

export  const getRecptionProfiledetails =async()=>{
    const receptionSessionData= window.sessionStorage.getItem("ReceptionToken");

    try{
      const sessionData= await JSON.parse(receptionSessionData);
      console.log("SEESION DATA",sessionData);
      return sessionData;
    }
    catch(err){
 console.log(err.Message);
    }

} 
export  const getDoctorProfiledetails =async()=>{
   const DoctorSessionData= window.sessionStorage.getItem("DoctorToken");
   // console.log("SESSION DATA",DoctorSessionData);

   try{
     const sessionData= await JSON.parse(DoctorSessionData);
     console.log("SEESION DATA",sessionData);
     return sessionData;
   }
   catch(err){
console.log(err.Message);
   }

} 

export  const getAdminDataDetails =async()=>{
   const AdminSessionData= window.sessionStorage.getItem("AdminToken");

   try{
     const sessionData= await JSON.parse(AdminSessionData);
     console.log("SEESION DATA",sessionData);
     return sessionData;
   }
   catch(err){
console.log(err.Message);
   }

} 

export const  patientProfileUpdate= (patientmyProfileUser)=> axios.put(`${PROFILE_API_URL}/profileUpdate`,patientmyProfileUser);

export const RecptionProfileUpdate= (ReceptionProfileUser)=> axios.put(`${PROFILE_API_URL}/ReceptionProfileUpdate`,ReceptionProfileUser);

export const DoctorprofileUpdate =(DoctorupdateUser)=>axios.put(`${PROFILE_API_URL}/DoctorProfileUpdate`,DoctorupdateUser);

export const AdminProfileUpdate =(AdminUser)=>axios.put(`${PROFILE_API_URL}/AdminProfile`,AdminUser);