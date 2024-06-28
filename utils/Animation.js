// import gsap from "gsap";
import { useRouter } from "next/router";

import gsap from "gsap";

// Adjusted animation function
export const animatePageIn = () => {
  const bannerOne = document.getElementById("banner-1");
  const bannerTwo = document.getElementById("banner-2");
  const bannerThree = document.getElementById("banner-3");

  gsap.set([bannerOne, bannerTwo, bannerThree], { y: "100%" });

  const tl = gsap.timeline();

  tl.to(bannerOne, { y: 0, duration: 0.5 })
    .to(bannerTwo, { y: 0, duration: 0.5 }, "-=0.3")
    .to(bannerThree, { y: 0, duration: 0.5 }, "-=0.3")
    .to(bannerOne, { y: "-100%", duration: 0.5 })
    .to(bannerTwo, { y: "-100%", duration: 0.5 }, "-=0.3")
    .to(bannerThree, { y: "-100%", duration: 0.5 }, "-=0.3");
};


export const animatePageOut = (callback) => {
  const bannerOne = document.getElementById("banner-1");
  const bannerTwo = document.getElementById("banner-2");
  const bannerThree = document.getElementById("banner-3");

  gsap.fromTo(
    bannerThree,
    { y: "0%", height: "0%" },
    { y: "100%", height: "100%", duration: 0.3, ease: "easeInOut" }
  );
  gsap.fromTo(
    bannerTwo,
    { y: "0%", height: "0%" },
    { y: "100%", height: "100%", delay: 0.2, duration: 0.3, ease: "easeInOut" }
  );
  gsap.fromTo(
    bannerOne,
    { y: "0%", height: "0%" },
    {
      y: "100%",
      height: "100%",
      delay: 0.4,
      duration: 0.3,
      ease: "easeInOut",
      onComplete: callback,
    }
  );
};
