import ScrollReveal from '../components/ScrollReveal';
import { campusScenery } from '../data/content';

export default function Campus() {
  const { landmarks } = campusScenery;
  return (
    <>
      <div className="page-header">
        <h1>🌳 校园风光</h1>
        <p>湖南省"花园式单位"——林木葱郁，鸟语花香</p>
      </div>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          {/* 标志建筑 */}
          <ScrollReveal>
            <h2 className="section-title">标志性建筑与景观</h2>
            <p className="section-subtitle">每一处风景都承载着邵院人的记忆</p>
          </ScrollReveal>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 28,
          }}>
            {landmarks.map((lm, i) => (
              <ScrollReveal key={i}>
                <div style={{
                  background: '#fff', borderRadius: 'var(--radius)', overflow: 'hidden',
                  boxShadow: 'var(--shadow)', transition: 'transform 0.3s',
                  cursor: 'default',
                }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-6px)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  <div style={{
                    height: 180, display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '4rem', background: `linear-gradient(135deg, ${['#FFF3E0','#E3F2FD','#E8F5E9','#FCE4EC','#F3E5F5','#E0F7FA'][i]}, ${['#FFE0B2','#BBDEFB','#C8E6C9','#F8BBD0','#E1BEE7','#B2EBF2'][i]})`,
                  }}>
                    {lm.emoji}
                  </div>
                  <div style={{ padding: '20px 24px' }}>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: 8 }}>{lm.name}</h3>
                    <p style={{ fontSize: '0.92rem', color: 'var(--text-light)', lineHeight: 1.7 }}>{lm.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* 花园单位 */}
          <ScrollReveal>
            <div style={{
              marginTop: 64, background: 'linear-gradient(135deg, #E8F5E9, #C8E6C9)',
              borderRadius: 'var(--radius-lg)', padding: '48px 40px', textAlign: 'center',
            }}>
              <span style={{ fontSize: '3rem', display: 'block', marginBottom: 16 }}>🌿</span>
              <h2 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: 12, color: '#2E7D32' }}>
                湖南省"花园式单位"
              </h2>
              <p style={{ fontSize: '1.05rem', color: '#33691E', maxWidth: 700, margin: '0 auto', lineHeight: 1.8 }}>
                邵阳学院校园绿化覆盖率高，四季常青，三季有花。春天的樱花、夏天的荷花、秋天的银杏、冬天的腊梅，
                构成了如画的校园景致。学校被评为湖南省"花园式单位"和湖南省文明高校，
                是莘莘学子求学成才的理想之地。
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
