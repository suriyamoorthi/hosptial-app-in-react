import React from "react";

import Sidenavdoctor from "./Sidenavdoctor";
import Patientvisit1 from "./Patientvisit1";
import Doctorgraphs from "./doctorgraphs";
import Doctortextarea from "./doctortextarea";
import Prescription from "./prescription";

function Patientvisitdatailsdoctor() {
    return (
        <>
            <Sidenavdoctor />
            <Patientvisit1 />
            <Doctorgraphs />
            <Doctortextarea />
            <Prescription />
        </>

    )
}

export default Patientvisitdatailsdoctor;