import React, { useState, useEffect } from "react";
import GotoTop from '../components/assets/images/GoToTop.png'; 

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4">
      {visible && (
        <div className="flex justify-end cursor-pointer" onClick={scrollToTop}>
          <img src={GotoTop} alt="Go to top" className="w-12 h-12" />
        </div>
      )}
    </div>
  );
};

export default ScrollToTop;
