import React, { useState,usehistory } from "react";

import Sidenavdoctor from "./Sidenavdoctor";


import "../css/Doctor/Doctorprofile.css"
const MALIL_FORMAT = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');


const FORM_VLAUES = {

    firstname: "",
    lastname: "",
    age: "",
    phonenumber: "",
    email: "",
    password: "",
    gender: "male",
    dateofbirth: "",
    file: "",
    address: "",


}


function Doctorprofile() {
    const histroy=usehistory();

    const [user, setUser] = useState(FORM_VLAUES);
    const [error, setError] = useState(FORM_VLAUES);
    const [touched, setTouched] = useState(FORM_VLAUES);


const validation =()=>{
       
        if(error.firstname.length <=0){
        return false;
       }
       else if (error.lastname.length <=0){
        return false;
       }
       else if (error.age.length <=0){
        return false;
       }
       else if (error.phonenumber.length <=0){
        return false;
       }
       else if(error.email.length <=0){
        return false;
      }
       else if (error.password.length <=0){
        return false;
       }
       else if (error.gender.length <=0){
        return false;
       }
       else if(error.file.length <=0){
        return false;
       }
       else if(error.address.length <=0){
        return false;
       }
}




    const handleBlur = ({ target: { name } }) => {
        setTouched({ ...touched, [name]: true })
    };

    const handleChange = ({ target: { name, value } }) => {
        const err = { ...error };

        switch (name) {

            case "firstname": {
                if (!value) {
                    err.firstname = "First Name should be require";
                }
                else {
                    err.firstname = " ";
                }
                break;
            }

            case "lastname": {
                if (!value) {
                    err.lastname = " Last Name should be require";
                }
                else {
                    err.lastname = "";
                }
                break;
            }
            case "age": {
                if (!value) {
                    err.age = " Age should be require";
                }
                else {
                    err.age = ""
                }
                break;
            }

            case "phonenumber": {
                if (!value) {
                    err.phonenumber = " Phonenumber should be require";

                }
                else if (value.length < 10) {
                    err.phonenumber = " Phonenumber must have 10 digits";

                }
                else {
                    err.phonenumber = "";
                }
                break;
            }
            case "email": {
                if (!value) {
                    err.email = "Email is require"
                }
                else if (!MALIL_FORMAT.test(value)) {
                    err.email = " Email is ivalid"
                }
                else {
                    err.email = "";
                }
                break;
            }

            case "password": {
                if (!value) {
                    err.password = " Password should be require";
                }
                else if (value.length < 6) {
                    err.password = "Password  minimum 6 characters must ";
                }
                else if (value.length > 10) {
                    err.password = "Password maximum 10 characters must ";

                }
                else {
                    err.password = "";
                }
                break;
            }
            case "dateofbirth": {
                if (!value) {
                    err.dateofbirth = "Date Of Birth should be require";
                }
                else {
                    err.dateofbirth = "";
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
            case "address": {
                if (!value) {
                    err.address = " Address should be require";
                }
                else {
                    err.address = "";
                }
                break;
            }


        }
        setError(err);
        setUser({ ...user, [name]: value });
        console.log("ERROR", err);
        console.log("VALUE", user);


    }

    const handleSubmit = () => {

        console.log("VALES1", user);
        const isTouched = Object.values(touched).every(t => t === true);
      const  isVaildation = validation();

        if(isTouched && isVaildation){
            console.log("Setupcompleted");

        }
    }


    return (
        <>
           <Sidenavdoctor/>
            <main className="doctorprofile">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-2"></div>
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
                                                        id="firstname"
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
                                                    <label htmlFor="lastname" className="form-label"> Last Name
                                                        <span className="text-primary">*</span>
                                                    </label>

                                                    <input
                                                        className="form-control"
                                                        name="lastname"
                                                        id="lastname"
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
                                                    <label htmlFor="age" className="form-label">Age
                                                        <span className="text-primary">*</span>
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        name="age"
                                                        id="age"
                                                        type="number"
                                                        placeholder="Enter your age"
                                                        value={user.age}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}

                                                    />
                                                    <span className="text-danger" > {error.age}</span>
                                                </div>
                                            </div>

                                            <div className="col-sm-6">
                                                <div className="form-group mb-3">
                                                    <label htmlFor="phonenumber" className="form-label"> Phonenumber
                                                        <span className="text-primary">*</span>
                                                    </label>

                                                    <input
                                                        className="form-control"
                                                        name="phonenumber"
                                                        id="phonenumber"
                                                        type="number"
                                                        placeholder="Enter your phonenumber"
                                                        value={user.phonenumber}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                    />
                                                    <span className="text-danger">{error.phonenumber}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="form-group mb-3">
                                                    <label htmlFor="email" className="form-label">Email
                                                        <span className="text-primary">*</span>
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        name="email"
                                                        id="email"
                                                        type="email"
                                                        placeholder="Enter your Email"
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
                                                        <span className="text-primary">*</span>
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        name="password"
                                                        id="password"
                                                        type="password"
                                                        placeholder="Enter your Password"
                                                        value={user.password}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                    />
                                                    <span className="text-danger">{error.password}</span>
                                                </div>

                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="form-group mb-3">
                                                    <label htmlFor="gender" className="form-label">Gender
                                                        <span className="text-primary">*</span>
                                                    </label>
                                                    <select
                                                        className="form-select"
                                                        name="gender"
                                                        id="gender"
                                                        value={user.gender}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                    >
                                                        <option value="1">Male</option>
                                                        <option value="2">Female</option>
                                                        <option value="3">Other</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="col-sm-6">
                                                <div className="form-group mb-3">
                                                    <label htmlFor="dateofbirth" className="form-label">Date Of Birth
                                                        <span className="text-primary">*</span>
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        name="dateofbirth"
                                                        id="dateofbirth"
                                                        type="date"
                                                        value={user.dateofbirth}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                    />
                                                    <span className="text-danger">{error.dateofbirth}</span>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="form-group mb-3">
                                            <label htmlFor="file" className="form-label">
                                                File<span className="text-primary">*</span>
                                            </label>
                                            <input
                                                id="file"
                                                name="file"
                                                className="form-control"
                                                type="file"
                                                placeholder="Enter the file"
                                                value={user.file}

                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                required
                                            />
                                            <span className="text-danger">{error.file}</span>

                                        </div>

                                        <div className="form-group mb-3">
                                            <label htmlFor="address" className="form-lable">Address
                                                <span className="text-primary">*</span>
                                            </label>
                                            <div className="form-floating mb-3">
                                                <input
                                                    className="form-control"
                                                    name="address"
                                                    id="address"
                                                    placeholder="Enter Your Address"
                                                    value={user.address}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                />
                                                <label htmlFor="address"> Enter your Address</label>
                                                <span className="text-danger">{error.address}</span>
                                            </div>
                                        </div>

                                        <hr />
                                        <div className="from-group mb-3 " >
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
    );
}

export default Doctorprofile;
