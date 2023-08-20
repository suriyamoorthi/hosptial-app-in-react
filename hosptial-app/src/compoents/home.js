import React from "react";
import Navigation from "./navigation";
import Carousel from 'react-bootstrap/Carousel';


function home() {
    return (
      <div id="home">
        <Carousel data-bs-theme="dark ">
                         
          <Carousel.Item interval={50} className="mt-5 pt-3"  >
            {/* <img
              className="d-block w-100"
              src="holder.js/800x400?text=First slide&bg=f5f5f5"
              alt="First slide"
            /> */}
              <img src="/image/slider-11.jpg" class="d-block w-100" alt="..." />
            <Carousel.Caption>
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={50} className="mt-5 pt-3">
            {/* <img
              className="d-block w-100"
              src="holder.js/800x400?text=Second slide&bg=eee"
              alt="Second slide"
            /> */}
            <img src="/image/slider-22.jpg" style={{overflow:"hidden"}}class="d-block w-100" alt="..." />
            <Carousel.Caption>
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000} className="mt-5 pt-3">
            {/* <img
              className="d-block w-100"
              src="holder.js/800x400?text=Third slide&bg=e5e5e5"
              alt="Third slide"
            /> */}
             <img src="/image/slider-34.jpg" class="d-block w-100" alt="..." />
            <Carousel.Caption>
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </div>
      );
    // return (
    //     <>
           

    //         <div id="home">

    //             <div data-bs-spy="scrollspy" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%"
    //                 data-bs-smooth-scroll="true" class="scrollspy-example" tabindex="0">




    //                 <div id="carouselExampleCaptions"  class="carousel slide  carousel-fade" se data-bs-ride="false">
    //                     <div class="carousel-indicators " >
    //                         <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
    //                             aria-current="true" aria-label="Slide 1"></button>
    //                         <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
    //                             aria-label="Slide 2"></button>
    //                         <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
    //                             aria-label="Slide 3"></button>
    //                     </div>


    //                     <div class="carousel-inner mt-5 pt-3"  >
    //                         <div class="carousel-item active" interval={1}>
    //                             <img src="/image/slider-11.jpg" class="d-block w-100" alt="..." />
    //                             <div class="carousel-caption d-none d-md-block">
    //                                 <h5>First slide label</h5>
    //                                 <p>Some representative placeholder content for the first slide.</p>
    //                             </div>
    //                         </div>

    //                         <div class="carousel-item" interval={1}>
    //                             <img src="/image/slider-22.jpg" style={{overflow:"hidden"}}class="d-block w-100" alt="..." />
    //                             <div class="carousel-caption d-none d-md-block">
    //                                 <h5>Second slide label</h5>
    //                                 <p>Some representative placeholder content for the second slide.</p>
    //                             </div>
    //                         </div>

    //                         <div class="carousel-item" interval={1}>
    //                             <img src="/image/slider-34.jpg" class="d-block w-100" alt="..." />
    //                             <div class="carousel-caption d-none d-md-block">
    //                                 <h5>Third slide label</h5>
    //                                 <p>Some representative placeholder content for the third slide.</p>
    //                             </div>
    //                         </div>
    //                     </div>
    //                     <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
    //                         data-bs-slide="prev">
    //                         <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    //                         <span class="visually-hidden">Previous</span>
    //                     </button>
    //                     <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
    //                         data-bs-slide="next">
    //                         <span class="carousel-control-next-icon" aria-hidden="true"></span>
    //                         <span class="visually-hidden">Next</span>
    //                     </button>
    //                 </div>
    //             </div>
    //         </div>




    //     </>


    // );
}

export default home;