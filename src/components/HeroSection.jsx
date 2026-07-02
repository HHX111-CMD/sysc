import { Link } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';
import { siteInfo } from '../data/content';
import './HeroSection.css';

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="hero-circle c1" />
        <div className="hero-circle c2" />
        <div className="hero-circle c3" />
        <div className="hero-dots" />
      </div>
      <div className="container hero-content">
        <ScrollReveal>
          <div className="hero-badge">🎓 欢迎2026级新同学</div>
          <h1 className="hero-title">{siteInfo.name}</h1>
          <p className="hero-motto">{siteInfo.motto}</p>
          <p className="hero-desc">青春从这里启航，梦想在这里绽放<br/>我们期待与你相遇在美丽的邵阳学院</p>
          <div className="hero-buttons">
            <Link to="/guide" className="btn btn-primary">📋 新生指南</Link>
            <Link to="/about" className="btn btn-outline">了解更多</Link>
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <div className="hero-stats">
            {[
              { num: '67+', label: '办学历史（年）' },
              { num: siteInfo.students, label: '在校学生' },
              { num: siteInfo.majors, label: '本科专业' },
              { num: siteInfo.campuses, label: '校区' },
            ].map((s, i) => (
              <div className="stat-item" key={i}>
                <span className="stat-num">{s.num}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
