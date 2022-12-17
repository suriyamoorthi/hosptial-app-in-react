import React, { useEffect, useState } from "react";


import "../css/Reception/receptionoverviewtable.css"


function Receptionoverviewtable() {

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

        <div className="receptionoverviewtable">



            <div className="card mb-4 pb-3">
                <div className="card-body">
                    <h5 className="card-title"> Current Day Appoinment Patient List</h5>
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
                                {admintable.map((user) => {
                                    return (
                                        <tr key={user.id}>
                                            <td>{user.id}</td>
                                            <td>
                                                <img src={user.avatar}
                                                    width="50"
                                                    className="avatar" />
                                            </td>

                                            <td>{user.fname}</td>

                                            <td>{user.lname}</td>

                                            <td>{user.username}</td>
                                            <td>{user.lname}</td>
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