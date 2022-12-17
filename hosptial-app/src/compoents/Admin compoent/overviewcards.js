import React from "react";
// import Cours from "../compoents/cours";


import "../css/admin/overviewcards.css";

const Card = [
    {

        title: "Total Patient ",
        number: "3,345",
        icon: "fa-solid fa-wheelchair"


    },

    {
        title: "Total Doctor ",
        number: "3,345",
        icon: "fa-solid fa-person-arrow-down-to-line"

    },
    {
        title: "Total Appionment ",
        number: "3,345",
        icon: "fa-solid fa-person-arrow-up-from-line",
    },
    



]


function Overviewcards() {
    return (
        <div className="overviewcards">
            <div className="container-fluid mt-3 pt-2">
                <div className="row">
                    {Card.map((carduse) => {
                        return (
                            // <div className="col-sm-3">
                            //     <Cours {...cours} />
                     
                            <div className="col-sm-4" >
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
                        );       // </div>

                    })}

                </div>
            </div>
        </div>

    );
}
export default Overviewcards;