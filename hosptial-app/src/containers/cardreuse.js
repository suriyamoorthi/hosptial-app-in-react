import React from "react";
import Cours from "../compoents/cours";
import Sidenavreception from "./Recpetion module/Sidenavreception";


import "../compoents/css/admin.css";

// const cards = [
//     {

//         title: "Total Patient For day",
//         number: "3,345",
//         icon: "fa-solid fa-wheelchair"


//     },

//     {
//         title: "Total Inpatient For day",
//         number: "3,345",
//         icon: "fa-solid fa-person-arrow-down-to-line"

//     },
//     {
//         title: "Total Outpatient For day",
//         number: "3,345",
//         icon: "fa-solid fa-person-arrow-up-from-line",
//     },
//     {
//         title: "Total Appionment For day",
//         number: "3,345",
//         icon: "fa-solid fa-address-card",
//     },



// ]


function carduse() {
    return (
        <div className="aoverview">
            <div className="container-fluid mt-3 pt-2">
                <div className="row">
                    {Cours.map((carduse) => {
                        return (
                          
                            <div className="col-md-3" >
                                <div className="card h-100 mb-3">
                                    <div className="card-body">
                                        <div className="row ">
                                            <div className="col-sm-5 ">
                                                <div className="icon">
                                                    <i className={carduse.icon}></i>

                                                </div>
                                            </div>
                                            <div className="col-sm-7  ">
                                                <div className="patients">
                                                    <p>{carduse.number}</p>
                                                    <h5>{carduse.title}</h5>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        );
                    })}

                </div>
            </div>
        </div>

    );
}
export default carduse;