import React, { useEffect, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import Sidenavpatient from "./Sidenavpatient";
import { DoctorListPatientModuleUser } from "../../Services/User.service";


import "../css/Patient/Patientvisthistory.css";


function Patientdoctorlist() {
    const [isLoading, setIsloding] = useState(false);
    const [admintable, setAdmintable] = useState([]);
    const [search, setSearch] = useState('');
    console.log("SERACH", search);


    //GET USER
    const DoctorListData = async () => {
        try {
            setIsloding(true);
            const { data } = await DoctorListPatientModuleUser();
            setAdmintable(data);
            setIsloding(false);
            console.log("DOCTOR MODULE LIST", data);
        }
        catch (error) {
            alert(error.Message);

        }

    }


    useEffect(() => {
        console.log("useEffect")
        DoctorListData();



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
                                    <h5 className="card-title">Doctor List</h5>
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
                                                    <th>Doctor ID</th>
                                                    <th>Doctor Name</th>
                                                    <th>Exprience</th>
                                                    <th>Lasit Visty</th>
                                                    <th>Specialization</th>
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

                                                {admintable
                                                    .filter((u) => {
                                                        return search.toLowerCase() === ''
                                                            ? u
                                                            : u.Doctorfirstname.toLowerCase().includes(search);

                                                    })
                                                    .map((u) => {
                                                        return (
                                                            <tr key={u._id}>
                                                                <td>{u._id}</td>
                                                                                                                                          
                                                                <td><Link to="/Patientdoctordetails">{u.Doctorfullname}</Link></td>
                                                                <td>
                                                                    {u.Exprience}
                                                                </td>
                                                                <td>{u.Date}</td>
                                                                <td>{u.Department}</td>

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

export default Patientdoctorlist;