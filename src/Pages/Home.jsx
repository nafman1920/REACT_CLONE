import React from 'react';

import HeroSection from '../Components/Homepage/Herosection';
import Section2 from '../Components/Homepage/Section2';
import SectionThree from '../Components/Homepage/SectionThree';
import SectionFour from '../Components/Homepage/SectionFour';
import SectionFive from '../Components/Homepage/SectionFive';
//import Navbar from '../Components/Navbar';
//import Footer from '../Components/Footer';
 import manImage from "../assets/bril-man.png";
  import { FaHeart, FaEye, FaComments } from "react-icons/fa";
 //import '../app.css';

function Home() {
  return (
    <div>
        
      <HeroSection/>
      <Section2 />
      <SectionThree/>
      <SectionFour />
      <SectionFive/>
      
      {/* Add Section3 - Section6 here */}
    </div>
  );
}

export default Home;
