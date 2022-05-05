$(() => {
  $(".user-full-name").focus(() => {
    $(".user-full-name").addClass("inputfocus");
    $(".user-full-name").attr("placeholder", "");
  });

  $(".user-name").focus(() => {
    $(".user-name").addClass("inputfocus");
    $(".user-name").attr("placeholder", "");
  });
});
