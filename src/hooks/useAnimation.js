import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const useAnimation = () => {
  const animate = (section, elOne, elTwo) => {
    const anim = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 400",
        toggleActions: "play none none none",
        markers: false,
      },
    });
    anim.from(elOne, {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "back.out(2.5)",
    });

    if (elTwo) {
      anim.from(elTwo, {
        scale: 0,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "back.out(2.5)",
      });
    }
  };

  return animate;
};

export default useAnimation;
