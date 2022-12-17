import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";


// import navigation from "./navigation";

import index from "../containers/indexpage";
import login from "../containers/login";
import forgotpassword from "../containers/forgotpassword";
import resetpassword from "../containers/resetpassword";
import sidenav from "../compoents/sidenavigation";






//ADMIN PAGE START

//ADMIN CONTAINER PAGE START

import sidebaradmin from "./Admin compoent/sidebaradmin";
import addreception from "./Admin compoent/addreception";
import allreception from "./Admin compoent/allreception";
import addpatient from "./Admin compoent/addpatient"
import allpatient from "./Admin compoent/allpatient"
import addappiontment from "./Admin compoent/addapiontment"
import allappiontment from "./Admin compoent/allapionment";
import adddoctor from "./Admin compoent/adddoctor"
import alldoctor from "./Admin compoent/alldoctor";
import myprofile from "./Admin compoent/Myprofile";

//ADMIN CONTAINER PAGE END


//ADMIN COMPENT PAGE START

import receptiondetails from "./Admin compoent/recptiondetails";
import receptiondetailt1 from "./Admin compoent/receptiondetailt1";
import receptiondetailt2 from "./Admin compoent/receptiondetailt2";
import patientdetailst1 from "./Admin compoent/patientdetailst1";
import patientvisitt2 from "./Admin compoent/patientvisitt2";
import patientpaymentt3 from "./Admin compoent/patientpaymentt3";
import patientdetails from "./Admin compoent/patientdetails";
import appiontmentdetails from "./Admin compoent/appiontmentdetails";
import doctordetailst1 from "./Admin compoent/doctordetailst1";
import doctordetailst2 from "./Admin compoent/doctordetailst2";
import doctordetails from "./Admin compoent/doctordetails";

//ADMIN COMPENT PAGE END

//ADMIN PAGE END


// DOCTOR ROUTE START


// DOCTOR COMPENT PAGE START

import allpatienttable from "./Doctor compoent/Allpatienttable";
import allpatientcard from "./Doctor compoent/Allpatientreusecard";
import reusecarddoctor from "./Doctor compoent/reusecarddoctor";
import doctordable from "./Doctor compoent/doctortableoverview";
import doctorpatientdtails1 from "./Doctor compoent/Doctorpatientdetails1";
import doctorpatientdtails2 from "./Doctor compoent/Doctorpatientdtails2";
import Patientvisit1 from "./Doctor compoent/Patientvisit1";
import Doctorgraphs from "./Doctor compoent/doctorgraphs";
import Patientgraps1 from "./Doctor compoent/patientgraps1";
import Doctortextarea from "./Doctor compoent/doctortextarea";
import Prescriptionfrom from "./Doctor compoent/prescriptionfrom";
import Prescriptiontable from "./Doctor compoent/prescriptiontable";
import Prescription from "./Doctor compoent/prescription";

// DOCTOR COMPENT PAGE END

// DOCTOR CONTAINER PAGE START

import sidenavdoctor from "../compoents/Doctor compoent/Sidenavdoctor";
import overview from "./Doctor compoent/Overview";
import Patientvisitdatailsdoctor from "./Doctor compoent/Patientvisitdatailsdoctor";
import allpatientdoctor from "./Doctor compoent/Allpatientdoctor";
import dallpatient from "./Doctor compoent/Dallpatient";
import doctorprofile from "./Doctor compoent/Doctorprofile";

// DOCTOR CONTAINER PAGE END

// DOCTOR ROUTE PAGE END


// RECEPTION ROUTE PAGE START

// RECEPTION COMPENT PAGE START
import Receptioncards from "./Recpetion compents page/receptioncards";
import Receptionoverviewtable from "./Recpetion compents page/receptionoverviewtable";
import Overviewchart from "./Recpetion compents page/overviewchart";
import Receptionparientcard from "./Recpetion compents page/receptionpatientcard";
import Receptionpatienttable from "./Recpetion compents page/receptionpatienttable";

// RECEPTION COMPENT PAGE END



// RECEPTION CONTAINER PAGE START

import Sidenavreception from "../containers/Recpetion module/Sidenavreception";
import Receptionoverview from "../containers/Recpetion module/Recptionoverview";
import Receptionallpatient from "../containers/Recpetion module/Receptionpatient";
import Assigndoctor from "./Recpetion compents page/Assigndoctor";
import Appionmentreception from "./Recpetion compents page/Appionmentrecption";
import Receptionmyprofile from "./Recpetion compents page/Receptionmyprofile";

