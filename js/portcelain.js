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


    /**navigation menu**/

        // Show navigation menu (for devices)
        $(document).on('click', ".open-icon-hamburger", showMenu);

        // Hide navigation menu (for devices)
        $(document).on('click', ".close-icon-hamburger", closeMenu);


        function showMenu() {
            $('.open-icon-hamburger').css('display', 'none');
            $('.close-icon-hamburger').css('display', 'block');
            $('.overlay').css('display', 'block');
            $('.header-navigation').addClass('show-navigation');
            /**$('#container').addClass('stop-scrolling');**/
        }

        function closeMenu() {
            $('.close-icon-hamburger').css('display', 'none');
            $('.open-icon-hamburger').css('display', 'block');
            $('.overlay').css('display', 'none');
            $('.header-navigation').removeClass('show-navigation');
            /**$('#container').removeClass('stop-scrolling');**/
        }


    function handleNavigationMenuTabs() {
        $(document).on('click', ".device-menu-tab", showTabContent);

        function showTabContent() {
            $('.device-menu-tab').removeClass('.active');
            $(this).addClass('active');
            $('.sub-menu-l2').removeClass('active');
            if ((this).classList.contains('.mobile-item')) {
                $('.sub-menu-2').addClass('active')
            } else if ((this).classList.contains('links')) {
                $('.sub-menu-2').addClass('active')
            } else {
                $('#navBarDocumentContent').addClass('active')
            }
        }
    }


 /**   // Show page name on Navigation Menu
    var pageTitle = $('h1').text();
    $('.document-page-title').append(pageTitle);


    // Generate list of the API documents for devices navigation menu
    $.ajax({
        type: 'get',
        url: '/api/docs',
        success: function (page) {
            var re = /(<a.*wikilink1.*a>)/gi; //get all wikilinks on '/api/docs' page
            var links = page.match(re); // create array with recived links
            var html = '';
            $.each(links, function (i, link) {
                html += '<li>' + link + '</li>'; // create the string with listed links
            });
            $('.api-documentation-links').append(html); // append the string in DOM
        }
    });


    // Calculate height of navigation menu content area height
    function calcDeviceNavigationMenuContentHeight() {
        var viewportHeight = $(window).height();
        var navMenuHeaderHeight = $('.device-menu-first-line').height() + $('.device-menu-tabs-inner').height() + 10;
        var navMenuContentHeight = viewportHeight - navMenuHeaderHeight;
        $('.device-menu-tab-content').css('height', navMenuContentHeight);
    }
    $(window).resize(calcDeviceNavigationMenuContentHeight);



    handleDeviceNavigationMenu();
    handleNavigationMenuTabs();
    animateScrollToTop();
    calcDeviceNavigationMenuContentHeight()

**/

});


