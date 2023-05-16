import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";


import "../css/Doctor/Patientvisit1.css"

const TABLEDATAS = {
    Firstname: "",
    Lastname: "",
    LastVisit: "",
    Gender: "",
    Address: "",

}

function Patientvisit1() {
    const location = useLocation();
    const [admintable, setAdmintable] = useState(TABLEDATAS);


    //GET USER
    const getAdmintable = () => {

        const searchParams = new URLSearchParams(location.search);
        const data = searchParams.get("data");
        console.log("patientdatas", data);
        if (data) {
            const parsePatientData = JSON.parse(data);
            console.log("parsePatientData", parsePatientData);
            setAdmintable(parsePatientData);
        }



    }
    // const getAdmintable = async () => {
    //     // setIsloding(true);
    //     try {
    //         let response = await fetch(" https://www.mecallapi.com/api/users");

    //         if (!response.ok) {
    //             throw new Error("Request failed");
    //         }
    //         response = await response.json();
    //         // setIsloding(false);
    //         setAdmintable(response);
    //     }
    //     catch (err) {
    //         console.error(err.message);
    //     }


    // };
    useEffect(() => {
        console.log("useEffect")
        getAdmintable();



    }, []);

    return (
        <main className="patientvisit1">
            <div className="container-fluid" style={{ marginBottom: "100px", marginTop: "100px" }}>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Patient Details12</h5>
                                <hr />

                                <div className="row">
                                    <div className="col-sm-2">
                                        <h6>Photo</h6>
                                        <img src="" class="img-thumbnail" alt="..." style={{ fontSize: "50px" }} />
                                    </div>
                                    <div class="col-sm-1">
                                        <div class="vl" style={{ borderLeft: "3px solid", height: "100%" }}></div>

                                    </div>
                                    <div className="col-sm-9">
                                        <div className="table">
                                            <table className="table table-bordered  table-striped">

                                                <tbody>

                                                    <tr>
                                                        <th scope="row">FirstName</th>
                                                        <td>{admintable.Firstname}</td>
                                                        <th scope="row">LastName</th>
                                                        <td>{admintable.Lastname}</td>

                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Last Visit</th>
                                                        <td>{admintable.Date}</td>
                                                        <th scope="row">Date Of Birth</th>
                                                        <td>dsdsdsdsfsf</td>
                                                    </tr>

                                                    <tr>
                                                        <th scope="row">Genter</th>
                                                        <td>{admintable.Gender}</td>
                                                        <th scope="row">Allergi</th>
                                                        <td>dsdsdsdsfsf</td>
                                                    </tr>


                                                    <tr>
                                                        <th scope="row">Address</th>
                                                        <td>{admintable.Address}</td>
                                                    </tr>
                                                   

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </main>

    )
}

export default Patientvisit1;



