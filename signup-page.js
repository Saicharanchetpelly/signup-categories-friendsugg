$(() => {
  $(".phn-num").focus(() => {
    $(".phn-num,.country-code").addClass("inputfocus");
  });

  $(".user-otp").focus(() => {
    $(".user-otp").addClass("inputfocus");
  });

  $(".send-otp").click(() => {
    $(".send-otp").hide();
    $(".valid-user-name").show();

    /* this is for displaying seconds in otp section */

    let secondsDiplay = 59;
    let secondsTimer = setInterval(() => {
      secondsDiplay > 0
        ? ((document.getElementById("timer").innerHTML = secondsDiplay),
          secondsDiplay--)
        : ($(".valid-user-name").hide(),
          $(".send-otp").show(),
          $("#timer").html("00"),
          clearInterval(secondsTimer));
    }, 1000);
  });
});
