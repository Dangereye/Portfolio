import { useLocation } from "react-router-dom";
const useScroll = () => {
  const location = useLocation();
  const hash = location.hash.replace("#", "");
  const startScroll = (target) => {
    setTimeout(() => {
      window.scrollTo({
        behavior: target ? "smooth" : "auto",
        top: target ? target.offsetTop - 100 : 0,
      });
    }, 100);
  };

  return [hash, startScroll];
};

export default useScroll;
