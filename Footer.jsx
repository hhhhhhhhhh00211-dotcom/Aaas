import React from 'react';
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { socialLinks } from '../../lib/settings'; // استدعاء الروابط الديناميكية

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.brand}>
          <h3>الدعيس مول - Aldoaiss Mall</h3>
          <p>وجهتكم الأولى لأرقى الأزياء والموديلات العالمية.</p>
        </div>

        <div style={styles.socialSection}>
          <h4>تابعونا على منصات التواصل</h4>
          <div style={styles.icons}>
            <a href={socialLinks.facebook} target="_blank" rel="noreferrer" style={styles.iconLink}>
              <FaFacebook size={28} />
            </a>
            <a href={socialLinks.instagram} target="_blank" rel="noreferrer" style={styles.iconLink}>
              <FaInstagram size={28} />
            </a>
            <a href={socialLinks.tiktok} target="_blank" rel="noreferrer" style={styles.iconLink}>
              <FaTiktok size={28} />
            </a>
            <a href={socialLinks.whatsapp} target="_blank" rel="noreferrer" style={{...styles.iconLink, color: '#25D366'}}>
              <FaWhatsapp size={28} />
            </a>
          </div>
        </div>
      </div>
      
      <div style={styles.copyRight}>
        © {new Date().getFullYear()} جميع الحقوق محفوظة لـ الدعيس مول.
      </div>
    </footer>
  );
};

// تنسيق سريع (Inline Styles) للرقي
const styles = {
  footer: { backgroundColor: '#1a1a1a', color: '#fff', padding: '40px 20px', marginTop: 'auto' },
  container: { display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', maxWidth: '1200px', margin: '0 auto' },
  brand: { flex: '1', minWidth: '250px', marginBottom: '20px' },
  socialSection: { flex: '1', minWidth: '250px', textAlign: 'center' },
  icons: { display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '15px' },
  iconLink: { color: '#fff', transition: '0.3s', cursor: 'pointer' },
  copyRight: { textAlign: 'center', marginTop: '30px', fontSize: '14px', borderTop: '1px solid #333', paddingTop: '20px' }
};

export default Footer;
