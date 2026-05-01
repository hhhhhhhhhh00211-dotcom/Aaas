import React from 'react';
import { FaInstagram, FaTiktok } from 'react-icons/fa';
import { socialLinks } from '../lib/settings';

const SocialFeeds = () => {
  // بيانات تجريبية للمنشورات (يمكنك لاحقاً جلبها من Supabase أو API)
  const posts = [
    { id: 1, type: 'video', thumbnail: 'https://placehold.co/400x600/black/white?text=New+Collection', link: socialLinks.instagram },
    { id: 2, type: 'image', thumbnail: 'https://placehold.co/400x600/red/white?text=Flash+Sale', link: socialLinks.tiktok },
    { id: 3, type: 'video', thumbnail: 'https://placehold.co/400x600/gold/black?text=Aldoaiss+Styles', link: socialLinks.instagram },
    { id: 4, type: 'image', thumbnail: 'https://placehold.co/400x600/blue/white?text=Trending+Now', link: socialLinks.tiktok },
  ];

  return (
    <section style={styles.section}>
      <div style={styles.header}>
        <h2 style={styles.title}>أجواء الدعيس مول على السوشيال ميديا</h2>
        <p style={styles.subtitle}>تابعونا للحصول على آخر العروض والموديلات الحصرية</p>
      </div>

      <div style={styles.grid}>
        {posts.map((post) => (
          <a 
            key={post.id} 
            href={post.link} 
            target="_blank" 
            rel="noreferrer" 
            style={styles.postCard}
          >
            <img src={post.thumbnail} alt="Social Post" style={styles.image} />
            <div style={styles.overlay}>
              {post.id % 2 === 0 ? <FaInstagram size={30} /> : <FaTiktok size={30} />}
              <span>عرض المنشور</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

const styles = {
  section: { padding: '60px 20px', backgroundColor: '#f9f9f9', textAlign: 'center' },
  header: { marginBottom: '40px' },
  title: { fontSize: '28px', fontWeight: 'bold', color: '#1a1a1a', marginBottom: '10px' },
  subtitle: { color: '#666', fontSize: '16px' },
  grid: { 
    display: 'grid', 
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
    gap: '15px', 
    maxWidth: '1200px', 
    margin: '0 auto' 
  },
  postCard: { 
    position: 'relative', 
    borderRadius: '12px', 
    overflow: 'hidden', 
    aspectRatio: '3/4', 
    display: 'block',
    textDecoration: 'none'
  },
  image: { width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' },
  overlay: { 
    position: 'absolute', 
    top: 0, left: 0, width: '100%', height: '100%', 
    backgroundColor: 'rgba(0,0,0,0.4)', 
    color: '#fff', 
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'center', 
    alignItems: 'center', 
    opacity: 0, 
    transition: 'opacity 0.3s',
    gap: '10px'
  }
};

// تحسين: تأثير الـ Hover يتم عبر CSS (أو يمكنك إضافة useState في React)
export default SocialFeeds;
