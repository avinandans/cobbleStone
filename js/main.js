const hero_slide = function() {
    const heroSlider = $('.hero .owl-carousel').owlCarousel({
        items:1,
        dots:true,
        loop: false,
        nav: true,
        navText: ['<i class="bi bi-chevron-compact-left"></i>', '<i class="bi bi-chevron-compact-right"></i>']
    })

    // Clone dots and Navs into slide
    var dots = $('.hero .owl-dots');
    var navs = $('.hero .owl-nav button');
    $('.hero .owl_dots_nav .dots').append(dots.clone().addClass('owl-dot-clone'));
    $('.hero .owl_dots_nav').append(navs.clone().addClass('owl-nav-clone').removeClass('disabled'));

    // hide orginal dots
    dots.hide();

    // Set active
    heroSlider.on('changed.owl.carousel', function (event) {
        var index = event.page.index;
        $('.hero_single .owl-dot-clone .owl-dot', this).removeClass('active');
        $('.hero_single .owl-dot-clone', this).each(function () {
            $('.owl-dot', this).eq(index).addClass('active');
        })    
    });

    // Create on click event for clone Dots
    $('.hero_single .owl-dot-clone .owl-dot').on('click', function () {
        heroSlider.trigger('to.owl.carousel', [$(this).index(), 300]);
    });

    // Go to the next item
    $('.hero_single .owl_dots_nav .owl-next').click(function() {
        heroSlider.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.hero_single .owl_dots_nav .owl-prev').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        heroSlider.trigger('prev.owl.carousel', [300]);
    })
}

const latest_slider = function() {
    const latestSlider = $('.latest_slider').owlCarousel({
        items:3,
        dots:true,
        loop: false,
        nav: true,
        margin: 20,
        navText: ['<i class="bi bi-chevron-compact-left"></i>', '<i class="bi bi-chevron-compact-right"></i>'],
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    });

    // Clone dots and Navs into slide
    var dots = $('.latest_section .owl-dots');
    var navs = $('.latest_section .owl-nav button');
    $('.latest_slide_nav_dot .dots').append(dots.clone().addClass('owl-dot-clone'));
    $('.latest_slide_nav_dot').append(navs.clone().addClass('owl-nav-clone').removeClass('disabled'));

    // hide orginal dots
    dots.hide();

    // Set active
    latestSlider.on('changed.owl.carousel', function (event) {
        var index = event.page.index;
        $('.latest_slide .owl-dot-clone .owl-dot', this).removeClass('active');
        $('.latest_slide .owl-dot-clone', this).each(function () {
            $('.latest_slide .owl-dot-clone', this).eq(index).addClass('active');
        });
    });

    // Create on click event for clone Dots
    $('.latest_section .owl-dot-clone .owl-dot').on('click', function () {
        latestSlider.trigger('to.owl.carousel', [$(this).index(), 300]);
    });

    // Go to the next item
    $('.latest_slide_nav_dot .owl-next').click(function() {
        latestSlider.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.latest_slide_nav_dot .owl-prev').click(function() {
        latestSlider.trigger('prev.owl.carousel', [300]);
    })
}

// header search
const headerSearch = function() {
    $('.nav_search').click(function(e){
        e.preventDefault()
        $(this).parent().parent().addClass('active')
        $(this).parent().parent().children('input').focus()
    })
    $('.close_search').click(function(e){
        e.preventDefault()
        $(this).parent().parent().removeClass('active')
    })
}
headerSearch();

$('.header_form select.form-select').multiselect({
    columns: 1,
    placeholder: 'Select Languages',
    search: true
});