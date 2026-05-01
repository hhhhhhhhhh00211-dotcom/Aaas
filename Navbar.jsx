import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion'; // للحركات الانسيابية
import { IoSearchOutline, IoPersonOutline, IoHeartOutline, IoBagHandleOutline, IoCloseOutline } from "react-icons/io5";

const Navbar = ({ session }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // تأثير مراقبة النزول (Scroll) لتحويل الهيدر من شفاف إلى زجاجي ضبابي
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/70 backdrop-blur-lg border-b border-white/20 shadow-sm py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center">
          
          {/* الجانب الأيمن: أيقونة البحث الذكية */}
          <div className="flex-1 flex justify-start items-center gap-4">
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className={`p-2 rounded-full transition-colors ${isScrolled ? 'text-brand-black' : 'text-white'}`}
            >
              <IoSearchOutline size={24} />
            </button>
          </div>

          {/* المنتصف: شعار الدعيس مول (Minimalist Luxury) */}
          <div className="flex-1 text-center">
            <Link 
              to="/" 
              className={`text-2xl md:text-3xl font-bold tracking-[0.2em] transition-colors duration-500 ${
                isScrolled ? 'text-brand-black' : 'text-white'
              }`}
            >
              ALDOAISS <span className={isScrolled ? 'text-brand-gold' : 'text-brand-gold'}>MALL</span>
            </Link>
          </div>

          {/* الجانب الأيسر: الأيقونات التفاعلية */}
          <div className={`flex-1 flex justify-end items-center gap-6 ${isScrolled ? 'text-brand-black' : 'text-white'}`}>
            
            {/* حسابي */}
            <Link to="/profile" className="hidden md:flex items-center hover:text-brand-gold transition-colors">
              <IoPersonOutline size={24} />
            </Link>

            {/* المفضلة */}
            <Link to="/wishlist" className="relative hover:text-brand-gold transition-colors">
              <IoHeartOutline size={24} />
              <span className="absolute -top-1 -right-1 bg-brand-gold text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center">0</span>
            </Link>

            {/* السلة */}
            <Link to="/cart" className="relative hover:text-brand-gold transition-colors">
              <IoBagHandleOutline size={24} />
              <span className={`absolute -top-1 -right-1 text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold ${isScrolled ? 'bg-brand-black' : 'bg-brand-gold'}`}>
                2
              </span>
            </Link>
          </div>
        </div>

        {/* محرك البحث المنسدل بتأثير Framer Motion */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-gray-100 p-8 shadow-2xl"
            >
              <div className="max-w-3xl mx-auto relative">
                <input 
                  type="text" 
                  autoFocus
                  placeholder="ابحث عن الفخامة التي تناسبك..." 
                  className="w-full bg-transparent border-b-2 border-brand-gold py-4 text-2xl text-brand-black focus:outline-none text-right font-light italic"
                />
                <button 
                  onClick={() => setIsSearchOpen(false)}
                  className="absolute left-0 top-1/2 -translate-y-1/2 text-brand-black hover:rotate-90 transition-transform duration-300"
                >
                  <IoCloseOutline size={30} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
