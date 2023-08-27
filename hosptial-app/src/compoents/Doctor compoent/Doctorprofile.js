import { useEffect ,useState} from "react";
import { Formik, Field, ErrorMessage, Form } from "formik";
import Joi from "joi";

import Sidenavdoctor from "./Sidenavdoctor";
import { DoctorprofileUpdate } from "../../Services/Profiles.service";
import { getDoctorProfiledetails } from "../../Services/Profiles.service";


import "../css/Doctor/Doctorprofile.css";


const FORM_VLAUES = {

    Doctorfirstname: "",
    Doctorlastname: "",
    Email: "",
    Age:"",
    // Department: "",
    // Exprience:"",
    Gender: "male",
    Phonenumber: "",
    Dateofbirth: "",
    File: "",
    Doctordetails:"",
    Address: "",


}
const prifileSchema = Joi.object({
    Doctorfirstname: Joi.string().min(6).max(6).required().messages({
        'string.empty': `"First name" should be a required`,
        // 'string.min': ` "First name" must minmum 6 character`,
        // 'string.max': ` "First name" must maximum 6 character`,

    }),
    Doctorlastname: Joi.string().min(6).max(12).required().messages({
        'string.empty': `" Doctor lastname" should be a required`,
        // 'string.min': ` " Doctor lastname" must minmum 6 character`,
        // 'string.max': ` " Doctor lastname" must maximum 12 character`,
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
    // Department: Joi.string().required().messages({
    //     'string.empty': `"Department" should be a required`,

    // }),


    Gender: Joi.string().required(),


    Phonenumber: Joi.string().regex(/^[0-9]{10}$/).messages({
        'string.empty': `"phonenumber" should be a required`,
        'string.pattern.base': `Phone number must have 10 digits.`
    }).required(),

    Dateofbirth: Joi.date().required().messages({
        'string.empty': `"Date" should be a required`,

    }),

    File: Joi.string().label('image').messages({
        'string.empty': `"File"should be a required`,
    }),

    Doctordetails: Joi.string().messages({
        'string.empty': `" Doctordetails" should be a required`,
    }),
    Address: Joi.string().messages({
        'string.empty': `"Address" should be a required`,
    }),



});

const validate = (values) => {
    console.log("sumbitted12", values)
    const errors = {};
    console.log("Error", errors)
    const { error } = prifileSchema.validate(values);
    if (error) {
        const [err] = error.details;
        errors[err.context.key] = err.message;
    }
    return errors;

};


function Doctorprofile() {

    const [doctorData , SetDoctorData] =useState(FORM_VLAUES)

    const GetSeesionDoctorData = async () => {

        var data = await getDoctorProfiledetails();
        console.log("DATAVALUES", data);
       const DoctorProfiledata = data[0]
        
       doctorData.Doctorfirstname = DoctorProfiledata.Doctorfirstname;
       doctorData.Doctorlastname = DoctorProfiledata.Doctorlastname;
       doctorData.Email = DoctorProfiledata.Email;
       doctorData.Age = DoctorProfiledata.Age;
       doctorData.Gender = DoctorProfiledata.Gender;
       doctorData.Phonenumber = DoctorProfiledata.Phonenumber;
       doctorData.Dateofbirth = DoctorProfiledata.Dateofbirth;
       doctorData.Doctordetails = DoctorProfiledata.Doctordetails;
       doctorData.Address = DoctorProfiledata.Address;
      
       
    //    FORM_VLAUES.Gender = DoctorProfiledata.Gender;
       SetDoctorData(DoctorProfiledata );

    };
 
    const handleSubmit = async (values,{resetForm}) => {
        console.log("sumbitted", values);
        resetForm({ value: "" });
        const { error } = prifileSchema.validate(values);
        if (!error) {
            try {
                const { data } = await DoctorprofileUpdate(values);
                console.log("PROFILE DATA", data);
                alert(data.Message);
    
            }
            catch {
    
            }
            console.log("PATIENT APPIONMENT")
            console.log("sumbitted", values)
    
        }
    
    
       
    
    
    
    };

    useEffect(()=>{
        console.log("DOCTOR USeEFFECT");
        GetSeesionDoctorData();
    }, []);

    return (
        <>
            <Sidenavdoctor />
            <main className="doctorprofile">
              
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-3"></div>
                            <div className="col-sm-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title"> Profile</h4>
                                        <hr />
                                        <Formik
                                            initialValues={FORM_VLAUES}
                                            validate={validate}
                                            onSubmit={handleSubmit}
                                        >

                                            {() => {
                                                return (
                                                    <Form className="mt-4">
                                                        <div className="row">
                                                            <div className="col-sm-6">
                                                                <div className="form-group mb-3">
                                                                    <label htmlFor="Doctorfirstname" className="form-label">Doctor Firstname
                                                                        <span className="text-primary">*</span>
                                                                    </label>
                                                                    <Field
                                                                        className="form-control"
                                                                        name="Doctorfirstname"
                                                                        // value={doctorData.Doctorfirstname}
                                                                        placeholder="Enter Your Doctorfirstname"
                                                                    />
                                                                    <ErrorMessage className="text-danger" name="Doctorfirstname" />
                                                                </div>
                                                            </div>

                                                            <div className="col-sm-6">
                                                                <div className="form-group mb-3">
                                                                    <label htmlFor="Doctorlastname" className="form-label">Doctor Lastname
                                                                        <span className="text-primary">*</span>
                                                                    </label>
                                                                    <Field
                                                                        className="form-control"
                                                                        name="Doctorlastname"
                                                                        // value={doctorData.Doctorlastname}
                                                                        placeholder="Enter Your Last name"
                                                                    />
                                                                    <ErrorMessage className="text-danger" name="Doctorlastname" />
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
                                                                        type="email"
                                                                        // value={doctorData.Email}
                                                                        readOnly={true}
                                                                        placeholder="Enter Your Email"
                                                                    />
                                                                    <ErrorMessage className="text-danger" name="Email" />
                                                                </div>
                                                            </div>

                                                            <div className="col-sm-6">
                                                                <div className="from-group mb-3">
                                                                    <label htmlFor="Age" className="form-label">Age
                                                                        <span className="text-primary">*</span>
                                                                    </label>
                                                                    <Field
                                                                        className="form-control"
                                                                        name="Age"
                                                                        type="number"
                                                                        // value={doctorData.Age}
                                                                        placeholder="Enter Your Age"
                                                                    />
                                                                    <ErrorMessage className="text-danger" name="Age" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* <div className="row">
                                                            <div className="col-sm-6">
                                                                <div className="form-group mb-3">
                                                                    <label htmlFor=" Department" className="form-label"> Department
                                                                        <span className="text-primary">*</span>
                                                                    </label>
                                                                    <Field
                                                                        className="form-control"
                                                                        name="Department"
                                                                        placeholder="Enter Your  Department"
                                                                    />
                                                                    <ErrorMessage className="text-danger" name=" Department" />
                                                                </div>
                                                            </div>

                                                            <div className="col-sm-6">
                                                                <div className="from-group mb-3">
                                                                    <label htmlFor="Age" className="form-label">Age
                                                                        <span className="text-primary">*</span>
                                                                    </label>
                                                                    <Field
                                                                        className="form-control"
                                                                        name="Age"
                                                                        type="number"
                                                                        placeholder="Enter Your Age"
                                                                    />
                                                                    <ErrorMessage className="text-danger" name="Age" />
                                                                </div>
                                                            </div>
                                                        </div> */}
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
                                                                    <label htmlFor="Phonenumber" className="form-label">Phone Number
                                                                        <span className="text-primary">*</span> </label>
                                                                    <Field
                                                                        className="form-control"
                                                                        name="Phonenumber"
                                                                        // value={doctorData.Phonenumber}
                                                                        type="tel"
                                                                        placeholder="Enter Your Phonenumber"
                                                                    />
                                                                    <ErrorMessage className="text-danger" name="Phonenumber" />
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
                                                                        // value={doctorData.Dateofbirth}
                                                                        type="date"
                                                                        placeholder="Enter Your Dateofbirth"
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


                                                        <div className="address">
                                                            <label htmlFor="Doctordetails" className="form-label">Doctordetails
                                                                <span className="text-primary">*</span></label>
                                                            <div className="form-floating mb-3">
                                                                <Field
                                                                    className="form-control"
                                                                    name="Doctordetails"
                                                                    // value={doctorData.Doctordetails}
                                                                    placeholder="Enter Your  Doctordetails"
                                                                />
                                                                <ErrorMessage className="text-danger" name="Doctordetails" />
                                                                <label htmlFor="floatingInput"> Enter your  Doctordetails</label>
                                                            </div>
                                                        </div>


                                                        <div className="address">
                                                            <label htmlFor="Address" className="form-label"> Address
                                                                <span className="text-primary">*</span></label>
                                                            <div className="form-floating mb-3">
                                                                <Field
                                                                    className="form-control"
                                                                    name="Address"
                                                                    // value={doctorData.Address}
                                                                    placeholder="Enter Your address"
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
                
            </main>
        </>
    );
}

export default Doctorprofile;
