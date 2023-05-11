import React from "react";
import Navigation from "./navigation";


import "../compoents/css/details.css";

function about() {
    return (
        <>


            < div id='about' >
                <div className="section2" >
                    <div className=" container-fluid">
                        <div className="row">

                            <div className=" col-sm-6">
                                <img class="name" src="/image/about.jpg" style={{ display: "block", width: "70%", height: "80%", }} />

                            </div>

                            <div className="col-sm-6" style={{ marigntop: "66px" }}>
                                <div className="about">
                                    <h3>ABOUT US</h3>
                                    <h5>
                                        What we are and our history</h5>
                                    <p> Hospital is one of the leading hospital in Chennai.
                                        The best healthcare professionals provide Comprehensive healthcare.
                                        It is located at West Mambalam. It provides advanced levels of care in over different specialties including
                                        General Surgery, General Physician, Gynecology and Obstetrics, Pediatrics, Nephrology, Dentistry, Orthopedics.</p>
                                    {/* <button type="button" className="thm-btn">read more</button> */}
                                    <hr />


                                    <h3> VISION & MISSION
                                    </h3>
                                    <h5> Our goal and thoughts</h5>
                                    <p>Our goal is to provide patient-centric care through easily accessible and affordable care to poor patients.</p>
                                    <p>Our goal is to provide a compassionate professional environment to make your experience comfortable. Our staff is friendly, knowledgable and very helpful in addressing your health and financial concerns.</p>
                                    <p>Many services are provided free of cost to the patient like Consultation, certain invasive procedures and medication as also food services.</p>
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
                                            <p className="card-text">24x7 qualified medical professionals are available all the time including nursing and support service staff.</p>
                                            <p>Many services are provided free of cost to the patient like Consultation, certain invasive procedures and medication as also food services.</p>
                                            <p>Consistently look for prospects of improvement of our services.</p>
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