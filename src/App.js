import React from 'react';
import { BrowserRouter as Router, Routes as Switch , Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Products  from './components/pages/Partners';
import Partners from './components/pages/Partners';

function App() {

  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact Component={Home}/>
          <Route path='/partners' Component={Partners} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
