import React from "react";

import Sidenavdoctor from "./Sidenavdoctor";
import Prescriptionfrom from "./prescriptionfrom";
import Prescriptiontable from "./prescriptiontable";

function Prescription () {
    return(

        <>
        <Sidenavdoctor/>
        <Prescriptionfrom/>
        <Prescriptiontable/>
        </>
    )
}

export default Prescription;