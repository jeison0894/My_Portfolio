let appear = gsap.utils.toArray(".reveal");
appear.forEach((el, i) => {
   gsap.from(el, {
      yPercent: 120,
      opacity: 0,
      duration: 1,
      delay: 0.2,

      scrollTrigger: {
         trigger: el,
         start: "top bottom-=100px",
         end: "bottom top",
         once: true,
         toggleActions: "restart pause resume reset",

      },

   });
});






//Copy to clipboard

function myFunction() {

   let email = document.getElementById('email')
   email.select();
   email.setSelectionRange(0, 99999);
   document.execCommand("copyyy");
   alert("Copied the text: " + email.value);
}