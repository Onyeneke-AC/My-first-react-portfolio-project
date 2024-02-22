import React from 'react'
import Navbar from '../templates/header/Navbar'
import Sidebar from '../templates/header/Sidebar'
import News from '../templates/header/News'
import Footer from '../templates/footer/Footer'
import AboutTeam from '../templates/body/AboutTeam'

function Team() {
  return (
    <>
     <Navbar />
     <Sidebar />
     <News />
     <AboutTeam />
     <Footer /> 
    </>
  )
}

export default Team
