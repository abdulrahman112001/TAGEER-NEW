let search = document.getElementById("serach-input")
$('#serach-input').keyup(function () {
    $('#menu-selsect').addClass('dblock') + $('#menu-selsect').removeClass("dnone")
    if (search.value.length == 0) {
        $('#menu-selsect').addClass('dnone') + $('#menu-selsect').removeClass("dblock")
    }
    $('body').click(function () {
        $('#menu-selsect').addClass('dnone') + $('#menu-selsect').removeClass("dblock")
    })
})

let up = document.querySelector('.up');
window.onscroll = function () {
    up.classList.toggle('active', this.scrollY >= 700);
};
up.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};


$(".main-carwsel").owlCarousel({
    loop: 0,
    margin: 10,
    nav: 0,
    rtl: true,
    responsive: {
        0: { items: 1 },
        600: { items: 1 },
        1e3: { items: 2 },
        1200: { items: 3 },
    },
}),
    $(".owl-carousel").owlCarousel({
        loop: 0,
        margin: 10,
        nav: 0,
        rtl: true,
        responsive: { 0: { items: 3 }, 600: { items: 3 }, 1e3: { items: 7 } },
    });
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: 0,
    watchSlidesProgress: 0,
}),
    swiper2 = new Swiper(".mySwiper2", {
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: { swiper: swiper },
    });
$(".list5").showMoreItems({
    startNum: 12,
    afterNum: 10,
    original: 0,
    responsive: [
        { breakpoint: 1280, settings: { startNum: 12, afterNum: 10 } },
        { breakpoint: 600, settings: { startNum: 12, afterNum: 10 } },
    ],
});
