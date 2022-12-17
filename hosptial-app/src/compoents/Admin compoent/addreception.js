import { Formik, Field, Form, ErrorMessage } from "formik";
import Joi from "joi";
import React from "react";
import Sidebaradmin from "./sidebaradmin";

import "../css/admin/addreception.css";

const userSchema = Joi.object({
    receptionname: Joi.string().min(6).max(6).required().messages({
        'string.empty': `"Reception name" should be a required`,
        'string.min': ` "Reception name" must minmum 6 character`,
        'string.max': ` "Reception name" must maximum 6 character`,

    }),
    dateofbirth: Joi.date().min("2001-01-01").required().messages({
        'string.empty': `"Date of Birth" should be a required`,

    }),
    age: Joi.number().messages({
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
        'string.empty':`"File"should be a required`,
    }),

    toggle: Joi.boolean().default(false),
});


const INTIAL_FORM = {
    receptionname: "",
    dateofbirth: "",
    age: "",
    phonenumber: "",
    email: "",
    gender: "male",
    address: "",
    formfile: "",
    toggle: "",

};
function Addreception() {

    const validate = (values) => {
        console.log("sumbitted12", values)
        const errors = {};
        console.log(errors);
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
            console.log("ADDRECPTION")

        }


        // alert(`add-${values}`)



    };
    return (
        <>
            <Sidebaradmin>

            </Sidebaradmin>
            <main >
                <div className="container-fluid ">
                    <div className="addreception">
                        <div className="row ">
                            <div className="col-sm-2"></div>
                            <div className="col-sm-8">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Add Recpetion</h4>
                                        <hr />
                                        <Formik
                                            initialValues={INTIAL_FORM}
                                            validate={validate}
                                            onSubmit={handleSubmit}
                                        >
                                            {() => {
                                                return (
                                                    <Form >
                                                        <div className="row">
                                                            <div className="col-sm-6">
                                                                <div className="form-group mb-3">
                                                                    <label htmlFor="receptionname" className="form-label">
                                                                        Reception Name<span className="text-primary">*</span>
                                                                    </label>
                                                                    <Field
                                                                        className="form-control"
                                                                        name="receptionname"
                                                                        placeholder="Enter the your Reception name"
                                                                    />
                                                                    <ErrorMessage className="sec1" name="receptionname" />
                                                                </div>
                                                            </div>

                                                            <div className="col-sm-6">
                                                                <div className="form-group mb-3">

                                                                    <label htmlFor="dateofbirth" className="form-label">Date Of Birth
                                                                        <span className="text-primary">*</span></label>
                                                                    <Field
                                                                        type="date"
                                                                        name="dateofbirth"
                                                                        className="form-control"

                                                                    />
                                                                    <ErrorMessage className="sec1" name="dateofbirth" />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="row">
                                                            <div className="col-sm-6">
                                                                <div className="form-group mb-3">
                                                                    <label htmlFor="age" className="form-label">
                                                                        Age<span className="text-primary">*</span>
                                                                    </label>
                                                                    <Field
                                                                        className="form-control"
                                                                        name="age"
                                                                        type="number"
                                                                        placeholder="Enter the your age"
                                                                    />
                                                                    <ErrorMessage className="sec1" name="age" />
                                                                </div>
                                                            </div>


                                                            <div className="col-sm-6">
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
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-sm-6">
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

                                                            <div className="col-sm-6">
                                                                <div className="from-group mb-3 ">
                                                                    <label htmlFor="gender" className="form-label">Gender
                                                                        <span className="text-primary">*</span></label>
                                                                    <Field
                                                                        className="form-select"
                                                                        component="select"
                                                                        name="gender"
                                                                        aria-label="Default select example"
                                                                    // multiple={true}
                                                                    >
                                                                        <option value="Male">Male</option>
                                                                        <option value="Female">Female</option>
                                                                        <option value="Other">Other</option>
                                                                    </Field>

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
                                                                <ErrorMessage className="sec1" name="address" />
                                                                <label htmlFor="floatingInput"> Enter your address</label>
                                                            </div>
                                                        </div>
                                                        
                                                        <div className="mb-4">
                                                            <label htmlFor="formfile" className="form-label"> File</label>
                                                            <Field
                                                                className="form-control"
                                                                type="file"
                                                                name="formfile" />
                                                            <ErrorMessage className="text-danger" name="formfile" />
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

                                                        <div className="form-group1 mb-3 ">

                                                            {/* <button type="reset" className="btn btn-primary ms-2"
                                                        >reset</button>
                                                        {" "} */}
                                                            <button type="submit" className="btn btn-primary " >submit</button>
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
export default Addreception;