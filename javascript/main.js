$(window).on('load',function(){
    $('.depan .tulisan a').click(function(){
        $('.depan').addClass('active');
    })
})


const swiper = new Swiper(".newswiper", {
    spaceBetween:24,
    loop: 'true',
    slidesPerView: 'auto',
    centerdSlides : true,

    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true
    },
    breakpoints:{
        992: {
            spaceBetween:50,
        }
    }
  });

