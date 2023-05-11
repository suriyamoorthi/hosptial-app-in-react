
import React, { useEffect } from "react";
import Joi from "joi";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Sidebaradmin from "./sidebaradmin";
import{AdminProfileUpdate, getAdminDataDetails}from "../../Services/Profiles.service";





import "../css/admin/Myprofile.css";
import { useState } from "react";

const INTIAL_PROFILEVALUES = {
    Adminfirstname: "",
    Adminlastname: "",
    Email: "",
    Phonenumber: "",
    Gender: "male",
    Age: "",
    Dateofbirth: "",
    File: "",
    Address: "",


}
const prifileSchema = Joi.object({
    Adminfirstname: Joi.string().min(6).max(6).required().messages({
        'string.empty': `"Admin firstname" should be a required`,
        'string.min': ` "Admin firstname" must minmum 6 character`,
        'string.max': ` "Admin firstname" must maximum 6 character`,

    }),
    Adminlastname: Joi.string().min(6).max(12).required().messages({
        'string.empty': `"Admin lastname" should be a required`,
        'string.min': ` "Admin lastname" must minmum 6 character`,
        'string.max': ` "Admin lastname" must maximum 12 character`,
    }),


    Email: Joi.string()
        .email({ tlds: { allow: false } })
        .required()
        .messages({
            'string.empty': `"Email" should be a required`,
            'string.email': `"Email" should be a vaildemail`,

        }),
    Age: Joi.number().integer().messages({
        'number.empty': `"Age" should be a required`,
    }),


    Gender: Joi.string().required(),


    Phonenumber: Joi.string().regex(/^[0-9]{10}$/).messages({
        'string.empty': `"phonenumber" should be a required`,
        'string.pattern.base': `Phone number must have 10 digits.`
    }).required(),

    Dateofbirth: Joi.date().min("2001-01-01").required().messages({
        'string.empty': `"Date" should be a required`,

    }),

    File: Joi.string().label('image').messages({
        'string.empty': `"File"should be a required`,
    }),


    Address: Joi.string().messages({
        'string.empty': `"Address" should be a required`,
    }),







    toggle: Joi.boolean().default(false),
});

  const validate = (values) => {
    console.log("sumbitted12", values)
    const errors = {};
    console.log("Error",errors)
    const { error } =  prifileSchema.validate(values);
    if (error) {
        const [err] = error.details;
        errors[err.context.key] = err.message;
    }
    return errors;

};

