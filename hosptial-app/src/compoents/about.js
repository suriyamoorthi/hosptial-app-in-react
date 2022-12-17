import React from "react";
import Navigation from "./navigation";


import "../compoents/css/details.css";

function about() {
    return (
   <>
  

        < div id ='about' >
            <div className="section2" >
                <div className=" container-fluid">
                    <div className="row">
                       
                            <div className=" col-sm-6">
                                <img class="name" src="/image/about.jpg" style={{ display: "block", width: "70%", height: "80%", }} />

                            </div>
                      
                        <div className="col-sm-6" style={{marigntop:"66px"}}>
                            <div className="about">
                                <h3>ABOUT US</h3>
                                <h5>
                                    What we are and our history</h5>
                                <p>Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Quia odio, voluptatem reiciendis
                                    adipisci harum distinctio. Distinctio, facere fugit, unde minus placeat eveniet tempore
                                    blanditiis, rem similique iure voluptates a quas?</p>
                                <button type="button" className="thm-btn">read more</button>
                                <hr />


                                <h3> VISION & MISSION
                                </h3>
                                <h5> Our goal and thoughts</h5>
                                <p>Lorem ipsum dolor sit, amet
                                    consectetur
                                    adipisicing elit. Nobis repudiandae porro ea,
                                    similique
                                    eaque, iste molestiae deserunt consequatur omnis molestias odio praesentium ducimus
                                    atque neque
                                    eveniet officia recusandae fuga ipsam!</p>
                                <p>Lorem ipsum dolor sit, amet
                                    consectetur
                                    adipisicing elit. Nobis repudiandae porro ea,
                                    similique
                                    eaque, iste molestiae deserunt consequatur omnis molestias odio praesentium ducimus
                                    atque neque
                                    eveniet officia recusandae fuga ipsam!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section3">
                <div className=" container-fluid mt-5 pt-3 ">
                    <div className="row ">


                        <div className="col-sm-4 ">
                            <div className="card h-100 mb-5">
                                <div className="card-body">
                                    <div className="sub1">
                                        <h3 className="card-title">Our services list</h3>
                                        <h6 className="card-subtitle mb-3 ">Card subtitle</h6>
                                        <p className="card-text">Some quick example text to build on the card title and make up the
                                            bulk
                                            of
                                            the card's content.</p>
                                        <p> Lorem, ipsum dolor sit amet
                                            consectetur adipisicing elit. Asperiores dolores ducimus
                                            doloremque nulla quaerat. Saepe veniam velit illum molestias eos optio dicta
                                            recusandae
                                            similique suscipit consequatur voluptatum, minima debitis voluptates.</p>
                                        {/* <a href="#" className="card-link ">Another link</a> */}
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-sm-4 ">
                            <div className="card h-100 mb-5">
                                <div className="card-body">
                                    <h3 className="card-title">Our Benefits</h3>
                                    <h6 className="card-subtitle mb-3 ">It is a long established fact that a reader will .</h6>
                                    <div className="list">

                                        <i className="fa fa-caret-right"></i>
                                        <p>Qualified Staff of Doctors </p>
                                        <i className="fa fa-caret-right"></i>
                                        <p>Employee Occupational Health & Wellness</p>
                                        <i className="fa fa-caret-right"></i>
                                        <p>Save Your Money and Time with us</p>
                                        <i className="fa fa-caret-right"></i>
                                        <p>24x7 Emergency service</p>
                                        <i className="fa fa-caret-right"></i>
                                        <p>Feel Like you are at Home Services</p>
                                    </div>


                                </div>
                            </div>
                        </div>



                        <div className="col-sm-4 ">
                            <div className="card h-100 mb-5 ">
                                <div className="card-body">
                                    <h3 className="card-title">Our Working Hours</h3>
                                    <h6 className="card-subtitle mb-3 ">Card subtitle</h6>
                                    <table className="table">

                                        <tbody>
                                            <tr>

                                                <td>Monday-Wednesday</td>
                                                <td>08.00-12.00</td>
                                            </tr>
                                            <tr>
                                                <td>Thursday -Friday</td>
                                                <td>08.00-18.00</td>
                                            </tr>
                                            <tr>
                                                <td> Saturday</td>
                                                <td>08.00-18.00</td>
                                            </tr>
                                            <tr>
                                                <td> Sunday</td>
                                                <td>08.00-18.00</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        
        </div >
       
</>
    );
}
export default about;