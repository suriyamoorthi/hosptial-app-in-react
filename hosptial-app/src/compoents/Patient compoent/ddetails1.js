import React, { useState, useEffect } from "react";


import "../css/Patient/ddetails1.css"


function Ddetails1() {



    return (
        <>

            <main className="ddtails1" >

                <div className="container-fluid" style={{ marginBottom: "100px", marginTop: "100px" }}>

                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Doctor Detalis</h5>
                                <hr />

                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="card">
                                            <div className="card-body">
                                                <img src="/image/logo.png" className="card-img-top w-50 " alt="..." />
                                            </div>
                                        </div>

                                    </div>



                                    <div className="col-sm-6">
                                        <table className="table table-bordered  table-striped">

                                            <tbody>
                                                <tr>
                                                    <th scope="row">Name</th>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Specialization</th>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Experience</th>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Gender</th>
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


                                            </tbody>
                                        </table>



                                    </div>
                                    <button type="button" className="btn btn-danger ms-2  mt-3" style={{ width: "20%" }} >

                                        <i className="fa-solid fa-trash me-2 " ></i>
                                        Edit Doctor   </button>
                                    <button type="button" className="btn btn-secondary mt-3 ms-2" style={{ width: "20%" }} >
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
export default Ddetails1;


