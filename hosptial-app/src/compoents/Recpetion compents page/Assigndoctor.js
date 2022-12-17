import React, { useState } from "react";
import Sidenavreception from "../../containers/Recpetion module/Sidenavreception";

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
    doctorname: "",
    temp: "",
    bp:"",
    weight: "",
    height: "",
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    gender: "Male",
    phonenumber: "",
    date: "",
    file: "",
    city: "",
    pincode: "",
}

const MALIL_FORMAT = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');

function Assigndoctor() {

    const [user, setUser] = useState(FORMS_VALUES);
    const [error, setError] = useState(FORMS_VALUES)
    const [touched, setTouched] = useState(FORMS_VALUES);
    const [radiobuttonselected, setRadiobuttonSelected] = useState("Male");
    const [selectdepartment, setSelect] = useState(department);

    const Validation = () => {

        if (user.department.length <=0) {

            return false;
        }
        else if (user.doctorname.length <=0) {
            return false;
        }
        else if (user.temp.length <=0) {
            return false;
        }
        else if (user.bp.length <=0) {
            return false;
        }
        else if (user.weight.length <=0) {
            return false;
        }
        else if (user.height.length <=0) {
            return false;
        }
        else if (user.firstname.length <=0) {
            return false;
        }
        else if (user.lastname.length <=0) {
            return false;
        }
        else if (user.email.length <=0) {
            return false;
        }
        else if (user.password.length <=0) {
            return false;
        }
        else if (user.gender.length <=0) {
            return false;

        }
        else if (user.phonenumber.length <=0) {
            return false;
        }
        else if (user.date.length <=0) {
            return false;
        }
        else if (user.file.length <= 0) {
            return false;
        }
        else if (user.city.length <=0) {
            return false;
        }
        else if (user.pincode.length <=0) {
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

            case "doctorname": {
                if (!value) {
                    err.doctorname = " Doctor Name Should be require"
                }
                else {
                    err.doctorname = ""
                }
                break;

            }
            case "temp": {
                if (!value) {
                    err.temp = " temperature Should be require"
                }
                else {
                    err.temp = "";
                }
                break;

            }
            case "bp": {
                if (!value) {
                    err.bp = "BP should be require";
                }
                else {
                    err.bp = "";
                }
                break;
            }
            case "weight": {
                if (!value) {
                    err.weight = "Weight should be require";
                }
                else {
                    err.weight = ""
                }
                break;
            }

            case "height": {
                if (!value) {
                    err.height = "Height should be require";
                }
                else {
                    err.height = "";
                }
                break;
            }


            case "firstname": {
                if (!value) {
                    err.firstname = "First Name should be require";
                }
                else {
                    err.firstname = "";
                }
                break;
            }
            case "lastname": {
                if (!value) {
                    err.lastname = "Last Name should be require";
                }
                else {
                    err.lastname = "";
                }
                break;
            }
            case "email": {
                if (!value) {
                    err.email = "Email is requrie";
                }

                else if (!MALIL_FORMAT.test(value)) {
                    err.email = "email is invalid"
                }
                else {
                    err.email = "";
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
            case "phonenumber": {
                if (!value) {
                    err.phonenumber = "Phonenumer should be required";
                }
                else if (value.length < 10) {
                    err.phonenumber = "Ponenumber Should be minmum 10 characters must"
                }
                else {
                    err.phonenumber = "";
                }
                break;
            }

            case "date": {
                if (!value) {
                    err.date = "Date should be require"
                }
                else {
                    err.date = "";
                }
                break;
            }

            case "file": {
                if (!value) {
                    err.file = "File should be require";
                }
                else {
                    err.file = "";
                }
                break;
            }

            case "city": {
                if (!value) {
                    err.city = "City should be require";
                }
                else {
                    err.city = ""
                }
                break;
            }

            case "pincode": {
                if (!value) {
                    err.pincode = "Pincode is require";
                }
                else if (value.length < 6) {
                    err.pincode = "Pincode Should be minmum 6 characters must"
                }
                else {
                    err.pincode = "";
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


    return (

<>
<Sidenavreception/>
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

                                        <div className="col-sm-6">
                                            <div className="from-group mb-3">
                                                <label htmlFor="doctordepartment" className="form-label">Doctor Department
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

                                            <div className="form-group mb-3">
                                                <label htmlFor="doctorname" className="form-label">Doctor Name
                                                    <span className="text-primary">*</span> </label>
                                                <input
                                                    className="form-control"
                                                    name="doctorname"
                                                    value={user.doctorname}
                                                    placeholder="Enter Your Doctor Name"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                />
                                                <span className="text-danger">{error.doctorname}</span>

                                            </div>
                                        </div>
                                    </div>

                                    <hr />
                                    <h5 className="card-title"> Patient Vatils</h5>
                                    <hr />
                                    <div className="row">

                                        <div className="col-sm-6">
                                            <div className="form-group mb-3">
                                                <label htmlFor="temp" className="form-label">Temperature
                                                    <span className="text-primary">*</span> </label>
                                                <input
                                                    className="form-control"
                                                    name="temp"
                                                    type="number"
                                                    placeholder="Enter Your Temperature"
                                                    value={user.temp}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                />
                                                <span className="text-danger">{error.temp}</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group mb-3">
                                                <label htmlFor="bp" className="form-label">BP
                                                    <span className="text-primary">*</span> </label>
                                                <input
                                                    className="form-control"
                                                    name="bp"
                                                    type="number"
                                                    placeholder="Enter Your BP"
                                                    value={user.bp}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                />
                                                <span className="text-danger">{error.bp}</span>
                                            </div>
                                        </div>


                                    </div>

                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="form-group mb-3">
                                                <label htmlFor="weight" className="form-label">Weight
                                                    <span className="text-primary">*</span> </label>
                                                <input
                                                    className="form-control"
                                                    name="weight"
                                                    type="number"
                                                    placeholder="Enter Your Weight"
                                                    value={user.weight}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                />
                                                <span className="text-danger">{error.weight}</span>
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <div className="form-group mb-3">
                                                <label htmlFor="height" className="form-label">Height
                                                    <span className="text-primary">*</span> </label>
                                                <input
                                                    className="form-control"
                                                    name="height"
                                                    type="number"
                                                    placeholder="Enter Your Height"
                                                    value={user.height}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                />
                                                <span className="text-danger">{error.height}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <hr />


                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="form-group mb-3">
                                                <label htmlFor="firstname" className="form-label">First Name
                                                    <span className="text-primary">*</span> </label>
                                                <input
                                                    className="form-control"
                                                    name="firstname"
                                                    placeholder="Enter Your First Name"
                                                    value={user.firstname}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                />
                                                <span className="text-danger">{error.firstname}</span>
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <div className="form-group mb-3">
                                                <label htmlFor="lastname" className="form-label">Last Name
                                                    <span className="text-primary">*</span> </label>
                                                <input
                                                    className="form-control"
                                                    name="lastname"
                                                    placeholder="Enter Your Last Name"
                                                    value={user.lastname}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                />
                                                <span className="text-danger">{error.lastname}</span>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="form-group mb-3">
                                                <label htmlFor="email" className="form-label">Email
                                                    <span className="text-primary">*</span> </label>
                                                <input
                                                    className="form-control"
                                                    name="email"
                                                    type="email"
                                                    placeholder="Enter Your Email"
                                                    value={user.email}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                />
                                                <span className="text-danger">{error.email}</span>
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
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
                                        </div>
                                    </div>

                                    <div className="row">
                                        <label htmlFor="weight" className="form-label">Gender
                                            <span className="text-primary">*</span> </label>
                                        <div className="col-sm-6">
                                            <div className="form-group mb-3">

                                                <input
                                                    className="form-check-input"
                                                    name="gender"
                                                    type="radio"
                                                    checked={user.gender === 'Male'}
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
                                                    name="gender"
                                                    type="radio"
                                                    checked={user.gender === 'Female'}
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
                                                <label htmlFor="phonenumber" className="form-label">Phonenumber
                                                    <span className="text-primary">*</span> </label>
                                                <input
                                                    className="form-control"
                                                    name="phonenumber"
                                                    type="number"
                                                    placeholder="Enter Your Phonenumber"
                                                    value={user.phonenumber}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                />
                                                <span className="text-danger">{error.phonenumber}</span>
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <div className="form-group mb-3">
                                                <label htmlFor="date" className="form-label">Date
                                                    <span className="text-primary">*</span> </label>
                                                <input
                                                    className="form-control"
                                                    name="date"
                                                    type="date"
                                                    placeholder="Enter Your Date"
                                                    value={user.date}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                />
                                                <span className="text-danger">{error.date}</span>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div className="form-group mb-3">
                                                <label htmlFor="file" className="form-label"> File
                                                    <span className="text-primary">*</span>
                                                </label>
                                                <input
                                                    className="form-control"
                                                    name="file"
                                                    type="file"
                                                    value={user.file}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    required
                                                />
                                                <span className="text-danger">{error.file}</span>
                                            </div>
                                        </div>
                                    </div>



                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="form-group mb-3">
                                                <label htmlFor="city" className="form-label">City
                                                    <span className="text-primary">*</span> </label>
                                                <input
                                                    className="form-control"
                                                    name="city"

                                                    placeholder="Enter Your City"
                                                    value={user.city}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                />
                                                <span className="text-danger">{error.city}</span>
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <div className="form-group mb-3">
                                                <label htmlFor="pincode" className="form-label">Pincode
                                                    <span className="text-primary">*</span> </label>
                                                <input
                                                    className="form-control"
                                                    name="pincode"
                                                    type="number"
                                                    placeholder="Enter Your Pincode"
                                                    value={user.pincode}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                />
                                                <span className="text-danger">{error.pincode}</span>
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