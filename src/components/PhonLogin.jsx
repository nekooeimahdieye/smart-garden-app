
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './SignupForm.css';

// const Phonlogin = () => {
//   const [mobile, setMobile] = useState('');
//   const navigate = useNavigate();

//   const handleSendCode = () => {
//     if (/^09\d{9}$/.test(mobile)) {
//       console.log('کد تایید ارسال شد به:', mobile);
//       navigate('/verify');
//     } else {
//       alert('شماره موبایل معتبر وارد کنید');
//     }
//   };

//   return (
//     <div className="form-container">
//       <h2>ورود با شماره موبایل</h2>
//       <input
//         type="text"
//         placeholder="شماره موبایل"
//         value={mobile}
//         onChange={(e) => setMobile(e.target.value)}
//       />
//       <button onClick={handleSendCode}>ارسال کد تایید</button>
//     </div>
//   );
// };

// export default Phonlogin;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// // import './MobileLogin.css';
// import './SignupForm.css';

// const MobileLogin = () => {
//   const [phone, setPhone] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSendCode = (e) => {
//     e.preventDefault();

//     // بررسی صحت شماره موبایل
//     const phoneRegex = /^09\d{9}$/;
//     if (!phoneRegex.test(phone)) {
//       setError('شماره موبایل معتبر وارد کنید (مثلاً: 09123456789)');
//       return;
//     }

//     // شبیه‌سازی ارسال موفق OTP
//     console.log('ارسال کد تایید به شماره:', phone);
//     localStorage.setItem('userPhone', phone); // ذخیره موقت
//     navigate('/verify'); // انتقال به صفحه وارد کردن کد
//   };

//   return (
//     <div className="mobile-login-container">
//       <form onSubmit={handleSendCode} className="mobile-login-form">
//         <h2>ورود با شماره موبایل</h2>

//         <input
//           type="tel"
//           placeholder="شماره موبایل (مثلاً 09123456789)"
//           value={phone}
//           onChange={(e) => setPhone(e.target.value)}
//         />
//         {error && <p className="error">{error}</p>}

//         <button type="submit">ارسال کد تأیید</button>
//       </form>
//     </div>
//   );
// };

// export default MobileLogin;

// import React, { useState } from "react";

// function PhoneAuthForm() {
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [otpSent, setOtpSent] = useState(false);
//   const [otp, setOtp] = useState("");

//   const handleSendOTP = (e) => {
//     e.preventDefault();
//     if (!phoneNumber) return alert("شماره موبایل را وارد کنید");

//     // اینجا باید کد ارسال OTP از طریق Firebase قرار بگیره
//     console.log("Sending OTP to", phoneNumber);
//     setOtpSent(true);
//   };

//   const handleVerifyOTP = (e) => {
//     e.preventDefault();
//     if (!otp) return alert("کد تایید را وارد کنید");

//     // اینجا باید کد تایید OTP با Firebase قرار بگیره
//     console.log("Verifying OTP", otp);
//   };

//   return (
//     <div style={styles.container}>
//       <h2>ورود با شماره موبایل</h2>
//       <form onSubmit={otpSent ? handleVerifyOTP : handleSendOTP} style={styles.form}>
//         <input
//           type="tel"
//           placeholder="مثلاً 09131234567"
//           value={phoneNumber}
//           onChange={(e) => setPhoneNumber(e.target.value)}
//           disabled={otpSent}
//           style={styles.input}
//         />
//         {otpSent && (
//           <input
//             type="text"
//             placeholder="کد تایید (OTP)"
//             value={otp}
//             onChange={(e) => setOtp(e.target.value)}
//             style={styles.input}
//           />
//         )}
//         <button type="submit" style={styles.button}>
//           {otpSent ? "تایید کد" : "ارسال کد"}
//         </button>
//       </form>
//     </div>
//   );
// }

// const styles = {
//   container: { maxWidth: "300px", margin: "auto", padding: "2rem", textAlign: "center" },
//   form: { display: "flex", flexDirection: "column", gap: "1rem" },
//   input: { padding: "0.5rem", fontSize: "1rem" },
//   button: { padding: "0.5rem", fontSize: "1rem", backgroundColor: "#4CAF50", color: "#fff" },
// };

// export default PhoneAuthForm;


// src/components/PhoneLogin.jsx
import React, { useState } from "react";
import { auth, RecaptchaVerifier, signInWithPhoneNumber } from "../firebase";
import { useNavigate } from "react-router-dom";

const PhoneLogin = () => {
  const [phone, setPhone] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [confirmation, setConfirmation] = useState(null);
  const navigate = useNavigate();

  const setupRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
      size: "invisible",
      callback: () => sendOTP(),
    });
  };

  const sendOTP = async () => {
    if (!phone.startsWith("+")) {
      alert("شماره را با کد کشور وارد کنید. مثال: +989123456789");
      return;
    }

    setupRecaptcha();
    const appVerifier = window.recaptchaVerifier;

    try {
      const confirmationResult = await signInWithPhoneNumber(auth, phone, appVerifier);
      setConfirmation(confirmationResult);
      setOtpSent(true);
      alert("کد ارسال شد");
    } catch (error) {
      alert("ارسال کد ناموفق بود:", error.message);
    }
  };

  const verifyOTP = async () => {
    try {
      await confirmation.confirm(otp);
      alert("ورود موفق!");
      navigate("/home"); // هدایت به صفحه Home
    } catch (error) {
      alert("کد اشتباه است");
    }
  };

  return (
    <div className="otp-container">
      <h2>ورود با شماره موبایل</h2>

      {!otpSent ? (
        <>
          <input
            type="text"
            placeholder="مثلاً +989123456789"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <button onClick={sendOTP}>ارسال کد</button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="کد تایید"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button onClick={verifyOTP}>تایید کد</button>
        </>
      )}

      <div id="recaptcha-container"></div>
    </div>
  );
};

export default PhoneLogin;
