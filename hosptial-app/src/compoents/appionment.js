import { Formik, Field, Form, ErrorMessage } from "formik";
import Joi from "joi";
import React from "react";
import Navigation from "./navigation";


import "../compoents/css/appionment.css";


const userSchema = Joi.object({
    fname: Joi.string().min(6).max(6).required().messages({
        'string.empty': `"First name" should be a required`,
        'string.min': ` "First name" must minmum 6 character`,
        'string.max': ` "First name" must maximum 6 character`,

    }),
    lname: Joi.string().min(6).max(12).required().messages({
        'string.empty': `"Last name" should be a required`,
        'string.min': ` "Last name" must minmum 6 character`,
        'string.max': ` "Last name" must maximum 12 character`,
    }),
    email: Joi.string()
        .email({ tlds: { allow: false } })
        .required()
        .messages({
            'string.empty': `"Email" should be a required`,
            'string.email': `"Email" should be a vaildemail`,

        }),
    password: Joi.string().alphanum().min(6).max(10).required().messages({
        'string.empty': `"Password" should be a required`,
        'string.min': ` "Password" must minmum 6 character`,
        'string.max': ` "Password" must maximum 12 character`,
    }),


    gender: Joi.string().required(),


    phonenumber: Joi.string().regex(/^[0-9]{10}$/).messages({
        'string.empty': `"phonenumber" should be a required`,
        'string.pattern.base': `Phone number must have 10 digits.`
    }).required(),
    

    date: Joi.date().min("2001-01-01").required().messages({
        'string.empty': `"Date" should be a required`,

    }),


    address: Joi.string().messages({
        'string.empty': `"address" should be a required`,
    }),

    city: Joi.string().messages({
        'string.empty': `"Date" should be a required`,

    }),
    pincode: Joi.string().length(6).required().messages({
        'string.empty': `"pincode" should be a required`,
        'string.length': `pincode must have 6 digits.`,


    }),





    toggle: Joi.boolean().default(false),
});

const INTIAL_FORM = {
    fname: "",
    lname: "",
    email: "",
    password: "",
    gender: "male",
    phonenumber: "",
    date: "",
    address: "",
    city: "",
    pincode: "",
    toggle: "",

};

