import React from 'react';
// import '../../App.css';
import Navbar from '../templates/header/Navbar';
import Extra from '../templates/intro/Extra';
import Sidebar from '../templates/header/Sidebar';
import News from '../templates/header/News';
import Partners from '../templates/body/Partners';
import Clients from '../templates/body/Clients';
import Services from '../templates/body/Services';
import PropProd from '../templates/body/PropProd';
import OemProd from '../templates/body/OemProd';
import Introduction from '../templates/intro/Introduction';
import Footer from '../templates/footer/Footer';

function Home() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <News />
      <Introduction />
      <Extra />
      <Services />
      <PropProd />
      <OemProd />
      <Clients />
      <Partners />
      <Footer />
    </>
  );
}

export default Home;
