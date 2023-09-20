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