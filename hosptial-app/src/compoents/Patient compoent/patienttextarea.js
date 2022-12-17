import React, { useState } from "react";



import "../css/Patient/patienttextarea.css"

const VALE_TEXT= {
    description:"",
  
}

function Patienttextarea() {

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
       
        <main className="patienttextarea">
            <div className="container-fluid" >
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-sm-12 mb-3">
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

                           
                        </div>
                    </div>
                </div>
            </div>
        </main>
        </>
    )
}

export default Patienttextarea;