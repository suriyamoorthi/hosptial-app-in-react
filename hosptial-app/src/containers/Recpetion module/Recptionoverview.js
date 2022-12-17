import React from "react";


import Sidenavreception from "./Sidenavreception";
import Receptioncards from "../../compoents/Recpetion compents page/receptioncards";
import Receptionoverviewtable from "../../compoents/Recpetion compents page/receptionoverviewtable";
import Overviewchart from "../../compoents/Recpetion compents page/overviewchart";


function Receptionoverview() {
    return (
        <>
            <Sidenavreception />

            <Receptioncards />

            <main style={{ marginTop: "50px", marginBottom: "50px" }}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-9">
                            <Receptionoverviewtable />
                        </div>
                        <div className="col-sm-3">
                            <Overviewchart />
                        </div>

                    </div>
                </div>
            </main>

        </>
    )
}

export default Receptionoverview;