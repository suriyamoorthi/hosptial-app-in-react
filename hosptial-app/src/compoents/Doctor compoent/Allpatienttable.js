import React, { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { allPaitentListDoctorModule } from "../../Services/User.service";



import "../css/Doctor/Allpatienttable.css"

function Allpatienttable() {

    const [admintable, setAdmintable] = useState([]);
    const [isLoading, setIsloding] = useState(false);
    const [search, setSearch] = useState('');
    //GET USER
    const getAdmintable = async () => {
        // setIsloding(true);
        try {

            setIsloding(true);
            const { data } = await allPaitentListDoctorModule();
            console.log("DOCTOR MODULE PATIENT LIST", data);
            setIsloding(false);
            setAdmintable(data);



        }
        catch (err) {
            console.log(err.message);
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
                                                <th>Patient ID</th>
                                                <th>Patient Name</th>
                                                <th>Last Visit</th>
                                                {/* <th>spacialization</th> */}
                                                <th>Gender</th>
                                                <th>Problem</th>

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
                                                        <td><Link to="/dallpatient">{user.Fullname}</Link></td>

                                                        <td>{user.Date}</td>

                                                        <td>{user.Gender}</td>

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