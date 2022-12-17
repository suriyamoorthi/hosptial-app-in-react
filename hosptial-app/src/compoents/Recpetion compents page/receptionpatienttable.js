import React, { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";


import "../css/Reception/receptionpatienttable.css"



function Receptionpatienttable() {
    const [admintable, setAdmintable] = useState([]);

    //GET USER
    const getAdmintable = async () => {
        // setIsloding(true);
        try {
            let response = await fetch(" https://www.mecallapi.com/api/users");

            if (!response.ok) {
                throw new Error("Request failed");
            }
            response = await response.json();
            // setIsloding(false);
            setAdmintable(response);

        }
        catch (err) {
            console.error(err.message);
        }


    };

    useEffect(() => {

        getAdmintable();

    }, [])
    return (

        <main className="receptionpatienttable">
            <div className="container-fluid" style={{marginTop:"50px",marginBottom:"50px"}}>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title"> Patient List</h5>
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
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th>Patient ID</th>
                                                <th>Patient Name</th>
                                                <th>Age</th>
                                                <th>Phone</th>
                                                <th>Last visit</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {admintable.map((user) => {
                                                return(
                                                <tr key={user.id}>
                                                    <td>{user.id}</td>
                                                   

                                                    <td><Link to="/Assigndoctor">{user.fname}</Link></td>

                                                    <td>{user.lname}</td>

                                                    <td>{user.username}</td>
                                                    <td>{user.lname}</td>

                                                </tr>

                                             ) }
                                            )}
                                        </tbody>

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

export default Receptionpatienttable;