function appionment() {

    const validate = (values) => {
        console.log("sumbitted12", values)
        const errors = {};
        console.log("Error",errors)
        const { error } = userSchema.validate(values);
        if (error) {
            const [err] = error.details;
            errors[err.context.key] = err.message;
        }
        return errors;

    };
    const handleSubmit = (values) => {
        console.log("sumbitted", values)
        const { error } = userSchema.validate(values);
        if (!error) {
            console.log("DOCTOR")
            console.log("sumbitted", values)

        }


        // alert(`add-${values}`)



    };

    return (
        <div id="appionment">
            <div className="section4">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title"> Appointment From </h4>
                                    <hr />
                                    <Formik
                                        initialValues={INTIAL_FORM}
                                        validate={validate}
                                        onSubmit={handleSubmit}
                                    >
                                        {() => {

                                            return (
                                                <Form className="">
                                                    <div className="row ">
                                                        <div className="col-sm-6 ">
                                                            <div className="form-group mb-3">
                                                                <label htmlFor="fname" className="form-label">
                                                                    First Name<span className="text-primary">*</span>
                                                                </label>
                                                                <Field
                                                                    className="form-control"
                                                                    name="fname"
                                                                    placeholder="Enter the your First name"
                                                                />
                                                                <ErrorMessage className="sec1" name="fname" />
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6 ">
                                                            <div className="form-group mb-3">
                                                                <label htmlFor="lname" className="form-label">
                                                                    Last Name<span className="text-primary">*</span>
                                                                </label>
                                                                <Field
                                                                    className="form-control"
                                                                    name="lname"
                                                                    placeholder="Enter the your last name"
                                                                />
                                                                <ErrorMessage className="text-danger" name="lname" />
                                                            </div>
                                                        </div>
                                                    </div>



                                                    <div className="row ">
                                                        <div className="col-sm-6 ">
                                                            <div className="form-group mb-3">
                                                                <label htmlFor="email" className="form-label">
                                                                    Email<span className="text-primary">*</span>
                                                                </label>
                                                                <Field
                                                                    className="form-control"
                                                                    name="email"
                                                                    type="email"
                                                                    placeholder="Enter the your email"
                                                                />
                                                                <ErrorMessage className="text-primary" name="email" />
                                                            </div>
                                                        </div>

                                                        {/* CONFIRM EMAIL */}

                                                        <div className="col-sm-6 ">
                                                            <div className="form-group mb-3">
                                                                <label htmlFor="password" className="form-label">
                                                                    Password<span className="text-primary">*</span>
                                                                </label>
                                                                <Field
                                                                    className="form-control"
                                                                    type="password"
                                                                    name="password"
                                                                    placeholder="Enter the last name"
                                                                />
                                                                <ErrorMessage className="text-primary" name="password" />
                                                            </div>
                                                        </div>
                                                    </div>


                                                    {/* GENDER */}

                                                    <div className="row ">

                                                        <label htmlFor="gender" className="form-label">Gender
                                                            <span className="text-primary">*</span></label>

                                                        <div className="col-sm-6 col-md-4">
                                                            <div className="form-group">

                                                                <Field className="form-check-input" type="radio" name="gender" value="male" />
                                                                <label className="form-check-label ms-2" htmlFor="male">
                                                                    Male
                                                                </label>

                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6 col-md-4">
                                                            <div className="form-group">
                                                                <Field className="form-check-input" type="radio" name="gender" value="female" />
                                                                <label className="form-check-label ms-2" htmlFor="female">
                                                                    Female
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* phonenumber */}

                                                    <div className="form-group mb-3">
                                                        <label htmlFor="phonenumber" className="form-label">
                                                            Phone Number<span className="text-primary">*</span>
                                                        </label>
                                                        <Field
                                                            className="form-control"
                                                            type="tel"
                                                            name="phonenumber"
                                                            placeholder="Enter the phonenumber"
                                                        />
                                                        <ErrorMessage className="sec1" name="phonenumber" />
                                                    </div>

                                                    <div className="form-group">

                                                        <label htmlFor="date" class="form-label">Date
                                                            <span className="text-primary">*</span></label>
                                                        <Field
                                                            type="date"
                                                            name="date"
                                                            className="form-control"
                                                            min="12-10-2022"

                                                        />
                                                        <ErrorMessage className="sec1" name="date" />
                                                    </div>


                                                    {/* Address */}
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

                                                    <div className="row ">
                                                        <div className="col-sm-6 ">
                                                            <div className="form-group mb-3">
                                                                <label htmlFor="city" className="form-label">
                                                                    City<span className="text-primary">*</span>
                                                                </label>
                                                                <Field
                                                                    className="form-control"
                                                                    name="city"
                                                                    placeholder="Enter the your city"
                                                                />
                                                                <ErrorMessage className="text-primary" name="city" />
                                                            </div>
                                                        </div>

                                                        <div className="col-sm-6 ">
                                                            <div className="form-group mb-3">
                                                                <label htmlFor="pincode" className="form-label">
                                                                    Pincode<span className="text-primary">*</span>
                                                                </label>
                                                                <Field
                                                                    className="form-control"
                                                                    type="pincode"
                                                                    name="pincode"
                                                                    placeholder="Enter the your pincode"
                                                                />
                                                                <ErrorMessage className="sec1" name="pincode" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <hr />
                                                    <div className="footer">
                                                        <div className="form-group mb-3 ">
                                                            {/* <div id="checkbox-group">Checked1</div> */}
                                                            <label>
                                                                <Field type="checkbox" name="toggle" />

                                                            </label>




                                                            <label className="form-check-label ms-2" htmlFor="checkbox">Please
                                                                Confrom</label>
                                                        </div>
                                                    </div>




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

                        <div class="col-md-6 ">
                            <div class="card" style={{ border: "0px" }}>
                                <div class="card-body">
                                    <div class="image">
                                        <img src="/image/appointment.png" alt="..." style={{ width: "100%", height: "100%" }} />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );


    // <div class="col-md-6 ">
    //     <div class="card" style={{ border: "0px" }}>
    //         <div class="card-body">
    //             <div class="image">
    //                 <img src="/image/appointment.png" alt="..." style={{ width: "100%", height: "100%" }} />
    //             </div>
    //         </div>
    //     </div>
    // </div>







}

export default appionment;