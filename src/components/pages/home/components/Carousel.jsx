import React from 'react';

const Carousel = () => {
  return (
    <>
      {/* Carousel Start */}
      <div className="container-fluid p-0 wow fadeIn" data-wow-delay="0.1s">
        <div className="owl-carousel header-carousel py-5">

          {/* Slide 1 */}
          <div className="container py-5">
            <div className="row g-5 align-items-center">
              
              <div className="col-lg-6">
                <div className="carousel-text">
                  <h1 className="display-1 text-uppercase mb-3">Together for a Better Tomorrow</h1>
                  <p className="fs-5 mb-5">
                    We believe in creating opportunities and empowering communities through education, healthcare, and sustainable development.
                  </p>
                  <div className="d-flex">
                    <a className="btn btn-primary py-3 px-4 me-3" href="">Donate Now</a>
                    <a className="btn btn-secondary py-3 px-4" href="">Join Us Now</a>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="carousel-img">
                  <img className="w-100" src="/assets/img/carousel-1.jpg" alt="Carousel 1" />
                </div>
              </div>

            </div>
          </div>

          {/* Slide 2 */}
          <div className="container py-5">
            <div className="row g-5 align-items-center">

              <div className="col-lg-6">
                <div className="carousel-text">
                  <h1 className="display-1 text-uppercase mb-3">Together, We Can End Hunger</h1>
                  <p className="fs-5 mb-5">
                    No one should go to bed hungry. Your support helps us bring smiles, hope, and a brighter future to those in need.
                  </p>
                  <div className="d-flex mt-4">
                    <a className="btn btn-primary py-3 px-4 me-3" href="">Donate Now</a>
                    <a className="btn btn-secondary py-3 px-4" href="">Join Us Now</a>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="carousel-img">
                  <img className="w-100" src="/assets/img/carousel-2.jpg" alt="Carousel 2" />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
      {/* Carousel End */}
    </>
  );
};

export default Carousel;
