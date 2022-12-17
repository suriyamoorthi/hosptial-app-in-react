
import React, { useState } from "react";


import "../css/Doctor/prescriptionfrom.css";

const FORM_VALUES = {
    dabletename: "",
    dablete: "Afterfood",
    morning: false,
    evening: false,
    night: false
}



function Prescriptionfrom() {

    // const [select, setSelectchecked] = useState(FORM_VALUES);
    const [user, setUser] = useState(FORM_VALUES);
    const [error, setError] = useState(FORM_VALUES);



    const Errors = () => {
        const err = { ...error }
        if (user.dabletename.length <= 0) {
            err.message = "Dablete name is require";
            setError(err);
            return false;

        }
        else if ((!user.morning) && (!user.evening) && (!user.night)) {
            err.message = "Atleast select one checkbox";
            setError(err);
            return false;
        } else {

            err.message = "";
            setError(err);
            return true;
        }
    }

    const handleChange = ({ target: { name, value } }) => {
        setUser({ ...user, [name]: value })

    }


    const handleChangeSelect = ({ target: { name, checked, type, value } }) => {

        if (name == "morning") {
            user.morning = checked;

        } else if (name == "evening") {

            user.evening = checked;
        } else {

            user.night = checked;
        }

        setUser({ ...user, [name]: checked });
        console.log(user.morning, user.evening, user.night);

        // Errors();

    }



    const handleChangeRadioButton = ({ target: { name, value } }) => {

        setUser({ ...user, [name]: value })
    }


    console.log("VALUES", user)


    const handleSubmit = (evt) => {
        evt.preventDefault();
        // console.log("SUMBIT", select)

        // return Errors();

        let isError = Errors();
        if (isError) {
            console.log("adsfsfs")
        }
        console.log("VALUE123", user)


    }


    return (

        <main className="prescriptionfrom">

            <div className="container-fluid">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title"> Prescription</h5>
                        <hr />

                        <form onSubmit={handleSubmit}>
                            <form className="d-flex" role="search">
                                <input className="form-control me-2 "
                                    type="serch"
                                    name="dabletename"
                                    value={user.dabletename}
                                    placeholder="Search"
                                    onChange={handleChange}

                                />
                                {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
                            </form>

                            <div className="row mt-3 pt-3 mb-3">

                                <label htmlFor="Dablete" className="form-label">
                                    {/* <span className="text-primary">*</span> */}
                                </label>

                                <div className="col-sm-2 ">
                                    <div className="form-group">

                                        <input className="form-check-input"
                                            type="radio"
                                            name="dablete"
                                            // onBlur={handleBlur}
                                            checked={user.dablete === 'Afterfood'}
                                            value="Afterfood"
                                            onChange={handleChangeRadioButton}
                                        />
                                        <label className="form-check-label ms-2" htmlFor="Afterfood">
                                            After Food
                                        </label>

                                    </div>
                                </div>
                                <div className="col-sm-2 ">
                                    <div className="form-group">

                                        <input className="form-check-input"
                                            type="radio"
                                            name="dablete"
                                            // onBlur={handleBlur}
                                            checked={user.dablete === 'Beforefood'}
                                            value="Beforefood"
                                            onChange={handleChangeRadioButton}
                                        />
                                        <label className="form-check-label ms-2" htmlFor="Beforefood">
                                            Before Food
                                        </label>

                                    </div>
                                </div>
                                <div className="col-sm-2 ">
                                    <div className="form-check  ">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            name="morning"
                                            onChange={handleChangeSelect}
                                        />
                                        <span className="text-danger">{error.terms}</span>
                                        <label htmlFor="terms" className="form-check-label" >
                                            Morning
                                        </label>
                                    </div>

                                </div>


                                <div className="col-sm-2 ">

                                    <div className="form-check ">
                                        <input
                                            class="form-check-input"
                                            type="checkbox"
                                            name="evening"
                                            onChange={handleChangeSelect}
                                        />
                                        <label htmlFor="evening" className="form-check-label" >
                                            Evening
                                        </label>
                                    </div>

                                </div>
                                <div className="col-sm-2 ">
                                    <div className="form-check ">
                                        <input
                                            class="form-check-input"
                                            name="night"

                                            type="checkbox"

                                            onChange={handleChangeSelect}
                                        />
                                        <label htmlFor="night" className="form-check-label" >
                                            Night
                                        </label>
                                    </div>
                                </div>

                                <div className="col-sm-2">
                                    <div className="form-group mb-3">

                                        <input
                                            className="form-control"
                                            name="count"

                                            placeholder="Count"
                                            value={user.count}
                                            onChange={handleChange}

                                        />
                                    </div>
                                </div>



                                <label className="text-danger">{error.message}</label>



                            </div>
                            <div className="form-group">
                                <div className="buttons">

                                    <button type="submit" className="btn btn-primary" >ADD</button>
                                </div>
                            </div>

                        </form>


                    </div>
                </div>
            </div>

        </main >

    )

}

export default Prescriptionfrom;
















//     const handleChange = ({ target: { name,checked , value } }) => {

    // if(checked){
    //             setSelectchecked([ ...select, value ])
    //         console.log(value ,checked);
    // }
    // else{
    //     setSelectchecked(select.filter((e) => e !== value))
    // }
    // }



