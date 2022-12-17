




// import React, { useState } from "react";
// import { HashLink as Link } from "react-router-hash-link";
// import Scrollspy from 'react-scrollspy';
import React, { Component } from "react";
import ScrollspyNav from "react-scrollspy";


function nav1(){
    return (

        <nav id="navbar-example2" class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src="/image/logo.png " style={{ height: "40px" }} />
                </a>
                <button className="navbar-toggler " type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className="nav nav-pills ms-auto mb-2 mb-lg-0">
                    </ul>
                   
                        <ScrollspyNav
                            scrollTargetIds={["section_1", "section_2", "section_3"]}
                            offset={100}
                            activeNavClass="is-active"
                            scrollDuration="1000"
                            headerBackground="true"
                        >
                            <ul>
                                <li><a href="/#home">Home</a></li>
                                <li><a href="#about">about</a></li>
                                <li><a href="#appionment">appionment</a></li>
                                <li><a href="#service">service</a></li>
                                <li><a href="#contact">contact</a></li>
                            </ul>
                        </ScrollspyNav>
                    </div>


                </div>
        </nav>



    );
}

export default nav1;