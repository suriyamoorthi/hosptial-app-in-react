// import React, { useState } from "react";
import { useEffect } from "react";
import { Formik, Field, ErrorMessage, Form } from "formik";
import Joi from "joi";

import Sidenavcreception from "../../containers/Recpetion module/Sidenavreception";
import { getRecptionProfiledetails } from "../../Services/Profiles.service";
import { RecptionProfileUpdate } from "../../Services/Profiles.service";


import "../css/Reception/Receptionmyprofile.css";

const prifileSchema = Joi.object({
    Receptionfirstname: Joi.string().min(6).max(6).required().messages({
        'string.empty': `"First name" should be a required`,
        'string.min': ` "First name" must minmum 6 character`,
        'string.max': ` "First name" must maximum 6 character`,

    }),
    Receptionlastname: Joi.string().min(6).max(12).required().messages({
        'string.empty': `"Last name" should be a required`,
        'string.min': ` "Last name" must minmum 6 character`,
        'string.max': ` "Last name" must maximum 12 character`,
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





    toggle: Joi.boolean().default(false),
});

const INTIAL_VALUES = {
    Receptionfirstname: "",
    Receptionlastname: "",
    Age: "",
    Email: "",
    // Password: "",
    Gender: "male",
    Phonenumber: "",
    Dateofbirth: "",
    File: "",
    Address: "",
    // toggle: "",

}

const validate = (values) => {
    console.log("sumbitted12", values)
    const errors = {};
    console.log("Error", errors)
    const { error } = prifileSchema.validate(values);
    if (error) {
        const [err] = error.details;
        errors[err.context.key] = err.message;
    }
    return errors;

};
function Receptionmyprofile() {
    const GetSeesionData = async () => {

        var data = await getRecptionProfiledetails();
        console.log("DATAVALUES", data);

        //   if(data[0].Firstname)
        //   {
        //     INTIAL_FORM.Firstname =  data[0].Firstname;
        //   }
        INTIAL_VALUES.Receptionfirstname = data[0].Receptionfirstname;
        INTIAL_VALUES.Receptionlastname = data[0].Receptionlastname;
        INTIAL_VALUES.Email = data[0].Email;
        INTIAL_VALUES.Age = data[0].Age;
        INTIAL_VALUES.Gender = data[0].Gender;
        INTIAL_VALUES.Phonenumber = data[0].Phonenumber;
        INTIAL_VALUES.Dateofbirth = data[0].Dateofbirth;
        INTIAL_VALUES.Address = data[0].Address;
        // INTIAL_VALUES.File = data[0].File;

    };

    const handleSubmit = async (values, { resetForm }) => {
        console.log("sumbitted", values);
        resetForm({ value: "values" });
        const { error } = prifileSchema.validate(values);
        if (!error) {
            try {
                const { data } = await RecptionProfileUpdate(values);
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
    // const INTIAL_VALUES = {
    //     Receptionfirstname: "",
    //     Receptionlastname: "",
    //     Email: "",
    //     // password: "",
    //     Gender: "Male",
    //     // age: "",
    //     Phonenumber: "",
    //     Dateofbirth: "",
    //     File: "",
    //     Address: "",

    // }
    // const MALIL_FORMAT = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');

    return (

        <>
            <Sidenavcreception />
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
                                            initialValues={INTIAL_VALUES}
                                            validate={validate}
                                            onSubmit={handleSubmit}
                                        >

                                            {() => {
                                                return (
                                                    <Form className="mt-4">
                                                        <div className="row">
                                                            <div className="col-sm-6">
                                                                <div className="form-group mb-3">
                                                                    <label htmlFor="Receptionfirstname" className="form-label">Receptionfirstname
                                                                        <span className="text-primary">*</span>
                                                                    </label>
                                                                    <Field
                                                                        className="form-control"
                                                                        name="Receptionfirstname"
                                                                        placeholder="Enter Your Receptionfirstname"
                                                                    />
                                                                    <ErrorMessage className="text-danger" name="Receptionfirstname" />
                                                                </div>
                                                            </div>

                                                            <div className="col-sm-6">
                                                                <div className="form-group mb-3">
                                                                    <label htmlFor="Receptionlastname" className="form-label">Receptionlastname
                                                                        <span className="text-primary">*</span>
                                                                    </label>
                                                                    <Field
                                                                        className="form-control"
                                                                        name="Receptionlastname"
                                                                        placeholder="Enter Your Last name"
                                                                    />
                                                                    <ErrorMessage className="text-danger" name="Receptionlastname" />
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
                                                                        className="form-control"
                                                                        name="Dateofbirth"
                                                                        type="date"
                                                                        placeholder="Enter Your Dateofbirth"
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

export default Receptionmyprofile;