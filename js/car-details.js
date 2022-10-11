lightGallery(document.getElementById('lightgallery'), {
    plugins: [lgThumbnail],
  });

try {
fetch(new Request("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", { method: 'HEAD', mode: 'no-cors' })).then(function(response) {
return true;
}).catch(function(e) {
var carbonScript = document.createElement("script");
carbonScript.src = "//cdn.carbonads.com/carbon.js?serve=CK7DKKQU&placement=wwwjqueryscriptnet";
carbonScript.id = "_carbonads_js";
document.getElementById("carbon-block").appendChild(carbonScript);
});
} catch (error) {
console.log(error);
}

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-36251023-1']);
_gaq.push(['_setDomainName', 'jqueryscript.net']);
_gaq.push(['_trackPageview']);

(function() {
var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
flatpickr("#date-picker", {});
var swiper = new Swiper(".mySwiper", {
spaceBetween: 10,
slidesPerView: 4,
freeMode: true,
watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
spaceBetween: 10,
navigation: {
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev",
},
thumbs: {
  swiper: swiper,
},
});
$('.list5').showMoreItems({
startNum:12,
afterNum:10,
original:true,
responsive: [
  {
    breakpoint: 1280,
    settings: {
    startNum:12,
    afterNum:10,
    }
  },
  {
    breakpoint: 600,
    settings: {
    startNum:12,
    afterNum:10,
    }
  }
]
});
const greeting = async() => {
    var y = await "Welcome";
    console.log(y);
}

console.log(1);
greeting();
console.log(2);