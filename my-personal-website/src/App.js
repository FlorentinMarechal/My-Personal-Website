import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar';

import Footer from './components/Footer.js';

function App() {
  return (
    <Router>
      <NavBar />
      <Footer />
    </Router>
  );
}



export default App;
