import React, { useState } from 'react'
import Layout from '../../layout/Layout'
import Breadcrumb from '../../partials/Breadcrumb'
import Input from './Input'
import Button from '../../ui/common/Button'
import { ToastContainer, toast } from 'react-toastify';

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) return toast.error('Name is required')
    if (!email) return toast.error('Email is required')
    if (!subject) return toast.error('Subject is required')

    // Simulate sending
    setLoading(true)
    setTimeout(() => {
      toast.success('Message sent successfully!')
      setLoading(false)

      // Optionally, reset the form
      setName('')
      setEmail('')
      setSubject('')
      setMessage('')
    }, 2000) // 2 seconds delay
  }

  // Enable button only if all required fields are filled
  const isFormValid = name && email && subject

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
              <iframe
                className="w-100"
                src="YOUR_GOOGLE_MAP_URL"
                style={{ height: "410px", border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
              />
            </div>

            {/* Right Side Form */}
            <div className="col-lg-7 wow fadeIn" data-wow-delay="0.3s">
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <Input
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter Your Name"
                      label="Your Name"
                      name="name"
                      type="text"
                      value={name}
                    />
                  </div>

                  <div className="col-md-6">
                    <Input
                      onChange={e => setEmail(e.target.value)}
                      value={email}
                      placeholder="Enter Your Email"
                      name="email"
                      label="Your Email"
                      type="email"
                    />
                  </div>

                  <div className="col-12">
                    <Input
                      onChange={e => setSubject(e.target.value)}
                      value={subject}
                      name="subject"
                      placeholder="Subject"
                      label="Subject"
                    />
                  </div>

                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        id="message"
                        placeholder="Leave a message here"
                        style={{ height: "250px" }}
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                      />
                      <label htmlFor="message">Message</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <Button
                      disabled={!isFormValid || loading}
                      type="submit"
                      className="btn btn-primary py-3 px-4 border-dark rounded-md"
                      text={loading ? "Sending..." : "Send Message"}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="bottom-right" theme="colored" />
    </Layout>
  )
}

export default Contact;
