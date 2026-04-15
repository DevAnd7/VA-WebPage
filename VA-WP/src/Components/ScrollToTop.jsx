import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Si hay hash, NO forzamos scroll arriba
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}