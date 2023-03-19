import { Formik, Field, Form, ErrorMessage } from "formik";
import Joi from "joi";
import React from "react";
import { forgot } from "../../Services/auth.services";
import { useHistory } from "react-router-dom";
import Sidenavcreception from "../../containers/Recpetion module/Sidenavreception";


import "../../compoents/css/resetpassword.css";


const userSchema = Joi.object({
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
  // Confirmpassword: Joi.ref('Password'),
  Confirmpassword: Joi.any().equal(Joi.ref('Password')).messages
    ({
      "any.required": `"" is a required field`,
      'any.only': 'confirm password does not match'
    }),
  // .messages({
  //   'string.empty': `"Password" should be a required`,
  // }),
});

const INTIAL_FORM = {
  Email: "",
  Password: "",
  Confirmpassword: "",
};

function RecpetionResetpassword() {
  const history = useHistory();


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
  const handleSubmit = async (values) => {
    console.log("sumbitted", values)
    const { error } = userSchema.validate(values);
    if (!error) {
      try {
        const {data} = await forgot(values);
        console.log("Details", data);

        const errorMessage =data.Message;
        alert(errorMessage);
        history.push("/login");

      }
      catch {

      }
    }


    // alert(`add-${values}`)



  };
  return (
    <>
    <Sidenavcreception/>
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

                        <div className="form-group mb-3">
                          <label htmlfor="Email" className="form-label">Email</label>
                          <Field
                            className="form-control"
                            name="Email"
                            type="email"
                            placeholder="Enter Your Registered Email"
                          />
                          <ErrorMessage className="text-danger" name="Email" />
                        </div>

                        <div className="from-group mb-3">
                          <label htmlfor="Password" className="form-label">New
                            Password</label>
                          <Field
                            className="form-control"
                            type="password"
                            name="Password"
                            placeholder="Enter Your New Password"

                          />
                          <ErrorMessage className="text-danger" name="Password" />
                        </div>

                        <div className="from-group mb-4">
                          <label htmlfor="Confirmpassword" className="form-label">Confirm Password</label>
                          <Field
                            className="form-control"
                            type="password"
                            name="Confirmpassword"
                            placeholder="Enter Your Confirm Password"

                          />
                          <ErrorMessage className="text-danger" name="Confirmpassword" />
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
   
    </>
  );
}


export default RecpetionResetpassword;