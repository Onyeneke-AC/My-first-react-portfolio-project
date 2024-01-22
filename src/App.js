import React from 'react';
import { BrowserRouter as Router, Routes as Switch , Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home'
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact Component={Home}/>
          <Route path="/services" Component={Services}/>
          <Route path="/products" Component={Products}/>
          <Route path="/sign-up" Component={SignUp}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
