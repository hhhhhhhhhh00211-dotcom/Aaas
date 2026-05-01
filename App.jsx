import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { supabase } from './lib/supabaseClient';

// --- استيراد المكونات العامة للمتجر ---
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import WhatsAppButton from './components/WhatsAppButton';

// --- استيراد صفحات المتجر (الزبائن) ---
import Home from './pages/Home';
// import ProductDetails from './pages/ProductDetails'; // تفعل لاحقاً
// import Cart from './pages/Cart'; // تفعل لاحقاً

// --- استيراد لوحة تحكم الإدارة (الأدمن) ---
import AdminDashboard from './admin/AdminDashboard';

function App() {
  const [session, setSession] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // 1. التحقق من حالة تسجيل الدخول عند فتح الموقع
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      checkIfAdmin(session);
    });

    // 2. مراقبة أي تغيير في حالة المستخدم (تسجيل دخول/خروج)
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      checkIfAdmin(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  // وظيفة للتحقق مما إذا كان المستخدم "أدمن" من الـ Metadata في Supabase
  const checkIfAdmin = (session) => {
    const userRole = session?.user?.user_metadata?.role;
    if (userRole === 'admin') {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  };

  // مكون لحماية مسار الأدمن (لا يدخله إلا المدير)
  const ProtectedAdminRoute = ({ children }) => {
    if (!session || !isAdmin) {
      // إذا لم يكن مسجلاً أو ليس أدمن، يتم تحويله للرئيسية
      return <Navigate to="/" replace />;
    }
    return children;
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white font-tajawal selection:bg-brand-gold selection:text-white" dir="rtl">
        
        {/* العرض الشرطي للـ Navbar: يختفي في لوحة التحكم ليعطي مساحة أكبر */}
        <Routes>
          <Route path="/admin/*" element={null} />
          <Route path="*" element={<Navbar session={session} />} />
        </Routes>

        <main className="flex-grow">
          <Routes>
            {/* --- مسارات المتجر (الزبائن) --- */}
            <Route path="/" element={<Home />} />
            {/* <Route path="/product/:id" element={<ProductDetails />} /> */}
            {/* <Route path="/cart" element={<Cart />} /> */}

            {/* --- مسار لوحة التحكم (محمي) --- */}
            <Route 
              path="/admin/*" 
              element={
                <ProtectedAdminRoute>
                  <AdminDashboard />
                </ProtectedAdminRoute>
              } 
            />

            {/* في حال إدخال رابط خاطئ */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* زر الواتساب يظهر فقط في صفحات الزبائن وليس للأدمن */}
        <Routes>
          <Route path="/admin/*" element={null} />
          <Route path="*" element={<WhatsAppButton />} />
        </Routes>

        {/* الفوتر يظهر فقط للزبائن */}
        <Routes>
          <Route path="/admin/*" element={null} />
          <Route path="*" element={<Footer />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
