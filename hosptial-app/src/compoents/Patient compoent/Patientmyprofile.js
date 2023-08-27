import React, { useEffect, useState } from "react";
import { Formik, Field, ErrorMessage, Form } from "formik";
import Joi from "joi";

// import { prifileSchema } from "../Myprfilevalidation";
// import { INTIAL_PROFILEVALUES } from "../Myprfilevalidation";
// import { validate } from "../Myprfilevalidation";
import { getProfiledetails, patientProfileUpdate } from "../../Services/Profiles.service";


import Sidenavpatient from "./Sidenavpatient";

import "../css/Patient/Patientmyprofile.css"
export const prifileSchema =Joi.object({
    Firstname: Joi.string().min(6).max(6).required().messages({
        'string.empty': `"First name" should be a required`,
        // 'string.min': ` "First name" must minmum 6 character`,
        // 'string.max': ` "First name" must maximum 6 character`,

    }),
    Lastname: Joi.string().min(6).max(12).required().messages({
        'string.empty': `"Last name" should be a required`,
        // 'string.min': ` "Last name" must minmum 6 character`,
        // 'string.max': ` "Last name" must maximum 12 character`,
    }),


    Email: Joi.string()
        .email({ tlds: { allow: false } })
        .required()
        .messages({
            'string.empty': `"Email" should be a required`,
            'string.email': `"Email" should be a vaildemail`,

        }),
     Age: Joi.number().integer().messages({
        'number.empty': `"Age" should be a required`,
    }),


    Gender: Joi.string().required(),


    Phonenumber: Joi.string().regex(/^[0-9]{10}$/).messages({
        'string.empty': `"phonenumber" should be a required`,
        'string.pattern.base': `Phone number must have 10 digits.`
    }).required(),
   
    Dateofbirth: Joi.date().required().messages({
        'string.empty': `"Date" should be a required`,

    }),

    File: Joi.string().label('image').messages({
        'string.empty': `"File"should be a required`,
    }),


    Address: Joi.string().messages({
        'string.empty': `"Address" should be a required`,
    }),

    // formfile: Joi.string().required().label('image'),

    // toggle: Joi.boolean().default(false),





    // toggle: Joi.boolean().default(false),
});

 const INTIAL_PROFILEVALUES ={
    Firstname: "",
    Lastname: "",
    Email: "",
    Age: "",
    Gender: "male",
    Phonenumber: "",
    Dateofbirth:"",
    File: "",
    Address: "",
    // toggle: "",
   
}


  const validate = (values) => {
    console.log("sumbitted12", values)
    const errors = {};
    console.log("Error",errors)
    const { error } =  prifileSchema.validate(values);
    if (error) {
        const [err] = error.details;
        errors[err.context.key] = err.message;
    }
    return errors;

};

function Patientmyprofile() {

    const [patientdata ,SetpatientData] = useState(INTIAL_PROFILEVALUES);
    const GetSeesionData = async () => {

        var registerData = await getProfiledetails();
        console.log("DATAVALUES123", registerData);
        const PatientProfileData =registerData[0] 

       patientdata.Firstname = PatientProfileData.Firstname;
       patientdata.Lastname = PatientProfileData.Lastname;
       patientdata.Email = PatientProfileData.Email;
       
       patientdata.Age = PatientProfileData.Age;
       patientdata.Gender = PatientProfileData.Gender;
       patientdata.Phonenumber = PatientProfileData.Phonenumber;
       patientdata.Dateofbirth = PatientProfileData.Dateofbirth;
       patientdata.Address = PatientProfileData.Address;
    //    patientdata.City = PatientProfileData.City;
    //    patientdata.Pincode = PatientProfileData.Pincode;      
        SetpatientData(PatientProfileData);
       
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
                                                                        // value={PatientProfileData.Firstname}
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
                                                                        // value={patientdata.Lastname}
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
                                                                        // value={patientdata.Email}
                                                                        readOnly={true}
                                                                        placeholder="Enter Your Email"
                                                                    />
                                                                    <ErrorMessage className="text-danger" name="Email" />
                                                                </div>
                                                            </div>

                                                            <div className="col-sm-6">
                                                                <div className="from-group mb-3">
                                                                    <label htmlFor="Age" className="form-label">Age
                                                                        <span className="text-primary">*</span>
                                                                    </label>
                                                                    <Field
                                                                        className="form-control"
                                                                        name="Age"
                                                                        type="number"
                                                                        // value={patientdata.Age}
                                                                        placeholder="Enter Your Age"
                                                                    />
                                                                    <ErrorMessage className="text-danger" name="Age" />
                                                                </div>
                                                            </div>
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
                                                                        // value={patientdata.Phonenumber}
                                                                        placeholder="Enter Your Phonenumber"
                                                                    />
                                                                    <ErrorMessage className="text-danger" name="Phonenumber" />
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-6">
                                                                <div className="form-group mb-3">
                                                                    <label htmlFor="Dateofbirth" className="form-label"> Dateofbirth
                                                                        <span className="text-primary">*</span>
                                                                    </label>
                                                                    <Field
                                                                        name="Dateofbirth"
                                                                        className="form-control"
                                                                        // value={patientdata.Dateofbirth}
                                                                        type="date"

                                                                    />
                                                                    <ErrorMessage className="text-danger" name="Dateofbirth" />
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
                                                                    // value={patientdata.Address}
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