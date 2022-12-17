import React from "react";
import Navigation from "../compoents/navigation";
import Home from "../compoents/home";
import About from "../compoents/about";
import Appionment from "../compoents/appionment";
import Service from "../compoents/service";
import Contact from "../compoents/contact";



function index(){
    return(
        <>
        <Navigation/>
        <Home/>
        <About/>
        <Appionment/>
        <Service/>
        <Contact/>
       
        
        </>

    );
}

export default index;