// src/components/SocialWall.jsx
import React from 'react';

const SocialWall = () => {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <h2 className="text-center text-3xl font-light mb-12 italic text-brand-black">#Aldoaiss_Style</h2>
      <div className="columns-2 md:columns-4 gap-4 space-y-4">
        {/* استبدل هذه الروابط بصور حقيقية من انستجرام الدعيس مول */}
        <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000" className="w-full rounded-lg hover:opacity-80 transition duration-500" alt="Style 1" />
        <img src="https://images.unsplash.com/photo-1539109132381-3151b8a77ce3?q=80&w=1000" className="w-full rounded-lg hover:opacity-80 transition duration-500" alt="Style 2" />
        <img src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1000" className="w-full rounded-lg hover:opacity-80 transition duration-500" alt="Style 3" />
        <img src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1000" className="w-full rounded-lg hover:opacity-80 transition duration-500" alt="Style 4" />
      </div>
    </section>
  );
}

export default SocialWall;
