document.addEventListener("click", function () {
  let vino = event.target;
  let opis = vino.querySelector(".vino-opis");
  var stil = window.getComputedStyle(opis);
  let displayValue = stil.getPropertyValue("display");

  if (displayValue == "none") {
    opis.style.display = "block";
  } else {
    opis.style.display = "none";
  }
});
