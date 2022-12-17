


  

import React from "react";
import{ HashLink as Link} from "react-router-hash-link";



function navigation() {
    return (

        <nav id="navbar-example2" class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container-fluid">
            <Link className="navbar-brand" href ="#">
                <img src="/image/logo.png " style={{height:"40px"}} />
            </Link>
            <button className="navbar-toggler " type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
           
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
           
                <ul className="nav nav-pills ms-auto mb-2 mb-lg-0">
               
                    <li className="nav-item">
                        <Link  className="nav-link" smooth to="/#home">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link  className="nav-link" smooth to="/#about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" smooth to="/#appionment">Appointment</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" smooth to="/#service">Service</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link me-2" smooth to="/#contact">Contact</Link>
                    </li>

                    <li className="nav-item">
                        <Link type="button" className=" btn btn-primary" smooth to="/login">Login</Link>

                    </li>
                    
                </ul>
              
            </div>
           
            
        </div>
    </nav>
       
      
       
    );
}

export default navigation;