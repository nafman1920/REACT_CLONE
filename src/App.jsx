import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import TheWay from './Pages/Theway';
import TheWhy from './Pages/Thewhy';
//import TheUs from './Pages/Theus';
//import TheHow from './Pages/Thehow';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/theway" element={<TheWay />} />
        <Route path="/theWhy" element={<TheWhy />} />
        {/*<Route path="the-us" element={<div>TheUs</div>} />
        <Route path="the-how" element={<div>TheHow</div>} /> */}

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
