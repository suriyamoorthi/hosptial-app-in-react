import React, { useState, useEffect } from "react";
import Sidebaradmin from "./sidebaradmin";
import { HashLink as Link } from "react-router-hash-link";





import "../css/admin/allappionment.css";

const first = {
    fname: "",
    lname: "",
    username: "",
    password: "",
    email: "",
    avatar: "",
}

function Allappiontment() {
    const [isLoading, setIsloding] = useState(false);
    const [admintable, setAdmintable] = useState([]);
    const [user, setUser] = useState({ first })

 
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
        <>
            <Sidebaradmin>

            </Sidebaradmin>
            <main>
                <div className="container-fluid" style={{ marginBottom: "100px", marginTop: "100px" }} >
                    <div className="allpatient" >
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="card h-100 mb-3">
                                    <div className="card-body">
                                        <h5 className="card-title">Appiontment List</h5>
                                        <hr />
                                        <form className="d-flex" role="search">
                                            <input className="form-control me-2 "
                                                type="text"
                                                placeholder="Search"

                                            />
                                            <button className="btn btn-outline-success" type="submit">Search</button>
                                        </form>
                                        <div className="table">
                                            <table className="table  table-striped">
                                                <thead >
                                                    <tr>
                                                        <th >Appiontment ID</th>
                                                        <th >Patient ID</th>
                                                        <th >Token Number</th>
                                                        <th >Docter Name</th>
                                                        <th >Problem</th>
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


                                                                <td><Link to="/appiontmentdetails">{u.fname}</Link></td>
                                                                <td>
                                                                    <img src={u.avatar}
                                                                        width="50"
                                                                        className="avatar" />
                                                                </td>
                                                                <td>{u.lname}</td>

                                                                <td>{u.username}</td>
                                                                {/* <td>
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
                                        <nav aria-label="Page navigation example">
                                            <ul class="pagination justify-content-end">

                                                <li class="page-item "><a class="page-link" href="#">Previous</a></li>
                                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                                <li class="page-item">
                                                    <a class="page-link" href="#">Next</a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </main>
        </>


    );
}

export default Allappiontment;


