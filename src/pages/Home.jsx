import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import ScrollReveal from '../components/ScrollReveal';

const cards = [
  { icon: '🏛️', title: '学校概况', desc: '了解邵阳学院的历史、校区和办学特色', link: '/about', color: '#FF6B35' },
  { icon: '🌳', title: '校园风光', desc: '花园式校园，感受优美的学习环境', link: '/campus', color: '#2ECC71' },
  { icon: '📚', title: '院系专业', desc: '22个学院、51个本科专业等你来选', link: '/majors', color: '#1A73E8' },
  { icon: '📋', title: '招生信息', desc: '最新招生政策与咨询方式', link: '/admissions', color: '#9B59B6' },
  { icon: '🏠', title: '校园生活', desc: '宿舍、食堂、社团，精彩大学生活', link: '/life', color: '#E67E22' },
  { icon: '🗺️', title: '新生指南', desc: '报到流程、必备清单、交通路线全攻略', link: '/guide', color: '#E74C3C' },
];

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* 导航卡片区域 */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">快速了解邵阳学院</h2>
            <p className="section-subtitle">点击下方卡片，开启你的大学探索之旅 🚀</p>
          </ScrollReveal>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 24,
          }}>
            {cards.map((card, i) => (
              <ScrollReveal key={card.title} className={`delay-${i % 3}`}>
                <Link
                  to={card.link}
                  style={{
                    display: 'block',
                    padding: '36px 28px',
                    background: '#fff',
                    borderRadius: 'var(--radius)',
                    boxShadow: 'var(--shadow)',
                    transition: 'all 0.35s ease',
                    borderTop: `4px solid ${card.color}`,
                    cursor: 'pointer',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'var(--shadow)';
                  }}
                >
                  <span style={{ fontSize: '2.8rem', display: 'block', marginBottom: 16 }}>{card.icon}</span>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: 8, color: '#2D3436' }}>{card.title}</h3>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-light)', lineHeight: 1.6 }}>{card.desc}</p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 特色亮点 */}
      <section style={{ background: 'linear-gradient(135deg, rgba(255,107,53,0.04), rgba(26,115,232,0.04))' }} className="section">
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">选择邵阳学院的理由</h2>
            <p className="section-subtitle">一流的学习环境，广阔的发展平台</p>
          </ScrollReveal>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24,
          }}>
            {[
              { icon: '🏆', title: '办学实力强', desc: '湖南省"双一流"高水平应用特色学院，6个省级一流应用特色学科' },
              { icon: '🎯', title: '专业选择多', desc: '51个本科专业，3个国家级一流专业，31个省级一流专业' },
              { icon: '👨‍🏫', title: '师资力量雄厚', desc: '4100+教职工，博士532人，正副教授超1000人' },
              { icon: '🌍', title: '校园环境美', desc: '湖南省"花园式单位"，4个校区，占地近2500亩' },
              { icon: '💡', title: '实践机会多', desc: '卓越医生、新农科、新工科等多项目驱动，产教融合' },
              { icon: '🎓', title: '就业前景好', desc: '全国毕业生就业典型经验高校，社会认可度高' },
            ].map((item, i) => (
              <ScrollReveal key={i}>
                <div style={{
                  padding: 32, background: '#fff', borderRadius: 'var(--radius)',
                  boxShadow: 'var(--shadow-sm)', textAlign: 'center',
                  transition: 'transform 0.3s', cursor: 'default',
                }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  <span style={{ fontSize: '2.4rem', display: 'block', marginBottom: 12 }}>{item.icon}</span>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 8 }}>{item.title}</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <ScrollReveal>
            <div style={{
              padding: '60px 40px', background: 'linear-gradient(135deg, #FF6B35, #FF416C)',
              borderRadius: 'var(--radius-lg)', color: '#fff',
            }}>
              <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: 12 }}>准备好开启你的大学之旅了吗？</h2>
              <p style={{ fontSize: '1.1rem', opacity: 0.9, marginBottom: 32 }}>查看新生指南，做好入学准备</p>
              <Link to="/guide" className="btn" style={{
                background: '#fff', color: 'var(--primary)', fontWeight: 700,
                padding: '16px 40px', fontSize: '1.1rem',
              }}>📋 查看新生指南 →</Link>
              <p style={{ marginTop: 24, fontSize: '1rem', opacity: 0.85 }}>
                📞 咨询电话：<strong style={{ fontSize: '1.15rem' }}>15364075803</strong>
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
