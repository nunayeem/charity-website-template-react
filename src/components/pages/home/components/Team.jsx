import React from "react";

const Team = () => {
  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div
          className="text-center mx-auto wow fadeIn"
          data-wow-delay="0.1s"
          style={{ maxWidth: "500px" }}
        >
          <p className="section-title bg-white text-center text-primary px-3">
            Our Team
          </p>
          <h1 className="display-6 mb-4">Meet Our Dedicated Team Members</h1>
        </div>

        <div className="row g-4">

          {/* TEAM MEMBER 1 */}
          <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.1s">
            <div className="team-item d-flex h-100 p-4">
              <div className="team-detail pe-4">
                <img
                  className="img-fluid mb-4"
                  src="/assets/img/team-1.jpg"
                  alt="Team Member"
                />
                <h3>Boris Johnson</h3>
                <span>Founder & CEO</span>
              </div>

              <div className="team-social bg-light d-flex flex-column justify-content-center flex-shrink-0 p-4">
                <a className="btn btn-square btn-primary my-2" href="">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="btn btn-square btn-primary my-2" href="">
                  <i className="fab fa-x-twitter"></i>
                </a>
                <a className="btn btn-square btn-primary my-2" href="">
                  <i className="fab fa-instagram"></i>
                </a>
                <a className="btn btn-square btn-primary my-2" href="">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>

          {/* TEAM MEMBER 2 */}
          <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.3s">
            <div className="team-item d-flex h-100 p-4">
              <div className="team-detail pe-4">
                <img
                  className="img-fluid mb-4"
                  src="/assets/img/team-2.jpg"
                  alt="Team Member"
                />
                <h3>Donald Pakura</h3>
                <span>Project Manager</span>
              </div>

              <div className="team-social bg-light d-flex flex-column justify-content-center flex-shrink-0 p-4">
                <a className="btn btn-square btn-primary my-2" href="">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="btn btn-square btn-primary my-2" href="">
                  <i className="fab fa-x-twitter"></i>
                </a>
                <a className="btn btn-square btn-primary my-2" href="">
                  <i className="fab fa-instagram"></i>
                </a>
                <a className="btn btn-square btn-primary my-2" href="">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>

          {/* TEAM MEMBER 3 */}
          <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.5s">
            <div className="team-item d-flex h-100 p-4">
              <div className="team-detail pe-4">
                <img
                  className="img-fluid mb-4"
                  src="/assets/img/team-3.jpg"
                  alt="Team Member"
                />
                <h3>Alexander Bell</h3>
                <span>Volunteer</span>
              </div>

              <div className="team-social bg-light d-flex flex-column justify-content-center flex-shrink-0 p-4">
                <a className="btn btn-square btn-primary my-2" href="">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="btn btn-square btn-primary my-2" href="">
                  <i className="fab fa-x-twitter"></i>
                </a>
                <a className="btn btn-square btn-primary my-2" href="">
                  <i className="fab fa-instagram"></i>
                </a>
                <a className="btn btn-square btn-primary my-2" href="">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Team;
