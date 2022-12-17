import React, { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";



import "../css/Doctor/Doctordable.css"

const first = {
    fname: "",
    lname: "",
    username: "",
    password: "",
    email: "",
    avatar: "",
}

function Doctordable() {
    const [isLoading, setIsloding] = useState(false);
    const [admintable, setAdmintable] = useState([]);
    const [user, setUser] = useState(first)


    //GET USER
    const getAdmintable = async () => {
        setIsloding(true);
        try {
            let response = await fetch(" https://www.mecallapi.com/api/users");

            if (!response.ok) {
                throw new Error("Request failed");
            }
            response = await response.json();
            setIsloding(false);
            setAdmintable(response);
        }
        catch (err) {
            console.error(err.message);
        }


    };

    useEffect(() => {
        console.log("useEffect")
        getAdmintable();



    }, []);

    return (

        <main className="doctordable">
            <div className="container-fluid" style={{ marginBottom: "5px", marginTop: "50px" }}>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Patient Day Appionment</h5>
                                <hr />

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
                                                <th> Patient ID</th>
                                                <th> Patient Name</th>
                                                <th> Last Visit</th>
                                                <th> spacialization</th>
                                                <th>Porablem</th>

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

                                            {admintable.map((user) => {
                                                return (
                                                    <tr key={user.id}>


                                                        <td>{user.id}</td>
                                                        <td><Link to="/Patientvisitdatailsdoctor">{user.fname}</Link></td>
                                                        <td>
                                                            <img src={user.avatar}
                                                                width="50"
                                                                className="avatar" />
                                                        </td>
                                                        <td>{user.lname}</td>

                                                        {/* <td>{user.username}</td> */}
                                                        <td>
                                                            <i className="fa-solid fa-pen-to-square text-primary fs-4 " onClick={() => setUser({ ...user, password: "", email: user.username })}
                                                            ></i>
                                                            <i className="fa-solid fa-trash text-danger fs-4 ms-3" ></i>
                                                            {/* onClick={() => deleteUser(user)} */}
                                                        </td>

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

export default Doctordable;