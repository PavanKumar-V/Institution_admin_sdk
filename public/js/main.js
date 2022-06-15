// BUTTON TOGGLER
function btnLoaderToggleOn(btn, loader) {
  btn.attr("disabled", true);
  btn.empty();
  btn.append(loader);
  loader.toggle();
}
function btnLoaderToggleOff(btn, loader, text) {
  loader.toggle();
  btn.append(text);
  btn.attr("disabled", false);
}

$(document).ready(function () {
  // SIDEBAR TOGGLE
  $(".hamburger").click(function () {
    $(".wrapper").toggleClass("collapse");
  });

  //loader
  $(".loader").css("display", "none");
  $(".btn-loader").css("display", "none");

  $(".sidebar__item").click(function () {
    $(".main-data").css("display", "none");
    $(".loader").css("display", "block");
    $(".sidebar__item").removeClass("active");
    $(this).addClass("active");
  });

  // Login and reset password toggle
  $("#forgot-password-btn").on("click", function () {
    $("#form-title").text("Reset Password");
    $("#login").css("display", "none");
    $("#password-reset").css("display", "block");
  });

  $("#back-login-btn").on("click", function (e) {
    // e.preventDefault();
    $("#form-title").text("Login");
    $("#password-reset").css("display", "none");
    $("#login").css("display", "block");
  });

  // expand toggle
  $("#tab2 #expand-more").on("click", function (e) {
    const cardList = $(this).parents(".card-list");
    cardList.children(".content-expand").toggle();
  });

  $(document).on("click", "#more-vert", function (e) {
    const more_menu = $(this).parent().parent().children("#more-menu");
    more_menu.toggle();
  });

  $(".collapsible").collapsible();
});
