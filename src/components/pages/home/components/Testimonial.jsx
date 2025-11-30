import React from 'react';

const Testimonial = () => {
  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div className="row g-5">
          
          {/* LEFT TITLE */}
          <div className="col-md-12 col-lg-4 col-xl-3 wow fadeIn" data-wow-delay="0.1s">
            <div className="testimonial-title">
              <h1 className="display-6 mb-4">What People Say About Our Activities.</h1>
              <p className="fs-5 mb-0">
                We work to bring smiles, hope, and a brighter future to those in need.
              </p>
            </div>
          </div>

          {/* RIGHT CAROUSEL */}
          <div className="col-md-12 col-lg-8 col-xl-9">
            <div className="owl-carousel testimonial-carousel wow fadeIn" data-wow-delay="0.3s">

              {/* ITEM 1 */}
              <div className="testimonial-item">
                <div className="row g-5 align-items-center">
                  <div className="col-md-6">
                    <div className="testimonial-img">
                      <img className="img-fluid" src="/assets/img/testimonial-1.jpg" alt="Alexander Bell" />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="testimonial-text pb-5 pb-md-0">
                      <div className="mb-2">
                        <i className="fa fa-star text-primary"></i>
                        <i className="fa fa-star text-primary"></i>
                        <i className="fa fa-star text-primary"></i>
                        <i className="fa fa-star text-primary"></i>
                        <i className="fa fa-star text-primary"></i>
                      </div>
                      <p className="fs-5">
                        Education is the foundation of change. By funding schools, scholarships, and training programs, we help people unlock a better future.
                      </p>
                      <div className="d-flex align-items-center">
                        <div className="btn-lg-square bg-light text-secondary flex-shrink-0">
                          <i className="fa fa-quote-right fa-2x"></i>
                        </div>
                        <div className="ps-3">
                          <h5 className="mb-0">Alexander Bell</h5>
                          <span>CEO, Founder</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ITEM 2 */}
              <div className="testimonial-item">
                <div className="row g-5 align-items-center">
                  <div className="col-md-6">
                    <div className="testimonial-img">
                      <img className="img-fluid" src="/assets/img/testimonial-2.jpg" alt="Donald Pakura" />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="testimonial-text pb-5 pb-md-0">
                      <div className="mb-2">
                        <i className="fa fa-star text-primary"></i>
                        <i className="fa fa-star text-primary"></i>
                        <i className="fa fa-star text-primary"></i>
                        <i className="fa fa-star text-primary"></i>
                        <i className="fa fa-star text-primary"></i>
                      </div>
                      <p className="fs-5">
                        Every act of kindness brings us closer to a world free from suffering. Join the movement for a compassionate tomorrow.
                      </p>
                      <div className="d-flex align-items-center">
                        <div className="btn-lg-square bg-light text-secondary flex-shrink-0">
                          <i className="fa fa-quote-right fa-2x"></i>
                        </div>
                        <div className="ps-3">
                          <h5 className="mb-0">Donald Pakura</h5>
                          <span>CEO, Founder</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ITEM 3 */}
              <div className="testimonial-item">
                <div className="row g-5 align-items-center">
                  <div className="col-md-6">
                    <div className="testimonial-img">
                      <img className="img-fluid" src="/assets/img/testimonial-3.jpg" alt="Boris Johnson" />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="testimonial-text pb-5 pb-md-0">
                      <div className="mb-2">
                        <i className="fa fa-star text-primary"></i>
                        <i className="fa fa-star text-primary"></i>
                        <i className="fa fa-star text-primary"></i>
                        <i className="fa fa-star text-primary"></i>
                        <i className="fa fa-star text-primary"></i>
                      </div>
                      <p className="fs-5">
                        Love and compassion heal the world. Your support helps families and communities find strength and stability.
                      </p>
                      <div className="d-flex align-items-center">
                        <div className="btn-lg-square bg-light text-secondary flex-shrink-0">
                          <i className="fa fa-quote-right fa-2x"></i>
                        </div>
                        <div className="ps-3">
                          <h5 className="mb-0">Boris Johnson</h5>
                          <span>CEO, Founder</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Testimonial;
