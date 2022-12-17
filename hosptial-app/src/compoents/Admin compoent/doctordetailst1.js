import React, { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";

import "../css/admin/doctordetailst1.css";

const first = {
    fname: "",
    lname: "",
    username: "",
    password: "",
    email: "",
    avatar: "",
}
function Doctordetails1() {
    const [isLoading, setIsloding] = useState(false);
    const [admintable, setAdmintable] = useState([]);
    const [table, setTable] = useState([])
    const [user, setUser] = useState({ first })

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
            setTable(response);
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
            setTable();
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

            <main className="doctordetailst1" >

                <div className="container-fluid" style={{ marginBottom: "100px", marginTop: "100px" }}>

                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Doctor Detalis</h5>
                                <hr />

                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="card">
                                            <div className="card-body">
                                                <img src="/image/logo.png" className="card-img-top w-50 " alt="..." />
                                            </div>
                                        </div>

                                    </div>



                                    <div className="col-sm-6">
                                        <table className="table table-bordered  table-striped">

                                            <tbody>
                                                <tr>
                                                    <th scope="row">Name</th>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Specialization</th>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Experience</th>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Gender</th>
                                                    <td>dsdsdsdsfsf</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Address</th>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Phone</th>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Date Of Birth</th>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Email</th>
                                                </tr>


                                            </tbody>
                                        </table>



                                    </div>
                                    <button type="button" className="btn btn-danger ms-2  mt-3" style={{ width: "20%" }} onClick={() => setUser({ getAdmintable })}>

                                        <i className="fa-solid fa-trash me-2 " ></i>
                                        Edit Doctor   </button>
                                    <button type="button" className="btn btn-secondary mt-3 ms-2" style={{ width: "20%" }} onClick={() => deleteUser(getAdmintable)}>
                                        <i className="fa-solid fa-pen-to-square me-2"></i>
                                        Delete Doctor</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main >
        </>
    )
}
export default Doctordetails1;


