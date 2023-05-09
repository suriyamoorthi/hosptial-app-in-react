import React from "react";
import Navigation from "./navigation";


import "../compoents/css/footor.css";


function contact() {
    return (
<>



        <div id="contact"style={{marginTop:"66px"}}>
            <div className="section6"style={{marginTop:"66px"}} >
                <footer calssNmae="footer">

                    <div className="container-fluid"  >
                        <div className="row p-3 border-bottom">




                            <div className=" col-sm-6  " >

                                <span>Get connected with us on social networks:</span>
                            </div>


                            <div className="col-sm-6 " style={{ textAlign: "end" }} >
                                <a href="" className="me-4 text-reset">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="" className="me-4 text-reset">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="" className="me-4 text-reset">
                                    <i className="fab fa-google"></i>
                                </a>
                                <a href="" className="me-4 text-reset">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </div>

                        </div>
                        <div className="row mt-4 pt-3">

                            <div className="col-sm-1"></div>
                            <div className="col-sm-10">
                                <div className="text  border p-4">

                                    <h5><i class="fa-sharp fa-solid fa-pen-to-square me-3"></i>Need a Doctor for Check-up?</h5>
                                    <h2 className="ps-3">JUST MAKE AN
                                        APPOINTMENT & YOU'RE DONE ! </h2>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-1"></div>
                    </div>

                    <div className="container mt-5 ">
                        <div className="row mt-3">
                            <div className="col-sm-4 mb-4">

                                {/* <!-- <h6 className="text-uppercase fw-bold mb-4 " >
                                Contact
                            </h6> --> */}
                                <div className="icon">
                                    <img src="image/logo.png" alt="...." />
                                    <p>Lorem ipsum dolor
                                        sit amet consectetur adipisicing elit. Placeat dicta
                                        voluptatem possimus necessitatibus totam tempore adipisci et, ut
                                        perspiciatis similique laudantium corporis quod non saepe aliquam.
                                        Obcaecati nihil tempore qui.</p>
                                    <div className="address">
                                        <p><i className="fa-solid fa-location-dot me-3"></i>
                                            PO Box 16122 Collins Street<br />
                                               West Victoria 8007 Australia</p>
                                    </div>

                                    <div className="phnumber">
                                    <p><i class="fa-solid fa-phone me-3"></i> 8248910351</p>
                                        {/* <p><i className="bi bi-telephone me-3"></i> 8248910351</p> */}
                                    </div>

                                    <div className="email">

                                        <p> <i class="fa-solid fa-envelope me-3"></i><a herf="">suriyamoorthie12@gmail.com</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 "></div>

                            <div className="col-sm-4 mb-4">

                                <h4 className="text-uppercase fw-bold mb-4">
                                    Map
                                </h4>


                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46797.67908192434!2d79.67871583466909!3d11.397450427832831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a54c23aa1bce10b%3A0xe1a29e91a8ec81aa!2sChidambaram%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1654697596117!5m2!1sen!2sin"
                                    width="250px" height="250px" allowfullscreen="" loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>
                    <div className="copyright">
                        <div className="text-center p-4">
                            © 2022 Copyright:
                            <a className="text-reset fw-bold" href="">suriya</a>
                        </div>
                    </div>


                </footer >
            </div >

        </div>



</>





    );
}

export default contact;