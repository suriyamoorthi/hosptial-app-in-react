import React, { useEffect, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import GetPercriptiondata,{ GetPercriptiondataListDable } from "../../Services/User.service";
import { useLocation } from "react-router-dom";


import "../css/Patient/patientprescription.css";


function Patientprescription() {
    const location = useLocation();
    const [isLoading, serisLoading] = useState();
    const [prescriptionData, SetPrescriptionData] = useState([]);
    const QueryStringWeightGraph = () => {

        const searchParams = new URLSearchParams(location.search);
        const WGrapnData = searchParams.get("data");
        if (WGrapnData) {
            const GeraphParsingData = JSON.parse(WGrapnData);
            console.log("WeightGeraphParsingData", GeraphParsingData);
            const WeightGeraphEmail = GeraphParsingData.Email
            console.log(" WeightGeraphEmail(Patien .Email)", WeightGeraphEmail);
            return GeraphParsingData ;
        }
        else {
            console.log("");
        }
    }

    // const GetData = async () => {
    //     Graphemail.Email = QueryStringWeightGraph();
    //     console.log("MEthod Graphemail",Graphemail.Email);
    //     const {data}= await WeightGerapDatas();
    //     SetGraph(data);
    //     console.log("GetData",data);

    // }

    const getDatas = async () => {
        const functionData = QueryStringWeightGraph();
        GetPercriptiondata.Email=functionData.Email;
        GetPercriptiondata.Date =functionData.Date;
        console.log(" GetPercriptiondata.Email", GetPercriptiondata.Email);
        console.log(" GetPercriptiondata.Date", GetPercriptiondata.Date);
        const { data } = await GetPercriptiondataListDable();
        SetPrescriptionData(data);
        console.log("GetPercriptiondataListDable(patienr====)", data);

    }

    useEffect(() => {
        console.log("Prescriptiontable123 == useEffect")
        QueryStringWeightGraph();
        getDatas();
        getAdmintable();
        getAdmintable1();
        getAdmintable2();
        getAdmintable3();
        getAdmintable4();
    }, [])


    const getAdmintable = async () => {
        console.log("async1")
    }
    const getAdmintable1 = async () => {
        console.log("async2")
    }
    const getAdmintable2 = async () => {
        console.log("async3")
    }
    const getAdmintable3 =  () => {
        console.log("sync1")
    }
    const getAdmintable4 =  () => {
        console.log("sync2")
    }

    //GET USER
    // const getAdmintable = async () => {
    //     setIsloding(true);
    //     try {
    //         let response = await fetch(" https://www.mecallapi.com/api/users");

    //         if (!response.ok) {
    //             throw new Error("Request failed");
    //         }
    //         response = await response.json();
    //         setIsloding(false);
    //         setAdmintable(response);
    //     }
    //     catch (err) {
    //         console.error(err.message);
    //     }


    // };






    return (

        <main className="Patientprescription">
            <div className="container-fluid" style={{ marginTop: "100px", marginBottom: "50px" }}>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Prescription</h5>
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
                                                <th> S.no</th>
                                                <th>Tablet Name</th>
                                                <th>After Food</th>
                                                <th>Before Food</th>
                                                <th>Morning</th>
                                                <th>Evening</th>
                                                <th>Afternoon</th>
                                                <th>Total</th>
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

                                            {prescriptionData.map((user) => {
                                                return (
                                                    <tr key={user._id}>
                                                        <td>{user._id}</td>

                                                        <td>{user.Dabletename}</td>

                                                        <td> <input className="form-check-input"
                                                            type="radio"
                                                            name="Af"
                                                            // onBlur={handleBlur}
                                                            checked={user.Af}
                                                            value={user.Af}


                                                        /></td>
                                                        <td>
                                                            <input className="form-check-input"
                                                                type="radio"
                                                                name="Bf"

                                                                checked={user.Bf}
                                                                value={user.Bf}


                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                name="Morning"
                                                                checked={user.Morning}
                                                                value={user.Morning}

                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                class="form-check-input"
                                                                type="checkbox"
                                                                name="Evening"
                                                                checked={user.Evening}
                                                                value={user.Evening}

                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                className="form-check-input"
                                                                name="Night"
                                                                type="checkbox"
                                                                checked={user.Night}
                                                                value={user.Night}


                                                            />
                                                        </td>
                                                        <td>{user.Count}</td>

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

export default Patientprescription;