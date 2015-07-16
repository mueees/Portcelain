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
        slidesToScroll: 4,
        slidesToShow: 4,
        responsive: [
            { breakpoint: 800,
                settings: {
                    slidesToScroll: 3,
                    slidesToShow: 3
                }
            }]
    });

    /** b_nav-clients-mobile **/
    $('.b_nav-clients-mobile').slick({
        infinite: true,
        speed: 1300,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToScroll: 2,
        slidesToShow: 2
    });

    /** popup form-search **/
    if ($(window).width() > 960){

    function deselect(e) {
        $('.form-search').slideFadeToggle(function() {
            e.removeClass('selected');
        });
    }
    $(function() {
        $('.btn-search').on('click', function() {
            if($(this).hasClass('selected')) {
                deselect($(this));
            } else {
                $(this).addClass('selected');
                $('.form-search').slideFadeToggle();
            }
            return false;
        });

        $('.close').on('click', function() {
            deselect($('.btn-search'));
            return false;
        });
    });

    $.fn.slideFadeToggle = function(easing, callback) {
        return this.animate({ opacity: 'toggle'}, 'fast', easing, callback);
    };
}






});