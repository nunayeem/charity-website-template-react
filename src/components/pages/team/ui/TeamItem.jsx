import React from 'react'

const TeamItem = (props) => {
  return (
    <div key={props.key} className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.1s">
        <div className="team-item d-flex h-100 p-4">
            <div className="team-detail pe-4">
                <img className="img-fluid mb-4" src="/assets/img/team-1.jpg" alt="" />
                <h3>{props.name}</h3>
                <span>{props.jobTitle}</span>
            </div>

            {props.socialLinks && (
            <div className="team-social bg-light d-flex flex-column justify-content-center flex-shrink-0 p-4">

                {props.socialLinks.facebook && (
                <a className="btn btn-square btn-primary my-2" href={props.socialLinks.facebook}>
                    <i className="fab fa-facebook-f"></i>
                </a>
                )}

                {props.socialLinks.twitter && (
                <a className="btn btn-square btn-primary my-2" href={props.socialLinks.twitter}>
                    <i className="fab fa-x-twitter"></i>
                </a>
                )}

                {props.socialLinks.instagram && (
                <a className="btn btn-square btn-primary my-2" href={props.socialLinks.instagram}>
                    <i className="fab fa-instagram"></i>
                </a>
                )}

                {props.socialLinks.youtube && (
                <a className="btn btn-square btn-primary my-2" href={props.socialLinks.youtube}>
                    <i className="fab fa-youtube"></i>
                </a>
                )}

            </div>
            )}

        </div>
    </div>
  )
}

export default TeamItem
