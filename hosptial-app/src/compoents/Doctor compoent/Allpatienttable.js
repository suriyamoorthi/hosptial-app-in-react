import React, { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";


import "../css/Doctor/Allpatienttable.css"

function Allpatienttable() {


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
        <main className="allpatienttable">
            <div className="container-fluid" style={{ marginBottom: "5px", marginTop: "50px" }}>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-body"> All Patient List</h5>
                                <form className="d-flex" role="search">
                                    <input className="form-control me-2 "
                                        type="text"
                                        name="search"
                                        placeholder="Search"
                                    // onChange={(e) => setQuery(e.target.value)}

                                    />
                                    <button className="btn btn-outline-success" type="submit">Search</button>
                                </form>
                                <div className="table">
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th>Patient ID</th>
                                                <th>Patient Name</th>
                                                <th>Last Visit</th>
                                                <th>spacialization</th>
                                                <th>Problem</th>

                                            </tr>
                                        </thead>
                                        <tbody>

                                            {admintable.map((user) => {
                                                return (
                                                    <tr key={user.id}>
                                                        <td>{user.id}</td>
                                                        <td><Link to="/dallpatient">{user.fname}</Link></td>
                                                        <td>
                                                            <img src={user.avatar}
                                                                width="50"
                                                                className="avatar" />
                                                        </td>
                                                        <td>{user.lname}</td>

                                                        <td>{user.username}</td>

                                                    </tr>
                                                )

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
    )
}
export default Allpatienttable;