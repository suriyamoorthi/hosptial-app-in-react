import { useLocation } from "react-router-dom";
import React, { useState } from "react";
import { DoctorAssginPrecription } from "../../Services/User.service";
import { GetPercriptiondata } from "../../Services/User.service";


import "../css/Doctor/prescriptionfrom.css";
import { formToJSON } from "axios";
import { useEffect } from "react";

const FORM_VALUES = {
    Dabletename: "",
    Af:true,
    Bf:false,
    Morning: false,
    Evening: false,
    Night: false,
    Count:"",
    Email:"",
    Date:""
}



function Prescriptionfrom() {
    const location = useLocation();
    // const [select, setSelectchecked] = useState(FORM_VALUES);
    const [user, setUser] = useState(FORM_VALUES);
    const [error, setError] = useState(FORM_VALUES);


   
    const QueystringprecirptionData = () => {
        
        const searchParams = new URLSearchParams(location.search);
        const data = searchParams.get("data");
        
        if (data) {
            const parsedData = JSON.parse(data);
            console.log("DOCTOR PERCRIPTION", parsedData);
            FORM_VALUES.Email = parsedData.Email;
            FORM_VALUES.Date = parsedData.Date;
            console.log("Emailvalues", FORM_VALUES.Email);
            console.log("Datevalues", FORM_VALUES.Date);
          
             return  parsedData  ;
            
        }
        else{
            console.log("");
        }
    }
    const GetData = async () => {
        const data = QueystringprecirptionData ();
        GetPercriptiondata.Email =data.Email
        GetPercriptiondata.Date =data.Date

        console.log("MEthod GetPercriptiondata",GetPercriptiondata.Email);
        console.log("MEthod123 GetPercriptiondata",GetPercriptiondata.Date);
       

    }

    const Errors = () => {
        const err = { ...error }
        if (user.Dabletename.length == 0) {
            err.message = "Dablete name is require";
            setError(err);
            return false;

        }
        else if ((!user.Morning) && (!user.Evening) && (!user.Night)) {
            err.message = "Atleast select one checkbox";
            setError(err);
            return false;
        } 
        if (user.Count.length == 0) {
            err.message = "Dablete Count is require";
            setError(err);
            return false;

        }
        else {

            err.message = "";
            setError(err);
            return true;
        }
    }

    const handleChange = ({ target: { name, value } }) => {
        setUser({ ...user, [name]: value })

    }


    const handleChangeSelect = ({ target: { name, checked, type, value } }) => {

        if (name == "Morning") {
            
            user.Morning = checked;

        } else if (name == "Evening") {

            user.Evening = checked;
        } else{

            user.Night = checked;
        }

        setUser({ ...user, [name]: checked });
        console.log(user.Morning, user.Evening, user.Night);

        // Errors();

    }



    const handleChangeRadioButton = ({ target: { name, value } }) => {

        console.log(name,value);
        value = value == true ? false:true;
        console.log(name,value);
        if(name == "Af" )
        {
            user.Bf = false;
            user.Af = value;
        }else{
            user.Bf = value;
            user.Af = false;
        }
        
        setUser({ ...user, [name]: value })
    }


    console.log("VALUES", user)


    const handleSubmit =async (evt) => {
        evt.preventDefault();
        // console.log("SUMBIT", select)

        // return Errors();

        let isError = Errors();
        console.log("isError",isError);
        if (isError) {
  
            const { data } = await DoctorAssginPrecription(user);
            console.log( " PostPrecriptionData",data);
            alert(data.Message);
            console.log("adsfsfs")
        }
        else {
        console.log("VALUE123",error.Message);
        }


    }

    useEffect (()=>{
        console.log(" UseEffect QueystringprecirptionData")
        QueystringprecirptionData();
        GetData();
    },[]);

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
                                    name="Dabletename"
                                    value={user.Dabletename}
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
                                            name="Af"
                                            // onBlur={handleBlur}
                                            checked={user.Af}
                                            value={user.Af}
                                            
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
                                            name="Bf"
                                            // onBlur={handleBlur}
                                            checked={user.Bf}
                                            value={user.Bf}
                                            
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
                                            name="Morning"
                                            value={user.Morning}
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
                                            name="Evening"
                                            value={user.Evening}
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
                                            className="form-check-input"
                                            name="Night"
                                            type="checkbox"
                                            value={user.Night}

                                            onChange={handleChangeSelect}
                                        />
                                        <label htmlFor="Night" className="form-check-label" >
                                            Night
                                        </label>
                                    </div>
                                </div>

                                <div className="col-sm-2">
                                    <div className="form-group mb-3">
                                   
                                        <input 
                                        //  className="form-control"
                                        // //  name="Height"
                                        //  placeholder="Enter your Height"
                                            className="form-control"
                                            name="Count"
                                            type="number"
                                            placeholder="Count"
                                            value={user.Count}
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



