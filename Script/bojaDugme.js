var rez = document.getElementById("rezervisi");
var res = document.getElementById("resetuj");

rez.addEventListener("mouseover", function () {
  rez.style.backgroundColor = "var(--zelena)";
  rez.style.color = "white";
});

rez.addEventListener("mouseout", function () {
  rez.style.backgroundColor = "";
  rez.style.color = "";
});

res.addEventListener("mouseover", function () {
  res.style.backgroundColor = "var(--crvena)";
  res.style.color = "white";
});

res.addEventListener("mouseout", function () {
  res.style.backgroundColor = "";
  res.style.color = "";
});
