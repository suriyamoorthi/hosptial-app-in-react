import { Formik, Field, Form, ErrorMessage } from "formik";
import Joi from "joi";
import React from "react";
import Sidebaradmin from "./sidebaradmin";
import { Link } from "react-router-dom";
import { register } from "../../Services/auth.services";

import "../css/admin/addpatient.css";

const addpatientSchema = Joi.object({
    patientname: Joi.string().min(6).max(6).required().messages({
        'string.empty': `"Patient name" should be a required`,
        'string.min': ` "Patient name" must minmum 6 character`,
        'string.max': ` "Patient name" must maximum 6 character`,

    }),
    dateofbirth: Joi.date().min("2001-01-01").required().messages({
        'string.empty': `"Date of Birth" should be a required`,

    }),
    age: Joi.number().integer().messages({
        'number.empty': `"Age" should be a required`,
    }),
    phonenumber: Joi.string().regex(/^[0-9]{10}$/).messages({
        'string.empty': `"phone number" should be a required`,
        'string.pattern.base': `Phone number must have 10 digits.`
    }).required(),

    email: Joi.string()
        .email({ tlds: { allow: false } })
        .required()
        .messages({
            'string.empty': `"Email" should be a required`,
            'string.email': `"Email" should be a vaildemail`,

        }),

    gender: Joi.string().required(),

    address: Joi.string().messages({
        'string.empty': `"address" should be a required`,
    }),

    formfile: Joi.string().label('image').messages({
        'string.empty': `"File"should be a required`,
    }),


    toggle: Joi.boolean().default(false),
});


