// src/components/LoginForm.jsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('Login Data:', data);
    alert('ورود موفقیت‌آمیز بود!');
    navigate('/Home');
  };

  const navigate = useNavigate();

  return (
    <div className="login-container">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="login-container"
        autoComplete="off"
      >
        <h2>ورود به حساب کاربری</h2>

        <input
          type="email"
            autoComplete="off"
          placeholder="ایمیل"
          {...register('email', {
            required: 'ایمیل الزامی است',
            pattern: {
              value: /^\S+@\S+$/i,
              message: 'ایمیل نامعتبر است',
            },
          })}
        />
        {errors.email && <p className="error">{errors.email.message}</p>}

        <input
          type="password"
          autoComplete="off"
          placeholder="رمز عبور"
          {...register('password', {
            required: 'رمز عبور الزامی است',
            minLength: {
              value: 6,
              message: 'رمز عبور باید حداقل ۶ کاراکتر باشد',
            },
          })}
        />
        {errors.password && <p className="error">{errors.password.message}</p>}

        <button type="submit">ورود</button>
      </form>
    </div>
  );
};

export default LoginForm;
