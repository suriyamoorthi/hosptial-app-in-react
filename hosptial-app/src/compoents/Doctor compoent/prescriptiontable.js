import React, { useEffect, useState } from "react";
import { GetPercriptiondataListDable } from "../../Services/User.service";

import "../css/Doctor/prescriptiontable.css";
function Prescriptiontable() {
    const [prescriptionData, SetPrescriptionData] = useState([]);

    const getDatas = async () => {
        const { data } = await GetPercriptiondataListDable();
        SetPrescriptionData(data);
        console.log("GetPercriptiondataListDable", data);

    }

    useEffect(() => {
        console.log("Prescriptiontable123 == useEffect")
        getDatas();
    }, [])
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

                                    {/* {prescriptionData .map((u) => {
                                          return(
                                        <tr key={u._id}>
                                            <td>{u._id}</td>
                                        </tr>
                                  )  })} */}
                                    {prescriptionData.map((user) => {
                                        return (
                                            <tr key={user._id}>
                                                <td>{user._id}</td>

                                                <td>{user.Dabletename}</td>

                                                <td> <input className="form-check-input"
                                                    type="radio"
                                                    name="Af"
                                                    // onBlur={handleBlur}
                                                    checked={user.Af}
                                                    value={user.Af}


                                                /></td>
                                                <td>
                                                    <input className="form-check-input"
                                                        type="radio"
                                                        name="Bf"

                                                        checked={user.Bf}
                                                        value={user.Bf}


                                                    />
                                                </td>
                                                <td>
                                                <input
                                            className="form-check-input"
                                            type="checkbox"
                                            name="Morning"
                                            checked={user.Morning}
                                            value={user.Morning}
                                            
                                        />
                                                </td>
                                                <td>
                                                <input
                                            class="form-check-input"
                                            type="checkbox"
                                            name="Evening"
                                            checked={user.Evening}
                                            value={user.Evening}
                                            
                                        />
                                                </td>
                                                <td>
                                                <input
                                            className="form-check-input"
                                            name="Night"
                                            type="checkbox"
                                            checked={user.Night}
                                            value={user.Night}

                                           
                                        />
                                                </td>
                                                <td>{user.Count}</td>

                                            </tr>
                                        )

                                    })}



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