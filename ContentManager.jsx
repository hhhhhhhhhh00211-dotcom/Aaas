import React, { useState } from 'react';

const ContentManager = () => {
  const [heroTitle, setHeroTitle] = useState("الدعيس مول.. حيث تبدأ الأناقة");

  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border text-right">
      <h2 className="text-xl font-bold mb-6 border-b pb-4">إدارة محتوى الصفحة الرئيسية</h2>
      <div className="space-y-6 max-w-lg">
        <div>
          <label className="block mb-2 font-medium">عنوان الترحيب الرئيسي</label>
          <input 
            type="text" 
            value={heroTitle}
            onChange={(e) => setHeroTitle(e.target.value)}
            className="w-full p-3 bg-gray-50 border rounded-xl outline-none focus:border-brand-gold"
          />
        </div>
        <div>
          <label className="block mb-2 font-medium">رابط الفيديو الرئيسي (Hero Video)</label>
          <input 
            type="text" 
            placeholder="أدخل رابط فيديو MP4..."
            className="w-full p-3 bg-gray-50 border rounded-xl outline-none"
          />
        </div>
        <button className="bg-brand-gold text-white px-8 py-3 rounded-xl font-bold hover:shadow-lg transition">
          حفظ التغييرات في الموقع
        </button>
      </div>
    </div>
  );
};

export default ContentManager;
