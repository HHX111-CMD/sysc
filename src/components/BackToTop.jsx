import { useState, useEffect } from 'react';

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      style={{
        position: 'fixed', bottom: 32, right: 32, zIndex: 999,
        width: 48, height: 48, borderRadius: '50%', border: 'none',
        background: 'var(--gradient-warm)', color: '#fff', fontSize: '1.4rem',
        cursor: 'pointer', boxShadow: '0 4px 16px rgba(255,107,53,0.4)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        animation: 'fadeInScale 0.3s ease',
        transition: 'transform 0.2s',
      }}
      onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
      onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
      aria-label="回到顶部"
    >
      ↑
    </button>
  );
}
