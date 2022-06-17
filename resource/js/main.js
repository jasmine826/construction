



const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


//스크롤하면 .active생기게 - 제이쿼리
$(window).on('scroll',function(){
    if($(window).scrollTop()){
        $('header').addClass('active');
    }else{
        $('header').removeClass('active');
    }
});

$(window).on('scroll',function(){
    if($(window).scrollTop()){
        $('header').addClass('active');
    }else{
        $('header').removeClass('active');
    }
});


// 스크롤하면 top : 0 되게
const header = document.querySelector("header");
const headerHeight = header.getBoundingClientRect().height;
 
window.addEventListener("scroll", () => {
      if (window.scrollY > headerHeight) {
      header.setAttribute("style", "top: 0;");
   } else {
      
header.setAttribute("style", "top: auto;");
   }
});