var trenutniLink = window.location.href;
document.querySelectorAll("nav a").forEach(function (link) {
  if (link.href === trenutniLink) {
    link.style.textDecoration = "underline";
    link.style.color = "var(--zuta)";
  }
});
