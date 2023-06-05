// import { Formik, Field, Form, ErrorMessage } from "formik";
// import Joi from "joi";
// import React from "react";


async function name () {

}
// const userSchema = Joi.object({
//     fname: Joi.string().min(6).max(12).required().messages({
//         'string.empty': `"First name" should be a required`,
//         'string.min': ` "First name" must minmum 6 character`,
//         'string.max': ` "First name" must maximum 12 character`,
//     }),
//     lname: Joi.string().min(6).max(12).required().messages({
//         'string.empty': `"First name" should be a required`,
//         'string.min': ` "First name" must minmum 6 character`,
//         'string.max': ` "First name" must maximum 12 character`,
//     }),
//     email: Joi.string()
//         .email({ tlds: { allow: false } })
//         .required()
//         .messages({
//             'string.empty': `"Email" should be a required`,

//         }),
//     password: Joi.string().alphanum().min(6).max(10).required()
//         .messages({
//             'string.empty': `"Password" should be a required`,
//             'string.min': ` "Password" must minmum 6 character`,
//             'string.max': ` "Password" must maximum 12 character`,
//         }),
//     phonenumber:Joi.string().regex(/^[0-9]{10}$/).messages({
//         'string.empty': `"phonenumber" should be a required`,
//         'string.pattern.base': `Phone number must have 10 digits.`
//     }).required(),


//     date: Joi.date().min("2001-01-01").messages({
//         'date.empty': ` should be a required`,

//     }),
//     toggle:Joi.string().messages({
//         'string.empty': `You must agree before submitting`,

//     }),

// });

// const INTIAL_FORM = {
//     fname: "",
//     lname: "",
//     email: "",
//     password: "",
//     gender: "male",
//     phonenumber: "",
//     date: "",
//     address: "",
//     file:"",
//     pincode: "",
//     toggle: false,

// };

// function Example() {

//     const validate = (values) => {
//         console.log("sumbitted", values)
//         const errors = {};
//         const { error } = userSchema.validate(values);
//         if (error) {
//             const [err] = error.details;
//             errors[err.context.key] = err.message;
//         }
//         return errors;

//     };
//     const handleSubmit = (values) => {
//         console.log("sumbitted", values)
//         const { error } = userSchema.validate(values);
//         if (error) {

//         }


//         // alert(`add-${values}`)



//     };

//     return (
//         <div id="appionment">
//             <div className="section4">
//                 <div className="container-fluid">
//                     <div className="row">
//                         <div className="col-sm-8">
//                             <div className="card">
//                                 <div className="card-body">
//                                     <h4 className="card-title"> Appointment From </h4>
//                                     <hr />
//                                     <Formik
//                                         initialValues={INTIAL_FORM}
//                                         validate={validate}
//                                         onSubmit={handleSubmit}
//                                     >
//                                         {() => {

//                                             return (
//                                                 <Form className="mt-4">
//                                                     <div className="row ">
//                                                         <div className="col-sm-6 ">
//                                                             <div className="form-group mb-3">
//                                                                 <label htmlFor="fname" className="form-label">
//                                                                     First Name<span className="text-primary">*</span>
//                                                                 </label>
//                                                                 <Field
//                                                                     className="form-control"
//                                                                     name="fname"
//                                                                     placeholder="Enter the your First name"
//                                                                 />
//                                                                 <ErrorMessage className="text-primary" name="fname" />
//                                                             </div>
//                                                         </div>
//                                                         <div className="col-sm-6 ">
//                                                             <div className="form-group mb-3">
//                                                                 <label htmlFor="lname" className="form-label">
//                                                                     Last Name<span className="text-primary">*</span>
//                                                                 </label>
//                                                                 <Field
//                                                                     className="form-control"
//                                                                     name="lname"
//                                                                     placeholder="Enter the your last name"
//                                                                 />
//                                                                 <ErrorMessage className="text-primary" name="lname" />
//                                                             </div>
//                                                         </div>
//                                                     </div>



//                                                     <div className="row ">
//                                                         <div className="col-sm-6 ">
//                                                             <div className="form-group mb-3">
//                                                                 <label htmlFor="email" className="form-label">
//                                                                     Email<span className="text-primary">*</span>
//                                                                 </label>
//                                                                 <Field
//                                                                     className="form-control"
//                                                                     name="email"
//                                                                     type="email"
//                                                                     placeholder="Enter the your email"
//                                                                 />
//                                                                 <ErrorMessage className="text-primary" name="email" />
//                                                             </div>
//                                                         </div>

//                                                         {/* CONFIRM EMAIL */}

//                                                         <div className="col-sm-6 ">
//                                                             <div className="form-group mb-3">
//                                                                 <label htmlFor="password" className="form-label">
//                                                                     Password<span className="text-primary">*</span>
//                                                                 </label>
//                                                                 <Field
//                                                                     className="form-control"
//                                                                     type="password"
//                                                                     name="password"
//                                                                     placeholder="Enter the last name"
//                                                                 />
//                                                                 <ErrorMessage className="text-primary" name="password" />
//                                                             </div>
//                                                         </div>
//                                                     </div>


