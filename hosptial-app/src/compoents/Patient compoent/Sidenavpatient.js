import React from "react";
import { HashLink as Link } from "react-router-hash-link";

import "../css/admin/sidbaradmin.css";

function Sidenavpatient() {
    return (
        <div class="sidebaradmin">
            <nav className="navbar navbar-expand-lg navbar-light bg-primary fixed-top">
                <div className="container-fluid">

                    {/* OFFCANVAS TOGGLER-BOTTION */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample"
                        aria-controls="offcanvasExample">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* OFFCANVAS TOGGLER-BOTTION  */}

                    <Link className="navbar-brand" to="/index"> <img src="/image/logo.png " style={{ height: "40px" }} /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        </ul>

                    </div>
                </div>
            </nav>
            {/* OFFCANVAS STRAT  */}

            <div id="slide-out" className="side-nav2 side">

                <div className="offcanvas offcanvas-start sidebaradmin" tabIndex="-1" id="offcanvasExample"
                    aria-labelledby="offcanvasExampleLabel">

                    <div className="offcanvas-body">
                        <nav>
                            <div className="top1">
                                <div className="logo">
                                    <img src="" style={{ height: "43px" }} />
                                </div>
                            </div>


                            <div className="sidebar1">

                                {/* <Link to="/Receptionoverview" className="active">
                                    <i className="fa-solid fa-layer-group"></i>
                                    <h3>Overview</h3>
                                </Link> */}

                                <Link to="/Patientappionment" className="active">
                                <i class="fa-solid fa-hospital-user" ></i>
                                    <h3>Appionment</h3>
                                </Link>

                                <Link to="/Patientvisityhistory">
                                <i class="fa-solid fa-hospital-user" ></i>
                                    <h3>Visit Histroy</h3>
                                </Link>
                                <Link to="/Patientdoctorlist">
                                <i class="fa-solid fa-user-doctor"></i>
                                    <h3>Doctor List</h3>
                                </Link>

                                <Link to="/Patientmyprofile">
                                    <i className="fa-solid fa-eye"></i>
                                    <h3>My Profile</h3>
                                </Link>


                                <Link to="/PatientResetpassword">
                                    <i className="fa-solid fa-passport"></i>
                                    <h3>Change Password</h3>
                                </Link>

                                <Link to="" style={{marginTop: "200px"}}>
                                    <i className="fa-solid fa-right-from-bracket"></i>
                                    <h3>Logout</h3>
                                </Link>



                            </div>
                        </nav>
                    </div>
                    {/* OFFCANVAS END  */}
                </div>

            </div >

        </div >
    )
}
export default Sidenavpatient;