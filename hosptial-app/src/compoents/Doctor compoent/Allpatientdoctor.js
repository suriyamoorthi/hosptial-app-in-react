import React from "react";

import Sidenavdoctor from "./Sidenavdoctor";
import Allpatientcard from "./Allpatientreusecard";
import Allpatienttable from "./Allpatienttable";


function Allpatientdoctor (){
    return(
        <>
        <Sidenavdoctor/>
        <Allpatientcard/>
        <Allpatienttable/>
        </>

    )
}
export default Allpatientdoctor;