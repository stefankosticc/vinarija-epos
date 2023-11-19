var imeGreska = document.getElementById("imeGreska");
imeGreska.textContent = "";
var telefonGreska = document.getElementById("telefonGreska");
telefonGreska.textContent = "";
var emailGreska = document.getElementById("emailGreska");
telefonGreska.textContent = "";

const dugmeRezervisi = document.getElementById("rezervisi");
let validateIme = false;
let validateTel = false;
let validateEmail = false;

document.getElementById("forma").addEventListener("submit", function (event) {
  //   console.log("sprecavanje defaulta");
  event.preventDefault();
  validacija();
});

function validacija() {
  const imeiPrezime = document.getElementById("imeIPrezime").value;
  const telefon = document.getElementById("telefon").value;
  const email = document.getElementById("email").value;

  if (imeiPrezime[0] !== imeiPrezime[0].toUpperCase()) {
    imeGreska.textContent = "Prvo slovo mora biti veliko!";
    validateIme = false;
  } else {
    imeGreska.textContent = "";
    validateIme = true;
  }

  if (!telefon.match("[0-9]{3}-[0-9]{4}-[0-9]{3}")) {
    telefonGreska.textContent = "Unesite broj telefona u formatu 06X-XXXX-XXX!";
    validateTel = false;
  } else {
    telefonGreska.textContent = "";
    validateTel = true;
  }

  if (
    email.indexOf("@") < 1 ||
    email.lastIndexOf(".") < email.indexOf("@") + 2 ||
    email.lastIndexOf(".") + 2 >= email.length
  ) {
    emailGreska.textContent = "Unesite ispravnu email adresu!";
    validateEmail = false;
  } else {
    emailGreska.textContent = "";
    validateEmail = true;
  }

  if (validateIme && validateTel && validateEmail) {
    const ime = document.querySelector("#imeIPrezime").value;
    const brTel = document.querySelector("#telefon").value;
    const brOsoba = document.querySelector("#brOsoba").value;
    const placanje = document.querySelector("#placanje").value;
    const email = document.querySelector("#email").value;
    const kom = document.querySelector("#komentar").value;

    window.confirm(
      "Da li su podaci u redu? \nIme i prezime: " +
        ime +
        "\nBroj telefona: " +
        brTel +
        "\nEmail: " +
        email +
        brOsoba +
        "\nBroj osoba: " +
        brOsoba +
        "\nNacin placanja: " +
        placanje +
        "\nKomentar: " +
        kom
    );
  }
}
