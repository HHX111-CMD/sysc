import { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { faqContent } from '../data/content';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <>
      <div className="page-header">
        <h1>❓ 常见问题</h1>
        <p>新生最关心的问题，都在这里</p>
      </div>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container" style={{ maxWidth: 800, margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {faqContent.questions.map((item, i) => (
              <ScrollReveal key={i}>
                <div style={{
                  background: '#fff', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-sm)',
                  overflow: 'hidden', border: openIndex === i ? '1px solid var(--primary)' : '1px solid transparent',
                  transition: 'border 0.3s',
                }}>
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    style={{
                      width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      padding: '20px 28px', border: 'none', background: 'none', cursor: 'pointer',
                      fontSize: '1.05rem', fontWeight: 600, textAlign: 'left',
                    }}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <span style={{
                        display: 'inline-flex', width: 32, height: 32, borderRadius: '50%',
                        background: openIndex === i ? 'var(--gradient-warm)' : 'var(--bg)',
                        color: openIndex === i ? '#fff' : 'var(--primary)',
                        alignItems: 'center', justifyContent: 'center',
                        fontWeight: 800, fontSize: '1rem', flexShrink: 0,
                        transition: 'all 0.3s',
                      }}>Q</span>
                      {item.q}
                    </span>
                    <span style={{
                      transition: 'transform 0.3s', transform: openIndex === i ? 'rotate(180deg)' : 'none',
                      color: 'var(--primary)', fontSize: '1.1rem',
                    }}>▼</span>
                  </button>
                  {openIndex === i && (
                    <div style={{
                      padding: '0 28px 24px 72px', fontSize: '0.97rem', color: 'var(--text-light)',
                      lineHeight: 1.8, animation: 'fadeInUp 0.3s ease',
                    }}>
                      {item.a}
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div style={{
              marginTop: 48, textAlign: 'center', padding: '36px',
              background: 'linear-gradient(135deg, rgba(26,115,232,0.06), rgba(255,107,53,0.06))',
              borderRadius: 'var(--radius)',
            }}>
              <p style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: 8 }}>
                还有其他问题？
              </p>
              <p style={{ color: 'var(--text-light)' }}>
                欢迎拨打招生咨询电话：<strong style={{ color: 'var(--primary)' }}>0739-5432591</strong>
              </p>
              <p style={{ color: 'var(--text-light)', marginTop: 4 }}>
                或访问学校官网：<strong style={{ color: 'var(--secondary)' }}>www.hnsyu.edu.cn</strong>
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
