let rezervacija=document.getElementsByClassName("rezervacija")[0];
rezervacija.addEventListener("submit", proveraPodataka);
function proveraPodataka(){
    const ime=document.querySelector("#imeIPrezime").value;
    const brTel=document.querySelector("#telefon").value;
    const brOsoba=document.querySelector("#brOsoba").value;
    const placanje=document.querySelector("#placanje").value;

    window.confirm("Da li su podaci u redu? Ime i prezime: " +ime+ 
" Broj telefona: "+brTel+brOsoba+ " Broj osoba: "+brOsoba+" Nacin placanja: "+placanje);
}