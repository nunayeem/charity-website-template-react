import React from 'react'
import Layout from '../../layout/Layout'
import Breadcrumb from '../../partials/Breadcrumb'

const Feature = () => {
  return (
    <Layout>
        <Breadcrumb title='Features' />
        <div className="container-fluid py-5">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6">
                        <div className="rounded overflow-hidden">
                            <div className="row g-0">
                                <div className="col-sm-6 wow fadeIn" data-wow-delay="0.1s">
                                    <div className="text-center bg-primary py-5 px-4 h-100">
                                        <i className="fa fa-users fa-3x text-secondary mb-3"></i>
                                        <h1 className="display-5 mb-0" data-toggle="counter-up">500</h1>
                                        <span className="text-dark">Team Members</span>
                                    </div>
                                </div>
                                <div className="col-sm-6 wow fadeIn" data-wow-delay="0.3s">
                                    <div className="text-center bg-secondary py-5 px-4 h-100">
                                        <i className="fa fa-award fa-3x text-primary mb-3"></i>
                                        <h1 className="display-5 text-white mb-0" data-toggle="counter-up">70</h1>
                                        <span className="text-white">Award Winning</span>
                                    </div>
                                </div>
                                <div className="col-sm-6 wow fadeIn" data-wow-delay="0.5s">
                                    <div className="text-center bg-secondary py-5 px-4 h-100">
                                        <i className="fa fa-list-check fa-3x text-primary mb-3"></i> 
                                        <h1 className="display-5 text-white mb-0" data-toggle="counter-up">3000</h1>
                                        <span className="text-white">Total Projects</span>
                                    </div>
                                </div>
                                <div className="col-sm-6 wow fadeIn" data-wow-delay="0.7s">
                                    <div className="text-center bg-primary py-5 px-4 h-100">
                                        <i className="fa fa-comments fa-3x text-secondary mb-3"></i>
                                        <h1 className="display-5 mb-0" data-toggle="counter-up">7000</h1>
                                        <span className="text-dark">Client's Review</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <p className="section-title bg-white text-start text-primary pe-3">Why Us!</p>
                        <h1 className="display-6 mb-4 wow fadeIn" data-wow-delay="0.2s">Few Reasons Why People Choosing Us!</h1>
                        <p className="mb-4 wow fadeIn" data-wow-delay="0.3s">We believe in creating opportunities and empowering communities through education, healthcare, and sustainable development. Your support helps us bring smiles, hope, and a brighter future to those in need.</p>
                        <p className="text-dark wow fadeIn" data-wow-delay="0.4s"><i className="fa fa-check text-primary me-2"></i>Justo magna erat amet</p>
                        <p className="text-dark wow fadeIn" data-wow-delay="0.5s"><i className="fa fa-check text-primary me-2"></i>Aliqu diam amet diam et eos</p>
                        <p className="text-dark wow fadeIn" data-wow-delay="0.6s"><i className="fa fa-check text-primary me-2"></i>Clita erat ipsum et lorem et sit</p>
                        <div className="d-flex mt-4 wow fadeIn" data-wow-delay="0.7s">
                            <a className="btn btn-primary py-3 px-4 me-3" href="">Donate Now</a>
                            <a className="btn btn-secondary py-3 px-4" href="">Join Us Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default Feature
