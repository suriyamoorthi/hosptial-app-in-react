import React, { useState, useEffect } from "react";
import Sidenavreception from "../../containers/Recpetion module/Sidenavreception";
import { assgnDoctor } from "../../Services/User.service";

import "../css/Reception/Assigndoctor.css";


const department = [

    // department:[
    {
        label: "Ortho",
        value: "ortho",
    },
    {
        label: "Neuro",
        value: "neuro",
    },
    {
        label: "General",
        value: "general",
    },

]


const FORMS_VALUES = {

    department: "",
    Doctorfirstname: "",
    Temperature: "",
    Bp: "",
    Weight: "",
    Height: "",
    Fitrstname: "",
    Lastname: "",
    Email: "",
    password: "",
    Gender: "Male",
    Phonenumber: "",
    Date: "",
    File: "",
    City: "",
    Pincode: "",
}


const MALIL_FORMAT = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');

function Assigndoctor() {

    const [user, setUser] = useState(FORMS_VALUES);
    const [error, setError] = useState(FORMS_VALUES)
    const [touched, setTouched] = useState(FORMS_VALUES);
    const [radiobuttonselected, setRadiobuttonSelected] = useState("Male");
    const [selectdepartment, setSelect] = useState(department);
    const [selectdepartment12, setSelect12] = useState([]);

    const GetAssginDoctorData = async () => {

        const { data } = await assgnDoctor();
        setSelect12(data);
        // const fname=`${data.Doctorfirstname}${data.Doctorlastname}`
        

        console.log("ASSGIN DOCTOR REACT", data);
        const fname=data[0].Doctorfirstname;
        console.log("FAMANE + LANME",fname);
    }


    const Validation = () => {

        if (user.department.length <= 0) {

            return false;
        }
        else if (user.Doctorfitrstname.length <= 0) {
            return false;
        }
        else if (user.Temperature.length <= 0) {
            return false;
        }
        else if (user.Bp.length <= 0) {
            return false;
        }
        else if (user.Weight.length <= 0) {
            return false;
        }
        else if (user.Height.length <= 0) {
            return false;
        }
        else if (user.Fitrstname.length <= 0) {
            return false;
        }
        else if (user.Lastname.length <= 0) {
            return false;
        }
        else if (user.Email.length <= 0) {
            return false;
        }
        else if (user.password.length <= 0) {
            return false;
        }
        else if (user.Gender.length <= 0) {
            return false;

        }
        else if (user.Phonenumber.length <= 0) {
            return false;
        }
        else if (user.Date.length <= 0) {
            return false;
        }
        else if (user.File.length <= 0) {
            return false;
        }
        else if (user.City.length <= 0) {
            return false;
        }
        else if (user.Pincode.length <= 0) {
            return false;
        }
        else {
            console.log("Error");
            return true;
        }

        // here we are passing `details` to two properties 
        // in this way reusing the computed v
    }




    const handleBlur = ({ target: { name } }) => {

        setTouched({ ...touched, [name]: true })
    };

    const handleChangeSelect = ({ target: { name, value } }) => {

        setSelect({ ...selectdepartment, [name]: value })
        setUser({ ...user, [name]: value })

    };

    const handleChangeRadioButton = ({ target: { name, value } }) => {
        setRadiobuttonSelected({ ...radiobuttonselected, [name]: value })
        setUser({ ...user, [name]: value })

    };

    const handleChange = ({ target: { name, value } }) => {
        const err = { ...error }

        switch (name) {

            case "DoctorFitrstname": {
                if (!value) {
                    err.Doctorfirstname = " Doctor Name Should be require"
                }
                else {
                    err.Doctorfirstname = ""
                }
                break;

            }
            case "Temperature": {
                if (!value) {
                    err.Temperature = " Temperature Should be require"
                }
                else {
                    err.Temperature= "";
                }
                break;

            }
            case "Bp": {
                if (!value) {
                    err.Bp = "BP should be require";
                }
                else {
                    err.Bp = "";
                }
                break;
            }
            case "Weight": {
                if (!value) {
                    err.Weight = "Weight should be require";
                }
                else {
                    err.Weight = ""
                }
                break;
            }

            case "Height": {
                if (!value) {
                    err.Height = "Height should be require";
                }
                else {
                    err.Height = "";
                }
                break;
            }


            case "Fitrstname": {
                if (!value) {
                    err.Fitrstname = "First Name should be require";
                }
                else {
                    err.Fitrstname = "";
                }
                break;
            }
            case "Lastname": {
                if (!value) {
                    err.Lastname = "Last Name should be require";
                }
                else {
                    err.Lastname = "";
                }
                break;
            }
            case "Email": {
                if (!value) {
                    err.Email = "Email is requrie";
                }

                else if (!MALIL_FORMAT.test(value)) {
                    err.Email = "Email is invalid"
                }
                else {
                    err.Email = "";
                }
                break;
            }
            case "password": {
                if (!value) {
                    err.password = "Password  is requried";
                }
                else if (value.length < 6) {
                    err.password = "Password Should be minmum 6 characters must";

                }
                else {
                    err.password = "";
                }
                break;
            }
            case "Phonenumber": {
                if (!value) {
                    err.Phonenumber = "Phonenumer should be required";
                }
                else if (value.length < 10) {
                    err.Phonenumber = "Ponenumber Should be minmum 10 characters must"
                }
                else {
                    err.Phonenumber = "";
                }
                break;
            }

            case "Date": {
                if (!value) {
                    err.Date = "Date should be require"
                }
                else {
                    err.Date = "";
                }
                break;
            }

            case "File": {
                if (!value) {
                    err.File = "File should be require";
                }
                else {
                    err.File = "";
                }
                break;
            }

            case "City": {
                if (!value) {
                    err.City = "City should be require";
                }
                else {
                    err.City = ""
                }
                break;
            }

            case "Pincode": {
                if (!value) {
                    err.Pincode = "Pincode is require";
                }
                else if (value.length < 6) {
                    err.Pincode = "Pincode Should be minmum 6 characters must"
                }
                else {
                    err.Pincode = "";
                }
            }
                break;
        }

        setError(err);
        setUser({ ...user, [name]: value });
        console.log("Error", error);
        console.log("VALUES", user);
        // console.log("ERROR12",Validation);
    }



    const handleSubmit = () => {

        const isTouched = Object.values(touched).every(t => t === true);

        let isValidation = Validation();

        if (isTouched && isValidation) {
            console.log("ASSIGN DOCTOR");
        }

    }

    useEffect(() => {
        console.log("useEffect")
        GetAssginDoctorData();

    }, []);
    return (

        <>
            <Sidenavreception />
            <main className="assigndoctor">
                <div className="container-fluid mt-5 mb-5">
                    <div className="row">
                        <div className="col-sm-1"></div>
                        <div className="col-sm-10">
                            <div className="card">
                                <div className="card-body">

                                    <h5 className="card-title"> Assigndoctor</h5>
                                    <form onSubmit={handleSubmit}>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="from-group mb-3 ">
                                                    <h6 className="card-title">Photo</h6>
                                                    <img src="" className="img-thumbnail" alt="" />
                                                </div>
                                            </div>

                                            {/* <div className="col-sm-6">
                                                <div className="from-group mb-3">
                                                    <label htmlFor="department" className="form-label">Doctor Department
                                                        <span className="text-primary">*</span>
                                                    </label>
                                                    <select
                                                        name="department"
                                                        className="form-select"
                                                        value={selectdepartment.department}
                                                        onChange={handleChangeSelect}
                                                        onBlur={handleBlur}
                                                    >
                                                        <option value=" Select a fruit "> -- Select a Department -- </option>
                                                        {department.map((option) => (
                                                            <option value={option.value}>{option.label}</option>
                                                        ))}
                                                    </select>
                                                     <span className="text-danger">{error.department}</span> 
                                                </div>
                                                </div> */}
                                                <div className="col-sm-6">
                                                    <div className="from-group mb-3">
                                                        <label htmlFor="Doctorfirstname" className="form-label">Doctor Name
                                                            <span className="text-primary">*</span>
                                                        </label>
                                                        <select
                                                            name="Doctorfirstname"
                                                            className="form-select"
                                                            value={user.Doctorfirstname}
                                                            onChange={handleChangeSelect}
                                                            onBlur={handleBlur}
                                                        >
                                                            <option  value=" Select a fruit "> -- Choose the Doctor -- </option>
                                                            {selectdepartment12.map((option) => (
                                                                <option value={`${option.Doctorlastname}${option.Doctorfirstname}`}>{option.Doctorfirstname}</option>
                                                            ))}
                                                        </select>
                                                        <span className="text-danger">{error.Doctorfirstname}</span>
                                                    </div>

                                                    {/* <div className="form-group mb-3">
                                                <label htmlFor="Doctorfirstname" className="form-label">Doctor Name
                                                    <span className="text-primary">*</span> </label>
                                                <input
                                                    className="form-control"
                                                    name="Doctorfirstname"
                                                    value={user.Doctorfirstname}
                                                    placeholder="Enter Your Doctor Name"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                />
                                                 <option value=" Select a fruit "> -- Choose the Doctor -- </option>
                                                    {selectdepartment.map((option) => (
                                                        <option value={option.Doctorfirstname}>{option.label}</option>
                                                    ))}
                                                
                                                <span className="text-danger">{error.Doctorfirstname}</span>

                                            </div> */}
                                               
                                            </div>
                                        </div>

                                        <hr />
                                        <h5 className="card-title"> Patient Vatils</h5>
                                        <hr />
                                        <div className="row">

                                            <div className="col-sm-6">
                                                <div className="form-group mb-3">
                                                    <label htmlFor="Temperature" className="form-label">Temperature
                                                        <span className="text-primary">*</span> </label>
                                                    <input
                                                        className="form-control"
                                                        name="Temperature"
                                                        type="number"
                                                        placeholder="Enter Your Temperature"
                                                        value={user.Temp}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                    />
                                                    <span className="text-danger">{error.Temperature}</span>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group mb-3">
                                                    <label htmlFor="Bp" className="form-label">BP
                                                        <span className="text-primary">*</span> </label>
                                                    <input
                                                        className="form-control"
                                                        name="Bp"
                                                        type="number"
                                                        placeholder="Enter Your BP"
                                                        value={user.Bp}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                    />
                                                    <span className="text-danger">{error.Bp}</span>
                                                </div>
                                            </div>


                                        </div>

                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="form-group mb-3">
                                                    <label htmlFor="Weight" className="form-label">Weight
                                                        <span className="text-primary">*</span> </label>
                                                    <input
                                                        className="form-control"
                                                        name="Weight"
                                                        type="number"
                                                        placeholder="Enter Your Weight"
                                                        value={user.Weight}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                    />
                                                    <span className="text-danger">{error.Weight}</span>
                                                </div>
                                            </div>

                                            <div className="col-sm-6">
                                                <div className="form-group mb-3">
                                                    <label htmlFor="Height" className="form-label">Height
                                                        <span className="text-primary">*</span> </label>
                                                    <input
                                                        className="form-control"
                                                        name="Height"
                                                        type="number"
                                                        placeholder="Enter Your Height"
                                                        value={user.Height}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                    />
                                                    <span className="text-danger">{error.Height}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <hr />


                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="form-group mb-3">
                                                    <label htmlFor="Fitrstname" className="form-label">First Name
                                                        <span className="text-primary">*</span> </label>
                                                    <input
                                                        className="form-control"
                                                        name="Fitrstname"
                                                        placeholder="Enter Your First Name"
                                                        value={user.Fitrstname}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                    />
                                                    <span className="text-danger">{error.Fitrstname}</span>
                                                </div>
                                            </div>

                                            <div className="col-sm-6">
                                                <div className="form-group mb-3">
                                                    <label htmlFor="Lastname" className="form-label">Last Name
                                                        <span className="text-primary">*</span> </label>
                                                    <input
                                                        className="form-control"
                                                        name="Lastname"
                                                        placeholder="Enter Your Last Name"
                                                        value={user.Lastname}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                    />
                                                    <span className="text-danger">{error.Lastname}</span>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="form-group mb-3">
                                                    <label htmlFor="Email" className="form-label">Email
                                                        <span className="text-primary">*</span> </label>
                                                    <input
                                                        className="form-control"
                                                        name="Email"
                                                        type="email"
                                                        placeholder="Enter Your Email"
                                                        value={user.Email}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                    />
                                                    <span className="text-danger">{error.Email}</span>
                                                </div>
                                            </div>

                                            {/* <div className="col-sm-6">
                                            <div className="form-group mb-3">
                                                <label htmlFor="password" className="form-label">Password
                                                    <span className="text-primary">*</span> </label>
                                                <input
                                                    className="form-control"
                                                    name="password"
                                                    type="password"
                                                    placeholder="Enter Your Password"
                                                    value={user.password}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                />
                                                <span className="text-danger">{error.password}</span>
                                            </div>
                                        </div> */}
                                        </div>

                                        <div className="row">
                                            <label htmlFor="Gender" className="form-label">Gender
                                                <span className="text-primary">*</span> </label>
                                            <div className="col-sm-6">
                                                <div className="form-group mb-3">

                                                    <input
                                                        className="form-check-input"
                                                        name="Gender"
                                                        type="radio"
                                                        checked={user.Gender === 'Male'}
                                                        value="Male"
                                                        onChange={handleChangeRadioButton}
                                                        onBlur={handleBlur}
                                                    />
                                                    <label htmlFor="Male" className="form-check-label ms-2">Male
                                                    </label>
                                                </div>
                                            </div>

                                            <div className="col-sm-6">
                                                <div className="form-group mb-3">
                                                    <input
                                                        className="form-check-input"
                                                        name="Gender"
                                                        type="radio"
                                                        checked={user.Gender === 'Female'}
                                                        value="Female"
                                                        onChange={handleChangeRadioButton}
                                                        onBlur={handleBlur}

                                                    />
                                                    <label className="form-check-label ms-2" htmlFor="female">Female</label>

                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="form-group mb-3">
                                                    <label htmlFor="Phonenumber" className="form-label">Phonenumber
                                                        <span className="text-primary">*</span> </label>
                                                    <input
                                                        className="form-control"
                                                        name="Phonenumber"
                                                        type="number"
                                                        placeholder="Enter Your Phonenumber"
                                                        value={user.Phonenumber}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                    />
                                                    <span className="text-danger">{error.Phonenumber}</span>
                                                </div>
                                            </div>

                                            <div className="col-sm-6">
                                                <div className="form-group mb-3">
                                                    <label htmlFor="Date" className="form-label">Date
                                                        <span className="text-primary">*</span> </label>
                                                    <input
                                                        className="form-control"
                                                        name="Date"
                                                        type="Date"
                                                        placeholder="Enter Your Date"
                                                        value={user.Date}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                    />
                                                    <span className="text-danger">{error.Date}</span>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="row">
                                            <div className="col-sm-12">
                                                <div className="form-group mb-3">
                                                    <label htmlFor="File" className="form-label"> File
                                                        <span className="text-primary">*</span>
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        name="File"
                                                        type="file"
                                                        value={user.File}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}

                                                    />
                                                    <span className="text-danger">{error.File}</span>
                                                </div>
                                            </div>
                                        </div>



                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="form-group mb-3">
                                                    <label htmlFor="City" className="form-label">City
                                                        <span className="text-primary">*</span> </label>
                                                    <input
                                                        className="form-control"
                                                        name="City"

                                                        placeholder="Enter Your City"
                                                        value={user.City}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                    />
                                                    <span className="text-danger">{error.City}</span>
                                                </div>
                                            </div>

                                            <div className="col-sm-6">
                                                <div className="form-group mb-3">
                                                    <label htmlFor="Pincode" className="form-label">Pincode
                                                        <span className="text-primary">*</span> </label>
                                                    <input
                                                        className="form-control"
                                                        name="Pincode"
                                                        type="number"
                                                        placeholder="Enter Your Pincode"
                                                        value={user.Pincode}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                    />
                                                    <span className="text-danger">{error.Pincode}</span>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="form-group mb-3 " >
                                                <div className="group">
                                                    <button type="submit" className="btn btn-primary"
                                                    >Submit</button>
                                                </div>
                                            </div>

                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-1"></div>
                    </div>

                </div>
            </main>
        </>
    )
}

export default Assigndoctor;