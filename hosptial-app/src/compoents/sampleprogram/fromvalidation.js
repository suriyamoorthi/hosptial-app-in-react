// import { Formik, Field, Form, ErrorMessage } from "formik";
// import Joi from "joi";
// import React from "react";


// const userSchema = Joi.object({
//     fname: Joi.string().min(6).max(12).required(),
//     lname: Joi.string().min(6).max(12).required(),
//     username: Joi.string().alphanum().required(),
//     email: Joi.string()
//     .email({ tlds: { allow: false } })
//     .required(),
//     password: Joi.string().alphanum().min(6).max(10).required(),
//     avatar: Joi.string().uri().required(),

// });
// const INTIAL_FORM = {
//     fname: "",
//     lname: "",
//     username: "",
//     email: "",
//     password: "",
//     avatar: "",
//    checked: [],
// };

// function Users() {
  
//     const validate = (values) => {
//         const errors = {};
//         const { error } = userSchema.validate(values);
//         if (error) {
//             const [err] = error.details;
//             errors[err.context.key] = err.message;
//         }
//         return errors;

//     };
//     const handleSubmit = (values) => {
//         console.log(values)
      
       
//         // alert(`add-${values}`)
      
       

//     };
   
//     return(
//         <div className="container-fluid">
//             <div className="row">
//                 <div className="col-sm-12">
//                     <div className="card">
//                         <div className="card-body">
//                             <Formik
//                             initialValues={INTIAL_FORM}
//                             validate={validate}
//                             onSubmit={handleSubmit}
//                             >
//                                 {()=>{

//                                     return(
//                                         <Form className="mt-4">
//                                             <div className="form-group">
//                                                <label htmlFor="fname">
//                                                 First Name<span className="text-danger">*</span>
//                                                </label>
//                                                <Field
//                                                className="form-control"
//                                                name="fname"
//                                                placeholder="Enter the first name"
//                                                />
//                                                <ErrorMessage className="text-primary"name="fname"/>
//                                             </div>
//                                             <br/>

//                                             <div className="form-group">
//                                                <label htmlFor="lname">
//                                                Last Name<span className="text-danger">*</span>
//                                                </label>
//                                                <Field
//                                                className="form-control"
//                                                name="lname"
//                                                placeholder="Enter the last name"
//                                                />
//                                                <ErrorMessage className="text-danger" name="lname"/>
//                                             </div>
//                                             <br/>
//                                             <div className="form-group">
//                                                <label htmlFor="username">
//                                                Username Name<span className="text-danger">*</span>
//                                                </label>
//                                                <Field
//                                                className="form-control"
//                                                name="username"
//                                                placeholder="Enter the first name"
//                                                />
//                                                <ErrorMessage className="text-danger"name="username"/>
//                                             </div>
//                                             <br/>
//                                             <div className="form-group">
//                                                <label htmlFor="email">
//                                                Email<span className="text-danger">*</span>
//                                                </label>
//                                                <Field
//                                                className="form-control"
//                                                type="email"
//                                                name="email"
//                                                placeholder="Enter the email"
//                                                />
//                                                <ErrorMessage className="text-danger"name="email"/>
//                                             </div>
//                                             <br/>
//                                             <div className="form-group">
//                                                <label htmlFor="password">
//                                                Password<span className="text-danger">*</span>
//                                                </label>
//                                                <Field
//                                                className="form-control"
//                                                type="password"
//                                                name="password"
//                                                placeholder="Enter the password"
//                                                />
//                                                <ErrorMessage className="text-danger"name="password"/>
//                                             </div>
//                                             <br/>
//                                             <div className="form-group">
//                                                <label htmlFor="avatar">
//                                                Avatar URL<span className="text-danger">*</span>
//                                                </label>
//                                                <Field
//                                                className="form-control"
//                                                type="url"
//                                                name="avatar"
//                                                placeholder="Enter the first name"
//                                                />
//                                                <ErrorMessage className="text-danger"name="avatar"/>
//                                             </div>
//                                             <br/>
//                                             {/* <div className="form-group">
//                                             <div id="checkbox-group">Checked</div>
//           <div role="group" aria-labelledby="checkbox-group">
//             <label> 
//               <Field type="checkbox" name="checked" value="One" />
//               One
//             </label>
//             <label>
//               <Field type="checkbox" name="checked" value="Two" />
//               Two
//             </label>
//             <label>
//               <Field type="checkbox" name="checked" value="Three" />
//               Three
//             </label>
//             <ErrorMessage className="text-danger"name="checked"/>
//           </div>
//                             </div>        

//                                                         <br/> */}
                                           
