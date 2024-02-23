const fadeInRight = document.querySelectorAll('.fadeInRight');
const fadeInLeft = document.querySelectorAll('.fadeinLeft');

window.onload = () => {
  // Function to scroll smoothly to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  // Scroll to top before showing preloader
  scrollToTop();

  const preloader = document.querySelector("#preloader");
  setTimeout(() => {
    preloader.classList.add("remove");
    document.body.classList.remove('load');
  }, 100);
};


//   /* ================= show & remove menu ================= */
// const navMenu = document.getElementById("nav-menu"),
// navToggle = document.getElementById("nav-toggle");

// navToggle.addEventListener("click", () => {
// navMenu.classList.toggle("show-menu");
// });

// /* ================= remove menu when click on nav links ================= */
// const navLinks = document.querySelectorAll(".nav__link");
// navLinks.forEach((n) => {
//   n.addEventListener("click", () => {
//     navMenu.classList.remove("show-menu");
//   });
// });
// document.querySelector('body').style.maxHeight = '100vh'

$(".product-colors span").click(function() {
  $(".product-colors span").removeClass("active");
  $(this).addClass("active");
  $(".active").css("border-color", $(this).attr("data-color-sec"))
  // $("body").css("background", $(this).attr("data-color-primary"));
  $(".snkr-content h2").css("color", $(this).attr("data-color-sec"));
  $(".snkr-content h3").css("color", $(this).attr("data-color-sec"));
  $(".snkr-container .snkr-imgBx").css("background", $(this).attr("data-color-sec"));
  $(".snkr-container .snkr-details button").css("background", $(this).attr("data-color-sec"));
  $(".snkr-imgBx img").attr('src', $(this).attr("data-pic"));
});
