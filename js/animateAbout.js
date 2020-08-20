ScrollTrigger.matchMedia({
  // laptop
  "(min-width:720px)":function(){
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".about-section",
          start: "center center",
          end: "500%",
          scrub: 1,
          pin: true,
          duration: 112,
        },
      })
      
      .fromTo("#about1", { x: innerWidth * -1,width: "10%" },{x:innerWidth/6,width: "120%" })
      .fromTo("#about2", { x: innerWidth * -1,width: "10%" }, { x: innerWidth/6, width: "120%"})
      .fromTo("#about3", { x: innerWidth * -1,width: "10%" },{ x: innerWidth/6, width: "120%"})
      .to("#magic",{opacity:0})
      
      
      .to("#about1, #about2, #about3", { x: 0, width: "90%" })
      
      .from(".right-about", { y: 700});
  
  },
  "(max-width:719px)":function(){
        gsap
      .timeline({
        scrollTrigger: {
          trigger: ".left-about-wrapper",
          start: "top 20%",
          end: "200%",
          scrub: 1,
          pin: true,
          duration: 112,
        },
      })
      .to("#magic",{opacity:0})
      .from("#about1", { x: innerWidth * -1, duration: 7 })

      .from("#about2", { x: innerWidth * -1, duration: 7 })

      .from("#about3", { x: innerWidth * -1, duration: 7 })

      .to("#about1, #about2, #about3", { duration: 10 })
      
  
  }
})

