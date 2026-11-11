import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTopOnRoute() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll both window and document element to top on navigation
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);

  return null;
}

