import React from 'react';
import '../Thewhystyles/Whysection1.css';
import Keypadimg from '../../assets/Keypad.png';
import Laptopman from '../../assets/Laptopman.png';



const WhySection1= ()=> {
    return (
        <section className="whysection1">
  <div className="container">
    <div className="text-content">
      <h1>LATEST BLOG POSTS</h1>
    </div>

    <div className="blog-posts">
      <div className="blog-post">
        <img src={Keypadimg} alt="Person typing on keypad" />
        <h1>A GUIDE ON CONVERTING WEBSITE VISITORS INTO CUSTOMERS</h1>
        <p>Attracting visitors to your site is one thing, but converting them into a customer is another.</p>
      </div>

      <div className="blog-post">
        <img src={Laptopman} alt="Man working on laptop" />
        <h2>THE IMPORTANCE OF THE RIGHT DOMAIN</h2>
        <p>Your domain is often your first impression so choosing the right one is crucial.</p>
      </div>
    </div>
  </div>
</section>


    );
} 
export default WhySection1;