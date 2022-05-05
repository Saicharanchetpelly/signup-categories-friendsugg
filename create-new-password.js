/* Password Code */
$(() => {
  $(".password-show-icon").click(function () {
    let src =
      $(this).attr("src") === "./signup-images/Show.jpg"
        ? "./signup-images/hode-icon.jpg"
        : "./signup-images/Show.jpg";
    $(this).attr("src", src);
    let type =
      $(".user-password").attr("type") === "text" ? "password" : "text";
    $(".user-password").attr("type", type);
  });

  /* confirm password code */

  $(".password-hide-icon").click(function () {
    let src =
      $(this).attr("src") === "./signup-images/Show.jpg"
        ? "./signup-images/hode-icon.jpg"
        : "./signup-images/Show.jpg";
    $(this).attr("src", src);
    let type =
      $(".confirm-password").attr("type") === "text" ? "password" : "text";
    $(".confirm-password").attr("type", type);
  });

  /* Congratulate Popup Message code*/

  $(".reset-password-successful").on("click", function () {
    let password = $("#pass-new").val();
    let confirmpassword = $("#pass").val();
    if (password != 0 && password == confirmpassword) {
      $(".successful-password-popup").addClass("active");
      return false;
    }
  });
});
