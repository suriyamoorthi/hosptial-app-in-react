import React, { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";







import "../css/admin/patientvisitt2.css";

const first = {
    fname: "",
    lname: "",
    username: "",
    password: "",
    email: "",
    avatar: "",
}

function Patientvisitt2() {
    const [isLoading, setIsloding] = useState(false);
    const [admintable, setAdmintable] = useState([]);
    const [user, setUser] = useState({ first });


    const handleChange = ({ target: { name, value } }) => {
        setUser({ ...user, [name]: value });
    };


    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (user.id) {
            updateUser();
        }
        else {
            createUser();
        }

    };
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

    //CREATE USER
    const createUser = async () => {
        setIsloding(true);
        try {
            let response = await fetch("https://www.mecallapi.com/api/users/create", {
                method: "POST",
                body: JSON.stringify(user),
                headers: { "content-type": "application/json" },

            });
            if (!response.ok) {
                throw new Error("Request failed");
            }
            setIsloding(false);
            setUser(first);
            getAdmintable();

        }
        catch (err) {
            console.error(err.message);
        }

    };

    //UAPDATE USER
    const updateUser = async () => {
        setIsloding(true);
        try {
            let response = await fetch(" https://www.mecallapi.com/api/users/update", {
                method: "PUT",
                body: JSON.stringify(user),
                headers: { "content-type": "application/json" },
            });

            if (!response.ok) {
                throw new Error("Request failed");
            }
            response = await response.json();
            setIsloding(false);
            setUser(first);
            setAdmintable();
        }
        catch (err) {
            console.error(err.message);
        }


    };

    //DELETE USER

    const deleteUser = async ({ fname, lname, id }) => {
        setIsloding(true);
        if (window.confirm(`Are You Sure Want TO Delete User -${fname} ${lname}?`)) {
            try {
                let response = await fetch("https://www.mecallapi.com/api/users/delete", {
                    method: "DELETE",
                    body: JSON.stringify({ id }),
                    headers: { "content-type": "application/json" },

                });
                if (!response.ok) {
                    throw new Error("Request failed");
                }

                alert("User Delete Successfully!");
                setIsloding(false);
                getAdmintable(response);

            }
            catch (err) {
                console.error(err.message);
            }
        }
    };



    useEffect(() => {
        console.log("useEffect")
        getAdmintable();



    }, []);


    return (
        <>

            <main>
                <div className="container-fluid"  >
                    <div className="patientvisitt2" >

                        {/* <div className="col-sm-6"> */}
                            <div className="card h-100">
                                <div className="card-body">
                                    <h5 className="card-title">Patient Visits</h5>
                                    <hr />

                                    <div className="table">
                                        <table className="table  table-striped">
                                            <thead >
                                                <tr>
                                                    <th >Doctor Name</th>
                                                    <th >Cost</th>
                                                    <th >Visit Date</th>
                                                    <th >Status</th>

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
                                                        <tr key={u.id}>


                                                            <td>{u.id}</td>


                                                            <td>{u.fname}</td>
                                                            <td>
                                                                <img src={u.avatar}
                                                                    width="50"
                                                                    className="avatar" />
                                                            </td>
                                                            <td>{u.lname}</td>

                                                            {/* <td>{u.username}</td>
                                                                <td>
                                                                    <i className="fa-solid fa-pen-to-square text-primary fs-4 " onClick={() => setUser({ ...u, password: "", email: u.username })}
                                                                    ></i>
                                                                    <i className="fa-solid fa-trash text-danger fs-4 ms-3" onClick={() => deleteUser(u)}></i>
                                                                </td> */}
                                                        </tr>
                                                    );
                                                })}

                                            </tbody>
                                        </table>
                                    </div>

                                </div>
                            </div>


                        {/* </div> */}
                    </div>

                </div>
            </main>
        </>


    );
}

export default Patientvisitt2;


