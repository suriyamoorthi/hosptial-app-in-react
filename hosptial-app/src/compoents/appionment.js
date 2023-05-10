import { Formik, Field, Form, ErrorMessage } from "formik";
import Joi from "joi";
import React from "react";
import { useHistory } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import { register } from "../Services/auth.services";



import "../compoents/css/appionment.css";


const userSchema = Joi.object({
    Firstname: Joi.string().required().messages({
        'string.empty': `"First name" should be a required`,


    }),
    Lastname: Joi.string().required().messages({
        'string.empty': `"Last name" should be a required`,

    }),
    Email: Joi.string()
        .email({ tlds: { allow: false } })
        .required()
        .messages({
            'string.empty': `"Email" should be a required`,
            'string.email': `"Email" should be a vaildemail`,

        }),
    Password: Joi.string().alphanum().min(6).max(10).required().messages({
        'string.empty': `"Password" should be a required`,
        'string.min': ` "Password" must minmum 6 character`,
        'string.max': ` "Password" must maximum 12 character`,
    }),
    Confirmpassword: Joi.ref('Password'),


    Phonenumber: Joi.string().regex(/^[0-9]{10}$/).messages({
        'string.empty': `"phonenumber" should be a required`,
        'string.pattern.base': `Phone number must have 10 digits.`
    }).required(),

    Gender: Joi.string().required(),


    Dateofbirth: Joi.date().required().messages({
        'string.empty': `"Date" should be a required`,

    }),
    Age: Joi.number().messages({
        'number.empty': `"Age" should be a required`,
    }),


    Address: Joi.string().messages({
        'string.empty': `"address" should be a required`,
    }),

    City: Joi.string().messages({
        'string.empty': `"Date" should be a required`,

    }),
    Pincode: Joi.string().length(6).required().messages({
        'string.empty': `"pincode" should be a required`,
        'string.length': `pincode must have 6 digits.`,


    }),



   
});

const INTIAL_FORM = {
    Firstname: "",
    Lastname: "",
    Email: "",
    Password: "",
    Confirmpassword: "",
    Phonenumber: "",
    Gender: "male",
    Dateofbirth: "",
    Age: "",
    Address: "",
    City: "",
    Pincode: "",
    toggle: "",

};

function Appionment() {

    const histroy = useHistory();

    const validate = (values) => {
        console.log("sumbitted12", values)
        const errors = {};
        console.log("Error", errors)
        const { error } = userSchema.validate(values);
        if (error) {
            const [err] = error.details;
            errors[err.context.key] = err.message;
        }
        return errors;

    };

    const handleSubmit = async (values) => {
        console.log("sumbitted", values)
        const { error } = userSchema.validate(values);
        if (!error) {
            try {

                const appionmentData = await register(values);
                console.log("DATAVALUES", appionmentData);
                const error1 = appionmentData.data.Statuscode;
                if (error1 == 200) {
                    alert(appionmentData.data.Message);
                    histroy.push("/login");
                }
                else {
                    alert(appionmentData.data.Message);

                }


            }


            catch (err) {
                console.error("Catch", err.Message);
                // alert(data.Message);

            }
        }




    };

    return (
        <div id="appionment">
            <div className="section4">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title mb-3" > Appointment Regisation From </h4>
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

export default Appionment;