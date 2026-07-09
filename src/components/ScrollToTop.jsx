import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// 路由切换时回到页面顶部（否则新页面会停在上一页的滚动位置）
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
}
