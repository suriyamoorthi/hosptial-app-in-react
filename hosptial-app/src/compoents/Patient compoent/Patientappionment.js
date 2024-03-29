import React, { useEffect, useState } from "react";
import { Formik, Field, ErrorMessage, Form } from "formik";
import { userSchema } from "./ddd";
// import { INTIAL_FORM} from "./ddd";

import { validate } from "./ddd";
import { getuserdetailfromsession } from "../../Services/User.service";
import { postUserappionmentvalidation } from "../../Services/User.service";

import Sidenavpatient from "./Sidenavpatient";

import "../css/Patient/Patientappionment.css"


const INTIAL_FORM = {
    Firstname: "",
    Lastname: "",
    Email: "",
    Age: "",
    Gender: "male",
    Phonenumber: "",
    Date: "",
    File: "",
    Address: "",
    City: "",
    Pincode: "",

}


function Patientappionment() {

    const [appionmentdata ,SetAppionmentData] =useState(INTIAL_FORM);
    const GetSeesionData = async () => {

        var registerData = await getuserdetailfromsession();
        console.log("DATAVALUES", registerData);
        const patientData =registerData[0];  
       appionmentdata.Firstname = patientData.Firstname;
       appionmentdata.Lastname = patientData.Lastname;
       appionmentdata.Email = patientData.Email;
        console.log("appionmentdata.Email",appionmentdata.Email);
       appionmentdata.Age = patientData.Age;
       appionmentdata.Gender = patientData.Gender;
       appionmentdata.Phonenumber = patientData.Phonenumber;
       appionmentdata.Date = patientData.Date;
       appionmentdata.Address = patientData.Address;
       appionmentdata.City = patientData.City;
       appionmentdata.Pincode = patientData.Pincode;      

        // INTIAL_FORM.Gender = patientData.Gender;
        SetAppionmentData(patientData);


    };

    const handleSubmit = async (values) => {
        console.log("console.log");
        console.log("sumbitted", values);
        const { error } = userSchema.validate(values);
        if (!error) {

            try {
                const { data } = await postUserappionmentvalidation(values);
                console.log("ERRORMESSAGE", data);
                alert(data.Message);

                // const getEmail=data.Data[0].Email;
                // console.log("GETEMAIL",getEmail);

            }
            catch {

            }
            //    const message="APPIONMENT IS SUCCSSFULLY CREATE"
            //    alert(message);
            // }
            // else{
            //     const notmessage="APPIONMENT NOT SUCCSSFULLY CREATE"
            //     alert(notmessage);
        }



    };


    useEffect(() => {
        console.log("useEffect")
        GetSeesionData();

    }, []);

    return (
        <>
            <Sidenavpatient />
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
                                                                <label htmlFor="Firstname" className="form-label">First Name
                                                                    <span className="text-primary">*</span>
                                                                </label>
                                                                <Field
                                                                    className="form-control"
                                                                    name="Firstname"
                                                                   
                                                                    placeholder="Ennter Your First Name"
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
                                                                   
                                                                    placeholder="Enter Your Last Name"
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
                                                                    readOnly={true}
                                                                    type="email"
                                                                    placeholder="Enter Your Email"
                                                                />
                                                                <ErrorMessage className="text-danger" name="Email" />
                                                            </div>
                                                        </div>

                                                        <div className="col-sm-6">
                                                            <div className="form-group mb-3">
                                                                <label htmlFor="PassworAge" className="form-label">Age
                                                                    <span className="text-primary">*</span>
                                                                </label>
                                                                <Field
                                                                    className="form-control"
                                                                    name="Age"
                                                                    type="number"
                                                                  
                                                                    placeholder="Enter Your Age"
                                                                />
                                                                <ErrorMessage className="text-danger" name="Age" />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="row ">

                                                        <label htmlFor="Gender"  className="form-label">Gender
                                                            <span className="text-primary">*</span></label>

                                                        <div className="col-sm-6 ">
                                                            <div className="form-group mb-3">

                                                                <Field className="form-check-input" type="radio"  name="Gender" value="male" />
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
                                                                    <span className="text-primary">*</span>
                                                                </label>
                                                                <Field
                                                                    className="form-control"
                                                                    name="Phonenumber"
                                                                    type="tel"
                                                                   
                                                                    placeholder="Ennter Your Phone Number"
                                                                />
                                                                <ErrorMessage className="text-danger" name="Phonenumber" />
                                                            </div>
                                                        </div>

                                                        <div className="col-sm-6">
                                                            <div className="form-group mb-3">
                                                                <label htmlFor="Date" className="form-label">Date
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
                                                        <div className="col-sm-12">
                                                            <div className="form-group mb-3">
                                                                <label htmlFor="File" className="form-label">File
                                                                    <span className="text-primary">*</span>
                                                                </label>
                                                                <Field
                                                                    className="form-control"
                                                                    name="File"
                                                                    type="file"

                                                                    placeholder="Ennter Your File"
                                                                />
                                                                <ErrorMessage className="text-danger" name="File" />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="Address">
                                                            <label htmlFor="Address" className="form-label"> Address
                                                                <span className="text-primary">*</span></label>
                                                            <div className="form-floating mb-3">
                                                                <Field
                                                                    className="form-control"
                                                                    name="Address"
                                                                 
                                                                    placeholder="Enter Your Address"
                                                                />
                                                                <ErrorMessage className="sec1" name="Address" />
                                                                <label htmlFor="floatingInput"> Enter your address</label>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-sm-6">
                                                            <div className="form-group mb-3">
                                                                <label htmlFor="City" className="form-label">City
                                                                    <span className="text-primary">*</span>
                                                                </label>
                                                                <Field
                                                                    className="form-control"
                                                                    name="City"
                                                                    
                                                                    placeholder="Ennter Your City"
                                                                />
                                                                <ErrorMessage className="text-danger" name="City" />
                                                            </div>
                                                        </div>

                                                        <div className="col-sm-6">
                                                            <div className="form-group mb-3">
                                                                <label htmlFor="Pincode" className="form-label">Pincode
                                                                    <span className="text-primary">*</span>
                                                                </label>
                                                                <Field
                                                                    className="form-control"
                                                                    name="Pincode"
                                                                    type="pincode"
                                                                   
                                                                    placeholder="Enter Your Pincode"
                                                                />
                                                                <ErrorMessage className="text-danger" name="Pincode" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <hr />

                                                    <div className="button">
                                                            <div className="form-groups mb-3">

                                                                <button type="submit" className="btn btn-primary " >submit</button>
                                                            </div>
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