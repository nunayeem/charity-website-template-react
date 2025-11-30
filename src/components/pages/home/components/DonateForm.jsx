import React from 'react';

const DonateForm = () => {
  return (
    <>
      {/* Donate Start */}
      <div className="container-fluid donate py-5">
        <div className="container">
          <div className="row g-0">
            
            {/* Left Text */}
            <div className="col-lg-7 donate-text bg-light py-5 wow fadeIn" data-wow-delay="0.1s">
              <div className="d-flex flex-column justify-content-center h-100 p-5 wow fadeIn" data-wow-delay="0.3s">
                <h1 className="display-6 mb-4">Let's Donate to Needy People for Better Lives</h1>
                <p className="fs-5 mb-0">
                  Through your donations, we spread kindness and support to children, families, and communities struggling to find stability.
                </p>
              </div>
            </div>

            {/* Donate Form */}
            <div className="col-lg-5 donate-form bg-primary py-5 text-center wow fadeIn" data-wow-delay="0.5s">
              <div className="h-100 p-5">
                <form>
                  <div className="row g-3">
                    
                    {/* Name */}
                    <div className="col-12">
                      <div className="form-floating">
                        <input type="text" className="form-control" id="name" placeholder="Your Name" />
                        <label htmlFor="name">Your Name</label>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="col-12">
                      <div className="form-floating">
                        <input type="email" className="form-control" id="email" placeholder="Your Email" />
                        <label htmlFor="email">Your Email</label>
                      </div>
                    </div>

                    {/* Donation Amount */}
                    <div className="col-12">
                      <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                        <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" defaultChecked />
                        <label className="btn btn-light" htmlFor="btnradio1">$10</label>

                        <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" />
                        <label className="btn btn-light" htmlFor="btnradio2">$20</label>

                        <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off" />
                        <label className="btn btn-light" htmlFor="btnradio3">$30</label>

                        <input type="radio" className="btn-check" name="btnradio" id="btnradio4" autoComplete="off" />
                        <label className="btn btn-light" htmlFor="btnradio4">$40</label>

                        <input type="radio" className="btn-check" name="btnradio" id="btnradio5" autoComplete="off" />
                        <label className="btn btn-light" htmlFor="btnradio5">$50</label>
                      </div>
                    </div>

                    {/* Submit */}
                    <div className="col-12">
                      <button className="btn btn-secondary py-3 w-100" type="submit">Donate Now</button>
                    </div>

                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* Donate End */}
    </>
  );
};

export default DonateForm;
