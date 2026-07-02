import ScrollReveal from '../components/ScrollReveal';
import { admissionsContent } from '../data/content';

export default function Admissions() {
  const { overview, contact, tips } = admissionsContent;
  return (
    <>
      <div className="page-header">
        <h1>📋 招生信息</h1>
        <p>面向全国30个省（自治区、直辖市）招生</p>
      </div>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          {/* 招生概况 */}
          <ScrollReveal>
            <div style={{
              background: '#fff', borderRadius: 'var(--radius)', padding: '40px 36px',
              boxShadow: 'var(--shadow)', marginBottom: 48,
            }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 20 }}>{overview.title}</h2>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {overview.items.map((item, i) => (
                  <li key={i} style={{
                    display: 'flex', alignItems: 'flex-start', gap: 12,
                    fontSize: '1.05rem', color: 'var(--text-light)', lineHeight: 1.7,
                  }}>
                    <span style={{ color: 'var(--primary)', fontWeight: 700, flexShrink: 0 }}>●</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* 联系方式 */}
          <ScrollReveal>
            <h2 className="section-title">{contact.title}</h2>
            <p className="section-subtitle">有问题？通过这些方式联系我们</p>
          </ScrollReveal>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20, marginBottom: 48,
          }}>
            {contact.items.map((item, i) => (
              <ScrollReveal key={i}>
                <div style={{
                  background: '#fff', borderRadius: 'var(--radius)', padding: '28px 24px',
                  boxShadow: 'var(--shadow-sm)', textAlign: 'center',
                }}>
                  <span style={{ fontSize: '2rem', display: 'block', marginBottom: 8 }}>
                    {['📞','📍','🌐','💬'][i]}
                  </span>
                  <h4 style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: 6 }}>{item.label}</h4>
                  <p style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--text)' }}>{item.value}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* 提示 */}
          <ScrollReveal>
            <div style={{
              background: '#FFF8E1', borderRadius: 'var(--radius)', padding: '32px',
              border: '1px solid #FFE082',
            }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 16, color: '#F57F17' }}>
                💡 报考小贴士
              </h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {tips.map((tip, i) => (
                  <li key={i} style={{ fontSize: '0.95rem', color: 'var(--text-light)', display: 'flex', gap: 10 }}>
                    <span style={{ color: 'var(--accent)' }}>{i + 1}.</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
