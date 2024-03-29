import { Formik, Field, Form, ErrorMessage } from "formik";
import Joi from "joi";
import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { userLogin } from "../Services/auth.services";
import { useHistory } from "react-router-dom";

import "../compoents/css/login.css";
const userSchema = Joi.object({


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
  toggle: Joi.boolean().default(false).required().messages({
    ' boolean.empty': `"Password" should be a required`,
  })
});

const INTIAL_FORM = {

  Email: "",
  Password: "",
  toggle: "",

};
function Login() {
  const history = useHistory();

  const validate = (values) => {
    console.log("sumbitted12", values)
    const errors = {};
    console.log("errors", errors);
    const { error } = userSchema.validate(values);
    if (error) {
      const [err] = error.details;

      errors[err.context.key] = err.message

    }
    return errors;

  };
  const handleSubmit = async (values) => {
    console.log("sumbitted", values)
    const { error } = userSchema.validate(values);


    if (!error) {

      try {

        const { data } = await userLogin(values);
        console.log("USERLOGIN", data);
        alert(data.Message);
      
  
        // const emailValues = JSON.stringify(data.Data[0]);
         const emailValues = JSON.stringify(data.Data);
        console.log("emailValues", emailValues);

        const getvalues = data.Data[0].Usertype;

        console.log("ADDDD", getvalues);
        // sessionStorage.setItem("UserDetail", emailValues);
        if (getvalues === 1) {
          window.sessionStorage.setItem("PatientToken",emailValues);
          history.push("/Patientappionment");

        }
        else if (getvalues === 2) {

          window.sessionStorage.setItem("DoctorToken",emailValues);
          history.push("/overview");

        }
        else if (getvalues === 3) {

          window.sessionStorage.setItem("ReceptionToken",emailValues);
          history.push("/Receptionoverview");

        }
        else if (getvalues === 4) {

          window.sessionStorage.setItem("AdminToken",emailValues);
          history.push("/addreception");

        }
        else {
          alert(data.Message);
        }



      }
      catch (err) {
        
        console.log(error.message);
      }

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

                <div className="image">
                  <img src="/image/login-icon.jpg" alt="..." />
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
                          <label htmlFor="Email" className="form-label">
                            Email<span className="text-primary">*</span>
                          </label>
                          <Field
                            className="form-control"
                            type="email"
                            name="Email"
                            placeholder="Enter the Email"
                          />
                          <ErrorMessage className="text-danger" name="Email" />
                        </div>
                        <div className="form-group mb-3">
                          <label htmlFor="Password" className="form-label">
                            Password<span className="text-primary">*</span>
                          </label>
                          <Field
                            className="form-control "
                            type="password"
                            name="Password"
                            placeholder="Enter the last name"
                          />
                          <ErrorMessage className="text-primary" name="Password" />
                        </div>
                        <div className="footer">
                          <div className="form-group mb-3 ">

                            <label>
                              <Field type="checkbox" name="toggle" />

                            </label>
                            <label className="form-check-label ms-2" htmlFor="checkbox">Remember Me?</label>

                          </div>
                          <ErrorMessage className="text-danger" name="toggle" />
                        </div>

                        {/* <label className="text-danger">{result12.data.Message}</label> */}

                        <div className="from-group mb-3 " >
                          <div className="group">
                            <button type="submit" className="btn btn-primary"
                            >Submit</button>
                          </div>
                        </div>
                        {/* onClick={ handleSubmit} */}

                        <div className="link" >
                          <Link to="/Resetpassword" className="linked">Forgot Password?</Link>
                          
                        </div>
                        <div className="link2" >
                         <p>Don't have an account? <Link to="/#appionment" className="linked2">Registration</Link></p>
                          
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

export default Login;