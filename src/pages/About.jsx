import ScrollReveal from '../components/ScrollReveal';
import { aboutContent } from '../data/content';

export default function About() {
  const { intro, campuses, features, stats } = aboutContent;
  return (
    <>
      <div className="page-header">
        <h1>🏛️ 学校概况</h1>
        <p>了解邵阳学院的历史传承与办学特色</p>
      </div>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <ScrollReveal>
            <div style={{
              background: '#fff', borderRadius: 'var(--radius)', padding: '40px 36px',
              boxShadow: 'var(--shadow)', marginBottom: 48,
            }}>
              <h2 style={{ fontSize: '1.6rem', fontWeight: 700, marginBottom: 20, color: 'var(--primary)' }}>
                {intro.title}
              </h2>
              {intro.paragraphs.map((p, i) => (
                <p key={i} style={{ fontSize: '1.05rem', lineHeight: 1.9, color: 'var(--text-light)', marginBottom: 16, textIndent: '2em' }}>
                  {p}
                </p>
              ))}
            </div>
          </ScrollReveal>

          {/* 关键数据 */}
          <ScrollReveal>
            <h2 className="section-title">关键数据</h2>
            <p className="section-subtitle">用数据了解邵阳学院</p>
          </ScrollReveal>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20, marginBottom: 64,
          }}>
            {stats.map((s, i) => (
              <ScrollReveal key={i}>
                <div style={{
                  background: '#fff', borderRadius: 'var(--radius)', padding: '28px 20px',
                  boxShadow: 'var(--shadow-sm)', textAlign: 'center',
                }}>
                  <span style={{ fontSize: '2.6rem', fontWeight: 900, background: 'var(--gradient-warm)',
                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', display: 'block' }}>
                    {s.value}<small style={{ fontSize: '1rem' }}>{s.suffix}</small>
                  </span>
                  <span style={{ display: 'block', fontWeight: 700, fontSize: '1.05rem', margin: '8px 0 4px' }}>{s.label}</span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{s.desc}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* 校区 */}
          <ScrollReveal>
            <h2 className="section-title">四大校区</h2>
            <p className="section-subtitle">各具特色，协同发展</p>
          </ScrollReveal>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24, marginBottom: 64,
          }}>
            {campuses.map((c, i) => (
              <ScrollReveal key={i}>
                <div style={{
                  background: '#fff', borderRadius: 'var(--radius)', padding: '32px 24px',
                  boxShadow: 'var(--shadow)', borderLeft: '4px solid var(--primary)',
                  height: '100%',
                }}>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: 12, color: 'var(--primary)' }}>
                    {c.name}
                  </h3>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-light)', lineHeight: 1.7 }}>{c.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* 特色 */}
          <ScrollReveal>
            <h2 className="section-title">学校特色</h2>
          </ScrollReveal>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16,
          }}>
            {features.map((f, i) => (
              <ScrollReveal key={i}>
                <div style={{
                  padding: '20px 24px', background: '#fff', borderRadius: 'var(--radius-sm)',
                  boxShadow: 'var(--shadow-sm)', display: 'flex', alignItems: 'center', gap: 14,
                  fontSize: '0.98rem', fontWeight: 500,
                }}>
                  <span style={{
                    width: 32, height: 32, borderRadius: '50%', background: 'var(--gradient-warm)',
                    color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.85rem', fontWeight: 700, flexShrink: 0,
                  }}>✓</span>
                  {f}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
