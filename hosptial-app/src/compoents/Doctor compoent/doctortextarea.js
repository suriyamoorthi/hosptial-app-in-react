import React, { useState } from "react";


import Sidenavdoctor from "./Sidenavdoctor";

import "../css/Doctor/doctortextarea.css"

const VALE_TEXT= {
    description:"",
    advice:"",
}

function Doctortextarea() {

           const [textarea, setTextarea] = useState(VALE_TEXT);
           const [touched, setTouched] = useState (VALE_TEXT);

           const handleBlur=({target:{name}}) => {
            setTouched({...touched,[name]:true})
           }

        const handleChange =({target:{name,value}})=>{ 
            setTextarea({ ...textarea ,[name]:value});
        }
        console.log ("VALUE", textarea)
      
    return (
        <>
        <Sidenavdoctor/>
        <main className=" doctortextarea">
            <div className="container-fluid" >
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-sm-6 mb-3">
                                <div className="input-group">
                                    <label htmlFor="description" className="input-group-text">Diseases Description</label>
                                    <textarea
                                        className="form-control"
                                        name="description"
                                        id="description"
                                        value={textarea.description}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        aria-label="With textarea"
                                      
                                        ></textarea>

                                </div>
                            </div>

                            <div className="col-sm-6">
                                <div className="input-group">
                                    <label htmlFor="advice" className="input-group-text">Doctor Advice</label>
                                    <textarea
                                    className="form-control"
                                    name="advice"
                                    id="advice"
                                    value={textarea.advice}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    aria-label="With textarea"
                                   
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        </>
    )
}

export default Doctortextarea;