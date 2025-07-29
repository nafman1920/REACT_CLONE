import React from 'react';
import '../Thewaystyles/Waysection6.css';
import acunovImg from '../../assets/acunov.png';
import kree8Img from '../../assets/kree8.png';
import reach87Img from '../../assets/reach87.png';
import strideAlleyImg from '../../assets/stridealley.png';

const Waysection6 = () => {
  return (
    <section className="waysection6" id="theway">
      <h2 className="work-title">WORK</h2>
      <div className="work-grid">
        <div className="work-item">
          <img src={acunovImg} alt="ACUNOV" className="work-image" />
          <p className="work-label">ACUNOV</p>
        </div>
        <div className="work-item">
          <img src={kree8Img} alt="KREE8 BRANDING" className="work-image" />
          <p className="work-label">KREE8 BRANDING</p>
        </div>
        <div className="work-item">
          <img src={reach87Img} alt="REACH87" className="work-image" />
          <p className="work-label">REACH87</p>
        </div>
        <div className="work-item">
          <img src={strideAlleyImg} alt="STRIDE ALLEY" className="work-image" />
          <p className="work-label">STRIDE ALLEY</p>
        </div>
      </div>
    </section>
  );
};

export default Waysection6;
