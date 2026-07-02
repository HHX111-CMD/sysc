import ScrollReveal from '../components/ScrollReveal';
import { guideContent } from '../data/content';

export default function Guide() {
  const { process, checklist, transport, payment, warnings, messages } = guideContent;

  return (
    <>
      <div className="page-header">
        <h1>🗺️ 新生指南</h1>
        <p>入学报到全流程，帮你轻松开启大学生活</p>
      </div>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          {/* 报到流程 */}
          <ScrollReveal>
            <h2 className="section-title">{process.title}</h2>
            <p className="section-subtitle">报到当天跟着流程走，轻松搞定</p>
          </ScrollReveal>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16, marginBottom: 64,
          }}>
            {process.steps.map((st, i) => (
              <ScrollReveal key={i}>
                <div style={{
                  background: '#fff', borderRadius: 'var(--radius)', padding: '28px 20px',
                  boxShadow: 'var(--shadow-sm)', textAlign: 'center', position: 'relative',
                }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: '50%', background: 'var(--gradient-warm)',
                    color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.2rem', fontWeight: 800, margin: '0 auto 14px',
                  }}>{st.step}</div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: 6 }}>{st.title}</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-light)', lineHeight: 1.5 }}>{st.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* 必备物品 */}
          <ScrollReveal>
            <h2 className="section-title">{checklist.title}</h2>
            <p className="section-subtitle">出发前对照清单，确保万无一失</p>
          </ScrollReveal>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24, marginBottom: 64,
          }}>
            {checklist.categories.map((cat, i) => (
              <ScrollReveal key={i}>
                <div style={{
                  background: '#fff', borderRadius: 'var(--radius)', padding: '28px',
                  boxShadow: 'var(--shadow)', height: '100%',
                }}>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: 16, color: 'var(--primary)' }}>
                    {cat.name}
                  </h3>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {cat.items.map((item, j) => (
                      <li key={j} style={{
                        fontSize: '0.93rem', color: 'var(--text-light)', paddingLeft: 18,
                        position: 'relative', lineHeight: 1.6,
                      }}>
                        <span style={{ position: 'absolute', left: 0, color: 'var(--secondary)' }}>•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* 交通 + 缴费 */}
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 28, marginBottom: 64,
          }}>
            <ScrollReveal>
              <div style={{
                background: '#fff', borderRadius: 'var(--radius)', padding: '32px',
                boxShadow: 'var(--shadow)', height: '100%',
              }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: 16 }}>{transport.title}</h3>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {transport.items.map((item, i) => (
                    <li key={i} style={{ fontSize: '0.95rem', color: 'var(--text-light)', lineHeight: 1.6 }}>
                      🚩 {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div style={{
                background: '#fff', borderRadius: 'var(--radius)', padding: '32px',
                boxShadow: 'var(--shadow)', height: '100%',
              }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: 16 }}>{payment.title}</h3>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {payment.items.map((item, i) => (
                    <li key={i} style={{ fontSize: '0.95rem', color: 'var(--text-light)', lineHeight: 1.6 }}>
                      💰 {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>

          {/* 防骗提醒 */}
          <ScrollReveal>
            <div style={{
              background: '#FFF5F5', borderRadius: 'var(--radius)', padding: '32px',
              border: '2px solid #FED7D7', marginBottom: 64,
            }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: 16, color: '#E53E3E' }}>
                {warnings.title}
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 12 }}>
                {warnings.items.map((item, i) => (
                  <div key={i} style={{
                    display: 'flex', alignItems: 'flex-start', gap: 10,
                    fontSize: '0.95rem', color: 'var(--text)', lineHeight: 1.6,
                    padding: '10px 14px', background: 'rgba(255,255,255,0.7)', borderRadius: 'var(--radius-sm)',
                  }}>
                    <span>🚫</span> {item}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* 学长学姐寄语 */}
          <ScrollReveal>
            <h2 className="section-title">{messages.title}</h2>
          </ScrollReveal>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24,
          }}>
            {messages.items.map((msg, i) => (
              <ScrollReveal key={i}>
                <div style={{
                  background: '#fff', borderRadius: 'var(--radius)', padding: '28px',
                  boxShadow: 'var(--shadow)', position: 'relative',
                }}>
                  <span style={{ fontSize: '2rem', color: 'var(--primary)', opacity: 0.3, position: 'absolute', top: 12, left: 16 }}>
                    ❝
                  </span>
                  <p style={{ fontSize: '0.97rem', color: 'var(--text-light)', lineHeight: 1.8, fontStyle: 'italic', padding: '8px 0' }}>
                    {msg.text}
                  </p>
                  <p style={{ textAlign: 'right', fontWeight: 700, color: 'var(--primary)', marginTop: 12 }}>
                    —— {msg.author}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
