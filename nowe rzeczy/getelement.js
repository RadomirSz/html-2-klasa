function formularz()
{
    alert(document.getElementById("pole1").value);
}

function oblicz()
{
    let a = document.getElementById("bok1").value;
    let b = document.getElementById("bok2").value;
    document.getElementById("div2").textContent = a*b;
}