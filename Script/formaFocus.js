$(".polje input, #komentar, #placanje").on("focus blur", function (event) {
  if (event.type === "focus") {
    $(this).css("background-color", "var(--svetlo-plava)");
  } else {
    $(this).css("background-color", "white");
  }
});
