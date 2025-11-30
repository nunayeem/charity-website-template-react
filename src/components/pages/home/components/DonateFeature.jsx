import React from 'react';

const DonateFeature = () => {
  return (
    <>
      {/* Donation Start */}
      <div className="container-fluid py-5">
        <div className="container">

          <div
            className="text-center mx-auto wow fadeIn"
            data-wow-delay="0.1s"
            style={{ maxWidth: "500px" }}
          >
            <p className="section-title bg-white text-center text-primary px-3">Donation</p>
            <h1 className="display-6 mb-4">Our Donation Causes Around the World</h1>
          </div>

          <div className="row g-4">

            {/* Donation Item 1 */}
            <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.1s">
              <div className="donation-item d-flex h-100 p-4">
                
                <div className="donation-progress d-flex flex-column flex-shrink-0 text-center me-4">
                  <h6 className="mb-0">Raised</h6>
                  <span className="mb-2">$8000</span>
                  <div className="progress d-flex align-items-end w-100 h-100 mb-2">
                    <div
                      className="progress-bar w-100 bg-secondary"
                      role="progressbar"
                      aria-valuenow="85"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <span className="fs-4">85%</span>
                    </div>
                  </div>
                  <h6 className="mb-0">Goal</h6>
                  <span>$10000</span>
                </div>

                <div className="donation-detail">
                  <div className="position-relative mb-4">
                    <img className="img-fluid w-100" src="/assets/img/donation-1.jpg" alt="Healthy Food" />
                    <a href="#" className="btn btn-sm btn-secondary px-3 position-absolute top-0 end-0">Food</a>
                  </div>
                  <a href="#" className="h3 d-inline-block">Healthy Food</a>
                  <p>Through your donations and volunteer work, we spread kindness and support to children.</p>
                  <a href="#" className="btn btn-primary w-100 py-3">
                    <i className="fa fa-plus me-2"></i>Donate Now
                  </a>
                </div>

              </div>
            </div>

            {/* Donation Item 2 */}
            <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.13s">
              <div className="donation-item d-flex h-100 p-4">
                
                <div className="donation-progress d-flex flex-column flex-shrink-0 text-center me-4">
                  <h6 className="mb-0">Raised</h6>
                  <span className="mb-2">$8000</span>
                  <div className="progress d-flex align-items-end w-100 h-100 mb-2">
                    <div
                      className="progress-bar w-100 bg-secondary"
                      role="progressbar"
                      aria-valuenow="95"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <span className="fs-4">95%</span>
                    </div>
                  </div>
                  <h6 className="mb-0">Goal</h6>
                  <span>$10000</span>
                </div>

                <div className="donation-detail">
                  <div className="position-relative mb-4">
                    <img className="img-fluid w-100" src="/assets/img/donation-2.jpg" alt="Water Treatment" />
                    <a href="#" className="btn btn-sm btn-secondary px-3 position-absolute top-0 end-0">Health</a>
                  </div>
                  <a href="#" className="h3 d-inline-block">Water Treatment</a>
                  <p>Through your donations and volunteer work, we spread kindness and support to children.</p>
                  <a href="#" className="btn btn-primary w-100 py-3">
                    <i className="fa fa-plus me-2"></i>Donate Now
                  </a>
                </div>

              </div>
            </div>

            {/* Donation Item 3 */}
            <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.5s">
              <div className="donation-item d-flex h-100 p-4">
                
                <div className="donation-progress d-flex flex-column flex-shrink-0 text-center me-4">
                  <h6 className="mb-0">Raised</h6>
                  <span className="mb-2">$8000</span>
                  <div className="progress d-flex align-items-end w-100 h-100 mb-2">
                    <div
                      className="progress-bar w-100 bg-secondary"
                      role="progressbar"
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <span className="fs-4">75%</span>
                    </div>
                  </div>
                  <h6 className="mb-0">Goal</h6>
                  <span>$10000</span>
                </div>

                <div className="donation-detail">
                  <div className="position-relative mb-4">
                    <img className="img-fluid w-100" src="/assets/img/donation-3.jpg" alt="Education Support" />
                    <a href="#" className="btn btn-sm btn-secondary px-3 position-absolute top-0 end-0">Education</a>
                  </div>
                  <a href="#" className="h3 d-inline-block">Education Support</a>
                  <p>Through your donations and volunteer work, we spread kindness and support to children.</p>
                  <a href="#" className="btn btn-primary w-100 py-3">
                    <i className="fa fa-plus me-2"></i>Donate Now
                  </a>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
      {/* Donation End */}
    </>
  );
};

export default DonateFeature;