// RECEPTION COMPENT PAGE END

// RECEPTION ROUTE PAGE END


// PATIENT ROUTE PAGE START

//PATIENT COMPENT PAGE START

import Visitdtails from "./Patient compoent/visitdetails";
import Patienttextarea from "./Patient compoent/patienttextarea";
import Patientgraps from "./Patient compoent/patientgrap";
import Patientprescription from "./Patient compoent/patientprescrition";
import Ddetails1 from "./Patient compoent/ddetails1";
import Ddetails2 from "./Patient compoent/ddetails2";

//PATIENT COMPENT PAGE END


//PATIENT CONTAINER PAGE START

import Sidenavpatient from "./Patient compoent/Sidenavpatient";
import Patientappionment from "./Patient compoent/Patientappionment";
import Patientvisityhistory from "./Patient compoent/Patientvisityhistory";
import Patientvisitdatails from "./Patient compoent/Patientvisitdetails";
import Patientdoctorlist from "./Patient compoent/Patientdoctorlist";
import Patientdoctordetails from "./Patient compoent/Patientdoctordetails";
import Patientmyprofile from "./Patient compoent/Patientmyprofile";

//PATIENT CONTAINER PAGE END

// PATIENT ROUTE END     



//EXAMPLE ROUTE COMPENENT


import reusecard from "../containers/cardreuse";
import admintable from "../compoents/Recpetion compents page/adminptable";
import users from "../compoents/sampleprogram/fromvalidation";
import patient from "../compoents/sampleprogram/formikvlaidation";
import example from "./sampleprogram/example";
import admin from "./Recpetion compents page/adminoverviwchart";
import collapseexmaple from "./sampleprogram/collapseexmaple";
import overviewcards from "./Admin compoent/overviewcards";
import some from "./sampleprogram/some";
import fromjs from "./sampleprogram/formjsvalid";
import signup from "./sampleprogram/from1";
import doctorpage from "./sampleprogram/useformik";
// import adminpage from "../containers/Admin page";




