// const togglePassword = document.querySelector('#togglePassword');
$(document).ready(function () {
  // $("#icon-click").click(function () {
  //   var className = $("#icon").attr("class");
  //   className =
  //     className.indexOf("slash") !== -1 ? "fa fa-eye" : "fa fa-eye-slash";

  //   $("#icon").attr("class", className);
  //   var input = $("#pass");

  //   if (input.attr("type") == "text") {
  //     input.attr("type", "password");
  //   } else {
  //     input.attr("type", "text");
  //   }
  // });
  // $("#icon-click-new").click(function () {
  //   var className = $("#icon-new").attr("class");
  //   className =
  //     className.indexOf("slash") !== -1 ? "fa fa-eye" : "fa fa-eye-slash";

  //   $("#icon-new").attr("class", className);
  //   var input = $("#pass-new");

  //   if (input.attr("type") == "text") {
  //     input.attr("type", "password");
  //   } else {
  //     input.attr("type", "text");
  //   }
  // });
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

  // $(".reset-password-successful").on("click", function () {
  //   var password = $("#pass-new").val();
  //   var confirmpassword = $("#pass").val();
  //   if (password != 0 && confirmpassword != 0) {
  //     if (password == confirmpassword) {
  //       $(".successful-password-popup").addClass("active");
  //       console.log("popup-working");
  //       return false;
  //     }
  //   }
  // else {
  //   console.log("pop-up not working");
  // }
  // });
  $(".reset-password-successful").on("click", function () {
    let password = $("#pass-new").val();
    let confirmpassword = $("#pass").val();
    if (password != 0 && password == confirmpassword) {
      $(".successful-password-popup").addClass("active");
      return false;
    }
  });
});

$(() => {
  $(".send-otp").click(() => {
    let phonenumber = $(".phn-num").val().length;
    if (phonenumber == 10) {
      $(".send-otp").hide();
      $(".valid-user-name").show();

      /* this is for displaying seconds in otp section */

      let secondsDiplay = 59;
      var secondsTimer = setInterval(() => {
        if (secondsDiplay <= 0) {
          clearInterval(secondsTimer);
          $(".send-otp").show();
          $(".valid-user-name").hide();
        }
        document.getElementById("timer").innerHTML = secondsDiplay;
        secondsDiplay--;
      }, 1000);
    } else {
      console.log("not-working");
    }
  });
  $(".contact-popup").on("click", function () {
    $(".contact-popup").removeClass("active");
    return false;
  });
  $(".phn-num").focus(() => {
    $(".phn-num").css({ color: "#07000C", border: "1px solid #4B0082" });
    $(".phn-num,.country-code").attr("placeholder", "");
  });
  $(".phn-num").keyup(() => {
    $(".send-otp").show();
    $(".valid-user-name").hide();
  });

  $(".user-otp").focus(() => {
    $(".user-otp").css({ color: "#07000C", border: "1px solid #4B0082" });
    $(".user-otp").attr("placeholder", "");
  });
  $("#username").focus(() => {
    $("#username").css({ color: "#07000C", border: "1px solid #4B0082" });
    $("#username").attr("placeholder", "");
  });
  $("#pass").focus(() => {
    $("#pass").css({ color: "#07000C", border: "1px solid #4B0082" });
    $("#pass").attr("placeholder", "");
  });
  $("#pass-new").focus(() => {
    $("#pass-new").css({ color: "#07000C", border: "1px solid #4B0082" });
    $("#pass-new").attr("placeholder", "");
  });

  $(".password-login").click(() => {
    var loginpassword = $("#pass").val();
    var usernamevalue = $("#username").val();
    if (usernamevalue != 0) {
      if (loginpassword != 0) {
        if (loginpassword == "saicharan@149") {
          $(".loginPasswordFormAlert").html("");
          // console.log("password is correct");
        } else {
          $(".loginPasswordFormAlert")
            .html("You’ve entered wrong password. Try again!")
            .css("color", "#E74C3C");
          // console.log("incorrect password");
        }
      }
      //  else {
      // console.log("working");
      // }
    }
  });
});
