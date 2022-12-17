import React from "react";
import Sidenavdoctor from "./Sidenavdoctor";
import Patientgraps1 from "./patientgraps1";
import Patientgraps2 from "./patientgraps2";

function Doctorgraphs() {
    return (
        <>
            <Sidenavdoctor />
            <main>
                <div className="container" style={{ marginBottom: "5px", marginTop: "100px" }}>
                    <div className="row">
                        <div className="col-sm-6 mb-3">
                            <Patientgraps1 />
                        </div>
                        <div className="col-sm-6">
                            <Patientgraps2 />
                        </div>
                    </div>
                </div>
            </main>
        </>

    )
}
export default Doctorgraphs;