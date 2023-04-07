import { Formik, Field, Form, ErrorMessage } from "formik";
import Joi from "joi";
import React from "react";
import Sidebaradmin from "./sidebaradmin";
import { addAdminForm } from "../../Services/AdmimmodulesForms.service";

import "../css/admin/adddoctor.css";

const userSchema = Joi.object({
    Adminfirstname: Joi.string().min(6).max(6).required().messages({
        'string.empty': `"Admin Firstname" should be a required`,
        'string.min': ` "Admin Firstname" must minmum 6 character`,
        'string.max': ` "Admin Firstname" must maximum 6 character`,

    }),
    Adminlastname: Joi.string().min(6).max(6).required().messages({
        'string.empty': `"Admin Lastname" should be a required`,
        'string.min': ` "Admin lastname" must minmum 6 character`,
        'string.max': ` "Admin Lastname" must maximum 6 character`,

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
    Confirmpassword: Joi.any().equal(Joi.ref('Password')).messages
        ({
            "any.required": `"" is a required field`,
            'any.only': 'confirm password does not match'
        }),

    Phonenumber: Joi.string().regex(/^[0-9]{10}$/).messages({
        'string.empty': `"phonenumber" should be a required`,
        'string.pattern.base': `Phone number must have 10 digits.`
    }).required(),


    Gender: Joi.string().required(),
    Age: Joi.number().integer().messages({
        'number.empty': `"Age" should be a required`,
    }),
    Dateofbirth: Joi.date().min("2001-01-01").required().messages({
        'string.empty': `"Date of Birth" should be a required`,

    }),
    File: Joi.string().label('image').messages({
        'string.empty': `"File"should be a required`,
    }),

    Address: Joi.string().messages({
        'string.empty': `"Address" should be a required`,
    }),



    toggle: Joi.boolean().default(false),
});

const INTIAL_FORM = {
    Adminfirstname: "",
    Adminlastname: "",
    Email: "",
    Password: "",
    Confirmpassword: "",
    Phonenumber: "",
    Gender: "male",
    Age: "",
    Dateofbirth: "",
    File: "",
    Address: "",
    toggle: "",

};
function AddAdmin() {


    const validate = (values) => {
        console.log("sumbitted12", values)
        const errors = {};
        console.log("ERROR", errors)
        const { error } = userSchema.validate(values);
        if (error) {
            const [err] = error.details;
            errors[err.context.key] = err.message;
        }
        return errors;

    };
    const handleSubmit = async (values, { resetForm }) => {
        console.log("sumbitted", values);
        resetForm({ value: " " });
        const { error } = userSchema.validate(values);
        if (!error) {
            try {
                const { data } = await addAdminForm(values);
                console.log("DOCTORDATA", data);
                alert(data.Message);

            }
            catch {

            }
        }


        // alert(`add-${values}`)



    };
    return (
        <>
            <Sidebaradmin>

            </Sidebaradmin>
            <main >
                <div className="container-fluid ">
                    <div className="adddoctor">
                        <div className="row ">
                            <div className="col-sm-2"></div>
                            <div className="col-sm-8">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Add Admin</h4>
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
                                                                    <label htmlFor="Adminfirstname" className="form-label">
                                                                        Admin FirstName<span className="text-primary">*</span>
                                                                    </label>
                                                                    <Field
                                                                        className="form-control"
                                                                        name="Adminfirstname"
                                                                        placeholder="Enter the your Admin Firstname"
                                                                    />
                                                                    <ErrorMessage className="text-dnager" name="Adminfirstname" />
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-6">
                                                                <div className="form-group mb-3">
                                                                    <label htmlFor="Adminlastname" className="form-label">
                                                                        Admin Lastname<span className="text-primary">*</span>
                                                                    </label>
                                                                    <Field
                                                                        className="form-control"
                                                                        name="Adminlastname"
                                                                        placeholder="Enter the your Admin Lastname"
                                                                    />
                                                                    <ErrorMessage className="text-dnager" name="Adminlastname" />
                                                                </div>
                                                            </div>

                                                        </div>



                                                        <div className="row">
                                                            <div className="col-sm-6">
                                                                <div className="form-group mb-3">
                                                                    <label htmlFor="Email" className="form-label">
                                                                        Email<span className="text-primary">*</span>
                                                                    </label>
                                                                    <Field
                                                                        className="form-control"
                                                                        tpye="email"
                                                                        name="Email"
                                                                        placeholder="Enter Your Eamil"
                                                                    />
                                                                    <ErrorMessage className="text-danger" name="Email" />
                                                                </div>
                                                            </div>

                                                            <div className="col-sm-6 ">
                                                                <div className="form-group mb-3">
                                                                    <label htmlFor="Password" className="form-label">
                                                                        Password<span className="text-primary">*</span>
                                                                    </label>
                                                                    <Field
                                                                        className="form-control"
                                                                        type="password"
                                                                        name="Password"
                                                                        placeholder="Enter the Password"
                                                                    />
                                                                    <ErrorMessage className="text-primary" name="Password" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-sm-6 ">
                                                                <div className="form-group mb-3">
                                                                    <label htmlFor="Confirmpassword" className="form-label">
                                                                        Confirm Password<span className="text-primary">*</span>
                                                                    </label>
                                                                    <Field
                                                                        className="form-control"
                                                                        type="password"
                                                                        name="Confirmpassword"
                                                                        placeholder="Enter the last name"
                                                                    />
                                                                    <ErrorMessage className="text-primary" name="Confirmpassword" />
                                                                </div>
                                                            </div>

                                                            <div className="col-sm-6">
                                                                <div className="form-group mb-3">
                                                                    <label htmlFor="Phonenumber" className="form-label">
                                                                        Phone Number<span className="text-primary ">*</span>
                                                                    </label>
                                                                    <Field
                                                                        className="form-control"
                                                                        type="tel"
                                                                        name="Phonenumber"
                                                                        placeholder="Enter Your Phone Number"
                                                                    />
                                                                    <ErrorMessage className="text-danger" name="Phonenumber" />
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
                                                                    <label htmlFor="Age" className="form-label">
                                                                        Age<span className="text-primary">*</span>
                                                                    </label>
                                                                    <Field
                                                                        className="form-control"
                                                                        type="number"
                                                                        name="Age"
                                                                        placeholder="Enter your Age"
                                                                    />
                                                                    <ErrorMessage className="text-dnager" name="Age" />
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-6">
                                                                <div className="form-group mb-3">
                                                                    <label htmlFor="Dateofbirth" className="form-label">
                                                                        Date Of Birth<span className="text-primary">*</span>
                                                                    </label>
                                                                    <Field
                                                                        className="form-control"
                                                                        type="date"
                                                                        name="Dateofbirth"
                                                                    />
                                                                    <ErrorMessage className="text-dnager" name="Dateofbirth" />
                                                                </div>
                                                            </div>

                                                        </div>

                                                        <div className="mb-4">
                                                            <label htmlFor="File" className="form-label"> File</label>
                                                            <Field
                                                                className="form-control"
                                                                type="file"
                                                                name="File" />
                                                            <ErrorMessage className="text-danger" name="File" />
                                                        </div>

                                                        <div className="col-sm-12">
                                                            <div className="form-group mb-3">
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



                                                        <hr />
                                                        <div className="footer">
                                                            <div className="form-group mb-3 ">
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main >
        </>
    )
}
export default AddAdmin;