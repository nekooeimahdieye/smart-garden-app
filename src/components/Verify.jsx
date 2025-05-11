import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignupForm.css';

const Verify = () => {
  const [code, setCode] = useState('');
  const navigate = useNavigate();

  const handleVerify = () => {
    if (code === '1234') {
      navigate('/Home');
    } else {
      alert('کد تایید نادرست است');
    }
  };

  return (
    <div className="form-container">
      <h2>کد تایید را وارد کنید</h2>
      <input
        type="text"
        placeholder="کد تایید"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button onClick={handleVerify}>تایید</button>
    </div>
  );
};

export default Verify;
