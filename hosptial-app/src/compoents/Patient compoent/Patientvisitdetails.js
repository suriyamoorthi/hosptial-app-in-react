import React from "react";

import Sidenavpatient from "./Sidenavpatient";
import Visitdtails from "./visitdetails";
import Patienttextarea from "./patienttextarea";
import Patientgraps from "./patientgrap";
import Patientprescription from "./patientprescrition";


function Patientvisitdatails() {
    return (
        <>
            <Sidenavpatient />
            <Visitdtails />
            <Patienttextarea />
            <Patientgraps />
            <Patientprescription />
        </>

    )
}

export default Patientvisitdatails;