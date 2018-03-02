
(function($) {
  "use strict"; // Mulai

  // Smooth scrolling using jQuery easing
  // $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
  //   if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
  //     var target = $(this.hash);
  //     target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
  //     if (target.length) {
  //       $('html, body').animate({
  //         scrollTop: (target.offset().top - 54)
  //       }, 1000, "easeInOutExpo");
  //       return false;
  //     }
  //   }
  // });

$(document).ready(function(){
  $('a[href^="#"]').on('click',function (e) {
      e.preventDefault();

      var target = this.hash,
      $target = $(target);

      $('html, body').stop().animate({
          'scrollTop': $target.offset().top
      }, 900, 'swing');
  });
});

  // Tutup menu setelah diklik
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Aktifkan scrollspy 
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse pada saat diatas
  navbarCollapse();
  // Collapse  navbar ketika scrool
  $(window).scroll(navbarCollapse);

  // Hide navbar when modals trigger
  $('.portfolio-modal').on('show.bs.modal', function(e) {
    $(".navbar").addClass("d-none");
  })
  $('.portfolio-modal').on('hidden.bs.modal', function(e) {
    $(".navbar").removeClass("d-none");
  })

// Hide Unhide Tombol go top
// Saat layar sedang digulung, cek apakah jarak gulungan layar sudah mencapai lebih dari 200 atau belum.
// Jika nilainya sudah melebihi 200, tampilkan tombol #mainbottom
// Namun jika sebaliknya, sembunyikan tombol #mainbottom
$(window).scroll(function() {
    if($(this).scrollTop() > 200) {
        $('#mainbottom').show();
    } else {
        $('#mainbottom').hide();
    }
});

// Sembunyikan penampilan tombol pada saat keadaan masih normal dengan JQuery .hide()
// Saat tombol kembali-ke-atas diklik, animasikan nilai scrollTop menuju 0 dengan durasi selama 1000ms
$('#mainbottom').hide().click(function() {
    $('html, body').animate({scrollTop:0}, 1000);
    return false;
});

})(jQuery); // Akhir
