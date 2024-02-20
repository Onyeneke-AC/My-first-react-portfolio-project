import React from 'react'
import Navbar from '../templates/header/Navbar'
import Sidebar from '../templates/header/Sidebar'
import News from '../templates/header/News'
import Footer from '../templates/footer/Footer'

function AllNews() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <News />
      <Footer />
    </>
  )
}

export default AllNews
