import { Formik, Field, Form, ErrorMessage } from "formik";
import Joi from "joi";
import React from "react";
import Sidebaradmin from "./sidebaradmin";
import { addDoctorForm } from "../../Services/AdmimmodulesForms.service";

import "../css/admin/adddoctor.css";

const userSchema = Joi.object({
    Doctorfirstname: Joi.string().min(6).max(6).required().messages({
        'string.empty': `"Doctor Firstname" should be a required`,
        'string.min': ` "Doctor Firstname" must minmum 6 character`,
        'string.max': ` "Doctor Firstname" must maximum 6 character`,

    }),
    Doctorlastname: Joi.string().min(6).max(6).required().messages({
        'string.empty': `"Doctor Lastname" should be a required`,
        'string.min': ` "Doctor lastname" must minmum 6 character`,
        'string.max': ` "Doctor Lastname" must maximum 6 character`,

    }),
    Department: Joi.string().required().messages({
        'string.empty': `Alleast select one "Department" `,

    }),
    Exprience: Joi.number().integer().messages({
        'number.empty': `"Exprience" should be a required`,
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
    
    Age: Joi.number().messages({
        'number.empty': `"Age" should be a required`,
    }),

    Dateofbirth: Joi.date().min("2001-01-01").required().messages({
        'string.empty': `"Date of Birth" should be a required`,

    }),

    Doctordetails: Joi.string().messages({
        'string.empty': `"Doctor Details" should be a required`,
    }),
    Address: Joi.string().messages({
        'string.empty': `"Address" should be a required`,
    }),

    File: Joi.string().label('image').messages({
        'string.empty': `"File"should be a required`,
    }),

    toggle: Joi.boolean().default(false),
});

const INTIAL_FORM = {
    Doctorfirstname: "",
    Doctorlastname: "",
    Department: [],
    Exprience: "",
    Email: "",
    Password: "",
    Confirmpassword: "",
    Phonenumber: "",
    Gender: "male",
    Age: "",
    Dateofbirth: "",
    Doctordetails: "",
    Address: "",
    File: "",
    toggle: "",

};
function Adddoctor() {


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
        resetForm({ value: '' });
        const { error } = userSchema.validate(values);
        if (!error) {
            try {
                const doctorData = await addDoctorForm(values);
                console.log("DOCTORDATA", doctorData);

                const errorMessage = doctorData.data.Message;
                alert(errorMessage);
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
                                        <h4 className="card-title">Add Doctor</h4>
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
                                                                    <label htmlFor="Doctorfirstname" className="form-label">
                                                                        Doctor FirstName<span className="text-primary">*</span>
                                                                    </label>
                                                                    <Field
                                                                        className="form-control"
                                                                        name="Doctorfirstname"
                                                                        placeholder="Enter the your Doctor Firstname"
                                                                    />
                                                                    <ErrorMessage className="text-dnager" name="Doctorfirstname" />
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-6">
                                                                <div className="form-group mb-3">
                                                                    <label htmlFor="Doctorlastname" className="form-label">
                                                                        Doctor Lastname<span className="text-primary">*</span>
                                                                    </label>
                                                                    <Field
                                                                        className="form-control"
                                                                        name="Doctorlastname"
                                                                        placeholder="Enter the your Doctor Lastname"
                                                                    />
                                                                    <ErrorMessage className="text-dnager" name="Doctorlastname" />
                                                                </div>
                                                            </div>

                                                        </div>

                                                        <div className="row">
                                                            <div className="col-sm-6">
                                                                <div className="form-group mb-3 ">
                                                                    <label htmlFor="Department" className="form-label">Department
                                                                        <span className="text-primary">*</span></label>
                                                                    <Field as="select" name="Department" className="form-select" >
                                                                        <option value=" Department "> -- Select Department -- </option>
                                                                        <option value="Ortho">Ortho</option>
                                                                        <option value="Neutro">Neutro</option>
                                                                        <option value="General">General</option>
                                                                    </Field>
                                                                    <ErrorMessage className="text-dnager" name="Department" />

                                                                </div>
                                                            </div>
                                                            <div className="col-sm-6">
                                                                <div className="form-group mb-3">
                                                                    <label htmlFor="xEprience" className="form-label">
                                                                        Exprience<span className="text-primary">*</span>
                                                                    </label>

                                                                    <Field
                                                                        className="form-control"
                                                                        type="number"
                                                                        name="Exprience"
                                                                        placeholder="Enter Your Exprience"
                                                                    />
                                                                    <ErrorMessage className="text-dnager" name="Exprience" />
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
                                                                        placeholder="Enter Your Age"
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
                                                        <div className="row ">
                                                            <div className="form-group mb-3">
                                                                <label htmlFor="File" className="form-label"> File</label>
                                                                <Field
                                                                    className="form-control"
                                                                    type="file"
                                                                    name="File" />
                                                                <ErrorMessage className="text-danger" name="File" />
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-sm-6">
                                                                <div className="form-group mb-3">
                                                                    <label htmlFor="Doctordetails" className="form-label"> Doctor Details
                                                                        <span className="text-primary">*</span></label>
                                                                    <div className="form-floating mb-3">
                                                                        <Field
                                                                            className="form-control"
                                                                            name="Doctordetails"
                                                                            placeholder="Enter Your Doctor Details"
                                                                        />
                                                                        <ErrorMessage className="sec1" name="Doctordetails" />
                                                                        <label htmlFor="floatingInput"> Enter your Doctor Details
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-6">
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
export default Adddoctor;