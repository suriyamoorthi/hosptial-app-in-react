import React from "react";

import Sidenavreception from "./Sidenavreception";
import Receptionparientcard from "../../compoents/Recpetion compents page/receptionpatientcard";
import Receptionpatienttable from "../../compoents/Recpetion compents page/receptionpatienttable";


function Receptionallpatient () {
    return(
        <>
        <Sidenavreception/>
        <Receptionparientcard/>
        <Receptionpatienttable/>
        </>

    )
}

export default Receptionallpatient;