import React from 'react';
import './Dashboard.css';
import ProductDropdown from '../components/ProductDropdown';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-2xl font-bold mb-6 text-emerald-700">داشبورد باغ هوشمند</h1>
      <ProductDropdown />
      
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1> مدیریت باغ</h1>
        {/* <p>خوش آمدید!</p> */}
      </header>
      <main className="dashboard-main">
      <div className="dashboard-section">⚙️ مدیریت اطلاعات پایه</div>
        <div className="dashboard-section">🌱 مدیریت محصولات</div>
        <div className="dashboard-section">⚙️  مدیریت کاربران</div>
        <div className="dashboard-section">⚙️  مدیریت کارگران</div>
        <div className="dashboard-section">💧 آبیاری هوشمند</div>
        <div className="dashboard-section">📊 گزارشات و تحلیل‌ها</div>
        <div className="dashboard-section">🌱  یادآوری و هشدارها</div>
        <div className="dashboard-section">📊 دفتر مالی</div>
        <div className="dashboard-section">📊 اتصال به هواشناسی</div>
        <div className="dashboard-section">🌱  تغذیه و کود دهی </div>
        <div className="dashboard-section">💧  افات و بیماریها</div>
      </main>
      
    </div>
    </div>
  );
};

export default Dashboard;
