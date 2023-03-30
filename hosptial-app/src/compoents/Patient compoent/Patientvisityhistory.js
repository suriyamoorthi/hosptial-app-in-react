import React, { useEffect, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import Sidenavpatient from "./Sidenavpatient";

import { getPatientvisityhistory } from "../../Services/User.service";


import "../css/Patient/Patientvisthistory.css";


function Patientvisityhistory() {
    const [isLoading, setIsloding] = useState(false);
    const [search, setSearch] = useState('');
    const [admintable, setAdmintable] = useState([]);

    const fetchUser = async () => {
        setIsloding(true);
        try {
           
            const { data } = await getPatientvisityhistory();
            setAdmintable(data);
            setIsloding(false);
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
                                    <input
                                        className="form-control me-2 "
                                        type="search"
                                        placeholder="Search"
                                        aria-label="Search"
                                        onChange={(e) => { setSearch(e.target.value) }}


                                    />
                                    {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
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

                                                {admintable.filter((u) => {
                                                    return search.toLowerCase() === ''
                                                        ? u
                                                        : u.Firstname.toLowerCase().includes(search);

                                                })
                                                .map((u) => {
                                                    return (
                                                        <tr key={u._id}>
                                                        <td>{u._id}</td>

                                                            <td>{u.Firstname}</td>


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