import ScrollReveal from '../components/ScrollReveal';
import { lifeContent } from '../data/content';

export default function Life() {
  const { dormitory, canteen, scholarship, activities } = lifeContent;
  const dormColors = { best: '#2ECC71', good: '#1A73E8', normal: '#FFB347', basic: '#95A5A6' };

  return (
    <>
      <div className="page-header">
        <h1>🏠 校园生活</h1>
        <p>舒适 · 便捷 · 丰富多彩</p>
      </div>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          {/* 宿舍 */}
          <ScrollReveal>
            <h2 className="section-title">{dormitory.title}</h2>
          </ScrollReveal>
          <ScrollReveal>
            <p style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto 32px', color: 'var(--text-light)', fontSize: '1rem', lineHeight: 1.8 }}>
              {dormitory.description}
            </p>
          </ScrollReveal>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20, marginBottom: 56,
          }}>
            {dormitory.types.map((d, i) => (
              <ScrollReveal key={i}>
                <div style={{
                  background: '#fff', borderRadius: 'var(--radius)', padding: '28px 24px',
                  boxShadow: 'var(--shadow)', borderTop: `4px solid ${dormColors[d.level]}`,
                  textAlign: 'center',
                }}>
                  <span style={{ fontSize: '2.2rem', display: 'block', marginBottom: 12 }}>
                    {['🏆','👍','👌','✅'][i]}
                  </span>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: 4 }}>{d.type}</h3>
                  <p style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--primary)', margin: '8px 0' }}>{d.fee}</p>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-light)' }}>{d.config}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* 食堂 */}
          <ScrollReveal>
            <h2 className="section-title">{canteen.title}</h2>
          </ScrollReveal>
          <ScrollReveal>
            <div style={{
              background: '#fff', borderRadius: 'var(--radius)', padding: '36px',
              boxShadow: 'var(--shadow)', marginBottom: 56,
            }}>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.9, color: 'var(--text-light)', marginBottom: 20 }}>
                {canteen.description}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
                {canteen.highlights.map((h, i) => (
                  <span key={i} style={{
                    padding: '8px 18px', borderRadius: 50, background: 'rgba(46,204,113,0.1)',
                    color: '#27AE60', fontWeight: 600, fontSize: '0.9rem',
                  }}>✓ {h}</span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* 奖学金 + 活动 */}
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 28,
          }}>
            <ScrollReveal>
              <div style={{
                background: '#fff', borderRadius: 'var(--radius)', padding: '32px',
                boxShadow: 'var(--shadow)', height: '100%',
              }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: 20 }}>{scholarship.title}</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {scholarship.items.map((s, i) => (
                    <div key={i} style={{
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      padding: '14px 16px', background: 'var(--bg)', borderRadius: 'var(--radius-sm)',
                    }}>
                      <span style={{ fontWeight: 600, fontSize: '0.95rem' }}>{s.name}</span>
                      <span style={{ fontWeight: 800, color: 'var(--primary)', fontSize: '1.05rem' }}>{s.amount}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div style={{
                background: 'linear-gradient(135deg, #FF6B35, #FF416C)', borderRadius: 'var(--radius)',
                padding: '32px', color: '#fff', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center',
              }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: 16 }}>{activities.title}</h3>
                <p style={{ fontSize: '1rem', lineHeight: 1.8, opacity: 0.95 }}>
                  {activities.description}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
