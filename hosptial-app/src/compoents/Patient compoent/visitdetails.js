import React, { useState, useEffect } from "react";


import "../css/Patient/visitdetails.css"

function Visitdtails() {

    const [admintable, setAdmintable] = useState([])

    //GET USER
    const getAdmintable = async () => {
        // setIsloding(true);
        try {
            let response = await fetch(" https://www.mecallapi.com/api/users");

            if (!response.ok) {
                throw new Error("Request failed");
            }
            response = await response.json();
            // setIsloding(false);
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
        <main className="visitdetails">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Patient Details</h5>
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
                                                        <th scope="row">Doctor Name</th>
                                                        <td>dsdsdsdsfsf</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Department</th>
                                                        <td>dsdsdsdsfsf</td>
                                                      
                                                    </tr>

                                                    <tr>
                                                        <th scope="row">Visit</th>
                                                        <td>dsdsdsdsfsf</td>
                                                       
                                                    </tr>
                                                   

                                                    <tr>
                                                        <th scope="row">Gender</th>
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

export default Visitdtails;



