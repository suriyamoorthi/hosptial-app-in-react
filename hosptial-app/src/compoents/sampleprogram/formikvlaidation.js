import { Formik, Field, Form, ErrorMessage } from "formik";
import Joi from "joi";
import React from "react";


const userSchema = Joi.object({
    fname: Joi.string().min(6).max(12).required()
      .messages({
        'string.empty': `"First name" should be a required`,
        'string.min':` "First name" must minmum 6 character`,
        'string.max':` "First name" must maximum 12 character`,
      }),
    lname: Joi.string().min(6).max(12).required()
     .messages({
        'string.empty': `"First name" should be a required`,
        'string.min':` "First name" must minmum 6 character`,
        'string.max':` "First name" must maximum 12 character`,
      }),
    username: Joi.string().alphanum().required()
     .messages({
        'string.empty': `"User name" should be a required`,
        
      }),
    email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
        'string.empty': `"Email" should be a required`,
        
      }),
    password: Joi.string().alphanum().min(6).max(10).required()
    .messages({
        'string.empty': `"Password" should be a required`,
        'string.min':` "Password" must minmum 6 character`,
        'string.max':` "Password" must maximum 12 character`,
      }),
    avatar: Joi.string().uri().required() 
      .messages({
        'string.empty': `"Avatar URL" should be a required`,
        
      }),
   date: Joi.date().min("2001-01-01").required()
   .messages({
    'string.empty': `"Date" should be a required`,
    
  }),

});
const INTIAL_FORM = {
    fname: "",
    lname: "",
    username: "",
    email: "",
    password: "",
    date: "",
    avatar: "",
    checked: "",
    picked: "",
    toggle: false,
    vname: "",
};

