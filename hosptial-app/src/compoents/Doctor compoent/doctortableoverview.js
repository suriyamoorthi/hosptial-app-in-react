import React, { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { CurrentDayAppionmentDoctorModuleTable } from "../../Services/User.service";



import "../css/Doctor/Doctordable.css"


function Doctordable() {
    const [isLoading, setIsloding] = useState(false);
    const [admintable, setAdmintable] = useState([]);
    const [search, setSearch] = useState('');
   

    //GET USER
    const fecthdata = async () => {

        try {
            setIsloding(true);
            const { data } = await CurrentDayAppionmentDoctorModuleTable();
            console.log("CurrentDayAppionmentDoctorModuleTable", data);
            setIsloding(false);
            setAdmintable(data);

        }
        catch (err) {
            console.log(err.Message);
        }


    };

    useEffect(() => {
        console.log("useEffect")
        fecthdata();
    }, []);

    return (

        <main className="doctordable">
            <div className="container-fluid" style={{ marginBottom: "5px", marginTop: "50px" }}>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Patient Day Appionment12</h5>
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
                                                <th> Patient ID</th>
                                                <th> Patient Name</th>
                                                <th> Last Visit</th>
                                                {/* <th> spacialization</th> */}
                                                <th>Gender</th>
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

                                            {admintable.filter((u) => {
                                                return search.toLowerCase() === ''
                                                    ? u
                                                    : u.Fullname.toLowerCase().includes(search);

                                            })
                                                .map((user) => {
                                                    return (
                                                        <tr key={user._id}>


                                                            <td>{user._id}</td>
                                                            <td><Link to="/Patientvisitdatailsdoctor">{user.Fullname}</Link></td>
                                                            <td>{user.Date}</td>
                                                            <td>{user.Gender}</td>

                                                            {/* <td>{user.username}</td> */}
                                                            {/* <td>
                                                            <i className="fa-solid fa-pen-to-square text-primary fs-4 " onClick={() => setUser({ ...user, password: "", email: user.username })}
                                                            ></i>
                                                            <i className="fa-solid fa-trash text-danger fs-4 ms-3" ></i>
                                                             onClick={() => deleteUser(user)} 
                                                        </td> */}

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