import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import Home from './components/pages/Home';
import Presentation from './components/pages/Presentation';
import Projets from './components/pages/Projets';
import Contact from './components/pages/Contact';


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/presentation' element={<Presentation />} />
        <Route path='/projets' element={<Projets />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>
  );
}



export default App;
