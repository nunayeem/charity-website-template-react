import React from 'react'
import Topbar from '../../partials/Topbar'
import Navbar from '../../partials/Navbar'
import Footer from '../../partials/Footer'
import Breadcrumb from '../../partials/Breadcrumb'
import Layout from '../../layout/Layout'
import TeamItem from './ui/TeamItem'

const Team = () => {

  const teamMembers = [
  {
    id: 1,
    name: 'Nizam Uddin Nayeem',
    jobTitle: 'Software Engineer',
    profilePicture: '/assets/img/team-1.jpg',
    socialLinks: {
      facebook: 'https://facebook.com/nizamuddinnayeem.cse',
      twitter: 'https://facebook.com/nizamuddinnayeem.cse',
      instagram: 'https://facebook.com/nizamuddinnayeem.cse',
      youtube: 'https://facebook.com/nizamuddinnayeem.cse'
    }
  },

  {
    id: 2,
    name: 'Israt Jahan Samiya',
    jobTitle: 'House Maker',
    profilePicture: '/assets/img/team-2.jpg',
    socialLinks: {
      facebook: 'samiya.com',
      twitter: '',
      instagram: '',
      youtube: ''
    }
  }
];

  return (
    <Layout>
      <Breadcrumb title='Team Member' />
      <div className="container-fluid py-5">
          <div className="container">
              <div className="text-center mx-auto wow fadeIn" data-wow-delay="0.1s" style={{ 
                maxWidth: '500px'
               }} >
                  <p className="section-title bg-white text-center text-primary px-3">Our Team</p>
                  <h1 className="display-6 mb-4">Meet Our Dedicated Team Members</h1>
              </div>

              <div className="row g-4">

                {teamMembers.map((member) => (
                  <TeamItem key={member.id} name={member.name} jobTitle={member.jobTitle} socialLinks={member.socialLinks} />
                ))}

              </div>
          </div>
      </div>
    </Layout>
  )
}

export default Team
