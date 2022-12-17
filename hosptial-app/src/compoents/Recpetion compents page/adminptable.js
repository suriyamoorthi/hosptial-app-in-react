import React, { useState, useEffect, useContext } from "react";





import "../css/admin1table.css";

const first = {
    fname: "",
    lname: "",
    username: "",
    password: "",
    email: "",
    avatar: "",
}

function Admintable() {
    const [isLoading, setIsloding] = useState(false);
    const [admintable, setAdmintable] = useState([]);

    const [search, setSearch] = useState(" ");
    // const admintable =React.useContext(useContext);
    const [user, setUser] = useState({ first });


    const handleChange = ({ target: { name, value } }) => {
        setUser({ ...user, [name]: value });
    };

   

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (user.id) {
            updateUser();
        }
        else {
            createUser();
        }

    };
    //GET USER
    const getAdmintable = async () => {
        setIsloding(true);
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
        setIsloding(true);
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
            setUser(first);
            getAdmintable();

        }
        catch (err) {
            console.error(err.message);
        }

    };

    //UAPDATE USER
    const updateUser = async () => {
        setIsloding(true);
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
            setUser(first);
            setAdmintable();
        }
        catch (err) {
            console.error(err.message);
        }


    };

    //DELETE USER

    const deleteUser = async ({ fname, lname, id }) => {
        setIsloding(true);
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
                                <form className="d-flex" role="search">
                                    <input
                                        className="form-control me-2 "
                                        type="search"
                                        placeholder="Search"
                                        aria-label="Search"
                                        onChange={(e) => { setSearch(e.target.value) }}
                                       

                                    />
                                    <button className="btn btn-outline-success" type="submit">Search</button>
                                </form>
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

                                            {admintable.filter((val) => {
                                                if (val === "search") {
                                                    return val;
                                                }
                                                else if (val.fname.toLowerCase().includes(search.toLowerCase())
                                                ) {
                                                    return val
                                                }
                                                //   else{
                                                //       search([...admintable])
                                                //       return val
                                                //   }


                                            })
                                                .map((u) => {

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
                                            required
                                        />
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
                                            required
                                        />
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
                                            required
                                        />
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
                                            required
                                        />
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
                                            required
                                        />
                                    </div>

                                    <div className="form-group mb-3">
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
                                            required
                                        />
                                    </div>


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













    );
}

export default Admintable;


