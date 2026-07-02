import { Link } from 'react-router-dom';
import { siteInfo } from '../data/content';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-wave">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z" fill="var(--bg)"/>
        </svg>
      </div>
      <div className="footer-content">
        <div className="container footer-grid">
          <div className="footer-brand">
            <h3>🎓 {siteInfo.name}</h3>
            <p>{siteInfo.motto}</p>
            <p className="footer-address">📍 {siteInfo.location}</p>
            <p>📞 {siteInfo.phone}</p>
          </div>
          <div className="footer-links">
            <h4>快速导航</h4>
            <Link to="/about">学校概况</Link>
            <Link to="/majors">院系专业</Link>
            <Link to="/life">校园生活</Link>
            <Link to="/guide">新生指南</Link>
            <Link to="/faq">常见问题</Link>
          </div>
          <div className="footer-links">
            <h4>友情链接</h4>
            <a href="https://www.hnsyu.edu.cn" target="_blank" rel="noopener noreferrer">学校官网</a>
            <a href="https://gaokao.chsi.com.cn" target="_blank" rel="noopener noreferrer">阳光高考</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 {siteInfo.name}迎新网 | 本网站仅供参考，具体信息以学校官方发布为准</p>
        </div>
      </div>
    </footer>
  );
}
