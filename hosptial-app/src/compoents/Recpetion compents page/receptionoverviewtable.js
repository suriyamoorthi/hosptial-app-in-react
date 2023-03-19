import React, { useEffect, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { getCurrentDayAppionmentPatientList12 } from "../../Services/User.service";


import "../css/Reception/receptionoverviewtable.css"


function Receptionoverviewtable() {
    const [isLoading, setIsloding] = useState(false);
    const [admintable, setAdmintable12] = useState([]);

    //GET USER
    const User = async () => {
        // setIsloding(true);
        try {
            const { data } = await getCurrentDayAppionmentPatientList12();
            setAdmintable12(data);

        }
        catch (error) {
            alert(error.Message);

        }

    }

    useEffect(() => {
        try {
            console.log("CURRENTDAY APPIONMENT USER");
            User();
        }
        catch {
            console.log("entrryry")
        }
        //   currentAppionmetUser();

    }, []);




    return (

        <div className="receptionoverviewtable">



            <div className="card mb-4 pb-3">
                <div className="card-body">
                    <h5 className="card-title"> Current Day Appoinment Patient List123</h5>
                    <hr />
                    <form className="d-flex" role="search">
                        <input
                            className="form-control me-2 "
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        // onChange={(e) => { setSearch(e.target.value) }}


                        />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>

                    <div className="table">
                        <table className="table  table-striped">
                            <thead>
                                <tr>
                                    <th>Patient ID</th>
                                    <th>Patient Name</th>
                                    <th>Age</th>
                                    <th>Phone Number</th>
                                    <th>Lasit Visit</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {isLoading && (
                                    // <div className=" justify-content-center">
                                        <button className="btn btn-primary " type="button" disabled>
                                            <span className="spinner-border spinner-border-sm text-center" role="status" aria-hidden="true"></span>
                                            Loading...
                                        </button>
                                    // </div>
                                )}
                                {admintable.map((u) => {
                                    return (
                                        <tr >


                                            <td>{u.Firstname}</td>

                                            <td><Link to="/Assigndoctor">{u.Lastname}</Link>
                                                {/* <img src={user.avatar}
                                                width="50"
                                                className="avatar" /> */}
                                            </td>
                                            <td>{u.Phonenumber}</td>
                                            <td>{u.Email}</td>

                                            <td>{u.Date}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>


                </div>
            </div>



        </div>

    )
}

export default Receptionoverviewtable;