function Myprofile() {
    const [admindata ,Setadmindata] =useState(INTIAL_PROFILEVALUES );

    const GetAdminSessionData =async()=>{
        const AdminData =await getAdminDataDetails();
        console.log("AdminData",AdminData);
        const AdminProfileData = AdminData[0] 
       
       
         INTIAL_PROFILEVALUES.Gender = AdminData[0].Gender;
        Setadmindata(AdminProfileData);

    }


    const handleSubmit = async(values) => {
        console.log("sumbitted", values)
        const { error } = prifileSchema.validate(values);
        if (!error) {
           const {data}=await AdminProfileUpdate(values);
           console.log("DATA,",data);
           alert(data.Message);
        }


        // alert(`add-${values}`)



    };
   
useEffect(()=>{
    console.log("ADMIN USEEFFECT");
    GetAdminSessionData();

}, []);
    return (

        <>
            <Sidebaradmin>

            </Sidebaradmin>
            <main >
                <div className="myprofile">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-3"></div>
                            <div className="col-sm-6">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="card-title"> Profile</div>
                                        <hr />
                                        <Formik
                                            initialValues={INTIAL_PROFILEVALUES}
                                            validate={validate}
                                            onSubmit={handleSubmit}
                                        >

                                            {() => {
                                                return (
                                                    <Form className="mt-4">
                                                        <div className="row">
                                                            <div className="col-sm-6">
                                                                <div className="form-group mb-3">
                                                                    <label htmlFor="Adminfirstname" className="form-label">Admin Firstname
                                                                        <span className="text-primary">*</span>
                                                                    </label>
                                                                    <Field
                                                                        className="form-control"
                                                                        name="Adminfirstname"
                                                                        value={admindata.Adminfirstname}
                                                                        placeholder="Enter Your Adminfirstname"
                                                                    />
                                                                    <ErrorMessage className="text-danger" name="Adminfirstname" />
                                                                </div>
                                                            </div>

                                                            <div className="col-sm-6">
                                                                <div className="form-group mb-3">
                                                                    <label htmlFor="Adminlastname" className="form-label">Admin Lastname
                                                                        <span className="text-primary">*</span>
                                                                    </label>
                                                                    <Field
                                                                        className="form-control"
                                                                        name="Adminlastname"
                                                                        value={admindata.Adminlastname}
                                                                        placeholder="Enter Your Last name"
                                                                    />
                                                                    <ErrorMessage className="text-danger" name="Adminlastname" />
                                                                </div>
                                                            </div>
                                                        </div>


                                                        <div className="row">
                                                            <div className="col-sm-6">
                                                                <div className="form-group mb-3">
                                                                    <label htmlFor="Email" className="form-label">Email
                                                                        <span className="text-primary">*</span>
                                                                    </label>
                                                                    <Field
                                                                        className="form-control"
                                                                        name="Email"
                                                                        type="Email"
                                                                        value={admindata.Email}
                                                                        placeholder="Enter Your Email"
                                                                    />
                                                                    <ErrorMessage className="text-danger" name="email" />
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-6">
                                                                <div className="form-group mb-3">
                                                                    <label htmlFor="Phonenumber" className="form-label">Phone Number
                                                                        <span className="text-primary">*</span> </label>
                                                                    <Field
                                                                        className="form-control"
                                                                        name="Phonenumber"
                                                                        type="tel"
                                                                        value={admindata.Phonenumber}
                                                                        placeholder="Enter Your Phonenumber"
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
                                                                <div classname="form-group mb-3">
                                                                    <label htmlFor="Age" className="form-label" >Age
                                                                        <span className="text-primary">*</span></label>
                                                                    <Field
                                                                        className="form-control"
                                                                        name="Age"
                                                                        type="number"
                                                                        value={admindata.Age}
                                                                        placeholder="Enter Your Age"
                                                                    />
                                                                    <ErrorMessage className="text-danger" name="Age" />

                                                                </div>
                                                            </div>
                                                            <div className="col-sm-6">
                                                                <div className="form-group mb-3">
                                                                    <label htmlFor="Dateofbirth" className="form-label"> Dateofbirth
                                                                        <span className="text-primary">*</span>
                                                                    </label>
                                                                    <Field
                                                                        className="form-control"
                                                                        name="Dateofbirth"
                                                                        type="date"
                                                                        value={admindata.Dateofbirth}
                                                                        placeholder="Enter Your Date"
                                                                    />
                                                                    <ErrorMessage className="text-danger" name="Dateofbirth" />
                                                                </div>
                                                            </div>

                                                         
                                                        </div>

                                                        <div className="row">


                                                            <div className="form-group mb-3">

                                                                <label htmlFor="File" className="form-label"> File</label>
                                                                <Field
                                                                    className="form-control"
                                                                    type="file"
                                                                    name="File" />
                                                                <ErrorMessage className="text-danger" name="File" />

                                                            </div>

                                                        </div>


                                                        <div className="Address">
                                                            <label htmlFor="address" className="form-label"> Address
                                                                <span className="text-primary">*</span></label>
                                                            <div className="form-floating mb-3">
                                                                <Field
                                                                    className="form-control"
                                                                    name="Address"
                                                                    value={admindata.Address}
                                                                    placeholder="Enter Your Address"
                                                                />
                                                                <ErrorMessage className="text-danger" name="Address" />
                                                                <label htmlFor="floatingInput"> Enter your address</label>
                                                            </div>
                                                        </div>

                                                        <hr />
                                                       
                                                        <div className="button">
                                                            <div className="form-groups mb-3">

                                                                <button type="submit" className="btn btn-primary " >submit</button>
                                                            </div>
                                                        </div>





                                                    </Form>

                                                )
                                            }}
                                        </Formik>


                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3"></div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Myprofile;