const INTIAL_FORM = {
    Patientfirstname: "",
    Patientlastname:"",
    dateofbirth: "",
    age: "",
    phonenumber: "",
    email: "",
    gender: "male",
    address: "",
    formfile: "",
    toggle: "",

};
function Addpatient() {

    const validate = (values) => {
        console.log("sumbitted12", values);
        const errors = {};
        console.log(errors);
        const { error } = addpatientSchema.validate(values);
        if (error) {
            const [err] = error.details;
            errors[err.context.key] = err.message;
        }
        return errors;

    };
    const handleSubmit = async (values) => {
        console.log("sumbitted", values)
        const { error } = addpatientSchema.validate(values);
        if (!error) {
            try {

                const appionmentData = await register(values);
                console.log("DATAVALUES", appionmentData);
                const error1 = appionmentData.data.Statuscode;



            }


            catch (err) {
                console.error("Catch", err.Message);
                // alert(data.Message);

            }
        }




    };
    return (
        <>
            <Sidebaradmin>

            </Sidebaradmin>
            <main >
                <div className="container-fluid ">
                    <div className="addpatient">
                        <div className="row ">
                            <div className="col-sm-2"></div>
                            <div className="col-sm-8">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Add Patient</h4>
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
                                                                <label htmlFor="Firstname" className="form-label">
                                                                    First Name<span className="text-primary">*</span>
                                                                </label>
                                                                <Field
                                                                    className="form-control"
                                                                    name="Firstname"
                                                                    placeholder="Enter the your First name"
                                                                />
                                                                <ErrorMessage className="sec1" name="Firstname" />
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6 ">
                                                            <div className="form-group mb-3">
                                                                <label htmlFor="Lastname" className="form-label">
                                                                    Last Name<span className="text-primary">*</span>
                                                                </label>
                                                                <Field
                                                                    className="form-control"
                                                                    name="Lastname"
                                                                    placeholder="Enter the your last name"
                                                                />
                                                                <ErrorMessage className="text-danger" name="Lastname" />
                                                            </div>
                                                        </div>
                                                    </div>



                                                    <div className="row ">
                                                        <div className="col-sm-6 ">
                                                            <div className="form-group mb-3">
                                                                <label htmlFor="Email" className="form-label">
                                                                    Email<span className="text-primary">*</span>
                                                                </label>
                                                                <Field
                                                                    className="form-control"
                                                                    name="Email"
                                                                    type="email"
                                                                    placeholder="Enter the your email"
                                                                />
                                                                <ErrorMessage className="text-primary" name="Email" />
                                                            </div>
                                                        </div>

                                                        {/* Password */}

                                                        <div className="col-sm-6 ">
                                                            <div className="form-group mb-3">
                                                                <label htmlFor="Password" className="form-label">
                                                                    Password<span className="text-primary">*</span>
                                                                </label>
                                                                <Field
                                                                    className="form-control"
                                                                    type="password"
                                                                    name="Password"
                                                                    placeholder="Enter the Your Password"
                                                                />
                                                                <ErrorMessage className="text-primary" name="Password" />
                                                            </div>
                                                        </div>
                                                    </div>


                                                    {/*Confirm Password */}
                                                    <div className="row ">
                                                        <div className="col-sm-6 ">
                                                            <div className="form-group mb-3">
                                                                <label htmlFor="Confirmpassword" className="form-label">
                                                                    Confirm Password<span className="text-primary">*</span>
                                                                </label>
                                                                <Field
                                                                    className="form-control"
                                                                    type="password"
                                                                    name="Confirmpassword"
                                                                    placeholder="Enter the Your Confirmpassword"
                                                                />
                                                                <ErrorMessage className="text-primary" name="Confirmpassword" />
                                                            </div>
                                                        </div>
                                                        {/* phonenumber */}


                                                        <div className="col-sm-6 ">
                                                            <div className="form-group mb-3">
                                                                <label htmlFor="Phonenumber" className="form-label">
                                                                    Phone Number<span className="text-primary">*</span>
                                                                </label>
                                                                <Field
                                                                    className="form-control"
                                                                    type="tel"
                                                                    name="Phonenumber"
                                                                    placeholder="Enter the your Phonenumber"
                                                                />
                                                                <ErrorMessage className="sec1" name="Phonenumber" />
                                                            </div>
                                                        </div>

                                                    </div>

                                                    {/* GENDER */}

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

                                                                <label htmlFor="Dateofbirth" class="form-label">Dateofbirth
                                                                    <span className="text-primary">*</span></label>
                                                                <Field
                                                                    type="Date"
                                                                    name="Dateofbirth"
                                                                    className="form-control"
                                                                    min="12-10-2022"

                                                                />
                                                                <ErrorMessage className="sec1" name="Dateofbirth" />
                                                            </div>
                                                        </div>

                                                        <div className="col-sm-6">
                                                            <div className="form-group mb-3">

                                                                <label htmlFor="Age" class="form-label">Age
                                                                    <span className="text-primary">*</span></label>
                                                                <Field
                                                                    className="form-control"
                                                                    type="number"
                                                                    name="Age"
                                                                    placeholder="Enter Your Age"

                                                                />
                                                                <ErrorMessage className="sec1" name="Age" />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Address */}
                                                    <div className="address">
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

                                                    <div className="row ">
                                                        <div className="col-sm-6 ">
                                                            <div className="form-group mb-3">
                                                                <label htmlFor="City" className="form-label">
                                                                    City<span className="text-primary">*</span>
                                                                </label>
                                                                <Field
                                                                    className="form-control"
                                                                    name="City"
                                                                    placeholder="Enter the your City"
                                                                />
                                                                <ErrorMessage className="text-primary" name="City" />
                                                            </div>
                                                        </div>

                                                        <div className="col-sm-6 ">
                                                            <div className="form-group mb-3">
                                                                <label htmlFor="Pincode" className="form-label">
                                                                    Pincode<span className="text-primary">*</span>
                                                                </label>
                                                                <Field
                                                                    className="form-control"
                                                                    type="pincode"
                                                                    name="Pincode"
                                                                    placeholder="Enter the your Pincode"
                                                                />
                                                                <ErrorMessage className="sec1" name="Pincode" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <hr />
                                                    {/* <div className="footer1">
                                                        <div className="form-group mb-1 ">
                                                            
                                                            <label>
                                                                <Field type="checkbox" name="toggle" />

                                                            </label>




                                                            <label className="form-check-label ms-2 " htmlFor="checkbox">Please
                                                                Confrom</label>
                                                        </div>
                                                    </div>  */}


                                                    <div className="button">
                                                        <div className="form-groups mb-3">

                                                            <button type="submit" className="btn btn-primary " >submit</button>
                                                        </div>
                                                    </div>
                                                    <div className="footer">
                                                        <p >Already have an account?<Link to="/login" className="link">Login</Link></p>
                                                    </div>
                                                </Form>
                                        )

                                            }
                                            }
                                    </Formik>
                                </div>
                                <div className="col-sm-2"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </main >
        </>
    )
}
export default Addpatient;