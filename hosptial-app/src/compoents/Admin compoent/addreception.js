import { Formik, Field, Form, ErrorMessage } from "formik";
import Joi from "joi";
import React from "react";
import Sidebaradmin from "./sidebaradmin";
import { addReceptionForm } from "../../Services/AdmimmodulesForms.service";

import "../css/admin/addreception.css";


const userSchema = Joi.object({
    Receptionfirstname: Joi.string().min(6).max(6).required().messages({
        'string.empty': `"Reception firstname" should be a required`,
        'string.min': ` "Reception firstname" must minmum 6 character`,
        'string.max': ` "Reception firstname" must maximum 6 character`,

    }),
    Receptionlastname: Joi.string().min(6).max(6).required().messages({
        'string.empty': `"Reception lastname" should be a required`,
        'string.min': ` "Reception lastname" must minmum 6 character`,
        'string.max': ` "Reception lastname" must maximum 6 character`,

    }),
    Email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
        'string.empty': `"Email" should be a required`,
        'string.email': `"Email" should be a vaildemail`,

    }),

    Password: Joi.string().min(6).max(10).required()
    .messages({
      'string.empty': `"Password" should be a required`,
      'string.min': ` "Password" must minmum 6 character`,
      'string.max': ` "Password" must maximum 10 character`,
    }),
    Confirmpassword: Joi.any().equal(Joi.ref('Password')).messages
    ({
      "any.required": `"" is a required field`,
      'any.only': 'confirm password does not match'
    }),

    Phonenumber: Joi.string().regex(/^[0-9]{10}$/).messages({
        'string.empty': `"phone number" should be a required`,
        'string.pattern.base': `Phone number must have 10 digits.`
    }).required(),

    Dateofbirth: Joi.date().min("2001-01-01").required().messages({
        'string.empty': `"Date of Birth" should be a required`,

    }),
    Age: Joi.number().messages({
        'number.empty': `"Age" should be a required`,
    }),
   

    Gender: Joi.string().required().messages({
        'string.empty': `"Gender" should be a required`,

    }),
    

    Address: Joi.string().messages({
        'string.empty': `"address" should be a required`,
    }),

    File: Joi.string().label('image').messages({
        'string.empty': `"File"should be a required`,
    }),

    toggle: Joi.boolean().default(false),
});


const INTIAL_FORM = {
    Receptionfirstname: "",
    Receptionlastname: "",
    Email:"",
    Password:"",
    Confirmpassword:"",
    Phonenumber: "",
    Dateofbirth: "",
    Age:"",
    Gender: "male",
    Address: "",
    File: "",
    toggle: "",

};
function Addreception() {

    const validate = (values) => {
        console.log("sumbitted12", values)
        const errors = {};
        console.log("ERROR",errors);
        const { error } = userSchema.validate(values);
        if (error) {
            const [err] = error.details;
            errors[err.context.key] = err.message;
        }
        return errors;

    };
    const handleSubmit = async(values,{resetForm}) => {
        console.log("sumbitted", values);
        resetForm({value:''});
        const { error } = userSchema.validate(values);
        if (!error) {
            try{ 
                const receptionData =await addReceptionForm(values);
                console.log("RECEPTIONDATA",receptionData);

              const errorMessage = receptionData.data.Message;
              alert(errorMessage);

            }
            catch{

            }


            // console.log("ADDRECPTION")

        }


        



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
                                                                    <label htmlFor="Receptionfirstname" className="form-label">
                                                                        Reception FirstName<span className="text-primary">*</span>
                                                                    </label>
                                                                    <Field
                                                                        className="form-control"
                                                                        name="Receptionfirstname"
                                                                        placeholder="Enter the your Reception Firstname"
                                                                    />
                                                                    <ErrorMessage className="sec1" name="Receptionfirstname" />
                                                                </div>
                                                            </div>

                                                            <div className="col-sm-6">
                                                                <div className="form-group mb-3">

                                                                    <label htmlFor="Receptionlastname" className="form-label">Reception Lastname
                                                                        <span className="text-primary">*</span></label>
                                                                    <Field

                                                                        name="Receptionlastname"
                                                                        className="form-control"
                                                                        placeholder="Enter the your Reception Lastname"

                                                                    />
                                                                    <ErrorMessage className="sec1" name="Receptionlastname" />
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
                                                                        name="Email"
                                                                        type="email"
                                                                        placeholder="Enter the your Email"
                                                                    />
                                                                    <ErrorMessage className="text-primary" name="Email" />
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
                                                                        Phone Number<span className="text-primary">*</span>
                                                                    </label>
                                                                    <Field
                                                                        className="form-control"
                                                                        type="tel"
                                                                        name="Phonenumber"
                                                                        placeholder="Enter the phonenumber"
                                                                    />
                                                                    <ErrorMessage className="sec1" name="Phonenumber" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-sm-6">
                                                                <div className="form-group mb-3">

                                                                    <label htmlFor="Dateofbirth" className="form-label">Date Of Birth
                                                                        <span className="text-primary">*</span></label>
                                                                    <Field
                                                                        type="date"
                                                                        name="Dateofbirth"
                                                                        className="form-control"

                                                                    />
                                                                    <ErrorMessage className="sec1" name="Dateofbirth" />
                                                                </div>
                                                            </div>

                                                            <div className="col-sm-6">
                                                                <div className="form-group mb-3">

                                                                    <label htmlFor="Age" className="form-label">Age
                                                                        <span className="text-primary">*</span></label>
                                                                    <Field
                                                                        type="number"
                                                                        name="Age"
                                                                        className="form-control"
                                                                        placeholder="Enter the Age"

                                                                    />
                                                                    <ErrorMessage className="sec1" name="Age" />
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

                                                        <div className="mb-4">
                                                            <label htmlFor="File" className="form-label"> File</label>
                                                            <Field
                                                                className="form-control"
                                                                type="file"
                                                                name="File" />
                                                            <ErrorMessage className="text-danger" name="File" />
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