import React from 'react'

const Breadcrumb = (props) => {
  return (
    <div className="container-fluid page-header py-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container text-center py-4">
            <h1 className="display-3 animated slideInDown">{props.title} </h1>
            <nav aria-label="breadcrumb animated slideInDown">
                <ol className="breadcrumb justify-content-center mb-0">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item"><a href="#">Pages</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Our Team</li>
                </ol>
            </nav>
        </div>
    </div>
  )
}

export default Breadcrumb
