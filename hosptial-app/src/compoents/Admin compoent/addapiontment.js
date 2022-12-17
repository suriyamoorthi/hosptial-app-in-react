import { Formik, Field, Form, ErrorMessage } from "formik";
import Joi from "joi";
import React from "react";
import Sidebaradmin from "./sidebaradmin";
import "../css/admin/addappiontment.css";

const userSchema = Joi.object({
    patientname: Joi.string().min(6).max(6).required().messages({
        'string.empty': `" patientname" should be a required`,
        'string.min': ` " patientname" must minmum 6 character`,
        'string.max': ` " patientname" must maximum 6 character`,

    }),

    department: Joi.string().required(),

    doctorname: Joi.string().min(6).max(6).required().messages({
        'string.empty': `" doctorname" should be a required`,
        'string.min': ` " doctorname" must minmum 6 character`,
        'string.max': ` " doctorname" must maximum 6 character`,

    }),
    appiontmentdate: Joi.date().min("2001-01-01").required().messages({
        'string.empty': `"Date" should be a required`,

    }),

    timeslot: Joi.string().required(),

    tokennumber: Joi.number().integer().messages({
        'number.empty': `"tokennumber" should be a required`,
    }),

    problem: Joi.string().messages({
        'string.empty': `"problem" should be a required`,
    }),
    
    formfile: Joi.string().label('image').messages({
        'string.empty':`"File"should be a required`,
    }),
   
    toggle: Joi.boolean().default(false),
});


const INTIAL_FORM = {
    patientname: "",
    department: [],
    doctorname: "",
    appiontmentdate: "",
    timeslot: [],
    tokennumber: "",
    problem: "",
    formfile: "",
    toggle: "",

};
function Addappiontment() {

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
    const handleSubmit = (values) => {
        console.log("sumbitted", values)
        const { error } = userSchema.validate(values);
        if (!error) {
             console.log("ADDAPPIONTMENT")
        }
        else{
            console.log("APPIONMENT ERROR", error)
        }


        // alert(`add-${values}`)



    };
    return (
        <>
            <Sidebaradmin>

            </Sidebaradmin>
            <main >
                <div className="container-fluid ">
                    <div className="addappiontment">
                        <div className="row ">
                            <div className="col-sm-2"></div>
                            <div className="col-sm-8">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Add Appiontment</h4>
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
                                                                <div className="form mb-3">
                                                                    <label htmlFor="patientname" className="form-label">
                                                                        Patient Name<span className="text-primary">*</span>
                                                                    </label>
                                                                    <Field
                                                                        className="form-control"
                                                                        name="patientname"
                                                                        placeholder="Enter the your Patient name"
                                                                    />
                                                                    <ErrorMessage className="text" name="patientname" />
                                                                </div>
                                                            </div>

                                                            <div className="col-sm-6">
                                                                <div className="from-group mb-3 ">
                                                                    <label htmlFor="department" className="form-label">Department
                                                                        <span className="text-primary">*</span></label>
                                                                    {/* <Field
                                                                        className="form-select"
                                                                        component="select"
                                                                        name="department"
                                                                        aria-label="Default select example"
                                                                    // multiple={true}
                                                                    > */}
                                                                        <Field as="select" name="department" className="form-select">
                                                                        <option value=" Department "> -- Select Department -- </option>
                                                                            <option value="red">Red</option>
                                                                            <option value="green">Green</option>
                                                                            <option value="blue">Blue</option>
                                                                        </Field>

                                                                </div>

                                                            </div>

                                                        </div>

                                                        <div className="row">
                                                            <div className="col-sm-6">
                                                                <div className="form-group mb-3">
                                                                    <label htmlFor="doctorname" className="form-label">
                                                                        Doctor Name<span className="text-primary">*</span>
                                                                    </label>
                                                                    <Field
                                                                        className="form-control"
                                                                        name="doctorname"
                                                                        placeholder="Enter the your Doctor name"
                                                                    />
                                                                    <ErrorMessage className="text-danger" name="doctorname" />
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-6">
                                                                <div className="form-group mb-3">
                                                                    <label htmlFor="appiontmentdate" className="form-label">Appiontment Date
                                                                        <span className="text-primary">*</span></label>
                                                                    <Field
                                                                        type="date"
                                                                        name="appiontmentdate"
                                                                        className="form-control"

                                                                    />
                                                                    <ErrorMessage className="text-danger" name="appiontmentdate" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-sm-6">
                                                                <div className="from-group mb-3 ">
                                                                    <label htmlFor="timeslot" className="form-label">Time Slot
                                                                        <span className="text-primary">*</span></label>
                                                                    <Field
                                                                        className="form-select"
                                                                        component="select"
                                                                        name="timeslot"
                                                                        aria-label="Default select example"
                                                                    // multiple={true}
                                                                    >
                                                                        <option value="10AM-11AM">10AM-11AM</option>
                                                                        <option value="11AM-12PM">11AM-12PM</option>
                                                                        <option value="12PM-1PM">12PM-1PM</option>
                                                                        <option value="1PM-2AM">1PM-2AM</option>
                                                                        <option value="2AM-3PM">2AM-3PM</option>
                                                                        <option value="4PM-5PM">4PM-5PM</option>
                                                                        <option value="5PM-6PM">5PM-6PM</option>
                                                                        <option value="6PM-7PM">6PM-7PM</option>
                                                                        <option value="7PM-8PM">7PM-8PM</option>
                                                                    </Field>

                                                                </div>
                                                            </div>

                                                            <div className="col-sm-6">

                                                                <div className="form-group mb-3">
                                                                    <label htmlFor="tokennumber" className="form-label">
                                                                        Token Number(Auto Generated)<span className="text-primary">*</span>
                                                                    </label>
                                                                    <Field
                                                                        className="form-control"
                                                                        name="tokennumber"
                                                                        type="number"
                                                                        placeholder="Enter the your token number"
                                                                    />
                                                                    <ErrorMessage className="text-danger" name="tokennumber" />

                                                                </div>


                                                            </div>
                                                        </div>

                                                        <div className="problem">
                                                            <label htmlFor="problem" className="form-label">Problem
                                                                <span className="text-primary">*</span></label>
                                                            <div className="form-floating mb-3">
                                                                <Field
                                                                    className="form-control"
                                                                    name="problem"
                                                                    placeholder="Enter Your problem"
                                                                />
                                                                <ErrorMessage className="text-danger" name="problem" />
                                                                <label htmlFor="floatingInput"> Enter your Problem</label>
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
export default Addappiontment;