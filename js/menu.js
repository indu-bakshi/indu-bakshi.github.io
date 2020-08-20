const navSlide= ()=> {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks=document.querySelectorAll('.nav-links li');
 //Toggle Nav
    
    burger.addEventListener('click', () =>{
        nav.classList.toggle('nav-active');
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
                document.querySelector('.line1').style.width= "50px";
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.7}s`;
                document.querySelector('.line1').style.width= "30px";
            }

        });
        burger.classList.toggle('toggle');
    });
  
   
}
navSlide();