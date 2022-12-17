import React from "react";

import Sidenavdoctor from "./Sidenavdoctor";
import Reusecarddoctor from "./reusecarddoctor";
import Doctordable from "./doctortableoverview";



function Overview() {

    return (

        <>

            <Sidenavdoctor />
            <Reusecarddoctor />
            <Doctordable />

        </>

    );
}

export default Overview;