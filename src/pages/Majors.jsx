import { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { majorsContent } from '../data/content';

export default function Majors() {
  const { categories, highlights } = majorsContent;
  const [expanded, setExpanded] = useState(0);

  return (
    <>
      <div className="page-header">
        <h1>📚 院系专业</h1>
        <p>22个二级学院 · 51个本科专业 · 涵盖11大学科门类</p>
      </div>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          {/* 学科亮点 */}
          <ScrollReveal>
            <div style={{
              background: 'linear-gradient(135deg, #FFF3E0, #E3F2FD)', borderRadius: 'var(--radius-lg)',
              padding: '40px 36px', marginBottom: 56,
            }}>
              <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: 24, textAlign: 'center' }}>
                ⭐ {highlights.title}
              </h2>
              <div style={{
                display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16,
              }}>
                {highlights.items.map((h, i) => (
                  <div key={i} style={{
                    background: 'rgba(255,255,255,0.85)', padding: '20px', borderRadius: 'var(--radius-sm)',
                    borderLeft: '4px solid var(--primary)',
                  }}>
                    <strong style={{ color: 'var(--primary)', fontSize: '0.85rem', textTransform: 'uppercase' }}>
                      {h.label}
                    </strong>
                    <p style={{ marginTop: 6, fontSize: '0.92rem', color: 'var(--text-light)', lineHeight: 1.6 }}>
                      {h.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* 学院列表 */}
          <ScrollReveal>
            <h2 className="section-title">学院与专业</h2>
            <p className="section-subtitle">按类别浏览各学院及其开设专业</p>
          </ScrollReveal>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {categories.map((cat, i) => (
              <ScrollReveal key={i}>
                <div style={{
                  background: '#fff', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-sm)', overflow: 'hidden',
                }}>
                  <button
                    onClick={() => setExpanded(expanded === i ? -1 : i)}
                    style={{
                      width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      padding: '20px 28px', border: 'none', background: 'none', cursor: 'pointer',
                      fontSize: '1.15rem', fontWeight: 700,
                    }}
                  >
                    <span>{cat.name}</span>
                    <span style={{
                      transition: 'transform 0.3s', transform: expanded === i ? 'rotate(180deg)' : 'none',
                      color: 'var(--primary)', fontSize: '1.2rem',
                    }}>▼</span>
                  </button>
                  {expanded === i && (
                    <div style={{ padding: '0 28px 24px', display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 16 }}>
                      {cat.colleges.map((col, j) => (
                        <div key={j} style={{
                          padding: '18px 20px', background: 'var(--bg)', borderRadius: 'var(--radius-sm)',
                        }}>
                          <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: 8, color: 'var(--secondary)' }}>
                            {col.name}
                          </h4>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                            {col.majors.map((m, k) => (
                              <span key={k} style={{
                                display: 'inline-block', padding: '4px 12px', borderRadius: 50,
                                background: 'rgba(26,115,232,0.08)', color: 'var(--secondary)',
                                fontSize: '0.82rem', fontWeight: 500,
                              }}>{m}</span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
