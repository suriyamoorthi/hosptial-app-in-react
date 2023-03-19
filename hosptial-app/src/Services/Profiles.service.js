import axios from "axios";


const PROFILE_API_URL = "http://localhost:3001/profile";

export const getProfiledetails =async()=>{
    const profileValues =window.sessionStorage.getItem("PatientToken");
    try{
        const sessiondata = await JSON.parse(profileValues);
           console.log(sessiondata);
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

export const  patientProfileUpdate= (patientmyProfileUser)=> axios.put(`${PROFILE_API_URL}/profileUpdate`,patientmyProfileUser);

export const RecptionProfileUpdate= (ReceptionProfileUser)=> axios.put(`${PROFILE_API_URL}/ReceptionProfileUpdate`,ReceptionProfileUser);

