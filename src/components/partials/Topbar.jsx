import React from 'react'
import { Link } from 'react-router'

const Topbar = () => {
  return (
    // <!-- Topbar Start -->
    <div className="container-fluid bg-secondary top-bar wow fadeIn" data-wow-delay="0.1s">
        <div className="row align-items-center h-100">
            <div className="col-lg-4 text-center text-lg-start">
                <Link to="/">
                    <h1 className="display-5 text-primary m-0">Charitize</h1>
                </Link>
            </div>
            <div className="col-lg-8 d-none d-lg-block">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="d-flex justify-content-end">
                            <div className="flex-shrink-0 btn-square bg-primary">
                                <i className="fa fa-phone-alt text-dark"></i>
                            </div>
                            <div className="ms-2">
                                <h6 className="text-primary mb-0">Call Us</h6>
                                <span className="text-white">+012 345 6789</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="d-flex justify-content-end">
                            <div className="flex-shrink-0 btn-square bg-primary">
                                <i className="fa fa-envelope-open text-dark"></i>
                            </div>
                            <div className="ms-2">
                                <h6 className="text-primary mb-0">Mail Us</h6>
                                <span className="text-white">info@domain.com</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="d-flex justify-content-end">
                            <div className="flex-shrink-0 btn-square bg-primary">
                                <i className="fa fa-map-marker-alt text-dark"></i>
                            </div>
                            <div className="ms-2">
                                <h6 className="text-primary mb-0">Address</h6>
                                <span className="text-white">123 Street, NY, USA</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    // <!-- Topbar End -->
  )
}

export default Topbar
