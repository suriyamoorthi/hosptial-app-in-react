import React from "react";

import "../css/Doctor/prescriptiontable.css";
function Prescriptiontable() {

    return (
        <main className="presceiptiontable mt-5 pt-4 mb-5 pb-4">
            <div className="container-fluid">
                <div className="card">
                    <div className="card-body">
                        <div className="table">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>S.no</th>
                                        <th>Tablete Name</th>
                                        <th>After Food</th>
                                        <th>Before Food</th>
                                        <th>Morning</th>
                                        <th>Evening</th>
                                        <th>Night</th>
                                        <th>Total</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <td>1</td>
                                </tbody>
                            </table>
                        </div>
                        <div className="form-group">
                            <div className="buttons">

                                <button type="submit" className="btn btn-primary" >submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )


}
export default Prescriptiontable;