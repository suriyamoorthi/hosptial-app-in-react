import React, { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { PatientListRecptionModuleUser } from "../../Services/User.service";


import "../css/Reception/receptionpatienttable.css"



function Receptionpatienttable() {
    const [admintable, setAdmintable] = useState([]);
    const [search, setSearch] = useState(" ");

    //GET USER
    const PatientListUser = async () => {
        // setIsloding(true);
        try {
           const {data}=await PatientListRecptionModuleUser()
            // setIsloding(false);
            setAdmintable(data);

        }
        catch (err) {
            console.error(err.message);
        }


    };

    useEffect(() => {

        PatientListUser();

    }, [])
    return (

        <main className="receptionpatienttable">
            <div className="container-fluid" style={{marginTop:"50px",marginBottom:"50px"}}>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title"> Patient List</h5>
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
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th>Patient ID</th>
                                                <th>Patient Name</th>
                                                <th>Age</th>
                                                <th>Phone</th>
                                                <th>Last visit</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* {admintable.filter((val) => {
                                                if (val == "search") {
                                                    console.log("sfsfsfsf");
                                                    return val;
                                                }
                                                else if (val.Firstname.toLowerCase().includes(search.toLowerCase())
                                                ) {
                                                    console.log("cccscdfdf");
                                                    return val;
                                                }
                                                //   else{
                                                //       search([...admintable])
                                                //       return val
                                                //   }


                                            }) */}
                                            
                                            
                                           {admintable.map((u) => {
                                                return(
                                                    <tr>
                                                        {/* <tr key={u.Firstname}></tr> */}
                                                        <td>{u.Firstname}</td>

                                                    <td>{u.Lastname}</td>


                                                    <td><Link to="/Assigndoctor">{u.Phonenumber}</Link></td>
                                                    {/* <td>
                                                    <img src={u.Emai}
                                                        width="50"
                                                        className="avatar" />
                                                </td> */}
                                                    <td>{u.Email}</td>
                                                    <td>{u.Date}</td>
                                                    <td>{u.City}</td>


                                                </tr>

                                             ) }
                                            )}
                                            
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

export default Receptionpatienttable;