import React from "react";

import Visitgrap1 from "./visitgrap1";
import Vistgrap2 from "./visitgrap2";


function Patientgraps() {
    return (
        <>
           
            <main>
                <div className="container" style={{ marginBottom: "5px", marginTop: "100px" }}>
                    <div className="row">
                        <div className="col-sm-6 mb-3">
                            <Visitgrap1 />
                        </div>
                        <div className="col-sm-6">
                            <Vistgrap2 />
                        </div>
                    </div>
                </div>
            </main>
        </>

    )
}
export default Patientgraps;