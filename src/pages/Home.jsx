// Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Phone, Info, LayoutDashboard, MessageCircle, HelpCircle } from "lucide-react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="overlay">
        <h1 className="welcome-text">خوش آمدید</h1>
        <div className="buttons-container">
          <Link to="/contact" className="home-button">
            <Phone size={20} />
            تماس با ما
          </Link>
          <Link to="/about" className="home-button">
            <Info size={20} />
            درباره ما
          </Link>
          <Link to="/dashboard" className="home-button">
            <LayoutDashboard size={20} />
            داشبورد
          </Link>
          <Link to="/messages" className="home-button">
            <MessageCircle size={20} />
            پیام‌ها
          </Link>
          <Link to="/help" className="home-button">
            <HelpCircle size={20} />
            راهنمایی
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
