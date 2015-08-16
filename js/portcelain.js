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

    /**b_inner-slider**/
    $('.b_inner-slider').slick(
        {   infinite: true,
            speed: 1000,
            autoplay: true,
            autoplaySpeed: 2500,
            slidesToScroll: 1,
            slidesToShow: 1,
            pauseOnHover: false,
            fade: true,
            cssEase: 'linear'
        }
    );

    /**scrolling**/
    $('.scroll-to-contacts').click(function(){
        var elementClick=$('.s_footer').offset().top;
        $('html,body').animate({scrollTop: elementClick},1500);
        closeMenu();
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
        var $searchForm = $('#search'),
            $btnSearch = $searchForm.find('.btn-search'),
            $inputSearch = $searchForm.find('.form-search input');

        $searchForm.submit(function (e) {
            e.preventDefault();

            var searchRequest = $inputSearch.val();
            searchRequest = $.trim(searchRequest);

            if(searchRequest){
                window.location.href = '/search.html?query=' + searchRequest;
            }
        });

        $btnSearch.on('click', function() {
            if($btnSearch.hasClass('selected')) {
                deselect($btnSearch);
            } else {
                $btnSearch.addClass('selected');
                $('.form-search').slideFadeToggle().find('input').focus();
                $inputSearch.val('');
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


    /**navigation menu**/
    // Show navigation menu (for devices)
    $(document).on('click', ".open-icon-hamburger", showMenu);

    // Hide navigation menu (for devices)
    $(document).on('click', ".close-icon-hamburger", closeMenu);
    $(document).on('click', ".overlay", closeMenu);


    function showMenu() {
        $('.header-navigation').addClass('show-navigation');
        $('.disable-link').on('click', function(e){
            e.preventDefault();
        });
        $('.overlay').css('display', 'block');

        $('.header-navigation .form-search input').val('');

        $('.device-menu-tab').removeClass('active').eq(0).addClass('active');
        $('.sub-menu-l2').removeClass('active');
    }

    function closeMenu() {
        $('.overlay').css('display', 'none');
        $('.header-navigation').removeClass('show-navigation');
    }

    $(document).on('click', ".device-menu-tab", showTabContent);

    function showTabContent() {
        $('.device-menu-tab').removeClass('active');
        $(this).addClass('active');
        $('.sub-menu-l2').removeClass('active');
    }

    /** popup form-call-back **/
    // Show form-call-back
    $(document).on('click', ".btn-call-back", showFormCallBack);

    // Hide form-call-back
    $(document).on('click', ".icon-form-close", closeFormCallBack);
    $(document).on('click', ".overlay", closeFormCallBack);


    function showFormCallBack() {
        $('.form-call-back').addClass('show-form-call-back');
         $('.overlay').addClass('for-form-call-back').css('display', 'block');

        function OffScroll () {
            var winScrollTop = $(window).scrollTop();
            $(window).bind('scroll',function () {
                $(window).scrollTop(winScrollTop);
            });}
        OffScroll ();
    }

    function closeFormCallBack() {
        $('.overlay').removeClass('for-form-call-back').css('display', 'none');
        $('.form-call-back').removeClass('show-form-call-back');

        $(window).unbind('scroll');
    }

    /** init fancybox **/
    $(document).ready(function() {
        $(".certificates-slider").fancybox({
            // Slideshow
            'autoPlay': true,
            'playSpeed': 1500,

            // Opening animation
            'openEffect': 'elastic',
            'openSpeed': 350,

            // Closing animation
            'closeEffect': 'elastic',
            'closeSpeed': 350
        });

        $(".video-popup").fancybox({
            'padding': 0,

            // Opening animation
            'openEffect': 'elastic',
            'openSpeed': 350,

            // Closing animation
            'closeEffect': 'elastic',
            'closeSpeed': 350
        });

        $(".photo-slider").fancybox({
            // Slideshow
            'autoPlay': true,
            'playSpeed': 1500,

            // Opening animation
            'openEffect': 'elastic',
            'openSpeed': 350,

            // Closing animation
            'closeEffect': 'elastic',
            'closeSpeed': 350
        });

        $(".fancy-pop-up").fancybox({
            'transitionIn'  : 'elastic',
            'transitionOut' : 'elastic',

            width: 900,

            autoSize: false
        });

        function LanguageMobile(options){
            this.$el = options.$el;
            this.$window = $(window);

            this.init();
        }

        LanguageMobile.prototype = {
            isMobileOrDesktop: function () {
                return this.$window.width() < 900;
            },

            isMenuOpen: function () {
                return this.$el.hasClass('languages-drop-down-open');
            },

            init: function () {
                var me = this;

                $(document).on('click', function(e){
                    if( me.isMobileOrDesktop() ) {
                        me.closeMenu();
                    }
                });

                this.$el.on('click', 'a', function (e) {
                    if( me.isMobileOrDesktop() ) {
                        if(!me.isMenuOpen()){
                            e.preventDefault();
                            e.stopPropagation();
                            me.openMenu();
                        }
                    }
                });
            },

            openMenu: function () {
                this.$el.addClass('languages-drop-down-open');
            },

            closeMenu: function () {
                this.$el.removeClass('languages-drop-down-open');
            }
        };

        new LanguageMobile({
            $el: $('.languages-drop-down')
        });
    });
});