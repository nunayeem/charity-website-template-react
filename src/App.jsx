import React from 'react'
import { BrowserRouter , Route, Routes } from 'react-router'
import Home from './components/pages/home/Home.jsx'
import Donation from './components/pages/donation/Donation.jsx'
import About from "./components/pages/about/About.jsx";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import NotFound from "./components/pages/NotFound.jsx";
import Team from './components/pages/team/Team.jsx'
import Feature from "./components/pages/feature/Feature.jsx";
import Testimonial from './components/pages/testimonial/Testimonial.jsx';
import Contact from './components/pages/contact/Contact.jsx';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/feature" element={<Feature />} />
        <Route path='/donation' element={<Donation />} />
        <Route path='/testimonial' element={<Testimonial />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