function Formikvlaidation() {
  
    const validate =(value) => {
      console.log("sumbitted12", value)
      const errors = {};
      console.log("errors",errors);
      const { error } = userSchema.validate(value);
      if (error) {
        const [err] = error.details;
       
        errors[err.context.key] = err.message
        
      }
      return errors;
   

    };
    const handleSubmit = (value) => {
       
        const{ error }= userSchema.validate(value);
        if (!error){
          console.log("sumbitted123" ,value)
        }else{
          console.log("sumbitted123" ,value)
        }
     
        // alert(`add-${values}`)
      
       

    };
   
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-12">
                    <div className="card">
                        <div className="card-body">
                            <Formik
                            initialValues={INTIAL_FORM}
                            validate={validate}
                            onSubmit={handleSubmit}
                            >
                                {()=>{

                                    return(
                                        <Form className="mt-4">
                                            <div className="form-group">
                                               <label htmlFor="fname">
                                                First Name<span className="text-danger">*</span>
                                               </label>
                                               <Field
                                               className="form-control"
                                               name="fname"
                                               placeholder="Enter the first name"
                                               />
                                               <ErrorMessage className="text-primary"name="fname"/>
                                            </div>
                                            <br/>

                                            <div className="form-group">
                                               <label htmlFor="lname">
                                               Last Name<span className="text-danger">*</span>
                                               </label>
                                               <Field
                                               className="form-control"
                                               name="lname"
                                               placeholder="Enter the last name"
                                               />
                                               <ErrorMessage className="text-danger" name="lname"/>
                                            </div>
                                            <br/>
                                            <div className="form-group">
                                               <label htmlFor="username">
                                               Username Name<span className="text-danger">*</span>
                                               </label>
                                               <Field
                                               className="form-control"
                                               name="username"
                                               placeholder="Enter the first name"
                                               />
                                               <ErrorMessage className="text-danger"name="username"/>
                                            </div>
                                            <br/>
                                            <div className="form-group">
                                               <label htmlFor="email">
                                               Email<span className="text-danger">*</span>
                                               </label>
                                               <Field
                                               className="form-control"
                                               type="email"
                                               name="email"
                                               placeholder="Enter the email"
                                               />
                                               <ErrorMessage className="text-danger"name="email"/>
                                            </div>
                                            <br/>
                                            <div className="form-group">
                                               <label htmlFor="password">
                                               Password<span className="text-danger">*</span>
                                               </label>
                                               <Field
                                               className="form-control"
                                               type="password"
                                               name="password"
                                               placeholder="Enter the password"
                                               />
                                               <ErrorMessage className="text-danger"name="password"/>
                                            </div>
                                            <br/>

                                            <div className="form-group">
                                             
                                                 <label>Date</label>
                                                 <Field
                                                    type="date"
                                                    name="date"
                                                    className="form-control"
                  
                                                  />
                                             <ErrorMessage className="text-danger" name="date"/>
                                            </div>




                                            <div className="form-group"> 
                                             <div id="checkbox-group">Checked</div>
                                                <div role="group" aria-labelledby="checkbox-group">
                                                  <label>
                                                 <Field type="checkbox" name="checked" value="One" />
                                                      One
                                                  </label>
                                                  <label>
                                                 <Field type="checkbox" name="checked" value="Two" />
                                                   Two
                                                    </label>
                                                          <label>
                                                  <Field type="checkbox" name="checked" value="Three" />
                                                   Three
                                                      </label>
                                                </div>
                                             
                                            </div>
                                            <br/>
                                         <div className="form-group"> 
                                            <div id="my-radio-group">Picked</div>
                                            <div role="group" aria-labelledby="my-radio-group">
                                              <label>
                                              <Field type="radio" name="picked" value="One" />
                                                      One
                                                </label>
                                              <label>
                                              <Field type="radio" name="picked" value="Two" />
                                                      Two
                                                </label>
                                            </div>
                                          </div>                                  
                                            <br/>
                                            

                                            <div className="form-group">
                                               <label htmlFor="avatar">
                                               Avatar URL<span className="text-danger">*</span>
                                               </label>
                                               <Field
                                               className="form-control"
                                               type="url"
                                               name="avatar"
                                               placeholder="Enter the first name"
                                               />
                                               <ErrorMessage className="text-danger"name="avatar"/>
                                            </div>
                                            <div className="col-sm-6 ">
                                                                <div className="from-group mb-3 ">
                                                                    <label htmlFor="gender" class="form-label">Gender
                                                                        <span className="text-primary">*</span></label>
                                                                    <Field
                                                                        className="form-select"
                                                                        component="select"
                                                                        name="gender"
                                                                        aria-label="Default select example"
                                                                    // multiple={true}
                                                                    >
                                                                        <option value="Male">Male</option>
                                                                        <option value="Female">Female</option>
                                                                        <option value="Other">Other</option>
                                                                    </Field>

                                                                </div>

                                                            </div>
                                            <br/>

                                            <div className="form-group"> 
                                            <div id="checkbox-group">Checked1</div>
                                            <label>
                                          <Field type="checkbox" name="toggle" />
           
                                           </label>

                                            </div>                                  
                                            <br/>
                                         
                                            <div className="form-group">
                                            <button type="reset" className="btn btn-primary">reset</button>
                                            {" "}
                                            <button type="submit" className="btn btn-primary" >submit</button>
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
    );
};
export default Formikvlaidation;





// import { Formik, Field, Form, ErrorMessage } from "formik";
// import Joi from "joi";
// import React from "react";


// const userSchema = Joi.object({
//     fname: Joi.string().min(6).max(12).required(),
//     lname: Joi.string().required(),
//     username: Joi.string().alphanum().required(),
//     password: Joi.string().alphanum().min(6).max(10).required(),
//     email: Joi.string()
//         .email({ tlds: { allow: false } })
//         .required(),
//     avatar: Joi.string().uri().required(),

// });
// const INTIAL_FORM = {
//     fname: "",
//     lname: "",
//     username: "",
//     password: "",
//     email: "",
//     avatar: "",
// };

// function Patient() {
//     const validate = (values) => {
//         const errors = {};
//         const { error } = userSchema.validate(values);
//         if (error) {
//             const [err] = error.details;
//             errors[err.context.key] = err.message;
//         }
//         return errors;

//     };
//     const handleSumbit = (values) => {
//         const { error } = userSchema.validate(values);
//         if (!error) {

//         }
       

//     };

//     return (
//         <div className="container-fluid">
//             <div className="row">
//                 <div className="card">
//                     <div className="card-body">
//                         {/* <h5 className="card-title" ></h5> */}
//                         <Formik
//                             initialvalues={INTIAL_FORM}
                            // validate={validate}
                            // onSumbit={handleSumbit}
//                            >

//                             {() => {
//                                 return (
//                                     <Form className="mt-4">
//                                         <div className="from-group">
//                                             <label htmlFor="fname" >First name
//                                                 <span className="text-primary ">*</span>
//                                             </label>
//                                             <Field
//                                                 className="form-control"
//                                                 name="fname"
//                                                 placeholder="Enter Your Frist Name" 
//                                                 />
//                                             <ErrorMessage className="text-danger" name="fname" />
//                                         </div>
//                                         <br/>
//                                         <div className="from-group">
//                                             <label htmlFor="lname" >Last name
//                                                 <span className="text-primary ">*</span>
//                                             </label>
//                                             <Field
//                                                 className="form-control"
//                                                 name="lname"
//                                                 placeholder="Enter Your Last Name" />
//                                             <ErrorMessage className="text-danger" name="lname" />
//                                         </div>
// <br/>
//                                         <div className="from-group">
//                                             <label htmlFor="username" >Username
//                                                 <span className="text-primary ">*</span>
//                                             </label>
//                                             <Field
//                                                 className="form-control"
//                                                 name="username"
//                                                 placeholder="Enter Your Username" />
//                                             <ErrorMessage className="text-danger" name="username" />
//                                         </div>
//                                         <br/>
//                                         <div className="from-group">
//                                             <label htmlFor="password" >Password
//                                                 <span className="text-primary ">*</span>
//                                             </label>
//                                             <Field
//                                                 className="form-control"
//                                                 type="password"
//                                                 name="password"

//                                                 placeholder="Enter Your password" />
//                                             <ErrorMessage className="text-danger" name="password" />
//                                         </div>
//                                         <br/>
//                                         <div className="from-group">
//                                             <label htmlFor="email" >Email
//                                                 <span className="text-primary ">*</span>
//                                             </label>
//                                             <Field
//                                                 className="form-control"
//                                                 type="email"
//                                                 name="email"
                                               
//                                                 placeholder="Enter Your email" />
//                                             <ErrorMessage className="text-danger" name="email" />
//                                         </div>
//                                         <br/>
//                                         <div className="from-group">
//                                             <label htmlFor="avatar" >Avatar
//                                                 <span className="text-primary ">*</span>
//                                             </label>
//                                             <Field
//                                                 className="form-control"
//                                                 type="url"
//                                                 name="avatar"
//                                                 placeholder="Enter Your avatar" />
//                                             <ErrorMessage className="text-danger" name="avatar" />
//                                         </div>
//                                         <br/>
                                        // <div className="form-group">
                                        //     <button type="reset" className="btn btn-primary"
                                        //     >reset</button>
                                        //     {" "}
                                        //     <button type="submit" className="btn btn-primary" >submit</button>
                                        // </div>
//                                     </Form>
//                                 );
//                             }}

//                         </Formik>

//                     </div>
//                 </div>

//             </div>
//         </div>

//     );
// }
// export default Patient;