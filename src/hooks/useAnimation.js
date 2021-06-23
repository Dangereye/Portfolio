import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const useAnimation = () => {
  const animate = (section, elOne, elTwo) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 400",
        toggleActions: "play none none none",
        markers: false,
      },
    });

    if (elOne) {
      const fadeUp = gsap.from(elOne, {
        y: 100,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "back.out(2.5)",
        onComplete: () => {
          if (!elTwo) {
            tl.kill();
          }
        },
      });
      tl.add(fadeUp);
    }

    if (elTwo) {
      const scaleUp = gsap.from(elTwo, {
        scale: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "back.out(2.5)",
        onComplete: () => {
          tl.kill();
        },
      });
      tl.add(scaleUp);
    }
  };

  return animate;
};

export default useAnimation;
