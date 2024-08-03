$(document).ready(function () {
    $("#owl-carousel1").owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 3000,
        nav: true,
        navText: [`<div class="position-absolute top-0 end-0 me-3">
            <i class="arrows fa-solid fa-circle-arrow-left fa-2x"></i>
            </div>`, `<div class="position-absolute top-0 start-100">
            <i class="arrows fa-solid fa-circle-arrow-right fa-2x"></i>
            </div>`],
        responsive: {
            0: {
                items: 1,
            },

            600: {
                items: 2,
            },
            1000: {
                items: 3,
            },
            1200: {
                items: 4,
            }
        }
    });
    $("#owl-carousel2").owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 3000,
        items: 1,
    });

});