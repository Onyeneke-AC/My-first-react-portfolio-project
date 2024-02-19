import React from 'react';
import { BrowserRouter as Router, Routes as Switch , Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Products  from './components/pages/Partners';
import Partners from './components/pages/Partners';
import Clients from './components/pages/Clients';
import ContactUs from './components/pages/ContactUs';
import Blogs from './components/pages/Blogs';
import Who from './components/pages/Who';

function App() {

  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact Component={Home}/>
          <Route path='/partners' Component={Partners} />
          <Route path='/products' Component={Products} />
          <Route path='/clients' Component={Clients} />
          <Route path='/contact-us' Component={ContactUs} />
          <Route path='/blogs' Component={Blogs} />
          <Route path='/who' Component={Who} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
