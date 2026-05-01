import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  IoStatsChartOutline, 
  IoBagAddOutline, 
  IoClipboardOutline, 
  IoSettingsOutline, 
  IoLogOutOutline,
  IoChevronBackOutline
} from "react-icons/io5";

// استيراد المكونات التي أنشأتها سابقاً
import DashboardStats from './DashboardStats';
import ProductsManager from './ProductsManager';
import OrdersManager from './OrdersManager';
import ContentManager from './ContentManager';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('stats');

  // تعريف القائمة الجانبية
  const menuItems = [
    { id: 'stats', label: 'لوحة الإحصائيات', icon: <IoStatsChartOutline size={22} /> },
    { id: 'products', label: 'إدارة المنتجات', icon: <IoBagAddOutline size={22} /> },
    { id: 'orders', label: 'إدارة الطلبات', icon: <IoClipboardOutline size={22} /> },
    { id: 'content', label: 'تعديل المحتوى', icon: <IoSettingsOutline size={22} /> },
  ];

  return (
    <div className="flex min-h-screen bg-[#F8F9FA] text-right font-tajawal" dir="rtl">
      
      {/* 1. القائمة الجانبية (Sidebar) بتصميم Minimalist Luxury */}
      <aside className="w-72 bg-brand-black text-white flex flex-col shadow-2xl">
        <div className="p-8 border-b border-white/10 text-center">
          <h1 className="text-xl font-bold tracking-widest text-brand-gold uppercase">
            إدارة الدعيس مول
          </h1>
          <p className="text-[10px] text-gray-400 mt-2 tracking-widest uppercase">Admin Control Panel</p>
        </div>

        <nav className="flex-grow p-4 mt-6">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center justify-between p-4 rounded-xl transition-all duration-300 ${
                    activeTab === item.id 
                    ? 'bg-brand-gold text-brand-black font-bold shadow-lg shadow-brand-gold/20' 
                    : 'hover:bg-white/5 text-gray-400 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    {item.icon}
                    <span>{item.label}</span>
                  </div>
                  {activeTab === item.id && <IoChevronBackOutline />}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* زر تسجيل الخروج */}
        <div className="p-6 border-t border-white/10">
          <button className="w-full flex items-center gap-4 p-4 text-red-400 hover:bg-red-500/10 rounded-xl transition">
            <IoLogOutOutline size={22} />
            <span>تسجيل الخروج</span>
          </button>
        </div>
      </aside>

      {/* 2. منطقة المحتوى الرئيسي */}
      <main className="flex-1 overflow-y-auto p-10">
        
        {/* رأس الصفحة الديناميكي */}
        <header className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold text-brand-black tracking-tight">
              {menuItems.find(i => i.id === activeTab)?.label}
            </h2>
            <p className="text-gray-400 mt-1">أهلاً بك مجدداً في مركز إدارة متجرك.</p>
          </div>
          
          <div className="flex items-center gap-4 bg-white p-3 rounded-2xl shadow-sm border">
            <div className="text-left">
              <p className="text-xs font-bold">المدير العام</p>
              <p className="text-[10px] text-gray-400">admin@aldouais.com</p>
            </div>
            <div className="w-10 h-10 bg-brand-gold rounded-full flex items-center justify-center text-brand-black font-bold">
              AD
            </div>
          </div>
        </header>

        {/* عرض المكون بناءً على التبويب النشط مع أنيميشن ناعم */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'stats' && <DashboardStats />}
            {activeTab === 'products' && <ProductsManager />}
            {activeTab === 'orders' && <OrdersManager />}
            {activeTab === 'content' && <ContentManager />}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default AdminDashboard;
