import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import Joi from "joi";
import { assginDoctorlist } from "../../Services/User.service";
import { assginDoctorForPostUser } from "../../Services/User.service";
import Sidenavreception from "../../containers/Recpetion module/Sidenavreception";



import "../css/Reception/Assigndoctor.css";


const userSchema = Joi.object({
    Doctorfullname: Joi.string().min(1).required().messages({
        'string.empty': `" Doctorfullname" Atleast select one name`,
        'string.min': ` " Doctorfullname" Atleast select one name`,

    }),
    Department: Joi.string().min(1).required().messages({
        'string.empty': `" Department" should be a required`,


    }),
    Temperature: Joi.string().required().messages({
        'string.empty': `"Temperature" should be a required`,

    }),
    Bp: Joi.string().required().messages({
        'string.empty': `"Bp" should be a required`,

    }),

    Weight: Joi.string().required().messages({
        'string.empty': `"Weight" should be a required`,

    }),
    Height: Joi.string().required().messages({
        'string.empty': `"Height" should be a required`,

    }),
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


    Phonenumber: Joi.string().regex(/^[0-9]{10}$/).messages({
        'string.empty': `"phonenumber" should be a required`,
        'string.pattern.base': `Phone number must have 10 digits.`
    }).required(),

    Gender: Joi.string().required(),


    Date: Joi.date().required().messages({
        'string.empty': `"Date" should be a required`,

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
    Doctorfullname: "",
    // Department: "",
    Temperature: "",
    Bp: "",
    Weight: "",
    Height: "",
    Firstname: "",
    Lastname: "",
    Email: "",
    Date: "",
    Phonenumber: "",
    Gender: "male",
    Date: "",
    Address: "",
    City: "",
    Pincode: "",

};



function Assigndoctor() {
    const [options, setOptions] = useState([]);
    const history = useHistory();
    const location = useLocation();
    const OnePageaData = () => {

        const searchParams = new URLSearchParams(location.search);
        const data = searchParams.get("data");
        console.log("DATA VALUE", data);
        if (data) {
            const parsedData = JSON.parse(data);
            console.log("PARSEING DATA", parsedData);
            INTIAL_FORM.Firstname = parsedData.Firstname;
            INTIAL_FORM.Lastname = parsedData.Lastname;
            INTIAL_FORM.Email = parsedData.Email;
            INTIAL_FORM.Gender = parsedData.Gender;
            INTIAL_FORM.Phonenumber = parsedData.Phonenumber;
            INTIAL_FORM.Date = parsedData.Date;
            INTIAL_FORM.Address = parsedData.Address;
            INTIAL_FORM.City = parsedData.City;
            INTIAL_FORM.Pincode = parsedData.Pincode;

            console.log("ok");
        }
        else {
            console.log("404");
        }


    }

    const GetAssginDoctorData = async () => {

        const { data } = await assginDoctorlist();
        INTIAL_FORM.Department = data.Department
        ;
        console.log("INTIAL_FORM.Department", INTIAL_FORM.Department);

        setOptions(data);
        console.log("ASSGIN DOCTOR REACT", data);







    }


    const validate = (values,) => {
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

    const handleSubmit = async (values, { resetForm }) => {
        console.log("sumbitted", values)
        resetForm({ value: "" });
        const { error } = userSchema.validate(values);
        if (!error) {


            try {

                const { data } = await assginDoctorForPostUser(values);

                console.log("ASSGIN DOCTOR FORM", data);
                alert(data.Message);


            }
            catch {

            }


        }




    };
    useEffect(() => {
        console.log("useEffect");
        OnePageaData();
        GetAssginDoctorData();

    }, []);

    return (

        <>
            <Sidenavreception />
            <main className="assigndoctor">
                <div className="container-fluid mt-5 mb-5">
                    <div className="row">
                        <div className="col-sm-1"></div>
                        <div className="col-sm-10">
                            <div className="card">
                                <div className="card-body">

                                    <h5 className="card-title"> Assigndoctor</h5>
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
                                                        <div className="col-sm-6"></div>
                                                        <div className="col-sm-6">
                                                            <div className="from-group mb-3 ">
                                                                <label htmlFor="Doctorfullname" className="form-label">Doctor Name
                                                                    <span className="text-primary">*</span></label>
                                                                <Field
                                                                    className="form-select"
                                                                    component="select"
                                                                    name="Doctorfullname"
                                                                    aria-label="Default select example"
                                                                // multiple={true}
                                                                >
                                                                    <option value=" Select a fruit "> -- Choose the Doctor -- </option>
                                                                    {options.map((option) => (
                                                                        <option value={option.Doctorfullname}>{option.Doctorfullname}</option>
                                                                    ))}

                                                                </Field>
                                                                <ErrorMessage className="text-primary" name="Doctorfullname"></ErrorMessage>

                                                            </div>
                                                        </div>
                                                        {/* <div className="col-sm-6"></div>
                                                        <div className="col-sm-6">
                                                            <div className="form-group mb-3">
                                                                <label htmlFor="Department" className="form-label">
                                                                    Department <span className="text-primary">*</span>
                                                                </label>
                                                                <Field
                                                                    className="form-control"
                                                                    name="Department"
                                                                    placeholder="Enter your Department"
                                                                />
                                                                <ErrorMessage className="text-primary" name="Department" />
                                                            </div>
                                                        </div> */}
                                                        <hr />

                                                        <h5 className="card-title mb-3 mt-1"> Patient Vatils</h5>

                                                        <hr />
                                                        <div className="col-sm-6">
                                                            <div className="form-group mb-3">
                                                                <label htmlFor="Temperature" className="form-label"> Temperature
                                                                    <span className="text-primary">*</span>
                                                                </label>
                                                                <Field
                                                                    className="form-control"
                                                                    name="Temperature"
                                                                    placeholder="Enter your Temperature"
                                                                />
                                                                <ErrorMessage className="sec1" name="Temperature" />
                                                            </div>

                                                        </div>
                                                       
                                                        <div className="col-sm-6 ">
                                                            <div className="form-group mb-3">
                                                                <label htmlFor="Bp" className="form-label">
                                                                    Bp<span className="text-primary">*</span>
                                                                </label>
                                                                <Field
                                                                    className="form-control"
                                                                    name="Bp"
                                                                    placeholder="Enter the your First name"
                                                                />
                                                                <ErrorMessage className="sec1" name="Bp" />
                                                            </div>
                                                        </div>

                                                        <div className="col-sm-6">
                                                            <div className="form-group mb-3">
                                                                <label htmlFor="Weight" className="form-label">Weight
                                                                    <span className="text-primary">*</span>
                                                                </label>
                                                                <Field
                                                                    className="form-control"
                                                                    name="Weight"
                                                                    placeholder="Enter your Weight"
                                                                />
                                                                <ErrorMessage className="text-primary" name="Weight" />

                                                            </div>
                                                        </div>

                                                        <div className="col-sm-6 mb-3">
                                                            <div className="form-group">
                                                                <label htmlFor="Height" className="form-label">Height
                                                                    <span className="text-primary" >*</span>
                                                                </label>

                                                                <Field
                                                                    className="form-control"
                                                                    name="Height"
                                                                    placeholder="Enter your Height"
                                                                />
                                                                <ErrorMessage className="text-danger" name="Height" />
                                                            </div>
                                                        </div>
                                                        <hr />


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
                                                                    readOnly={true}
                                                                    placeholder="Enter the your email"
                                                                />
                                                                <ErrorMessage className="text-primary" name="Email" />
                                                            </div>
                                                        </div>
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

                                                    <div className="row ">
                                                        <div className="col-sm-6">

                                                            <div className="form-group mb-3">

                                                                <label htmlFor="Date" class="form-label">Date
                                                                    <span className="text-primary">*</span></label>
                                                                <Field
                                                                    type="Date"
                                                                    name="Date"
                                                                    className="form-control"
                                                                    readOnly={true}
                                                                // min="12-10-2022"
                                                                // placeholder="yyyy-mm-dd"

                                                                />
                                                                <ErrorMessage className="sec1" name="Date" />
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6">

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


                                                    <div className="form-group mb-3 " >
                                                        <div className="group">
                                                            <button type="submit" className="btn btn-primary"
                                                            >Submit</button>
                                                        </div>
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

                <div className="col-sm-1"></div>



            </main >
        </>
    )
}

export default Assigndoctor;