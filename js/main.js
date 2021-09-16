let searchBtn = document.querySelector('#search-btn'),
      searchBar = document.querySelector('.search-bar-container'),
      loginBtn = document.querySelector('#login-btn'),
      frmLogin = document.querySelector('.login-form-container'),
      frmClose = document.querySelector('#form-close'),
      menuBar = document.querySelector('#menu-bar'),
      navbar = document.querySelector('header .navbar'),
      videoBtn = document.querySelectorAll('.vid-btn');


      // ketika window di scroll
      window.onscroll = () =>{
            searchBtn.classList.remove('fa-times');
            searchBar.classList.remove('active');
            menuBar.classList.remove('fa-times');
            navbar.classList.remove('active');
            frmLogin.classList.remove('active');
      }

      searchBtn.addEventListener('click', () =>{
            searchBtn.classList.toggle('fa-times');
            searchBar.classList.toggle('active');
      })

      loginBtn.addEventListener('click', () =>{
            frmLogin.classList.add('active');
      })

      frmClose.addEventListener('click', () =>{
            frmLogin.classList.remove('active');
      })

      menuBar.addEventListener('click', () =>{
            menuBar.classList.toggle('fa-times');
            navbar.classList.toggle('active');
      })

      videoBtn.forEach(btn => {
            btn.addEventListener('click', ()=> {
                  document.querySelector('.controls .active').classList.remove('active');
                  btn.classList.add('active');
                  let src = btn.getAttribute('data-src');
                  document.querySelector('#video-slider').src = src;
            })
      })

      var swiper = new Swiper(".reviews-slider", {
            spaceBetween: 20,
            loop:true,
            autoplay: {
                  delay: 2500,
                  disableOnInteraction: false,
            },
            breakpoints: {
                  640: {
                        slidesPerView: 1,
                  },
                  768: {
                        slidesPerView: 2,
                  },
                  1024: {
                        slidesPerView: 3,
                  },
            },
      });


      var swiper = new Swiper(".brand-slider", {
            spaceBetween: 20,
            loop:true,
            autoplay: {
                  delay: 2500,
                  disableOnInteraction: false,
            },
            breakpoints: {
                  450: {
                        slidesPerView: 2,
                  },
                  768: {
                        slidesPerView: 3,
                  },
                  991: {
                        slidesPerView: 4,
                  },
                  1200: {
                        slidesPerView: 5,
                  },
            },
      });

      