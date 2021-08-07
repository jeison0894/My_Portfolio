let appear = gsap.utils.toArray(".reveal");
appear.forEach((el, i) => {
   gsap.from(el, {
      yPercent: 120,
      opacity: 0,
      duration: 1,
      delay: 1.8,

      scrollTrigger: {
         trigger: el,
         start: "top bottom-=100px",
         end: "bottom top",
         once: true,
         toggleActions: "restart pause resume reset",
      },
   });
});

let appear2 = gsap.utils.toArray(".reveal2");
appear2.forEach((el, i) => {
   gsap.from(el, {
      yPercent: 120,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
         trigger: el,
         start: "top bottom-=100px",
         end: "bottom top",
         once: true,
         toggleActions: "restart pause resume reset",
      },
   });
});