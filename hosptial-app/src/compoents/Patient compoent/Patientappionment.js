import React from "react";
import { Formik, Field, ErrorMessage, Form } from "formik";
import { userSchema} from "./ddd";
import { INTIAL_FORM} from "./ddd";
import { validate} from "./ddd";

import Sidenavpatient from "./Sidenavpatient";

import "../css/Patient/Patientappionment.css"


function Patientappionment() {


    const handleSubmit = (values) => {
        console.log("sumbitted", values)
        const { error } = userSchema.validate(values);
        if (!error) {
            console.log("PATIENT APPIONMENT")
            console.log("sumbitted", values)

        }


        // alert(`add-${values}`)



    };
    return (
        <>
        <Sidenavpatient/>
        <main className="patientappionment">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-2"> </div>
                    <div className="col-sm-8">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Appiontmentform</h4>
                                <hr />
                                <Formik
                                initialValues={INTIAL_FORM}
                                validate={validate}
                                onSubmit={handleSubmit}
                                >

                                    {() => {

                                        return (
                                            <Form>
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <div className="form-group mb-3">
                                                            <label htmlFor="firstname" className="form-label">First Name
                                                                <span className="text-primary">*</span>
                                                            </label>
                                                            <Field
                                                                className="form-control"
                                                                name="firstname"
                                                                placeholder="Ennter Your First Name"
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
                                                                placeholder="Enter Your Last Name"
                                                            />
                                                             <ErrorMessage className="text-danger" name="lastname" />
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
                                                        <div className="form-group mb-3">
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
                                                            <label htmlFor="phonenumber" className="form-label">Phone Number
                                                                <span className="text-primary">*</span>
                                                            </label>
                                                            <Field
                                                                className="form-control"
                                                                name="phonenumber"
                                                                type="tel"
                                                                placeholder="Ennter Your Phone Number"
                                                            />
                                                             <ErrorMessage className="text-danger" name="phonenumber" />
                                                        </div>
                                                    </div>

                                                    <div className="col-sm-6">
                                                        <div className="form-group mb-3">
                                                            <label htmlFor="date" className="form-label">Date
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
                                                </div>

                                                <div className="row">
                                                    <div className="col-sm-12">
                                                        <div className="form-group mb-3">
                                                            <label htmlFor="formfile" className="form-label">File
                                                                <span className="text-primary">*</span>
                                                            </label>
                                                            <Field
                                                                className="form-control"
                                                                name="formfile"
                                                                type="file"
                                                                placeholder="Ennter Your File"
                                                            />
                                                             <ErrorMessage className="text-danger" name="formfile" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                <div className="address">
                                                        <label htmlFor="address" className="form-label"> Address
                                                            <span className="text-primary">*</span></label>
                                                        <div className="form-floating mb-3">
                                                            <Field
                                                                className="form-control"
                                                                name="address"
                                                                placeholder="Enter Your address"
                                                            />
                                                            <ErrorMessage className="sec1" name="address" />
                                                            <label htmlFor="floatingInput"> Enter your address</label>
                                                        </div>
                                                    </div>
                                                    </div>

                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <div className="form-group mb-3">
                                                            <label htmlFor="city" className="form-label">City
                                                                <span className="text-primary">*</span>
                                                            </label>
                                                            <Field
                                                                className="form-control"
                                                                name="city"
                                                                placeholder="Ennter Your City"
                                                            />
                                                             <ErrorMessage className="text-danger" name="city" />
                                                        </div>
                                                    </div>

                                                    <div className="col-sm-6">
                                                        <div className="form-group mb-3">
                                                            <label htmlFor="pincode" className="form-label">Pincode
                                                                <span className="text-primary">*</span>
                                                            </label>
                                                            <Field
                                                                className="form-control"
                                                                name="pincode"
                                                                type="pincode"
                                                                placeholder="Enter Your Pincode"
                                                            />
                                                             <ErrorMessage className="text-danger" name="pincode" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr/>

                                                <div className="form-group ">
                                                        <button type="reset" className="btn btn-primary ms-2"
                                                        >reset</button>
                                                        {" "}
                                                        <button type="submit" className="btn btn-primary ms-1" >submit</button>
                                                    </div>
                                            </Form>
                                        )
                                    }
                                    }
                                </Formik>


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
export default Patientappionment;