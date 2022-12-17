import React from "react";

import "../css/Reception/receptionpatientcard.css"


const Card = [
    {

        title: "Total Inpatient For day",
        number: "3,345",
        icon: "fa-solid fa-wheelchair"


    },

    {
        title: "Total Outpatient For day",
        number: "3,345",
        icon: "fa-solid fa-person-arrow-down-to-line"

    },
    {
        title: "THIS CARD IS CAHART USE",
        number: "3,345",
        icon: "fa-solid fa-person-arrow-up-from-line",
    },

]


function Receptionparientcard() {
    return (

        <main className=" receptionparientcard">
            <div className="container-fluid"style={{ marginTop: "80px"}}>
                <div className="row">
                    {Card.map((user) => {
                        return (
                            <div className="col-sm-4">
                                <div className="card h-100 mb-3">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-sm-5">
                                                <div className="icon">
                                                    <i className={user.icon}></i>
                                                </div>
                                            </div>

                                            <div className="col-sm-7">
                                                <div className="patients">
                                                    <p>{user.number}</p>
                                                    <h5>{user.title}</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        )


                    }
                    )}
                </div>
            </div>

        </main>

    )
}

export default Receptionparientcard;