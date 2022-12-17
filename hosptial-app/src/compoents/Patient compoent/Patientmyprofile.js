import React from "react";
import { Formik, Field, ErrorMessage, Form } from "formik";

import {prifileSchema } from "../Myprfilevalidation";
import { INTIAL_PROFILEVALUES } from "../Myprfilevalidation";
import { validate } from "../Myprfilevalidation";


import Sidenavpatient from "./Sidenavpatient";

import "../css/Patient/Patientmyprofile.css"


function Patientmyprofile() {


    const handleSubmit = (values) => {
        console.log("sumbitted", values)
        const { error } = prifileSchema.validate(values);
        if (!error) {
            console.log("PATIENT APPIONMENT")
            console.log("sumbitted", values)

        }


        // alert(`add-${values}`)



    };
    return (

        <>
            <Sidenavpatient/>
            <main >
                <div className="patientmyprofile">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-3"></div>
                            <div className="col-sm-6">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="card-title"> Profile</div>
                                        <hr />
                                        <Formik
                                            initialValues={ INTIAL_PROFILEVALUES}
                                            validate={validate}
                                            onSubmit={handleSubmit}
                                        >

                                            {() => {
                                                return (
                                                    <Form className="mt-4">
                                                        <div className="row">
                                                            <div className="col-sm-6">
                                                                <div className="form-group mb-3">
                                                                    <label htmlFor="firstname" className="form-label">First Name
                                                                        <span className="text-primary">*</span>
                                                                    </label>
                                                                    <Field
                                                                        className="form-control"
                                                                        name="firstname"
                                                                        placeholder="Enter Your Firstname"
                                                                    />
                                                                    <ErrorMessage className="text-danger" name="firstname" />
                                                                </div>
                                                            </div>

                                                            <div className="col-sm-6">
                                                                <div className="form-group mb-3">
                                                                    <label htmlFor="lastname" className="form-label">Last Name
                                                                        <span className="text-primary">*</span>
                                                                    </label>
                                                                    <Field
                                                                        className="form-control"
                                                                        name="lastname"
                                                                        placeholder="Enter Your Last name"
                                                                    />
                                                                    <ErrorMessage className="text-danger" name="lastname" />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="row">
                                                            <div className="col-sm-6">
                                                                <div classname="form-group mb-3">
                                                                    <label htmlFor="age" className="form-label" >Age
                                                                        <span className="text-primary">*</span></label>
                                                                    <Field
                                                                        className="form-control"
                                                                        name="age"
                                                                        type="number"
                                                                        placeholder="Enter Your Age"
                                                                    />
                                                                    <ErrorMessage className="text-danger" name="age" />

                                                                </div>
                                                            </div>

                                                            <div className="col-sm-6">
                                                                <div className="form-group mb-3">
                                                                    <label htmlFor="phonenumber" className="form-label">Phone Number
                                                                        <span className="text-primary">*</span> </label>
                                                                    <Field
                                                                        className="form-control"
                                                                        name="phonenumber"
                                                                        type="tel"
                                                                        placeholder="Enter Your Phonenumber"
                                                                    />
                                                                    <ErrorMessage className="text-danger" name="phonenumber" />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="row">
                                                            <div className="col-sm-6">
                                                                <div className="form-group mb-3">
                                                                    <label htmlFor="email" className="form-label">Email
                                                                        <span className="text-primary">*</span>
                                                                    </label>
                                                                    <Field
                                                                        className="form-control"
                                                                        name="email"
                                                                        type="email"
                                                                        placeholder="Enter Your Email"
                                                                    />
                                                                    <ErrorMessage className="text-danger" name="email" />
                                                                </div>
                                                            </div>

                                                            <div className="col-sm-6">
                                                                <div className="from-group mb-3">
                                                                    <label htmlFor="password" className="form-label">Password
                                                                        <span className="text-primary">*</span>
                                                                    </label>
                                                                    <Field
                                                                        className="form-control"
                                                                        name="password"
                                                                        type="password"
                                                                        placeholder="Enter Your Password"
                                                                    />
                                                                    <ErrorMessage className="text-danger" name="password" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row ">

                                                            <label htmlFor="gender" className="form-label">Gender
                                                                <span className="text-primary">*</span></label>

                                                            <div className="col-sm-6 ">
                                                                <div className="form-group mb-3">

                                                                    <Field className="form-check-input" type="radio" name="gender" value="male" />
                                                                    <label className="form-check-label ms-2" htmlFor="male">
                                                                        Male
                                                                    </label>

                                                                </div>
                                                            </div>
                                                            <div className="col-sm-6 ">
                                                                <div className="form-group mb-3">
                                                                    <Field className="form-check-input" type="radio" name="gender" value="female" />
                                                                    <label className="form-check-label ms-2" htmlFor="female">
                                                                        Female
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="row">
                                                            <div className="col-sm-6">
                                                                <div className="form-group mb-3">
                                                                    <label htmlFor="date" className="form-label"> Date
                                                                        <span className="text-primary">*</span>
                                                                    </label>
                                                                    <Field
                                                                        className="form-control"
                                                                        name="date"
                                                                        type="date"
                                                                        placeholder="Enter Your Date"
                                                                    />
                                                                    <ErrorMessage className="text-danger" name="date" />
                                                                </div>
                                                            </div>

                                                            <div className="col-sm-6">

                                                                <div className="form-group mb-3">

                                                                    <label htmlFor="formfile" className="form-label"> File</label>
                                                                    <Field
                                                                        className="form-control"
                                                                        type="file"
                                                                        name="formfile" />
                                                                    <ErrorMessage className="text-danger" name="formfile" />

                                                                </div>
                                                            </div>
                                                        </div>




                                                        <div className="address">
                                                            <label htmlFor="address" className="form-label"> Address
                                                                <span className="text-primary">*</span></label>
                                                            <div className="form-floating mb-3">
                                                                <Field
                                                                    className="form-control"
                                                                    name="address"
                                                                    placeholder="Enter Your address"
                                                                />
                                                                <ErrorMessage className="text-danger" name="address" />
                                                                <label htmlFor="floatingInput"> Enter your address</label>
                                                            </div>
                                                        </div>

                                                        <hr />
                                                        {/* 
                                                        <div className="ckeckbox">
                                                            <div className="form-group mb-3">

                                                                <Field type="checkbox" name="toggle" />

                                                                <label className="form-check-label ms-2" htmlFor="checkbox">Please
                                                                    Confrom</label>
                                                            </div>
                                                        </div> */}

                                                        <div className="button">
                                                            <div className="form-groups mb-3">

                                                                <button type="submit" className="btn btn-primary " >submit</button>
                                                            </div>
                                                        </div>





                                                    </Form>

                                                )
                                            }}
                                        </Formik>


                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3"></div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
export default Patientmyprofile;