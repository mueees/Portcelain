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
        slidesPerRow: 1,
        responsive: [
            { breakpoint: 960,
                settings: {
                    rows: 3,
                    slidesPerRow: 1,
                    slidesToScroll: 4,
                    slidesToShow: 4
                }
            },
            { breakpoint: 800,
                settings: {
                    rows: 2,
                    slidesPerRow: 1,
                    slidesToScroll: 3,
                    slidesToShow: 3
               }
           },
           {
               breakpoint: 600,
               settings: {
                   rows: 1,
                   slidesPerRow: 1,
                   slidesToScroll: 2,
                   slidesToShow: 2
               }
           }]
    });
});