import React from "react";


import "../css/Doctor/Doctorpatientdtails2.css"


function Doctorpatientdtails2() {
    return (
        <main className="doctorpatientdtails">
            <div className="container-fluid" style={{ marginBottom: "100px", marginTop: "100px" }}>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title"> Patient Activity</h5>
                                <div className="table">
                                    <table className="table table-striped">
                                        <tr>
                                            <th>Patient Name</th>
                                            <th>Injury/Condition</th>
                                            <th> Visit Date</th>
                                            <th> Status</th>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    )

}
export default Doctorpatientdtails2;