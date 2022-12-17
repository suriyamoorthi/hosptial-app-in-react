import { useState, useEffect } from "react";

function Fromjs() {
    const initialValues = { username: "", email: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
       
       



    };
    useEffect(() => {
        console.log( "fromerror",formErrors);
        if    (Object.keys(formErrors).length === 0 && isSubmit) {
           
            console.log( "from values",formValues);
            // if( initialValues.email ==="doctor@gmail.com")
            // {
            //     console.log(initialValues.email);
            // }

        }
        else{
            console.log( "from Error123",formErrors);
        }

        
    }, [formErrors]);

    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.username) {
            errors.username = "Username is required!";
        }
        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }
        if (!values.password) {
            errors.password = "Password is required";
        } else if (values.password.length < 4) {
            errors.password = "Password must be more than 4 characters";
        } else if (values.password.length > 10) {
            errors.password = "Password cannot exceed more than 10 characters";
        }
        return errors;
    };
    // console.log(errors);

    return (
                    <div className="container">
                        {/* <pre>{JSON.stringify(userInfo, undefined, 2)}</pre> */}
                        {/* <form onSubmit={handleSubmit(OnSubmit)}> */}
                            <h1>Registration Form</h1>
                            {/* {Object.keys(formErrors).length === 0 && isSubmit ? (
                                <div className="ui message success">Signed in successfully</div>
                            ) : (
                                <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
                            )} */}
        
                            <form onSubmit={handleSubmit}>
                                <h1>Login Form</h1>
                                <div className="ui divider"></div>
                                <div className="ui form">
                                    <div className="field">
                                        <input
                                            type="text"
                                            name="username"
                                            placeholder="Username"
                                            // ref={register({ required: "Username is required" })}
                                            value={formValues.username}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    {/* <p>{errors.username?.message}</p> */}
                                    <p>{formErrors.username}</p>
                                    <div className="field">
                                        <label>Email</label>
                                        <input
                                            type="email"
        
                                            name="email"
                                            placeholder="Email"
                                            // ref={register({
                                            //     required: "Email is required",
                                            //     pattern: {
                                            //         value: /^\S+@\S+$/i,
                                            //         message: "This is not a valid email",
                                            //     },
                                            // })}
                                            value={formValues.email}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    {/* <p>{errors.email?.message}</p> */}
                                    <p>{formErrors.email}</p>
                                    <div className="field">
                                        <label>Password</label>
                                        <input
                                            type="password"
                                            name="password"
                                            placeholder="Password"
                                            // ref={register({
                                            //     required: "Password is required",
                                            //     minLength: {
                                            //         value: 4,
                                            //         message: "Password must be more than 4 characters",
                                            //     },
                                            //     maxLength: {
                                            //         value: 10,
                                            //         message: "Password cannot exceed more than 10 characters",
                                            //     },
                                            // })}
                                            value={formValues.password}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    {/* <p>{errors.password?.message}</p> */}
                                    <p>{formErrors.password}</p>
                                    <button className="fluid ui button blue">Submit</button>
                                </div>
        
                            </form>
                        {/* </form> */}
                    </div>
                );
         


}

export default Fromjs;





// import react from "react";
// import { useForm } from "react-hook-form";
// import { useState, UseEffect } from "react";
// // import "./App.css";

// function Fromjs() {
//     const { register, handleSubmit, errors } = useForm();
//     const [userInfo, setUserInfo] = useState();
//     const OnSubmit = (data) => {
//         setUserInfo(data);
//         console.log(data);
//         const initialValues = { username: "", email: "", password: "" };
//         const [formValues, setFormValues] = useState(initialValues);
//         const [formErrors, setFormErrors] = useState({});
//         const [isSubmit, setIsSubmit] = useState(false);

//         const handleChange = (e) => {
//             const { name, value } = e.target;
//             setFormValues({ ...formValues, [name]: value });
//         };

//         const handleSubmit= (e) => {
//             e.preventDefault();
//             setFormErrors(validate(formValues));
//             setIsSubmit(true);
//         };

//         UseEffect(() => {
//             console.log(formErrors);
//             if (Object.keys(formErrors).length === 0 && isSubmit) {
//                 console.log(formValues);
//             }
//         }, [formErrors]);
//         const validate = (values) => {
//             const errors = {};
//             const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
//             if (!values.username) {
//                 errors.username = "Username is required!";
//             }
//             if (!values.email) {
//                 errors.email = "Email is required!";
//             } else if (!regex.test(values.email)) {
//                 errors.email = "This is not a valid email format!";
//             }
//             if (!values.password) {
//                 errors.password = "Password is required";
//             } else if (values.password.length < 4) {
//                 errors.password = "Password must be more than 4 characters";
//             } else if (values.password.length > 10) {
//                 errors.password = "Password cannot exceed more than 10 characters";
//             }
//             return errors;
//         };
//         console.log(errors);

//         return (
//             <div className="container">
//                 <pre>{JSON.stringify(userInfo, undefined, 2)}</pre>
//                 <form onSubmit={handleSubmit(OnSubmit)}>
//                     <h1>Registration Form</h1>
//                     {Object.keys(formErrors).length === 0 && isSubmit ? (
//                         <div className="ui message success">Signed in successfully</div>
//                     ) : (
//                         <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
//                     )}

//                     <form onSubmit={handleSubmit}>
//                         <h1>Login Form</h1>
//                         <div className="ui divider"></div>
//                         <div className="ui form">
//                             <div className="field">
//                                 <input
//                                     type="text"
//                                     name="username"
//                                     placeholder="Username"
//                                     ref={register({ required: "Username is required" })}
//                                     value={formValues.username}
//                                     onChange={handleChange}
//                                 />
//                             </div>
//                             <p>{errors.username?.message}</p>
//                             <p>{formErrors.username}</p>
//                             <div className="field">
//                                 <label>Email</label>
//                                 <input
//                                     type="email"

//                                     name="email"
//                                     placeholder="Email"
//                                     ref={register({
//                                         required: "Email is required",
//                                         pattern: {
//                                             value: /^\S+@\S+$/i,
//                                             message: "This is not a valid email",
//                                         },
//                                     })}
//                                     value={formValues.email}
//                                     onChange={handleChange}
//                                 />
//                             </div>
//                             <p>{errors.email?.message}</p>
//                             <p>{formErrors.email}</p>
//                             <div className="field">
//                                 <label>Password</label>
//                                 <input
//                                     type="password"
//                                     name="password"
//                                     placeholder="Password"
//                                     ref={register({
//                                         required: "Password is required",
//                                         minLength: {
//                                             value: 4,
//                                             message: "Password must be more than 4 characters",
//                                         },
//                                         maxLength: {
//                                             value: 10,
//                                             message: "Password cannot exceed more than 10 characters",
//                                         },
//                                     })}
//                                     value={formValues.password}
//                                     onChange={handleChange}
//                                 />
//                             </div>
//                             <p>{errors.password?.message}</p>
//                             <p>{formErrors.password}</p>
//                             <button className="fluid ui button blue">Submit</button>
//                         </div>

//                     </form>
//                 </form>
//             </div>
//         );

//     }
// }

