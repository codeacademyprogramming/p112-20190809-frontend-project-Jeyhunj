$(function () {
 
  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      $(this).siblings(".opened").removeClass("opened")
      this.classList.toggle("opened");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        $(".accordion").each(function (ind, val) {
          val.nextElementSibling.style.maxHeight = null;
        })
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 250) {

      $(".navbar").addClass("navbar-scroll");
      $(".header-info").addClass("header-info-margin");

    } else {
      $(".navbar").removeClass("navbar-scroll");
      $(".header-info").removeClass("header-info-margin");

    }
  });


 
  // $(window).on('load', function () {
  //   $(".book_preload").delay(2000).fadeOut(200);
  //   $(".book").on('click', function () {
  //     $(".book_preload").fadeOut(200);
  //   })
  // })





});

