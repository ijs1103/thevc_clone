import { useState, useEffect } from "react";
export default function useScrollEnd() {
  const [scrollEnd, setScrollEnd] = useState(false);
  const handleScroll = () =>
    document.documentElement.scrollTop +
      document.documentElement.clientHeight ===
    document.documentElement.scrollHeight
      ? setScrollEnd(true)
      : setScrollEnd(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return scrollEnd;
}
