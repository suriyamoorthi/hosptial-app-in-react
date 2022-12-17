import { HashLink as Link } from "react-router-hash-link";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Balls from './sampleprogram/collapseexmaple';

import "../compoents/css/sidenav.css";


function Sidenav() {
  


  return (



    <div className="sidenav">
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container-fluid">


          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample">
            <span className="navbar-toggler-icon"></span>
          </button>


          <a className="navbar-brand" href="#"> <img src="/image/logo.png " style={{ height: "40px" }} /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">

          </div>
        </div>
      </nav>



      <div className="offcanvas offcanvas-start sidenav" tabIndex="-1" id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel">

        <div className="offcanvas-body">
          <nav>


            <div className="sidebar">

              {/* <div className="collapsible">
                <div className="link sidebaradmin-link1" data-bs-toggle="collapse" to="#collapseExample1"
                  role="button" aria-expanded="false" aria-controls="collapseExample2" onClick={() => setIsopen(!isOpen)}>
                  <i className="fa-solid fa-laptop-medical"></i>

                  <h3> Reception</h3>
                  <span className="icon  ms-auto mb-2">
                    <span className="fa-solid fa-chevron-down"></span>
                  </span>
                </div>
                {isOpen && <div className="content" id="collapseExample1" >

                  <h3>Add Reception </h3>


                  <h3>All Reception</h3>

                </div>}

                <div className="link sidebaradmin-link1" data-bs-toggle="collapse" to="#collapseExample2"
                  role="button" aria-expanded="false" aria-controls="collapseExample2" onClick={() => setIsopen(!isOpen)}>
                  <i className="fa-solid fa-laptop-medical"></i>

                  <h3> Reception</h3>
                  <span className="icon  ms-auto mb-2">
                    <span className="fa-solid fa-chevron-down"></span>
                  </span>
                </div>
                {isOpen && <div className="content" id="collapseExample2" >

                  <h3>Add Reception </h3>


                  <h3>All Reception</h3>

                </div>}
              </div> */}


              {/* <div className="collapsible">

                <div className="toggle" onClick={() => setIsopen(!isOpen)}>
                 {props.label}
                </div>
                {isOpen && <div className="content">
                  {props.children}
                 
                </div>}
                <div className="toggle1" onClick={() => setIsopen(!isOpen)}>
                name
                </div>
                {isOpen && <div className="content1">
                  
                  <h3>Add Reception </h3>
               
                  
                    <h3>All Reception</h3>
                </div>}
              </div> */}





              <a href="overview.html" className="active">
                <i className="fa-solid fa-hospital"></i>
                <h3>Overview</h3>
              </a>

              <a href="patients.html">
                <i className="fa-solid fa-wheelchair"></i>
                <h3>Patient</h3>
              </a>
              <a href="appoinmentpage.html">
                <i className="fa-solid fa-hospital-user" ></i>
                <h3> Appointment</h3>
              </a>
             
              <a href="myprofile.html">
                <i className="fa-solid fa-eye"></i>
                <h3>My Profile</h3>
              </a>
              <a href="changepassword.html">
                <i className="fa-solid fa-passport"></i>
                <h3>Change password</h3>
              </a>


              <a href="index.html" >

                <i className="fa-solid fa-right-from-bracket"></i>
                <h3>Logout</h3>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </div>

  );
}


export default Sidenav;