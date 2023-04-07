
import React, { useState } from 'react';
import { HashLink as Link } from "react-router-hash-link";

import "../css/admin/sidbaradmin.css";

function Adminnav() {
    const [isOpen, setIsopen] = useState(false);
    const [isOpen1, setIsopen1] = useState(false);
    const [isOpen2, setIsopen2] = useState(false);
    const [isOpen3, setIsopen3] = useState(false);
    const [isOpen4, setIsopen4] = useState(false);
    const [isOpen5, setIsopen5] = useState(false);


    // const handleChange = ({ }) => {
    //     setIsopen(!isOpen)
    // };
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

                                <Link to="/addreception" className="active">
                                    <i className="fa-solid fa-layer-group"></i>
                                    <h3>Overview</h3>
                                </Link>
                                <a className="link sidebaradmin-link" onClick={() => setIsopen4(!isOpen4)}>
                                    <i className="fa-solid fa-user-doctor"></i>
                                    <h3>Admin</h3>
                                    <span className=" icon ms-auto mb-2">
                                        <span className="fa-solid fa-chevron-down"></span>
                                    </span>
                                </a>
                                {isOpen4 && <div className="collapseible" >

                                    <Link to="/AddAdmin">
                                        <h3>Add Admin</h3>
                                    </Link>
                                    <Link to="/alldoctor">
                                        <h3>All Admin</h3>
                                    </Link>

                                </div>}


                                <a className="link sidebaradmin-link" onClick={() => setIsopen(!isOpen)}>
                                    <i className="fa-solid fa-laptop-medical"></i>

                                    <h3> Reception</h3>
                                    <span className=" icon ms-auto mb-2">
                                        <span className="fa-solid fa-chevron-down"></span>
                                    </span>
                                </a>
                                {isOpen && <div className="collapseible" >

                                    <Link to="/addreception">
                                        <h3>Add Reception </h3>
                                    </Link>
                                    <Link to="/allreception">
                                        <h3>All Reception</h3>
                                    </Link>

                                </div>}

                                <a className="link sidenav-link" onClick={() => setIsopen1(!isOpen1)}>
                                    <i className="fa-solid fa-wheelchair"></i>

                                    <h3> Patients</h3>
                                    <div className="icon  ms-auto mb-2">
                                        <span className="fa-solid fa-chevron-down" ></span>
                                    </div>
                                </a>
                                {isOpen1 && <div className="collapseible" >

                                    <Link to="/addpatient">
                                        <h3>Add Patient</h3>
                                    </Link>
                                    <Link to="/allpatient">
                                        <h3>All Patients</h3>
                                    </Link>
                                    {/* <i class="fas fa-angle-down rotate-icon" style="transform: rotate(180deg);"></i> */}


                                </div>}

                                <a className="link sidebaradmin-link" onClick={() => setIsopen2(!isOpen2)}>
                                    <i className="fa-solid fa-hospital-user"></i>

                                    <h3>Appionment</h3>
                                    <span className=" icon ms-auto mb-2">
                                        <span className="fa-solid fa-chevron-down"></span>
                                    </span>
                                </a>
                                {isOpen2 && <div className="collapseible" >

                                    <Link to="/addappiontment">
                                        <h3>Add Appioment</h3>
                                    </Link>
                                    <Link to="/allappiontment">
                                        <h3>All Appioment</h3>
                                    </Link>

                                </div>}

                                <a className="link sidebaradmin-link" onClick={() => setIsopen3(!isOpen3)}>
                                    <i className="fa-solid fa-user-doctor"></i>
                                    <h3> Doctor</h3>
                                    <span className=" icon ms-auto mb-2">
                                        <span className="fa-solid fa-chevron-down"></span>
                                    </span>
                                </a>
                                {isOpen3 && <div className="collapseible" >

                                    <Link to="/adddoctor">
                                        <h3>Add Doctor</h3>
                                    </Link>
                                    <Link to="/alldoctor">
                                        <h3>All Doctors</h3>
                                    </Link>

                                </div>}

                                <a className="link sidebaradmin-link" onClick={() => setIsopen5(!isOpen5)}>
                                    <i className="fa-solid fa-indian-rupee-sign"></i>
                                    <h3> Payments</h3>
                                    <div className=" icon ms-auto mb-2">
                                        <span className="fa-solid fa-chevron-down"></span>
                                    </div>
                                </a>
                                {isOpen5 && <div className="collapseible" >

                                    <Link to="#">
                                        <h3>Add Payments</h3>
                                    </Link>
                                    <Link to="#">
                                        <h3>All Payments</h3>
                                    </Link>
                                    <Link to="#">
                                        <h3>Payment Invoice</h3>
                                    </Link>
                                </div>}


                                <Link to="/Myprofile">
                                    <i className="fa-solid fa-eye"></i>
                                    <h3>My Profile</h3>
                                </Link>


                                <Link to="/AdminChangepassword">
                                    <i className="fa-solid fa-passport"></i>
                                    <h3>Change Password</h3>
                                </Link>

                                <Link to="/index" >
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


    );

}
export default Adminnav;



