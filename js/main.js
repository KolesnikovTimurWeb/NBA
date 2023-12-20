const swiper3 = new Swiper('.testimonials-swiper', {
   spaceBetween: 30,
   // grabCursor: true,
   slidesPerView: 1,
   loop: true,
   grabCursor: true,
   // Navigation arrows
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
   breakpoints: {
      // when window width is >= 320px
      1200: {
         slidesPerView: 2,
         spaceBetween: 20
      },
      // when window width is >= 480px
      1700: {
         slidesPerView: 3,
         spaceBetween: 30
      },

   }

});
const swiper = new Swiper('.mission-swiper', {
   spaceBetween: 30,
   // grabCursor: true,
   slidesPerView: 1,
   loop: true,
   grabCursor: true,
   // Navigation arrows
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
   breakpoints: {
      // when window width is >= 320px
      800: {
         slidesPerView: 2,
         spaceBetween: 20
      },
      // when window width is >= 480px
      1450: {
         slidesPerView: 3,
         spaceBetween: 50
      },

   }

});
const swiper2 = new Swiper('.testemonials-swiper-2', {
   spaceBetween: 150,
   // grabCursor: true,
   slidesPerView: 1,
   loop: true,
   // Navigation arrows
   allowTouchMove: false,
   navigation: {
      nextEl: ".swiper-button-next-2",
      prevEl: ".swiper-button-prev-2",
   },
   breakpoints: {
      // when window width is >= 320px
      1000: {
         slidesPerView: 2,
         spaceBetween: 20
      },
      // when window width is >= 480px
      1200: {
         slidesPerView: 3,
         spaceBetween: 30
      },

   }
});

const swiper4 = new Swiper('.testemonials-swiper', {
   spaceBetween: 100,
   // grabCursor: true,
   allowTouchMove: false,
   lazyPreloadPrevNext: true,
   slidesPerView: 1,
   loop: true,
   noSwiping: true,// Navigation arrows
   navigation: {
      nextEl: ".swiper-button-next-2",
      prevEl: ".swiper-button-prev-2",
   },
   breakpoints: {
      // when window width is >= 320px
      1000: {
         slidesPerView: 2,
         spaceBetween: 20
      },
      // when window width is >= 480px
      1200: {
         slidesPerView: 3,
         spaceBetween: 30
      },

   }

});
let headerSocial = document.querySelector('.header-top')
let headerSocialText = document.querySelector('.header-top p')
let headerSocailDown = document.querySelector('.header-bottom')
let headerMenu = document.querySelector('.header-menu')
let headerContainer = document.querySelector('.header-container')
let headerLogo = document.querySelector('.header-logo')
let headerButton = document.querySelector('.header-button')
let headerMenuText = document.querySelector('.header-menu-text')
headerSocial.addEventListener('click', () => {

   console.log(window.innerWidth)
   if (window.innerWidth > 1200) {
      headerSocial.classList.toggle('active')
      headerSocailDown.classList.toggle('active')
   }
   if (window.innerWidth < 1200) {
      headerSocial.classList.toggle('active')
      headerContainer.classList.toggle('active')
      headerMenu.classList.toggle('active')
      headerButton.classList.toggle('active')
      headerLogo.classList.toggle('active')
      headerMenuText.classList.toggle('active')
   }
})
if (window.innerWidth < 1200) {
   headerSocialText.innerHTML = 'Menu'

}


let missionItem = document.querySelectorAll('.mission-pillars .block-buttons .item')
let missionItemText = document.querySelectorAll('.mission-pillars .block-text .item')


missionItem.forEach(el => {
   missionItemText.forEach(text => {
      text.style.display = "none"
   })

   missionItemText[0].style.display = "flex"
   el.addEventListener('click', function (e) {
      missionItemText.forEach(text => {
         text.style.display = "none"
      })
      for (let i = 0; i < missionItem.length; i++) {

         if (missionItem[i].classList.value == el.classList.value) {

            missionItemText[i].style.display = "flex"
         }
      }


      missionItem.forEach(button => {
         button.classList.remove('active')
      })
      el.classList.add('active')
   })
})

if (window.innerWidth < 1220) {
   let block = document.querySelectorAll('.mission-mobile-block .item')
   block.forEach(el => {
      el.addEventListener('click', function (e) {
         if (el.classList.value.includes('item-down')) {

            el.querySelector('.item-down').classList.remove('active')
         }
         let blockChoosed = el.closest('.item')
         let blockItem = blockChoosed.querySelector('.item-down')
         if (blockItem) {
            blockItem.classList.toggle('active')

         }
         el.classList.toggle('active')
      })
   })
}


let onlineEducation = document.querySelectorAll('.online-education .grid .items ')
if (window.innerWidth < 1220) {
   onlineEducation.forEach(el => {
      let block = el.querySelector('.active')
      block.classList.add('block')
   })
} else {
   onlineEducation.forEach(el => {
      el.addEventListener('mouseover', function () {
         let block = el.querySelector('.active')
         block.classList.add('block')
      })
   })

   onlineEducation.forEach(el => {
      el.addEventListener('mouseout', function () {
         let block = el.querySelector('.active')
         block.classList.remove('block')
      })
   })
}










ScrollReveal({
   distance: '100px',
   duration: 1700,
   delay: 0,
   reset: false,
});
ScrollReveal().reveal(".main-section .text", { delay: 300, origin: "top", interval: 100 });
ScrollReveal().reveal(".title div", { delay: 300, origin: "bottom", interval: 100 });
ScrollReveal().reveal(".online-education .items", { delay: 300, origin: "left", interval: 300 });
ScrollReveal().reveal(".blogs .item", { delay: 300, origin: "left", interval: 300 });
ScrollReveal().reveal(".we-strave-top div", { delay: 400, origin: "bottom" });
ScrollReveal().reveal(".we-strave-top h2 ", { delay: 500, origin: "bottom" });
ScrollReveal().reveal(".we-streave-bottom", { delay: 600, origin: "bottom" });
ScrollReveal().reveal(".main-section .text", { delay: 300, origin: "bottom" });
ScrollReveal().reveal(".mission-the", { delay: 300, origin: "top" });
ScrollReveal().reveal(".mission-youtube .container", { delay: 300, origin: "top" });
ScrollReveal().reveal(".mission-mobile-block .item", { delay: 300, origin: "left", interval: 300 });

