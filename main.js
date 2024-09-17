/*~~~~~~~~~~~~~~~ TOGGLE BUTTON ~~~~~~~~~~~~~~~*/
const navMenu = document.getElementById("nav-menu")
const navLink = document.querySelectorAll(".nav-link")
const hamburger = document.getElementById("hamburger")

hamburger.addEventListener("click",() =>{
    navMenu.classList.toggle("left-[0]")
    hamburger.classList.toggle('ri-close-large-line')
})
/*~~~~~~~~~~~~~~~ SHOW SCROLL UP ~~~~~~~~~~~~~~~*/
const scrolUp = ()=>{
    const scrolUpBtn = document.getElementById('scroll-up')

    if(this.scrollY >=250){
        scrolUpBtn.classList.remove("-bottom-1/2")
        scrolUpBtn.classList.add("bottom-4")
    }else{
        scrolUpBtn.classList.add("-bottom-1/2")
        scrolUpBtn.classList.remove("bottom-4")
    }
}
window.addEventListener("scroll",scrolUp)

/*~~~~~~~~~~~~~~~ CHANGE BACKGROUND HEADER ~~~~~~~~~~~~~~~*/


/*~~~~~~~~~~~~~~~ SWIPER ~~~~~~~~~~~~~~~*/
const swiper = new Swiper('.swiper', {
    // Optional parameters
    speed: 400,
    spaceBetween: 30,
    autoplay: {
        delay: 3000,
        disableOnInteraction:false
    },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    grabCursor: true,
    breakpoints: {
        640:{
            slidesPreview: 1
        },
        768:{
            slidesPreview: 2
        },
        1024:{
            slidesPreview: 3
        },
    }
  
  });

/*~~~~~~~~~~~~~~~ SCROLL SECTIONS ACTIVE LINK ~~~~~~~~~~~~~~~*/


/*~~~~~~~~~~~~~~~ SCROLL REVEAL ANIMATION ~~~~~~~~~~~~~~~*/

const sr = ScrollReveal({
    origin:"top",
    distance: "60px",
    duration: 2500,
    delay: 300,
    reset: true
})

sr.reveal('.home_data, .about_top,.popular_top,.review_top,.review_swiper,.footer_icon,.footer_content,.copy_right');
sr.reveal('.home_image', { delay: 500, scale: 0.5 });
sr.reveal('.service_card,.popular_card', { interval: 100 });

sr.reveal('.service_leaf', { delay: 1000, origin: 'right' });

sr.reveal('.about_item_1_content, .about_item_2_img', { origin: 'right' });
sr.reveal('.about_item_2_content, .about_item_1_img', { origin: 'left' });
sr.reveal('.about_leaf,.footer_floral', { delay:1000,origin: 'left' });