function createMeni() {
  const meni = document.createElement("header");
  meni.classList.add("meni-container");

  const pocetna = document.createElement("a");
  pocetna.textContent = "Početna";
  pocetna.classList.add("meni-stranica");
  pocetna.setAttribute("href", "index.html");

  const ponuda = document.createElement("a");
  ponuda.textContent = "Ponuda";
  ponuda.classList.add("meni-stranica");
  ponuda.setAttribute("href", "../Ponuda/ponuda-vina.html");

  meni.appendChild(pocetna);
  meni.appendChild(ponuda);

  return meni;
}
