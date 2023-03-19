import { useState, useEffect } from "react";

const useScrollToEnd = (callbackFn: (isEnd: boolean) => void) => {
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
      const clientHeight = document.documentElement.clientHeight || window.innerHeight;
      const isBottom = scrollTop + clientHeight === scrollHeight;
      setIsEnd(isBottom);
      callbackFn(isBottom)
    };

    handleScroll()

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return isEnd;
};

export default useScrollToEnd;