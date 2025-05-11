import React from 'react';
import { Link } from 'react-router-dom';
import './Main.css';

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="home-overlay">
        <h1 className="home-title">مدیریت هوشمند باغ و باغداری</h1>
        <p className="home-subtitle">طبیعی، مدرن، و کاربرپسند</p>
        <div className="home-buttons">
          <Link to="/signup" className="home-btn">
            ثبت‌نام
          </Link>
          <Link to="/login" className="home-btn-outline">
            ورود
          </Link>
          <Link to="/phonlogin" className="home-btn-outline">
             به سامانه ورود
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
