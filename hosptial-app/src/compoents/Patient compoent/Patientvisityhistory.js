import React, { useEffect, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import Sidenavpatient from "./Sidenavpatient";

import { getPatientvisityhistory } from "../../Services/User.service";


import "../css/Patient/Patientvisthistory.css";


function Patientvisityhistory() {
    const [isLoading, setIsloding] = useState(false);
    const [admintable, setAdmintable] = useState([]);

    const fetchUser = async () => {
        setIsloding(true);
        try {
            // let currentDate = new Date().toJSON().slice(0, 10);
            // console.log(currentDate); // "2022-06-17"
            const { data } = await getPatientvisityhistory();
            setIsloding(false);
            setAdmintable(data);
        }
        catch (error) {
            alert(error.message);
        }


    }



    





    useEffect(() => {
        console.log("useEffect")
        fetchUser();

    }, []);
    return (
        <>
            <Sidenavpatient />
            <main className="Patientvisityhistory">
                <div className="container-fluid" style={{ marginTop: "100px", marginBottom: "50px" }}>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title"> Patient Visity History</h5>
                                    <hr />
                                    <form className="d-flex" role="search">
                                        <input className="form-control me-2 "
                                            type="text"
                                            placeholder="Search"

                                        />
                                        <button className="btn btn-outline-success" type="submit">Search</button>
                                    </form>
                                    <div className="table">
                                        <table className="table table-striped">
                                            <thead>
                                                <tr>
                                                    <th>Patient ID</th>
                                                    <th>Patient Name</th>
                                                    <th>Doctor Name</th>
                                                    <th>Date</th>
                                                    <th>Probelm</th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                                {isLoading && (
                                                    <div className=" justify-content-center">
                                                        <button className="btn btn-primary " type="button" disabled>
                                                            <span className="spinner-border spinner-border-sm text-center" role="status" aria-hidden="true"></span>
                                                            Loading...
                                                        </button>
                                                    </div>
                                                )}

                                                {admintable.map((u) => {
                                                    return (
                                                        <tr key={u.Firstname}>


                                                            <td>{u.Lastname}</td>


                                                            <td><Link to="/Patientvisitdatails">{u.Phonenumber}</Link></td>
                                                            {/* <td>
                                                            <img src={u.Emai}
                                                                width="50"
                                                                className="avatar" />
                                                        </td> */}
                                                            <td>{u.Email}</td>

                                                            <td>{u.City}</td>


                                                        </tr>
                                                    );
                                                })}

                                            </tbody>
                                        </table>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </main>
        </>
    )
}

export default Patientvisityhistory;