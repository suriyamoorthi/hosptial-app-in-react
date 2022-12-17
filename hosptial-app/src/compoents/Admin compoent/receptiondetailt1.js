import React, { useState, useEffect } from "react";
// import Sidebaradmin from "./sidebaradmin";
import { HashLink as Link } from "react-router-hash-link";

import "../css/admin/receptiondetailt1.css";

const first = {
    fname: "",
    lname: "",
    username: "",
    password: "",
    email: "",
    avatar: "",
}
function Receptiondetailt1() {
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
            {/* <Sidebaradmin>

            </Sidebaradmin> */}
            <main className="receptiondetailt1" >

                <div className="container-fluid"  style={{ marginBottom: "100px", marginTop: "100px" }}>

                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Recption Detalis</h5>
                                <hr />

                                <div className="row">
                                    <div className="col-sm-6">

                                        <img src="/image/logo.png" className="card-img-top w-50 " alt="..." />


                                    </div>



                                    <div className="col-sm-6">
                                        <table className="table table-bordered  table-striped">

                                            <tbody>
                                                <tr>
                                                    <th scope="row">fname</th>
                                                </tr>
                                                <tr>
                                                    <th scope="row">lname</th>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Genter</th>
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
                                                {/* {table.map((u) => {
                                                    return (
                                                        <tr key={u.id}>


                                                            <tr>
                                                                <td>{u.id}</td>
                                                            </tr>
                                                            <tr>
                                                                <td><Link to="">{u.fname}</Link></td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <img src={u.avatar}
                                                                        width="50"
                                                                        className="avatar" />
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>{u.lname}</td>
                                                            </tr>
                                                            <tr>

                                                                <td>{u.username}</td>
                                                                <td>
                                                                    <i className="fa-solid fa-pen-to-square text-primary fs-4 " onClick={() => setUser({ ...u, password: "", email: u.username })}
                                                                    ></i>
                                                                    <i className="fa-solid fa-trash text-danger fs-4 ms-3" onClick={() => deleteUser(u)}></i>
                                                                </td>

                                                                <td>
                                                                <button type="button" className="btn btn-danger me-2  mt-3" style={{ width: "20%" }} onClick={() => setUser({ ...u, password: "", email: u.username })}>
        
                                        <i className="fa-solid fa-trash" ></i>
                                        Edit Doctor   </button>
                                    <button type="button" className="btn btn-secondary mt-3 me-2" style={{ width: "20%" }} onClick={() => deleteUser(u)}>
                                        <i className="fa-solid fa-pen-to-square"></i>
                                        Delete Doctor</button>
                                                                </td>
                                                            </tr>
                                                        </tr>
                                                    );
                                                })} */}

                                            </tbody>
                                        </table>



                                    </div>
                                    <button type="button" className="btn btn-danger ms-2  mt-3" style={{ width: "20%" }} onClick={() => setUser({ getAdmintable  })}>
                                       
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
export default Receptiondetailt1;


