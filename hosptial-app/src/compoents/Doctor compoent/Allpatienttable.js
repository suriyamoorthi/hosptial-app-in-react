import React, { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
 import { allPaitentListDoctorModule } from "../../Services/User.service";
// import { getPatientvisityhistory } from "../../Services/User.service";
import { getDoctorProfiledetails } from "../../Services/Profiles.service";


import "../css/Doctor/Allpatienttable.css"

function Allpatienttable() {


    const [admintable, setAdmintable] = useState([]);
    // const session = useState(window.sessionStorage);

    //GET USER
    const getAdmintable = async () => {
        // setIsloding(true);
        try {


            const { data } = await allPaitentListDoctorModule();
            console.log("DOCTOR MODULE PATIENT LIST", data);
            // const sesstiondata = await getDoctorProfiledetails();
            // console.log("doctorloginSESSIONDATA", sesstiondata);

            // const doctorlogindata = sesstiondata[0].Doctorfullname;
            // console.log("doctorlogindata", doctorlogindata);
            // console.log("ITEM-VALUEcalled" );

            //  const localDoctorname= data[0].Doctorfullname;
            //  console.log("getPatientvisityhistory",localDoctorname);
            // const item_value1 = JSON.parse(sessionStorage.getItem("DoctorToken"));
            // const seesindata = item_value1[0].Doctorfullname;
            // console.log("ITEM-VALUE",seesindata );


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
                                <h5 className="card-body"> All Patient List12</h5>
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
                                                <th>Patient ID</th>
                                                <th>Patient Name</th>
                                                <th>Last Visit</th>
                                                <th>spacialization</th>
                                                <th>Problem</th>

                                            </tr>
                                        </thead>
                                        <tbody>

                                            {admintable.map((user) => {
                                                return (
                                                    <tr key={user._id}>
                                                        <td>{user._id}</td>
                                                        <td><Link to="/dallpatient">{user.Fullname}</Link></td>
                                                        {/* <td>
                                                            <img src={user.avatar}
                                                                width="50"
                                                                className="avatar" />
                                                        </td> */}
                                                        <td>{user.Doctorfullname}</td>

                                                        <td>{user.username}</td>

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