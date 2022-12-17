import { useEffect } from "react";
import AOS from "aos";

const useAnimate = () => {
  useEffect(() => {
    AOS.init();
  }, []);
};

export default useAnimate;