//                                                     {/* GENDER */}

//                                                     <div className="row ">

//                                                         <label htmlFor="gender" className="form-label">Gender
//                                                             <span className="text-primary">*</span></label>

//                                                         <label>

//                                                             <Field type="radio" name="gender" value="male" />
//                                                             Male
//                                                         </label>
//                                                         <label>
//                                                             <Field type="radio" name="gender" value="female" />
//                                                             Female
//                                                         </label>
//                                                         {/* <div className="form-group">

//                                                                 <div role="group" aria-labelledby="my-radio-group">

//                                                                     <Field className="form-check-input" type="radio" name="gender" value="male" />
//                                                                     <label className="form-check-label ms-2" htmlFor="gender">
//                                                                         Male
//                                                                     </label>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                         <div className="col-sm-6 col-md-4">
//                                                             <div className="form-group">

//                                                                 <div role="group" aria-labelledby="my-radio-group">

//                                                                     <Field className="form-check-input" type="radio" name="gender" value="female" />
//                                                                     <label className="form-check-label ms-2" htmlFor="flexRadioDefault1">
//                                                                         Female
//                                                                     </label>

//                                                                 </div>
//                                                             </div>


//                                                         </div> */}
//                                                     </div>


//                                                     {/* phonenumber */}

//                                                     <div className="form-group mb-3">
//                                                         <label htmlFor="phonenumber" className="form-label">
//                                                             Phone Number<span className="text-primary">*</span>
//                                                         </label>
//                                                         <Field
//                                                             className="form-control"
//                                                             type="tel"
//                                                             name="phonenumber"
//                                                             placeholder="Enter the phonenumber"
//                                                         />
//                                                         <ErrorMessage className="text-danger" name="phonenumber" />
//                                                     </div>

//                                                     <div className="form-group">

//                                                         <label htmlFor="date" class="form-label">Date
//                                                             <span className="text-primary">*</span></label>
//                                                         <Field
//                                                             type="date"
//                                                             name="date"
//                                                             className="form-control"

//                                                         />
//                                                         <ErrorMessage className="text-danger" name="date" />
//                                                     </div>



//                                                     <div className="address">
//                                                         <label htmlFor="address" className="form-label"> Address
//                                                             <span className="text-primary">*</span></label>
//                                                         <div className="form-floating mb-3">
//                                                             <Field
//                                                                 className="form-control"
//                                                                 name="address"
//                                                                 placeholder="Enter Your address"
//                                                             />
//                                                             <ErrorMessage className="text-danger" name="address" />
//                                                             <label htmlFor="floatingInput"> Enter your address</label>
//                                                         </div>
//                                                     </div>
//                                                     <div class="mb-4">
//                                     <label htmlFor="file" class="form-label"> File</label>
//                                     <Field
//                                      class="form-control" 
//                                     type="file"
//                                      name="file"
//                                      placeholder="Choice your file"
//                                      />
//                                       <ErrorMessage className="text-primary" name="file" />
//                                 </div>

//                                                     <div className="row ">
//                                                         <div className="col-sm-6 ">
//                                                             <div className="form-group mb-3">
//                                                                 <label htmlFor="city" className="form-label">
//                                                                     City<span className="text-primary">*</span>
//                                                                 </label>
//                                                                 <Field
//                                                                     className="form-control"
//                                                                     name="city"
//                                                                     placeholder="Enter the your city"
//                                                                 />
//                                                                 <ErrorMessage className="text-primary" name="city" />
//                                                             </div>
//                                                         </div>

//                                                         <div className="col-sm-6 ">
//                                                             <div className="form-group mb-3">
//                                                                 <label htmlFor="pincode" className="form-label">
//                                                                     Pincode<span className="text-primary">*</span>
//                                                                 </label>
//                                                                 <Field
//                                                                     className="form-control"
//                                                                     type="number"
//                                                                     name="pincode"
//                                                                     placeholder="Enter the your pincode"
//                                                                 />
//                                                                 <ErrorMessage className="text-primary" name="pincode" />
//                                                             </div>
//                                                         </div>
//                                                     </div>


                                                   

//                                                     <hr />
//                                                     <div className="footer">
//                                                         <div className="form-group ">
//                                                             {/* <div id="checkbox-group">Checked1</div> */}
//                                                             <label>
//                                                                 <Field type="checkbox" name="toggle" />
//                                                                 <ErrorMessage className="text-primary" name="toggle" />

//                                                             </label>




//                                                             <label className="form-check-label ms-2" htmlFor="checkbox">Please
//                                                                 Confrom</label>
//                                                         </div>
//                                                     </div>




//                                                     <div className="form-group">
//                                                         <button type="reset" className="btn btn-primary"
//                                                         >reset</button>
//                                                         {" "}
//                                                         <button type="submit" className="btn btn-primary" >submit</button>
//                                                     </div>
//                                                 </Form>
//                                             )
//                                         }
//                                         }

//                                     </Formik>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div >
//     );


// };
// export default Example;

