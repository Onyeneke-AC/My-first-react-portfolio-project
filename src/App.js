import React from 'react';
import { BrowserRouter as Router, Routes as Switch , Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Products  from './components/pages/Partners';
import Partners from './components/pages/Partners';
import Clients from './components/pages/Clients';
import ContactUs from './components/pages/ContactUs';

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
        </Switch>
      </Router>
    </>
  );
}

export default App;
