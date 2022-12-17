import React from "react";



import "../css/Doctor/Allpatientusecard.css";
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

function Allpatientcard() {
    return (
        <main className="allpatientcard">
            <div className="container-fluid" style={{  marginTop: "80px" }}>
                <div className="row">
                    {Cours.map((card) => {
                        return (
                            <div className="col-sm-4 h-100 mb-3">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-sm-4">
                                                <div className="icon">
                                                    <i className={card.icon} ></i>

                                                </div>
                                            </div>
                                            <div className="col-sm-8">
                                                <div className="patients">
                                                    <p>{card.number}</p>
                                                    <h5>{card.title}</h5>
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


        </main >

    )
}

export default Allpatientcard;

