$(document).ready(function(){
    /**b_main-slider**/
    $('.b_main-slider').slick(
        {   infinite: true,
            speed: 500,
            autoplay: true,
            autoplaySpeed: 2000,
            pauseOnHover: false,
            fade: true,
            cssEase: 'linear'
        }
    );
    /**scrolling**/
    $('.scroll-to-contacts').click(function(){
        var elementClick=$('.s_footer').offset().top;
        $('html,body').animate({scrollTop: elementClick},1500);
        return false;
    });
    /** b_nav-clients **/
    $('.b_nav-clients').slick({
        infinite: true,
        speed: 1300,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            { breakpoint: 100000,
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

