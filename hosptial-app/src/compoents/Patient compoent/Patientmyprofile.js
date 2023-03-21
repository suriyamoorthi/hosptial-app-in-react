import React, { useEffect } from "react";
import { Formik, Field, ErrorMessage, Form } from "formik";

import { prifileSchema } from "../Myprfilevalidation";
import { INTIAL_PROFILEVALUES } from "../Myprfilevalidation";
import { validate } from "../Myprfilevalidation";
import { getProfiledetails, patientProfileUpdate } from "../../Services/Profiles.service";


import Sidenavpatient from "./Sidenavpatient";

import "../css/Patient/Patientmyprofile.css"


function Patientmyprofile() {
    const GetSeesionData = async () => {

        var registerData = await getProfiledetails();
        console.log("DATAVALUES", registerData);

        //   if(data[0].Firstname)
        //   {
        //     INTIAL_FORM.Firstname =  data[0].Firstname;
        //   }
        INTIAL_PROFILEVALUES.Firstname = registerData[0].Firstname;
        INTIAL_PROFILEVALUES.Lastname = registerData[0].Lastname;
        INTIAL_PROFILEVALUES.Email = registerData[0].Email;
        INTIAL_PROFILEVALUES.Gender = registerData[0].Gender;
        INTIAL_PROFILEVALUES.Phonenumber = registerData[0].Phonenumber;
        INTIAL_PROFILEVALUES.Date = registerData[0].Date;
        console.log("NNNNNN",INTIAL_PROFILEVALUES.Date );
        INTIAL_PROFILEVALUES.Address = registerData[0].Address;
        // INTIAL_PROFILEVALUES.File = registerData[0].File;
    };

    const handleSubmit = async (values) => {
        console.log("sumbitted", values)
        const { error } = prifileSchema.validate(values);
        if (!error) {
            try {
                const { data } = await patientProfileUpdate(values);
                console.log("PROFILE DATA", data);
                alert(data.Message);

            }
            catch {

            }
            console.log("PATIENT APPIONMENT")
            console.log("sumbitted", values)

        }


        // alert(`add-${values}`)



    };
    useEffect(() => {
        console.log("useEffect")
        GetSeesionData();

    }, []);
    return (

        <>
            <Sidenavpatient />
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
                                            initialValues={INTIAL_PROFILEVALUES}
                                            validate={validate}
                                            onSubmit={handleSubmit}
                                        >

                                            {() => {
                                                return (
                                                    <Form className="mt-4">
                                                        <div className="row">
                                                            <div className="col-sm-6">
                                                                <div className="form-group mb-3">
                                                                    <label htmlFor="Firstname" className="form-label">First Name
                                                                        <span className="text-primary">*</span>
                                                                    </label>
                                                                    <Field
                                                                        className="form-control"
                                                                        name="Firstname"
                                                                        placeholder="Enter Your Firstname"
                                                                    />
                                                                    <ErrorMessage className="text-danger" name="Firstname" />
                                                                </div>
                                                            </div>

                                                            <div className="col-sm-6">
                                                                <div className="form-group mb-3">
                                                                    <label htmlFor="Lastname" className="form-label">Last Name
                                                                        <span className="text-primary">*</span>
                                                                    </label>
                                                                    <Field
                                                                        className="form-control"
                                                                        name="Lastname"
                                                                        placeholder="Enter Your Last name"
                                                                    />
                                                                    <ErrorMessage className="text-danger" name="Lastname" />
                                                                </div>
                                                            </div>
                                                        </div>



                                                        <div className="row">
                                                            <div className="col-sm-6">
                                                                <div className="form-group mb-3">
                                                                    <label htmlFor="Email" className="form-label">Email
                                                                        <span className="text-primary">*</span>
                                                                    </label>
                                                                    <Field
                                                                        className="form-control"
                                                                        name="Email"
                                                                        type="email"
                                                                        readOnly={true}
                                                                        placeholder="Enter Your Email"
                                                                    />
                                                                    <ErrorMessage className="text-danger" name="Email" />
                                                                </div>
                                                            </div>

                                                            {/* <div className="col-sm-6">
                                                                <div className="from-group mb-3">
                                                                    <label htmlFor="Password" className="form-label">Password
                                                                        <span className="text-primary">*</span>
                                                                    </label>
                                                                    <Field
                                                                        className="form-control"
                                                                        name="Password"
                                                                        type="password"
                                                                        placeholder="Enter Your Password"
                                                                    />
                                                                    <ErrorMessage className="text-danger" name="Password" />
                                                                </div>
                                                            </div> */}
                                                        </div>
                                                        <div className="row ">

                                                            <label htmlFor="Gender" className="form-label">Gender
                                                                <span className="text-primary">*</span></label>

                                                            <div className="col-sm-6 ">
                                                                <div className="form-group mb-3">

                                                                    <Field className="form-check-input" type="radio" name="Gender" value="male" />
                                                                    <label className="form-check-label ms-2" htmlFor="male">
                                                                        Male
                                                                    </label>

                                                                </div>
                                                            </div>
                                                            <div className="col-sm-6 ">
                                                                <div className="form-group mb-3">
                                                                    <Field className="form-check-input" type="radio" name="Gender" value="female" />
                                                                    <label className="form-check-label ms-2" htmlFor="female">
                                                                        Female
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-sm-6">
                                                                <div className="form-group mb-3">
                                                                    <label htmlFor="Phonenumber" className="form-label">Phone Number
                                                                        <span className="text-primary">*</span> </label>
                                                                    <Field
                                                                        className="form-control"
                                                                        name="Phonenumber"
                                                                        type="tel"
                                                                        placeholder="Enter Your Phonenumber"
                                                                    />
                                                                    <ErrorMessage className="text-danger" name="Phonenumber" />
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-6">
                                                                <div className="form-group mb-3">
                                                                    <label htmlFor="Date" className="form-label"> Date
                                                                        <span className="text-primary">*</span>
                                                                    </label>
                                                                    <Field
                                                                        className="form-control"
                                                                        name="Date"
                                                                        type="date"
                                                                        placeholder="Enter Your Date"
                                                                    />
                                                                    <ErrorMessage className="text-danger" name="Date" />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="row">


                                                            <div className="form-group mb-3">

                                                                <label htmlFor="File" className="form-label"> File</label>
                                                                <Field
                                                                    className="form-control"
                                                                    type="file"
                                                                    name="File" />
                                                                <ErrorMessage className="text-danger" name="File" />

                                                            </div>

                                                        </div>




                                                        <div className="address">
                                                            <label htmlFor="Address" className="form-label"> Address
                                                                <span className="text-primary">*</span></label>
                                                            <div className="form-floating mb-3">
                                                                <Field
                                                                    className="form-control"
                                                                    name="Address"
                                                                    placeholder="Enter Your address"
                                                                />
                                                                <ErrorMessage className="text-danger" name="Address" />
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