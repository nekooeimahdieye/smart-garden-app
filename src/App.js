import React from "react";
// import { useState } from "react";
import Home from "./pages/Home";
import Main from "./pages/Main";
import SignUpForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm";
import PhonLogin from "./components/PhonLogin"
import Verify from "./components/Verify";
import Dashboard from './pages/Dashboard';
import Contact from "./pages/Contact";
import About from "./pages/About";
import Massage from "./pages/Massage";
import Help from "./pages/Help";
import{BrowserRouter as Router, Routes, Route , Navigate} from "react-router-dom";

function App() {
  // const [step, setStep] = useState('login');
  // const [phone, setPhone] = useState('');
  return (  
    
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Home" element={<Home />} />
        {/* <Route path="/" element={<Navigate to="/login" />} /> */}
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/phonlogin" element={<PhonLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/messages" element={<Massage />} />
        <Route path="/help" element={<Help />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>

    
    
  )
  
  
}

export default App;
