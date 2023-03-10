import React, { useState, useEffect } from "react";


import "../css/Doctor/Patientvisit1.css"

function Patientvisit1() {

    const [admintable, setAdmintable] = useState([])

    //GET USER
    const getAdmintable = async () => {
        // setIsloding(true);
        try {
            let response = await fetch(" https://www.mecallapi.com/api/users");

            if (!response.ok) {
                throw new Error("Request failed");
            }
            response = await response.json();
            // setIsloding(false);
            setAdmintable(response);
        }
        catch (err) {
            console.error(err.message);
        }


    };
    useEffect(() => {
        console.log("useEffect")
        getAdmintable();



    }, []);

    return (
        <main className="patientvisit1">
            <div className="container-fluid" style={{ marginBottom: "100px", marginTop: "100px" }}>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Patient Details</h5>
                                <hr />

                                <div className="row">
                                    <div className="col-sm-2">
                                        <h6>Photo</h6>
                                        <img src="" class="img-thumbnail" alt="..." style={{ fontSize: "50px" }} />
                                    </div>
                                    <div class="col-sm-1">
                                        <div class="vl" style={{ borderLeft: "3px solid", height: "100%" }}></div>

                                    </div>
                                    <div className="col-sm-9">
                                        <div className="table">
                                            <table className="table table-bordered  table-striped">

                                                <tbody>
                                                    <tr>
                                                        <th scope="row">fname</th>
                                                        <td>dsdsdsdsfsf</td>
                                                        <th scope="row">lname</th>
                                                        <td>dsdsdsdsfsf</td>

                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Last Visit</th>
                                                        <td>dsdsdsdsfsf</td>
                                                        <th scope="row">Date Of Birth</th>
                                                        <td>dsdsdsdsfsf</td>
                                                    </tr>

                                                    <tr>
                                                        <th scope="row">Genter</th>
                                                        <td>dsdsdsdsfsf</td>
                                                        <th scope="row">Allergi</th>
                                                        <td>dsdsdsdsfsf</td>
                                                    </tr>
                                                   

                                                    <tr>
                                                        <th scope="row">Address</th>
                                                    </tr>
                                                    {/* {table.map((u) => {
                                                     return (
<tr key={u.id}>


<tr>
<td>{u.id}</td>
</tr>
<tr>
<td><Link to="">{u.fname}</Link></td>
</tr>
<tr>
<td>
<img src={u.avatar}
width="50"
className="avatar" />
</td>
</tr>
<tr>
<td>{u.lname}</td>
</tr>
<tr>

<td>{u.username}</td>
<td>
<i className="fa-solid fa-pen-to-square text-primary fs-4 " onClick={() => setUser({ ...u, password: "", email: u.username })}
></i>
<i className="fa-solid fa-trash text-danger fs-4 ms-3" onClick={() => deleteUser(u)}></i>
</td>

<td>
<button type="button" className="btn btn-danger me-2  mt-3" style={{ width: "20%" }} onClick={() => setUser({ ...u, password: "", email: u.username })}>

<i className="fa-solid fa-trash" ></i>
Edit Doctor   </button>
<button type="button" className="btn btn-secondary mt-3 me-2" style={{ width: "20%" }} onClick={() => deleteUser(u)}>
<i className="fa-solid fa-pen-to-square"></i>
Delete Doctor</button>
</td>
</tr>
</tr>
);
})} */}

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </main>

    )
}

export default Patientvisit1;



