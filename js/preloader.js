


function  myFunction(x) {
  if (x.matches) {
  
    // If media query matches
    TweenMax.to("#preloader",2,{
        delay: 2,
        top: "-100%",
        ease: Expo.easeInOut
      });
      TweenMax.to(".circle-wrapper-preloader",4,{
        delay: 2,
        top: "80%",
        // x: "300px",
        ease: Expo.easeInOut
      });
      TweenMax.to(".circle-wrapper-preloader",2,{
        delay: 3,
        opacity:0
      });
      TweenMax.to(".circle-loader",{
        delay: 4.6,
        top:"-150%"
      });
      TweenMax.from(".right-banner",1,{
        delay: 3.5,
        // top: "55%",
        y: "700px",
        ease: Expo.easeInOut
      });
      TweenMax.from(".circle-wrapper",2,{
        delay: 4.6,
        opacity:0
      });
      TweenMax.from(".logo, .burger",1,{
        delay: 4,
        y: "-300px"
      });
      TweenMax.from("#indu, .text",0.5,{
        delay: 4.6,
        opacity:0
      });

      
  } else {
   
    TweenMax.to("#preloader",2,{
        delay: 2,
        top: "-150%",
        ease: Expo.easeInOut
      });
      TweenMax.to(".circle-wrapper-preloader",4,{
          delay: 2,
          top: "55%",
          x: "300px",
          ease: Expo.easeInOut
        });
        TweenMax.to(".circle-wrapper-preloader",2,{
          delay: 3,
          opacity:0
        });
        TweenMax.to(".circle-loader",{
            delay: 4.6,
            top:"-150%"
          });
       
        TweenMax.from(".right-banner",1,{
          delay: 3,
          // top: "55%",
          x: "700px",
          ease: Expo.easeInOut
        });
        TweenMax.from(".circle-wrapper",2,{
          delay: 4.6,
          opacity:0
        });
        TweenMax.from(".logo, .burger",1,{
          delay: 4,
          y: "-300px"
        });
        TweenMax.from("#indu, .text",0.5,{
          delay: 4.6,
          opacity:0
        });
        
}     
}
var x = window.matchMedia("(max-width: 800px)");

window.onload= function(){
  window.scrollTo(0, 0);
  myFunction(x);
}