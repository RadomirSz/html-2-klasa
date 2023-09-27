function test(){
alert("witam");
}

function mnozenie()
{
    a = prompt("podaj liczbe","");
    b = prompt("podaj liczbe","");
    alert("pomnożone dają:" + a*b);
}

function DIVIDE()
{
    a = prompt("podaj liczbe","");
    b = prompt("podaj liczbe","");
    alert("pomnożone dają:" + a/b);
}

function suma()
{
    a = prompt("podaj liczbe","");
    b = prompt("podaj liczbe","");
    alert("ich suma to: " + a-+-b);

}

function odejmowanie()
{
    a = prompt("podaj liczbe","");
    b = prompt("podaj liczbe","");
    alert("ich różnica to: " + a-b);

}

function nan()
{
    let a = prompt("podaj liczbe","");
    let b = prompt("podaj liczbe","");
    let wynik = (a*b)? a*b:a*b;
    let metoda = (isNaN(wynik))?
    "tylko liczby podawaj ":
    "iloczyn liczb wynosi: "+wynik;
    alert(metoda);
}

function pisz()
{
    document.write("hejo");
    document.write("<br><b>witaj</b><br>");
    document.write('<input type="button" onClick="mnozenie()" value="pomnożę">');

}

function odnies1()
{
    document.write("siemka");
    window.location.href="html2.html";

}
function odnies2()
{
    document.write("cześć");
    window.location.href="html1.html";

}

function iff()
{
    a = prompt("podaj liczbe","");
    if(a>9) {alert("to nie cyfra");}
    if(a<10 && a>-1) {alert("to cyfra");}
}

function  login()
{
    let login = prompt("Podaj login: ","")
    let password = prompt("Podaj hasło: ","")
    if(login=="72343" && password=="hojemaslo")
    {
        document.write("<body><h1>siema dobre hasło podałeś</h1></body>");
    }
    else
    {
        alert("zły login lub hasło");
    }
}
