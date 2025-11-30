import React from 'react'
import Layout from '../../layout/Layout'
import Breadcrumb from '../../partials/Breadcrumb'

const Contact = () => {
  return (
    <Layout>
      <Breadcrumb title="Contact" />

      <div className="container-fluid py-5">
        <div className="container">
          <div className="row g-5">

            {/* Left Side */}
            <div className="col-lg-5 wow fadeIn" data-wow-delay="0.1s">
              <p className="section-title bg-white text-start text-primary pe-3">
                Contact
              </p>

              <h1 className="display-6 mb-4 wow fadeIn" data-wow-delay="0.2s">
                If You Have Any Query, Please Contact Us
              </h1>

              {/* If you want map uncomment and fix (React-safe) */}
              <iframe
                className="w-100"
                src="YOUR_GOOGLE_MAP_URL"
                style={{ height: "410px", border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
              ></iframe>
            </div>

            {/* Right: Form */}
            <div className="col-lg-7 wow fadeIn" data-wow-delay="0.3s">
              <h4 className="lh-base mb-4">
                Receive messages instantly with our PHP and Ajax contact form - available in the{" "}
                <a href="https://htmlcodex.com/downloading/?item=3641">Pro Version</a> only.
              </h4>

              <form>
                <div className="row g-3">

                  <div className="col-md-6">
                    <div className="form-floating">
                      <input type="text" className="form-control" id="name" placeholder="Your Name" />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-floating">
                      <input type="email" className="form-control" id="email" placeholder="Your Email" />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-floating">
                      <input type="text" className="form-control" id="subject" placeholder="Subject" />
                      <label htmlFor="subject">Subject</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        id="message"
                        placeholder="Leave a message here"
                        style={{ height: "250px" }}
                      ></textarea>
                      <label htmlFor="message">Message</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <button className="btn btn-primary py-3 px-4" type="submit">
                      Send Message
                    </button>
                  </div>

                </div>
              </form>

            </div>

          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
