// src/components/SignupForm.jsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import './SignupForm.css';

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log('Signup Data:', data);
    alert('ثبت‌نام با موفقیت انجام شد!');
    navigate('/login');
  };

  const password = watch('password');

  return (
    <div className="form-container">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="form-container"
        autoComplete="off"
      >
        <h2>فرم ثبت‌نام</h2>

        <input
          type="text"
          placeholder="نام کامل"
          {...register('fullName', { required: 'نام الزامی است' })}
        />
        {errors.fullName && <p className="error">{errors.fullName.message}</p>}

        <input
          type="email"
          autoComplete="off"
          placeholder="ایمیل"
          {...register('email', {
            required: 'ایمیل الزامی است',
            // pattern: {
            //   value: /^\S+@\S+$/i,
            //   message: 'ایمیل نامعتبر است',
            // },
          })}
        />
        {errors.email && <p className="error">{errors.email.message}</p>}

        <input
          type="password"
          autoComplete="new-password"
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

        <input
          type="password"
          autoComplete="off"
          placeholder="تأیید رمز عبور"
          {...register('confirmPassword', {
            required: 'تأیید رمز عبور الزامی است',
            validate: (value) =>
              value === password || 'رمزها با هم مطابقت ندارند',
          })}
        />
        {errors.confirmPassword && (
          <p className="error">{errors.confirmPassword.message}</p>
        )}

        <button type="submit">ثبت‌نام</button>
      </form>
    </div>
  );
};

export default SignupForm;
