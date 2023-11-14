var otvorenOpis = null;

function detaljanOpis(vino) {
  var opis = vino.querySelector(".vino-opis");

  if (otvorenOpis !== null && otvorenOpis !== vino) {
    otvorenOpis.querySelector(".vino-opis").style.display = "none";
  }

  opis.style.display = opis.style.display === "none" ? "flex" : "none";
  vino.style.flexGrow = opis.style.display === "none" ? "1" : "2";
  opis.style.justifyContent = "center";
  opis.style.flexDirection = "column";

  otvorenOpis = opis.style.display === "none" ? null : vino;
}
