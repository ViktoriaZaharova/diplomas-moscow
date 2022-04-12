$('.home-slider').slick({
    slidesToShow: 1,
    fade: true,
    dots: true,
    appendDots: '.home-slider-nav',
    appendArrows: '.home-slider-nav',
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-top"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-bottom"></use></svg></button>',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                infinite: false,
                dots: false,
                autoplay: true,
                autoplaySpeed: 2000,
            }
        },
    ]
});

$('.popular-product-slider').slick({
    slidesToShow: 4,
    prevArrow: '<button type="button" class="slick-prev slick-abs"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next slick-abs"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

$('.catalog-category-slider').slick({
    slidesToShow: 3,
    prevArrow: '<button type="button" class="slick-prev slick-abs"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next slick-abs"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

$('.product-photo').slick({
    slidesToShow: 1,
    fade: true,
    arrows: false,
    prevArrow: '<button type="button" class="slick-prev slick-abs"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next slick-abs"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
    responsive: [
        {
            breakpoint: 576,
            settings: {
                dots: true,
                arrows: true,
            }
        }
    ]
});

$('.product-preview').slick({
    slidesToShow: 2,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev slick-abs"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next slick-abs"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
    focusOnSelect: true,
    asNavFor: '.product-photo'
});

$('.reviews-slider').slick({
    slidesToShow: 3,
    prevArrow: '<button type="button" class="slick-prev slick-abs"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next slick-abs"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

// активная ссылка меню
$('.menu li a').each(function () {
    let location = window.location.href;
    let link = this.href;
    if (location === link) {
        $(this).addClass('active');
    }
});
// end

$('.btn-burger').on('click', function () {
    $('.mobile-menu').fadeToggle();
});

$('.btn-close').on('click', function () {
    $('.mobile-menu').fadeOut();
});