
let search = document.getElementById("serach-input")
$('#serach-input').keyup(function(){
  $('#menu-selsect').addClass('dblock') +  $('#menu-selsect').removeClass("dnone")
    if(search.value.length == 0 ){
      $('#menu-selsect').addClass('dnone') +  $('#menu-selsect').removeClass("dblock")
    }
  $('body').click(function(){
    $('#menu-selsect').addClass('dnone') +  $('#menu-selsect').removeClass("dblock")
  })
})

$('.main-carwsel').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  loop:true,
  // autoplay:true,
  // autoplayTimeout:1000,
  // autoplayHoverPause:true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 2,
    },
    1200: {
      items: 3,
    },
  },
});
$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  loop:true,
  // autoplay:true,
  // autoplayTimeout:1000,
  // autoplayHoverPause:true,
  responsive: {
    0: {
      items: 3,
    },
    600: {
      items:3 ,
    },
    1000: {
      items: 7,
    },
  },
});

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
// var swiper = new Swiper(".mySwiper", {
//   spaceBetween: 10,
//   slidesPerView: 4,
//   freeMode: true,
//   watchSlidesProgress: true,
// });
// var swiper2 = new Swiper(".mySwiper2", {
//   spaceBetween: 10,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   thumbs: {
//     swiper: swiper,
// },
// });
// $('.list5').showMoreItems({
//   startNum:12,
//   afterNum:10,
//   original:true,
//   responsive: [
//     {
//       breakpoint: 1280,
//       settings: {
//       startNum:12,
//       afterNum:10,
//       }
//     },
//     {
//       breakpoint: 600,
//       settings: {
//       startNum:12,
//       afterNum:10,
//       }
//     }
//   ]
// });

// $(".datepicker").datepicker({ dateFormat: "D dd M yy" });
// $(".horizontal-datepicker").datepicker({ dateFormat: "dd M yy" });
// let clsValue = 0;
// let clsEntries = [];

// let sessionValue = 0;
// let sessionEntries = [];

// new PerformanceObserver((entryList) => {
//   for (const entry of entryList.getEntries()) {
//     // Only count layout shifts without recent user input.
//     if (!entry.hadRecentInput) {
//       const firstSessionEntry = sessionEntries[0];
//       const lastSessionEntry = sessionEntries[sessionEntries.length - 1];

//       // If the entry occurred less than 1 second after the previous entry and
//       // less than 5 seconds after the first entry in the session, include the
//       // entry in the current session. Otherwise, start a new session.
//       if (sessionValue &&
//           entry.startTime - lastSessionEntry.startTime < 1000 &&
//           entry.startTime - firstSessionEntry.startTime < 5000) {
//         sessionValue += entry.value;
//         sessionEntries.push(entry);
//       } else {
//         sessionValue = entry.value;
//         sessionEntries = [entry];
//       }

//       // If the current session value is larger than the current CLS value,
//       // update CLS and the entries contributing to it.
//       if (sessionValue > clsValue) {
//         clsValue = sessionValue;
//         clsEntries = sessionEntries;

//         // Log the updated value (and its entries) to the console.
//         console.log('CLS:', clsValue, clsEntries)
//       }
//     }
//   }
// }).observe({type: 'layout-shift', buffered: true});