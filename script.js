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

// Clipboard 

function copyElementText() {
   var text = document.getElementById('emailClipboard').innerText;
   var elem = document.createElement("textarea");
   var btn = document.getElementById("btnClipboard");
   document.body.appendChild(elem);
   elem.value = text;
   elem.select();
   document.execCommand("copy");
   document.body.removeChild(elem);

   btn.textContent = "copied"
}