//                                             <div className="form-group">
//                                             <button type="reset" className="btn btn-primary"
//                                             >reset</button>
//                                             {" "}
//                                             <button type="submit" className="btn btn-primary" >submit</button>
//                                         </div>
//                                         </Form>
//                                     )
//                                 }
//                                 };

//                             </Formik>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };
// export default Users;



import React, { useState, useEffect } from "react";
const INTIAL_FORM = {
    fname: "",
    lname: "",
    username: "",
    password: "",
    email: "",
    avatar: ""
}
const MALIL_FORMAT = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
const URL_FORMAT = new RegExp("/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;");
function Admintableget() {
    const [isLoading, setIsloding] = useState(false);
    const [admintable, setAdmintable] = useState([]);
    const [user, setUser] = useState(INTIAL_FORM);
    const [error, setError] = useState(INTIAL_FORM);
    const [touched, setTouched] = useState(INTIAL_FORM);

    const handleBlur = ({ target: { name } }) => {
        setTouched({ ...touched, [name]: true });
    }
    const handleChange = ({ target: { name, value } }) => {
        const err = { ...error };

        switch (name) {
            case "fname": {
                if (!value) {
                    err.fname = "First name is requried";
                }
                else {
                    err.fname = "";
                }
                break;
            }
            case "lanme": {
                if (!value) {
                    err.lname = "Last name is requried";
                }
                else {
                    err.lname = "";
                }
                break;
            }
            case "username": {
                if (!value) {
                    err.username = "Username is requried";
                }
                else {
                    err.username = "";
                }
                break;
            }
            case "password": {
                if (!value) {
                    err.password = "Password  is requried";
                }
                else if (value.length < 6) {
                    err.password = "Password Should be minmum 6 characters must";

                }
                else {
                    err.password = "";
                }
                break;
            }
            case "email": {
                if (!value) {
                    err.email = "Email is requried";
                }
                else if (!MALIL_FORMAT.test(value)) {
                    err.email = "email is invalid"
                }

                else {
                    err.email = "";
                }
                break;
            }
            case "avatar": {
                if (!value) {
                    err.avatar = "Avatar is required";
                }
                else if (!URL_FORMAT.test(value)) {
                    err.avatar = "Avatar URL is invalid"
                }
                else {
                    err.avatar = "";
                }
                break;
            }

        }
        setError(err);
        setUser({ ...user, [name]: value });
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();

        const isTouched = Object.values(touched).every(t => t === true);
        const isNotError = Object.values(error).every(t => t === " ");

        if (isTouched && isNotError) {

            if (user.id) {
                updateUser();
            }
            else {
                createUser();
            }
        }
    }
    //GET Users

    const getAdmintable = async () => {
        // setIsloding(true);
        try {
            let response = await fetch(" https://www.mecallapi.com/api/users");

            if (!response.ok) {
                throw new Error("Request failed");
            }
            response = await response.json();
            setIsloding(false);
            setAdmintable(response);
        }
        catch (err) {
            console.error(err.message);
        }


    };

    //CREATE USER
    const createUser = async () => {
        // setIsloding(true);
        try {
            let response = await fetch("https://www.mecallapi.com/api/users/create", {
                method: "POST",
                body: JSON.stringify(user),
                headers: { "content-type": "application/json" },

            });
            if (!response.ok) {
                throw new Error("Request failed");
            }
            setIsloding(false);
            setUser(INTIAL_FORM);
            console.log(setUser);
            getAdmintable();

        }
        catch (err) {
            console.error(err.message);
        }

    };

    //UAPDATE USER
    const updateUser = async () => {
        // setIsloding(true);
        try {
            let response = await fetch(" https://www.mecallapi.com/api/users/update", {
                method: "PUT",
                body: JSON.stringify(user),
                headers: { "content-type": "application/json" },
            });

            if (!response.ok) {
                throw new Error("Request failed");
            }
            response = await response.json();
            setIsloding(false);
            setUser(INTIAL_FORM);
            setAdmintable();
        }
        catch (err) {
            console.error(err.message);
        }


    };

    //DELETE USER

    const deleteUser = async ({ fname, lname, id }) => {
        // setIsloding(true);
        if (window.confirm(`Are You Sure Want TO Delete User -${fname} ${lname}?`)) {
            try {
                let response = await fetch("https://www.mecallapi.com/api/users/delete", {
                    method: "DELETE",
                    body: JSON.stringify({ id }),
                    headers: { "content-type": "application/json" },

                });
                if (!response.ok) {
                    throw new Error("Request failed");
                }

                alert("User Delete Successfully!");
                setIsloding(false);
                getAdmintable(response);

            }
            catch (err) {
                console.error(err.message);
            }
        }
    };

    useEffect(() => {
        console.log("useEffect")
        getAdmintable();

    }, []);


    return (

        <div className="container-fluid mt-3 pt-2 mb-3 pb-2  ">
            <div className="admintable " >
                <div className="row">
                    <div className="col-sm-7">
                        <div className="card h-100 mb-3">
                            <div className="card-body">
                                <h5 className="card-title">Current Day Appoinment Patient List</h5>
                                <hr />
                                {/* <form className="d-flex" role="search">
                                    <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search" />
                                    <button className="btn btn-outline-success" type="submit">Search</button>
                                </form> */}
                                <div className="table">
                                    <table className="table  table-striped">
                                        <thead >
                                            <tr>
                                                <th> #id</th>
                                                <th>avatar</th>
                                                <th>fname</th>
                                                <th>lname</th>

                                                <th>username</th>
                                                <th>action</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {isLoading && (
                                                <div className=" justify-content-center">
                                                    <button className="btn btn-primary " type="button" disabled>
                                                        <span className="spinner-border spinner-border-sm text-center" role="status" aria-hidden="true"></span>
                                                        Loading...
                                                    </button>
                                                </div>
                                            )}

                                            {admintable.map((u) => {
                                                return (
                                                    <tr key={u.id}>


                                                        <td>{u.id}</td>

                                                        <td>
                                                            <img src={u.avatar}
                                                                width="50"
                                                                className="avatar" />
                                                        </td>
                                                        <td>{u.fname}</td>
                                                        <td>{u.lname}</td>

                                                        <td>{u.username}</td>
                                                        <td>
                                                            <i className="fa-solid fa-pen-to-square text-primary fs-4 " onClick={() => setUser({ ...u, password: "", email: u.username })}
                                                            ></i>
                                                            <i className="fa-solid fa-trash text-danger fs-4 ms-3" onClick={() => deleteUser(u)}></i>
                                                        </td>
                                                    </tr>
                                                );
                                            })}

                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-sm-5 ">
                        <div className="card">
                            <div className="card-body">
                                {/* <h5 className="card-title" ></h5> */}
                                <form className="mt-2" onSubmit={handleSubmit} >

                                    <div className="form-group mb-3">
                                        <label htmlFor="fname" >First name
                                            <span className="text-primary ">*</span>
                                        </label>
                                        <input
                                            name="fname"
                                            id="fname"
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Your first name"
                                            value={user.fname}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            required
                                        />
                                        <span className="text-danger">{error.fname}</span>
                                    </div>

                                    <div className="form-group mb-3">
                                        <label htmlFor="lname" >Last name
                                            <span className="text-primary ">*</span>
                                        </label>
                                        <input
                                            name="lname"
                                            id="lname"
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Your last name"
                                            value={user.lname}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            required
                                        />
                                        <span className="text-danger">{error.lname}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="username">User name
                                            <span className="text-primary ">*</span>
                                        </label>
                                        <input
                                            name="username"
                                            id="username"
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Your user name"
                                            value={user.username}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            required
                                        />
                                        <span className="text-danger">{error.username}</span>
                                    </div>

                                    <div className="form-group mb-3">
                                        <label htmlFor="password" >Password<span className="text-primary ">*</span></label>
                                        <input
                                            name="password"
                                            id="password"
                                            type="password"
                                            className="form-control"
                                            placeholder="Enter Your password"
                                            value={user.password}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            required
                                        />
                                        <span className="text-danger">{error.password}</span>
                                    </div>

                                    <div className="form-group mb-3">
                                        <label htmlFor="email"
                                        >Email<span className="text-primary ">*</span>
                                        </label>
                                        <input
                                            name="email"
                                            id="email"
                                            type="email"
                                            className="form-control"
                                            placeholder="Enter Your Email"
                                            value={user.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            required
                                        />
                                        <span className="text-danger">{error.email}</span>
                                    </div>

                                    {/* <div className="form-group mb-3">
                                        <label htmlFor="avatar" >Avatar
                                            <span className="text-primary ">*</span>
                                        </label>
                                        <input
                                            name="avatar"
                                            id="avatar"
                                            type="url"
                                            className="form-control"
                                            placeholder="Enter Your avatar"
                                            value={user.avatar}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            required
                                        />
                                        <span className="text-danger">{error.avatar}</span>
                                    </div> */}


                                    <div className="form-group">
                                        <button type="reset" className="btn btn-primary"
                                        >reset</button>
                                        {" "}
                                        <button type="submit" className="btn btn-primary" >{user.id ? "Update" : "Create"}</button>
                                    </div>
                                </form>



                                <div className="link" >
                                    <div herf="/forgot" className="linked">Forgot Password?</div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )

}

export default Admintableget;