let dzialanie = "";

function add(x)
{
    dzialanie += document.getElementById(x).value;
    document.getElementById("ekran").innerHTML = dzialanie;
}

function wynik()
{
    if(dzialanie == "")
    {
        document.getElementById("ekran").innerHTML = "nic nie dałeś baranie";
    }
    else
    {
        document.getElementById("ekran").innerHTML = eval(dzialanie);
        dzialanie = eval(dzialanie);
    }
    
}

function clear(){ 
    dzialanie = "";
    document.getElementById("ekran").innerHTML = "";
}

function del(){
    dzialanie = dzialanie.substring(0, dzialanie.length - 1); 
    document.getElementById("ekran").innerHTML = dzialanie;

}