function Routing() {
    return (
        <Switch>
            <Route path="/" component={index} exact />
            <Route path="/index">
                <Redirect to="/" />
            </Route>
            <Route path="/login" component={login} />
            <Route path="/forgotpassword" component={forgotpassword} />
            <Route path="/resetpassword" component={resetpassword} />
            <Route path="/sidenav" component={sidenav} />


            {/* // ADMIN CONTAINER PAGE START  */}

            <Route path="/addreception" component={addreception} />
            <Route path="/allreception" component={allreception} />
            <Route path="/addpatient" component={addpatient} />
            <Route path="/allpatient" component={allpatient} />
            <Route path="/addappiontment" component={addappiontment} />
            <Route path="/allappiontment" component={allappiontment} />
            <Route path="/adddoctor" component={adddoctor} />
            <Route path="/alldoctor" component={alldoctor} />
            <Route path="/myprofile" component={myprofile} />

            {/* // ADMIN CONTAINER PAGE END  */}


            {/* // ADMIN COMPENTENT PAGE START  */}

            <Route path="/receptiondetails" component={receptiondetails} />
            <Route path="/receptiondetailt1" component={receptiondetailt1} />
            <Route path="/receptiondetailt2" component={receptiondetailt2} />
            <Route path="/patientdetailst1" component={patientdetailst1} />
            <Route path="/patientvisitt2" component={patientvisitt2} />
            <Route path="/patientpaymentt3" component={patientpaymentt3} />
            <Route path="/patientdetails" component={patientdetails} />
            <Route path="/appiontmentdetails" component={appiontmentdetails} />
            <Route path="/doctordetailst1" component={doctordetailst1} />
            <Route path="/doctordetailst2" component={doctordetailst2} />
            <Route path="/doctordetails" component={doctordetails} />

            {/* // ADMIN COMPENTENT PAGE START  */}



            {/* // DOCTOR COMPENENT PAGE START  */}


            <Route path="/allpatienttable" component={allpatienttable} />
            <Route path="/allpatientcard" component={allpatientcard} />
            <Route path="/reusecarddoctor" component={reusecarddoctor} />
            <Route path="/doctordable" component={doctordable} />
            <Route path="/doctorpatientdtails1" component={doctorpatientdtails1} />
            <Route path="/doctorpatientdtails2" component={doctorpatientdtails2} />
            <Route path="/Patientvisit1" component={Patientvisit1} />
            <Route path="/Doctorgraphs" component={Doctorgraphs} />
            <Route path="/Patientgraps1" component={Patientgraps1} />
            <Route path="/Doctortextarea" component={Doctortextarea} />
            <Route path="/Prescriptionfrom" component={Prescriptionfrom} />
            <Route path="/Prescriptiontable" component={Prescriptiontable} />
            <Route path="/Prescription" component={Prescription} />

            {/* // DOCTOR COMPENENT PAGE END  */}


            {/* // DOCTOR CONTAINER PAGE START  */}

            <Route path="/sidenavdoctor" component={sidenavdoctor} />
            <Route path="/overview" component={overview} />
            <Route path="/Patientvisitdatailsdoctor" component={Patientvisitdatailsdoctor} />
            <Route path="/allpatientdoctor" component={allpatientdoctor} />
            <Route path="/dallpatient" component={dallpatient} />
            <Route path="/doctorprofile" component={doctorprofile} />

            {/* // DOCTOR COMPENENT PAGE END  */}



            {/* //RECEPTION COMPENENT PAGE START  */}

            <Route path="/Receptioncards" component={Receptioncards} />
            <Route path="/Receptionoverviewtable" component={Receptionoverviewtable} />
            <Route path="/Overviewchart" component={Overviewchart} />
            <Route path="/Receptionparientcard" component={Receptionparientcard} />
            <Route path="/Receptionpatienttable" component={Receptionpatienttable} />



            {/* //RECEPTION COMPENENT PAGE END  */}


            {/* //RECEPTION CONTAINER PAGE START  */}

            <Route path="/Sidenavreception" component={Sidenavreception} />
            <Route path="/Receptionoverview" component={Receptionoverview} />
            <Route path="/Receptionallpatient" component={Receptionallpatient} />
            <Route path="/Assigndoctor" component={Assigndoctor} />
            <Route path="/Appionmentreception" component={Appionmentreception} />
            <Route path="/Receptionmyprofile" component={Receptionmyprofile} />


            {/* //RECEPTION CONTAINER PAGE END  */}


            {/* // PATIENT COMPANENT PAGE START  */}

            <Route path="/Visitdtails" component={Visitdtails} />
            <Route path="/Patienttextarea" component={Patienttextarea} />
            <Route path="/Patientprescription" component={Patientprescription} />
            <Route path="/Patientgraps" component={Patientgraps} />
            <Route path="/Ddetails1" component={Ddetails1} />
            <Route path="/Ddetails2" component={Ddetails2} />

            {/* // PATIENT COMPANENT PAGE END  */}


            {/* // PATIENT CONTAINER PAGE END  */}

            <Route path="/Sidenavpatient" component={Sidenavpatient} />
            <Route path="/Patientappionment" component={Patientappionment} />
            <Route path="/Patientvisityhistory" component={Patientvisityhistory} />
            <Route path="/Patientvisitdatails" component={Patientvisitdatails} />
            <Route path="/Patientdoctorlist" component={Patientdoctorlist} />
            <Route path="/Patientdoctordetails" component={Patientdoctordetails} />
            <Route path="/Patientmyprofile" component={Patientmyprofile} />

            {/* // PATIENT CONTAINER PAGE END  */}


            <Route path="/reusecard" component={reusecard} />
            <Route path="/admintable" component={admintable} />
            <Route path="/users" component={users} />
            <Route path="/patient" component={patient} />
            <Route path="/example" component={example} />
            <Route path="/sidebaradmin" component={sidebaradmin} />
            <Route path="/admin" component={admin} />
            <Route path="/collapseexmaple" component={collapseexmaple} />
            <Route path="/overviewcards" component={overviewcards} />
            <Route path="/some" component={some} />
            <Route path="/fromjs" component={fromjs} />
            <Route path="/signup" component={signup} />
            <Route path="/doctorpage" component={doctorpage} />
            {/* <Route path="/adminpage"component={adminpage}/> */}
            <Route path="*" render={() => <h1>404 Page Not Found</h1>} />


        </Switch>

    );

}
// export default Routing;