import { useEffect, useRef } from "react";

const useKeyboardAdjustments = () => {
  const previousScrollY = useRef(0);

  useEffect(() => {
    const handleFocus = (event) => {
      previousScrollY.current = window.scrollY;
      const target = event.target;
      setTimeout(() => {
        target.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 300); // Adjust the timeout as needed
    };

    const handleBlur = () => {
      window.scrollTo({ top: previousScrollY.current, behavior: "smooth" });
    };

    document.querySelectorAll("input, textarea").forEach((el) => {
      el.addEventListener("focus", handleFocus);
      el.addEventListener("blur", handleBlur);
    });

    return () => {
      document.querySelectorAll("input, textarea").forEach((el) => {
        el.removeEventListener("focus", handleFocus);
        el.removeEventListener("blur", handleBlur);
      });
    };
  }, []);
};

export default useKeyboardAdjustments;
