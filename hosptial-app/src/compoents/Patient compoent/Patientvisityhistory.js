import React,{useEffect , useState} from "react";
import { HashLink as Link } from "react-router-hash-link";
import Sidenavpatient from "./Sidenavpatient";


import "../css/Patient/Patientvisthistory.css";


function Patientvisityhistory() {
    const [isLoading, setIsloding] = useState(false);
    const [admintable, setAdmintable] = useState([]);
  


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
<Sidenavpatient/>
        <main className="Patientvisityhistory">
            <div className="container-fluid"style={{marginTop:"100px",marginBottom:"50px"}}>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title"> Patient Visity History</h5>
                                <hr />
                                <form className="d-flex" role="search">
                                    <input className="form-control me-2 "
                                        type="text"
                                        placeholder="Search"

                                    />
                                    <button className="btn btn-outline-success" type="submit">Search</button>
                                </form>
                                <div className="table">
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th>Patient ID</th>
                                                <th>Patient Name</th>
                                                <th>Doctor Name</th>
                                                <th>Date</th>
                                                <th>Probelm</th>
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


                                                        <td><Link to="/Patientvisitdatails">{u.fname}</Link></td>
                                                        <td>
                                                            <img src={u.avatar}
                                                                width="50"
                                                                className="avatar" />
                                                        </td>
                                                        <td>{u.lname}</td>

                                                        <td>{u.username}</td>


                                                    </tr>
                                                );
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
</>
    )
}

export default Patientvisityhistory;