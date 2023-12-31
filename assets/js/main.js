$(function () {
  'use strict';

  //===== Prealoder

  $(window).on('load', function (event) {
    $('.preloader').delay(500).fadeOut(500);
  });

  //===== Sticky

  $(window).on('scroll', function (event) {
    var scroll = $(window).scrollTop();
    if (scroll < 10) {
      $('.navbar-area').removeClass('sticky');
    } else {
      $('.navbar-area').addClass('sticky');
    }
  });

  //===== close navbar-collapse when a  clicked

  $('.navbar-nav a').on('click', function () {
    $('.navbar-collapse').removeClass('show');
  });

  //===== Mobile Menu

  $('.navbar-toggler').on('click', function () {
    $(this).toggleClass('active');
  });

  $('.navbar-nav a').on('click', function () {
    $('.navbar-toggler').removeClass('active');
  });

  //===== Section Menu Active

  var scrollLink = $('.page-scroll');
  // Active link switching
  $(window).scroll(function () {
    var scrollbarLocation = $(this).scrollTop();

    scrollLink.each(function () {
      var sectionOffset = $(this.hash).offset().top - 73;

      if (sectionOffset <= scrollbarLocation) {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      }
    });
  });

  //===== Isotope Project 3

  $('.container').imagesLoaded(function () {
    var $grid = $('.grid').isotope({
      // options
      transitionDuration: '1s',
    });

    // filter items on button click
    $('.portfolio-menu ul').on('click', 'li', function () {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({
        filter: filterValue,
      });
    });

    //for menu active class
    $('.portfolio-menu ul li').on('click', function (event) {
      $(this).siblings('.active').removeClass('active');
      $(this).addClass('active');
      event.preventDefault();
    });
  });

  //  Magnific Popup

  $('.image-popup').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true,
    },
  });

  //====== Magnific Popup

  $('.video-popup').magnificPopup({
    type: 'iframe',
    // other options
  });

  //===== Slick

  $('.testimonial-active').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 800,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  });

  //===== Slick

  $('.testimonial-active-2').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 800,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  });

  //===== Slick

  $('.client-active').slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    speed: 800,
    arrows: false,
    dots: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
    ],
  });

  //===== Slick

  $('.testimonial-active-4').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 800,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  });

  const btn = document.getElementById('button');

  document
    .getElementById('form')
    .addEventListener('submit', function (event) {
      event.preventDefault();

      btn.value = 'Enviando..';

      const serviceID = 'default_service';
      const templateID = 'template_2de0oba';

      emailjs.sendForm(serviceID, templateID, this).then(
        () => {
          btn.value = 'Send Email';
         swal({
           title: 'Gracias',
           text: 'Mensaje enviado con éxito!',
           icon: 'success',
         });
        },
        (err) => {
          btn.value = 'Send Email';
          alert(JSON.stringify(err));
        }
      );
    });

  //=====  AOS

  new WOW().init();

  //=====
});
