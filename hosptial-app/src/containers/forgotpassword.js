import { Formik, Field, Form, ErrorMessage } from "formik";
import Joi from "joi";
import React from "react";
import { HashLink as Link } from "react-router-hash-link";

import "../compoents/css/forgotpassword.css";

const userSchema = Joi.object({

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
});

const INTIAL_FORM = {
    email: "",
    password: "",
};

function forgotpassword() {

    const validate = (values) => {
        console.log("sumbitted", values)
        const errors = {};
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
        if (error) {

        }


        // alert(`add-${values}`)



    };


    return (

        <div className="forgot mb-5 pb-3">
            <div className="container">
                <div className="row">
                    <div className="col-sm-4"></div>
                    <div className="col-sm-4 ">
                        <div className="card" >
                            <div className="card-body">
                                <h5 className="card-title" > Forgot Your Password?</h5>
                                <p>Enter your email below to recive your password reset</p>
                                <Formik
                                    initialValues={INTIAL_FORM}
                                    validate={validate}
                                    onSubmit={handleSubmit}>
                                    {() => {
                                        return (
                                            <Form className="mt-4">

                                                <div className="form-group mb-3">
                                                    <label htmlfor="email" className="form-label">Email</label>
                                                    <Field
                                                        className="form-control"
                                                        name="email"
                                                        type="email"
                                                        placeholder="Enter Your Registered Email"
                                                    />
                                                    <ErrorMessage className="text-danger" name="email" />
                                                </div>

                                                <div className="from-group mb-3">
                                                    <div className="group" >
                                                        <button type="submit" className="btn btn-primary">Send</button>
                                                    </div>
                                                </div>

                                                <div className="link ">
                                                    <i className="fa-solid fa-arrow-left "></i>

                                                    <Link to="/login" className="buttion">
                                                        Back to Login Page </Link>


                                                </div>
                                            </Form>
                                        );
                                    }}

                                </Formik>

                            </div>
                            <div class="col-sm-4"></div>
                        </div>
                    </div>
                </div >
            </div>
        </div>

    );
}


export default forgotpassword;