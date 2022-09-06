// Custom scripts

// Мобильное меню бургер
function burgerMenu() {
  const burger = document.querySelector('.burger')
  const menu = document.querySelector('.menu')
  const body = document.querySelector('body')
  burger.addEventListener('click', () => {
    if (!menu.classList.contains('active')) {
      menu.classList.add('active')
      burger.classList.add('active-burger')
      body.classList.add('locked')
    } else {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
  //снять классы при клике на элементы меню
  const menuItems = document.querySelectorAll('.menu__item')

  menuItems.forEach(item => {
    item.addEventListener('click', function () {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    })
  });

  // Вот тут мы ставим брейкпоинт навбара
  window.addEventListener('resize', () => {
    if (window.innerWidth > 991.98) {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
}
burgerMenu()


// Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
function fixedNav() {
  const nav = document.querySelector('nav')

  // тут указываем в пикселях, сколько нужно проскроллить что бы наше меню стало фиксированным
  const breakpoint = 1
  if (window.scrollY >= breakpoint) {
    nav.classList.add('fixed__nav')
  } else {
    nav.classList.remove('fixed__nav')
  }
}
window.addEventListener('scroll', fixedNav)


//плавный скролл
$('.menu__item-link').on('click', function(event){
  event.preventDefault();
  let anchor = $(this).attr('href');
  $('html, body').stop().animate({
      scrollTop: $(anchor).offset().top - 60
  }, 300);
});

var swiperOne = new Swiper(".catalog__img-container", {
  pagination: {
    el: ".swiper-pagination",
  },
});

var swiperTwo = new Swiper(".about-company__pictures", {
  pagination: {
    el: ".swiper-pagination",
  },
});


function sityMap() {
  const container = document.querySelector('.sales-geography')

  if (!container) {
    return null
  }

  //regions
  var regionLenin = document.querySelector('.sales-geography__region[data-region="lenin"]')
  var regionBelg = document.querySelector('.sales-geography__region[data-region="belg"]')
  var regionMoskobl = document.querySelector('.sales-geography__region[data-region="moskobl"]')
  var regionMos = document.querySelector('.sales-geography__region[data-region="mos"]')
  var regionTatar = document.querySelector('.sales-geography__region[data-region="tatar"]')
  var regionNovosib = document.querySelector('.sales-geography__region[data-region="novosib"]')
  var regionIrkutsk = document.querySelector('.sales-geography__region[data-region="irkutsk"]')
  var regionBuratiya = document.querySelector('.sales-geography__region[data-region="buratiya"]')
  var regionZabaykal = document.querySelector('.sales-geography__region[data-region="zabaykal"]')
  var regionHabar = document.querySelector('.sales-geography__region[data-region="habar"]')
  var regionPrimor = document.querySelector('.sales-geography__region[data-region="primor"]')

  //map
  var mapLenin = document.querySelector('.sales-geography__region-link[data-map="lenin"]')
  var mapBelg = document.querySelector('.sales-geography__region-link[data-map="belg"]')
  var mapMoskobl = document.querySelector('.sales-geography__region-link[data-map="moskobl"]')
  var mapMos = document.querySelector('.sales-geography__region-link[data-map="mos"]')
  var mapTatar = document.querySelector('.sales-geography__region-link[data-map="tatar"]')
  var mapNovosib = document.querySelector('.sales-geography__region-link[data-map="novosib"]')
  var mapIrkutsk = document.querySelector('.sales-geography__region-link[data-map="irkutsk"]')
  var mapBuratiya = document.querySelector('.sales-geography__region-link[data-map="buratiya"]')
  var mapZabaykal = document.querySelector('.sales-geography__region-link[data-map="zabaykal"]')
  var mapHabar = document.querySelector('.sales-geography__region-link[data-map="habar"]')
  var mapPrimor = document.querySelector('.sales-geography__region-link[data-map="primor"]')


  mapLenin.addEventListener('mouseenter', function () {
    regionLenin.style.display = 'block';
  })

  mapLenin.addEventListener('mouseleave', function () {
    regionLenin.style.display = 'none';
  })

  mapBelg.addEventListener('mouseenter', function () {
    regionBelg.style.display = 'block';
  })

  mapBelg.addEventListener('mouseleave', function () {
    regionBelg.style.display = 'none';
  })

  mapMoskobl.addEventListener('mouseenter', function () {
    regionMoskobl.style.display = 'block';
  })

  mapMoskobl.addEventListener('mouseleave', function () {
    regionMoskobl.style.display = 'none';
  })

  mapMos.addEventListener('mouseenter', function () {
    regionMos.style.display = 'block';
  })

  mapMos.addEventListener('mouseleave', function () {
    regionMos.style.display = 'none';
  })

  mapTatar.addEventListener('mouseenter', function () {
    regionTatar.style.display = 'block';
  })

  mapTatar.addEventListener('mouseleave', function () {
    regionTatar.style.display = 'none';
  })

  mapNovosib.addEventListener('mouseenter', function () {
    regionNovosib.style.display = 'block';
  })

  mapNovosib.addEventListener('mouseleave', function () {
    regionNovosib.style.display = 'none';
  })

  mapIrkutsk.addEventListener('mouseenter', function () {
    regionIrkutsk.style.display = 'block';
  })

  mapIrkutsk.addEventListener('mouseleave', function () {
    regionIrkutsk.style.display = 'none';
  })

  mapBuratiya.addEventListener('mouseenter', function () {
    regionBuratiya.style.display = 'block';
  })

  mapBuratiya.addEventListener('mouseleave', function () {
    regionBuratiya.style.display = 'none';
  })

  mapZabaykal.addEventListener('mouseenter', function () {
    regionZabaykal.style.display = 'block';
  })

  mapZabaykal.addEventListener('mouseleave', function () {
    regionZabaykal.style.display = 'none';
  })

  mapHabar.addEventListener('mouseenter', function () {
    regionHabar.style.display = 'block';
  })

  mapHabar.addEventListener('mouseleave', function () {
    regionHabar.style.display = 'none';
  })

  mapPrimor.addEventListener('mouseenter', function () {
    regionPrimor.style.display = 'block';
  })

  mapPrimor.addEventListener('mouseleave', function () {
    regionPrimor.style.display = 'none';
  })

}

sityMap();

$(document).ready(function(){
  $('.js-input-phone').mask('+7 (000) 000-0000');
});