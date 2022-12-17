import { Formik, Field, Form, ErrorMessage } from "formik";
import Joi from "joi";
import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import Navigation from "../compoents/navigation";

import "../compoents/css/login.css";
const userSchema = Joi.object({

  //Set Item
  //Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      'string.empty': `"Email" should be a required`,
      'string.email': `"Email" should be a vaildemail`,

    }),
  password: Joi.string().min(6).max(10).required()
    .messages({
      'string.empty': `"Password" should be a required`,
      'string.min': ` "Password" must minmum 6 character`,
      'string.max': ` "Password" must maximum 10 character`,
    }),
  toggle: Joi.boolean().default(false),
});

const INTIAL_FORM = {

  email: "",
  password: "",
  toggle: "",

};
function login() {




  const validate = (value) => {
    // const errors = {};
    // const valid = userSchema.validate(value);
    // console.log(valid);
    console.log("sumbitted12", value)
    const errors = {};
    console.log("errors", errors);
    const { error } = userSchema.validate(value);
    if (error) {
      const [err] = error.details;

      errors[err.context.key] = err.message

    }
    return errors;

  };
  const handleSubmit = (value) => {
    console.log("sumbitted", value)
    const { error } = userSchema.validate(value);
    // console.log(error);

    if (!error) {

      //  if(INTIAL_FORM.email === "doctor@gmail.com")
      //  {
      //    console.log("Doctor",INTIAL_FORM.email);

      //  }else if(INTIAL_FORM.email === "reception"){
      //   console.log("reception")
      //  }
      console.log("DOCTOR")


    } else {
      console.log("error3124235", error)
    }



  };
  return (


    <div className="login  ">
      <div className="container" >

        <div className="row">
          <div className="col-sm-4"></div>
          <div className="col-sm-4 ">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title mb-3">LOGIN</h5>

                <div class="image">
                  <img src="/image/login-icon.jpg" alt="..."  />
                </div>
                <Formik
                  initialValues={INTIAL_FORM}
                  validate={validate}
                  onSubmit={handleSubmit}
                >
                  {() => {
                    return (
                      <Form className="mt-4">

                        <div className="form-group mb-3">
                          <label htmlFor="email" className="form-label">
                            Email<span className="text-primary">*</span>
                          </label>
                          <Field
                            className="form-control"
                            type="email"
                            name="email"
                            placeholder="Enter the email"
                          />
                          <ErrorMessage className="text-danger" name="email" />
                        </div>
                        <div className="form-group mb-3">
                          <label htmlFor="password" className="form-label">
                            Password<span className="text-primary">*</span>
                          </label>
                          <Field
                            className="form-control "
                            type="password"
                            name="password"
                            placeholder="Enter the last name"
                          />
                          <ErrorMessage className="text-primary" name="password" />
                        </div>
                        <div className="footer">
                          <div className="form-group mb-3 ">

                            <label>
                              <Field type="checkbox" name="toggle" />

                            </label>
                            <label className="form-check-label ms-2" htmlFor="checkbox">Remembar me?</label>
                          </div>
                        </div>


                        <div className="from-group mb-3 " >
                          <div className="group">
                            <button type="submit" className="btn btn-primary"
                            >Submit</button>
                          </div>
                        </div>
                        {/* onClick={ handleSubmit} */}

                        <div className="link" >
                          <Link to="/forgotpassword" className="linked">Forgot Password?</Link>
                        </div>
                      </Form>
                    );
                  }}
                </Formik>

              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4"></div>

      </div>

    </div>




  );
}

export default login;