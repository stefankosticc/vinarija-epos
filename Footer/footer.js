function createFooter() {
  const footer = document.createElement("footer");
  footer.classList.add("footer-container");
  const p = document.createElement("p");
  p.textContent = "Vinarija Joksimovic";
  p.classList.add("footer-ime");
  footer.appendChild(p);
  return footer;
}
