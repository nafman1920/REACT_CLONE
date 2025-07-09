import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Herosection from './Components/Herosection';
import SectionOne from './Components/SectionOne';
import SectionTwo from './Components/Section2';
import SectionThree from './Components/SectionThree';
import SectionFour from './Components/SectionFour';
import SectionFive from './Components/SectionFive';
import Footer from './Components/Footer'; // ✅ NEW

function App() {
  return (
    <>
      <Navbar />
      <Herosection />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <Footer /> {/* ✅ Add footer at the end */}
    </>
  );
}

export default App;
