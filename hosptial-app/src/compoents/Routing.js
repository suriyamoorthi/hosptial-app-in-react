import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import  Admintableget from "../compoents/sampleprogram/fromvalidation";




import index from "../containers/indexpage";
import login from "../containers/login";
import forgotpassword from "../containers/forgotpassword";
import resetpassword from "../containers/resetpassword";
import sidenav from "../compoents/sidenavigation";

//ADMIN PAGE

import sidebaradmin from "./Admin compoent/sidebaradmin";
import AddAdmin from "./Admin compoent/addAdmin";
import addreception from "./Admin compoent/addreception";
import allreception from "./Admin compoent/allreception";
import receptiondetails from "./Admin compoent/recptiondetails";
import addpatient from "./Admin compoent/addpatient"
import allpatient from "./Admin compoent/allpatient"
import patientdetails from "./Admin compoent/patientdetails";
import addappiontment from "./Admin compoent/addapiontment"
import allappiontment from "./Admin compoent/allapionment";
import appiontmentdetails from "./Admin compoent/appiontmentdetails";
import adddoctor from "./Admin compoent/adddoctor";
import alldoctor from "./Admin compoent/alldoctor";
import doctordetails from "./Admin compoent/doctordetails";
import myprofile from "./Admin compoent/Myprofile";
import AdminChangepassword from "./Admin compoent/AdminChangepassword";

//DOCTOR PAGE

import sidenavdoctor from "../compoents/Doctor compoent/Sidenavdoctor";
import overview from "./Doctor compoent/Overview";
import Patientvisitdatailsdoctor from "./Doctor compoent/Patientvisitdatailsdoctor";
import allpatientdoctor from "./Doctor compoent/Allpatientdoctor";
import dallpatient from "./Doctor compoent/Dallpatient";
import doctorprofile from "./Doctor compoent/Doctorprofile";
import DoctorChangePassword from "./Doctor compoent/DoctorChangepassword";

//RECPTION PAGE

import Sidenavreception from "../containers/Recpetion module/Sidenavreception";
import Receptionoverview from "../containers/Recpetion module/Recptionoverview";
import Receptionallpatient from "../containers/Recpetion module/Receptionpatient";
import Assigndoctor from "./Recpetion compents page/Assigndoctor";
import Appionmentreception from "./Recpetion compents page/Appionmentrecption";
import Receptionmyprofile from "./Recpetion compents page/Receptionmyprofile";
import RecpetionResetpassword from "../compoents/Recpetion compents page/Recptionrestpasssword.js";


//PATIENT

import Sidenavpatient from "./Patient compoent/Sidenavpatient";
import Patientappionment from "./Patient compoent/Patientappionment";
import Patientvisityhistory from "./Patient compoent/Patientvisityhistory";
import Patientvisitdatails from "./Patient compoent/Patientvisitdetails";
import Patientdoctorlist from "./Patient compoent/Patientdoctorlist";
import Patientdoctordetails from "./Patient compoent/Patientdoctordetails";
import Patientmyprofile from "./Patient compoent/Patientmyprofile";
import PatientResetpassword from "./Patient compoent/PatientChangepassword";




function Routing() {

    
    return (
        <Switch>
            <Route path="/" component={index} exact />
            <Route path="/index">
                <Redirect to="/" />
            </Route>
            <Route path="/Admintableget" component={Admintableget} />

            <Route path="/login" component={login} />
            <Route path="/forgotpassword" component={forgotpassword} />
            <Route path="/resetpassword" component={resetpassword} />
            <Route path="/sidenav" component={sidenav} />

            <Route path="/sidebaradmin" component={sidebaradmin} />
            <Route path="/AddAdmin" component={AddAdmin}/>
            <Route path="/addreception" component={addreception} />
            <Route path="/allreception" component={allreception} />
            <Route path="/receptiondetails" component={receptiondetails} />
            <Route path="/addpatient" component={addpatient} />
            <Route path="/allpatient" component={allpatient} />
            <Route path="/patientdetails" component={patientdetails} />
            <Route path="/addappiontment" component={addappiontment} />
            <Route path="/allappiontment" component={allappiontment} />
            <Route path="/appiontmentdetails" component={appiontmentdetails} />
            <Route path="/adddoctor" component={adddoctor} />
            <Route path="/alldoctor" component={alldoctor} />
            <Route path="/doctordetails" component={doctordetails} />
            <Route path="/myprofile" component={myprofile} />
            <Route path="/AdminChangepassword" component={AdminChangepassword} />

            {/* //DOCTOR */}

            <Route path="/sidenavdoctor" component={sidenavdoctor} />
            <Route path="/overview" component={overview} />
            <Route path="/Patientvisitdatailsdoctor" component={Patientvisitdatailsdoctor} />
            <Route path="/allpatientdoctor" component={allpatientdoctor} />
            <Route path="/dallpatient" component={dallpatient} />
            <Route path="/doctorprofile" component={doctorprofile} />
            <Route path="/DoctorChangePassword" component={DoctorChangePassword}/>

            {/* //RECEPTION */}

            <Route path="/Sidenavreception" component={Sidenavreception} />
            <Route path="/Receptionoverview" component={Receptionoverview} />
            <Route path="/Receptionallpatient" component={Receptionallpatient} />
            <Route path="/Assigndoctor" component={Assigndoctor} />
            <Route path="/Appionmentreception" component={Appionmentreception} />
            <Route path="/Receptionmyprofile" component={Receptionmyprofile} />
            <Route path="/RecpetionResetpassword" component={RecpetionResetpassword}/>

            {/* //PATIENT */}

            <Route path="/Sidenavpatient" component={Sidenavpatient} />
            <Route path="/Patientappionment" component={Patientappionment} />
            <Route path="/Patientvisityhistory" component={Patientvisityhistory} />
            <Route path="/Patientvisitdatails" component={Patientvisitdatails} />
            <Route path="/Patientdoctorlist" component={Patientdoctorlist} />
            <Route path="/Patientdoctordetails" component={Patientdoctordetails} />
            <Route path="/Patientmyprofile" component={Patientmyprofile} />
            <Route path="/PatientResetpassword" component={PatientResetpassword}/>



            <Route path="*" render={() => <h1>404 Page Not Found</h1>} />


        </Switch>

    );

}
export default Routing;