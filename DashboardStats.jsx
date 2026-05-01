import React from 'react';
import { IoStatsChart, IoBagHandle, IoPeople, IoCash } from "react-icons/io5";

const DashboardStats = () => {
  // ملاحظة: القيم هنا افتراضية، يمكنك ربطها بـ Supabase لاحقاً
  const stats = [
    { title: "إجمالي المبيعات", value: "15,400 ر.س", icon: <IoCash />, color: "bg-green-500" },
    { title: "طلبات اليوم", value: "12", icon: <IoBagHandle />, color: "bg-blue-500" },
    { title: "زوار الموقع", value: "+1,200", icon: <IoPeople />, color: "bg-purple-500" },
    { title: "نسبة النمو", value: "15%", icon: <IoStatsChart />, color: "bg-brand-gold" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
      {stats.map((item, idx) => (
        <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm mb-1">{item.title}</p>
            <h3 className="text-2xl font-bold">{item.value}</h3>
          </div>
          <div className={`${item.color} text-white p-3 rounded-xl shadow-lg`}>
            {React.cloneElement(item.icon, { size: 24 })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardStats;
