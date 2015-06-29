
/**b_main_slider**/
$(document).ready(function(){
    $('.b_main_slider').slick();
});

/**scrolling**/
$(document).ready(function(){
    $('.scroll_to_contacts').click(function(){
        var elementClick=$('.s_footer').offset().top;
        $('html,body').animate({scrollTop: elementClick},1500);
        return false;
    });
});

/** b_nav_clients **/
$(document).ready(function(){
    $('.b_nav_clients').slick({
        infinite: true, /**по кругу**/
        speed: 1300,
        autoplay: true,
        autoplaySpeed: 2000,/** время, через которое автопрокрутка**/
        slidesToShow: 4,
        slidesToScroll: 4,
        rows: 3,
        responsive: [
          {
              breakpoint: 800,
               settings: {
                   slidesToShow: 3,
                   slidesToScroll: 3,
                   rows: 2
               }
           },
           {
               breakpoint: 600,
               settings: {
                   slidesToShow: 2,
                   slidesToScroll: 2,
                   rows: 1
               }
           },
           {
               breakpoint: 320,
               settings: {
                   slidesToShow: 1,
                   slidesToScroll: 1,
                   rows: 1
               }
           }]
    });
});