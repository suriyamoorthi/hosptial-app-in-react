import React, { useState } from "react";

import Sidenavcreception from "../../containers/Recpetion module/Sidenavreception"


import "../css/Reception/Receptionmyprofile.css"

const INTIAL_VALUES = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    gender: "Male",
    age: "",
    phonenumber: "",
    dateofbirth: "",
    file: "",
    address: "",

}
const MALIL_FORMAT = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
function Receptionmyprofile() {

    const [user, setUser] = useState(INTIAL_VALUES);
    const [touched, setTouched] = useState(INTIAL_VALUES);
    const [error, setError] = useState(INTIAL_VALUES);
    const [radiobuttonselected, setRadiobuttonSelected] = useState("Male");

    const Validation = () => {
        if (user.firstname.length <= 0) {
            return false;
        }
        else if (user.lastname.length <= 0) {
            return false;
        }
        else if (user.email.length <= 0) {
            return false;
        }
        else if (user.password.length <= 0) {
            return false;
        }
        else if (user.gender.length <= 0) {
            return false;
        }
        else if (user.phonenumber.length <= 0) {
            return false;
        }
        else if (user.date.length <= 0) {
            return false;
        }
        else if (user.file.length <= 0) {
            return false;
        }
        else if (user.address.length <= 0) {
            return false;
        }
        else if (user.city.length <= 0) {
            return false;
        }
        else if (user.pincode.length <= 0) {
            return false;
        }
        else {
            console.log("Error");
            return true;
        }
    };

    const handleBlur = ({ target: { name } }) => {
        setTouched({ ...touched, [name]: true });
    }

    const handleChangeRadioButton = ({ target: { name, value } }) => {
        setRadiobuttonSelected({ ...radiobuttonselected, [name]: value })
        setUser({ ...user, [name]: value })
    }

    const handleChange = ({ target: { name, value } }) => {
        const err = { ...error }

        switch (name) {
            case "firstname": {
                if (!value) {
                    err.firstname = "First name should be require";
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
                    err.email = "Email is require";
                }
                else if (!MALIL_FORMAT.test(value)) {
                    err.email = "Email is invalid";
                }
                else {
                    err.email = "";
                }
                break;
            }
            case "password": {
                if (!value) {
                    err.password = "Password should be require";
                }
                else if (value.length < 6) {
                    err.password = "Password  minimum 6 character must";
                }
                else if (value.length > 8) {
                    err.password = "Password  maximum 8 character must";
                }
                else {
                    err.password = "";
                }
                break;
            }
             case "age": {
                if (!value) {
                    err.age = "Age is require"
                }
                else {
                    err.age = "";
                }
                break;
            }
            case "phonenumber": {
                if (!value) {
                    err.phonenumber = "phonenumber is require";
                }
                else if (value.length <= 10) {
                    err.phonenumber = "Ponenumber must have 10 digits.";
                }
                else {
                    err.phonenumber = "";
                }
                break;
            }
            case "dateofbirth": {
                if (!value) {
                    err.dateofbirth = "Dateofbirth is require"
                }
                else {
                    err.dateofbirth = "";
                }
                break;
            }

            case "file": {
                if (!value) {
                    err.file = "File is require";
                }
                else {
                    err.file = "";
                }
                break;
            }

            case "address": {
                if (!value) {
                    err.address = "Address is require";
                }
                else {
                    err.address = "";
                }
                break;
            }

        }
        setError(err);
        setUser({ ...user, [name]: value })
    }

    const handleSubmit = () => {


        console.log("Setupcompleted");
        const isTouched = Object.values(touched).every(t => t === true);

        // console.log("SelectedDropDowm", selectdepartment.value);

        const isValidationTrue = Validation();

        if (isTouched && isValidationTrue) {


            console.log("Setupcompleted");
            console.log("error", user.email);

            if (user.email === "suriya@gmail.com") {
                console.log("sumbitted4544545");
                console.log(user.gender);
            }
            else {

            }
        }
    }

    return (
        <>
        <Sidenavcreception/>

        <main className="receptionmyprofile">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-2"> </div>
                    <div className="col-sm-8">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title"> Profile</h4>
                                <hr />
                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="form-group mb-3">
                                                <label htmlFor="firstname" className="form-label">First Name
                                                    <span className="text-primary">*</span>
                                                </label>
                                                <input
                                                    className="form-control"
                                                    name="firstname"
                                                    placeholder="Enter Your First Name"
                                                    value={user.firstname}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    required
                                                />
                                                  <span className="text-danger">{error.firstname}</span>
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <div className="form-group mb-3">
                                                <label htmlFor="lastname" className="form-label">Last Name
                                                    <span className="text-primary">*</span>
                                                </label>
                                                <input
                                                    className="form-control"
                                                    name="lastname"
                                                    placeholder="Enter Your Last Name"
                                                    value={user.lastname}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    required
                                                />
                                                  <span className="text-danger">{error.lastname}</span>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="form-group mb-3">
                                                    <label htmlFor="email" className="form-label"> Email
                                                        <span className="text-primary">*</span>
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        name="email"
                                                        type="email"
                                                        placeholder="Enter Your Email"
                                                        value={user.email}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        required
                                                    />
                                                      <span className="text-danger">{error.email}</span>
                                                </div>
                                            </div>

                                            <div className="col-sm-6">
                                                <div className="form-group mb-3">
                                                    <label htmlFor="" className="form-label">Password
                                                        <span className="text-primary">*</span>
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        name="password"
                                                        type="password"
                                                        placeholder=" Enter Your Paaword"
                                                        value={user.password}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        required
                                                    />
                                                      <span className="text-danger">{error.password}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row ">

                                            <label htmlFor="gender" className="form-label">Gender
                                                <span className="text-primary">*</span></label>

                                            <div className="col-sm-6">
                                                <div className="form-group mb-3">

                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="gender"
                                                        onBlur={handleBlur}
                                                        checked={user.gender === 'Male'}
                                                        value="Male"
                                                        onChange={handleChangeRadioButton}
                                                        required />
                                                    <label className="form-check-label ms-2" htmlFor="male">
                                                        Male
                                                    </label>

                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group mb-3">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="gender"
                                                        onBlur={handleBlur}
                                                        checked={user.gender === 'Female'}
                                                        value="Female"
                                                        onChange={handleChangeRadioButton}
                                                        required
                                                    />
                                                    <label className="form-check-label ms-2" htmlFor="female">
                                                        Female
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="form-group mb-3">
                                                    <label htmlFor="age" className="form-label">Age
                                                        <span className="text-primary">*</span>
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        name="age"
                                                        type="age"
                                                        placeholder="Enter Your Age"
                                                        value={user.age}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        required
                                                    />
                                                      <span className="text-danger">{error.age}</span>
                                                </div>
                                            </div>

                                            <div className="col-sm-6">
                                                <div className="form-group mb-3">
                                                    <label htmlFor="phonenumber" className="form-label">Phone Number
                                                        <span className="text-primary">*</span>
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        name="phonenumber"
                                                        type="number"
                                                        placeholder="Enter Your Phonenumber"
                                                        value={user.phonenumber}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        required
                                                    />
                                                      <span className="text-danger">{error.phonenumber}</span>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="form-group mb-3">
                                                    <label htmlFor="dateofbirth" className="form-label"> Date Of Birth
                                                        <sapn className="text-primary">*</sapn>
                                                    </label>

                                                    <input
                                                        className="form-control"
                                                        name="dateofbirth"
                                                        type="date"
                                                        value={user.dateofbirth}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        required
                                                    />
                                                      <span className="text-danger">{error.dateofbirth}</span>
                                                </div>
                                            </div>

                                            <div className="col-sm-6">
                                                <div className="form-group mb-3">
                                                    <label htmlFor="file" className="form-label">File
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
                                            <div className="col-sm-12">
                                                <div className="form-group mb-3">
                                                    <label htmlFor="address" className="form-label">Address
                                                        <span className="text-primary">*</span>
                                                    </label>
                                                    <div className="form-floating ">
                                                        <input
                                                            className="form-control"
                                                            name="address"
                                                            type="text"
                                                            value={user.address}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            required
                                                        />
                                                          <span className="text-danger">{error.address}</span>

                                                        <label htmlFor="floatingInput"> Enter your Address</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group mb-3 " >
                                        <div className="group">
                                            <button type="submit" className="btn btn-primary"
                                            >Submit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                    <div className="col-sm-2"></div>
                </div>
            </div>
        </main>
        </>

    )
}

export default Receptionmyprofile;