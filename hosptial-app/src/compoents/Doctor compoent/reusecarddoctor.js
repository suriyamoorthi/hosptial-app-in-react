import React from "react";
// import Cours from "../compoents/cours";


import "../css/Doctor/reusecarddoctor.css";

const Cours = [
    {

        title: "Total Male patient",
        number: "3,345",
        icon: "fa-solid fa-wheelchair"


    },

    {
        title: "Total Female Patient",
        number: "3,345",
        icon: "fa-solid fa-person-arrow-down-to-line"

    },
    {
        title: "Total Appionment For day",
        number: "3,345",
        icon: "fa-solid fa-address-card"
    },
   



]


function Reusecarddoctor() {
    return (
        <main>
            <div className=" reusecarddoctor">
                <div className="container-fluid " style={{  marginTop: "80px" }}>
                    <div className="row">
                        {Cours.map((carduse) => {
                            return (

                                <div className="col-md-4" >
                                    <div className="card h-100 mb-3">
                                        <div className="card-body">
                                            <div className="row ">
                                                <div className="col-sm-4 ">
                                                    <div className="icon">
                                                        <i className={carduse.icon}></i>

                                                    </div>
                                                </div>
                                                <div className="col-sm-8  ">
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
        </main>

    );
}
export default Reusecarddoctor;