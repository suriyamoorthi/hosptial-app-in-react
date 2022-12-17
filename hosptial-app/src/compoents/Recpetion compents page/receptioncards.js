import react from "react";


import "../css/Reception/receptioncard.css";
const Cards = [

    {

        title: "Total Patient For day",
        number: "3,345",
        icon: "fa-solid fa-wheelchair"


    },

    {
        title: "Total Inpatient For day",
        number: "3,345",
        icon: "fa-solid fa-person-arrow-down-to-line"

    },
    {
        title: "Total Outpatient For day",
        number: "3,345",
        icon: "fa-solid fa-person-arrow-up-from-line",
    },
    {
        title: "Total Appionment For day",
        number: "3,345",
        icon: "fa-solid fa-address-card",
    },
]




function Receptioncards() {
    return (
        <main className="receptioncards">
            <div className="container-fluid" style={{ marginTop: "80px"}}>
                <div className="row">
                    {Cards.map((carduse) => {
                        return (

                            <div className="col-sm-3">
                                <div className="card h-100 mb-3">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-sm-4">
                                                <div className="icon">
                                                    <i className={carduse.icon}></i>
                                                </div>
                                            </div>
                                            <div className="col-sm-8">
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

        </main>

    )
}

export default Receptioncards;