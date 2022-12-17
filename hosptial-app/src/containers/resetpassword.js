import { Formik, Field, Form, ErrorMessage } from "formik";
import Joi from "joi";
import React from "react";


import "../compoents/css/resetpassword.css";


const userSchema = Joi.object({

  newpassword: Joi.string().alphanum().min(6).max(10).required().messages({
    'string.empty': `"Password" should be a required`,
    'string.min': ` "Password" must minmum 6 character`,
    'string.max': ` "Password" must maximum 12 character`,
  }),
  confirmpassword:Joi.any().equal(Joi.ref('newpassword')).messages
  ({ "any.required": `"" is a required field` ,
    'any.only': 'confirm password does not match' }),
  // .messages({
  //   'string.empty': `"Password" should be a required`,
  // }),
});

const INTIAL_FORM = {
  newpassword: "",
  confirmpassword: "",
};

function resetpassword() {


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
    <div className="resetpassword">
      <div className="container">

        <div className="row">
          <div className="col-sm-4"></div>
          <div className="col-sm-4 ">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title ">Reset
                  Password</h5>
                <p>Enter your password
                  below, we're just being extra safe</p>

                <Formik
                 initialValues={INTIAL_FORM}
                 validate={validate}
                 onSubmit={handleSubmit}

                >
                  {() => {
                    return (
                      <Form className="mt-4">
                        <div className="from-group mb-3">
                          <label htmlfor="newpassword" className="form-label">New
                            Password</label>
                          <Field
                            className="form-control"
                            type="password"
                            name="newpassword"
                            placeholder="Enter Your New Password"

                          />
                          <ErrorMessage className="text-danger" name="newpassword" />
                        </div>

                        <div className="from-group mb-4">
                          <label htmlfor="confirmpassword" className="form-label">Confirm Password</label>
                          <Field
                            className="form-control"
                            type="password"
                            name="confirmpassword"
                            placeholder="Enter Your Confirm Password"

                          />
                          <ErrorMessage className="text-danger" name="confirmpassword" />
                        </div>

                        <div className="from-group mb-3  ">
                          <div className="group">
                            <button type="submit" className="btn btn-primary">Reset Password</button>
                          </div>
                        </div>
                      </Form>
                    );
                  }}
                </Formik>

              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-4"></div>

      </div>
    </div >
  );
}


export default resetpassword;