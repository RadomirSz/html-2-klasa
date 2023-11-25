let dzialanie = "";

function add(x)
{
    dzialanie += document.getElementById(x).value;
    document.getElementById("ekran").innerHTML = dzialanie;
    console.log("dodało");
}

function wynik()
{
    if(dzialanie == "")
    {
        document.getElementById("ekran").innerHTML = "nic nie dałeś baranie";
        console.log("pustka");
    }
    else
    {
        document.getElementById("ekran").innerHTML = eval(dzialanie);
        dzialanie = eval(dzialanie);

    }
    
}

// function clear(){ 
//     dzialanie = "";
//     document.getElementById("ekran").innerHTML = "";
// }

function del(){
    dzialanie = dzialanie - dzialanie[dzialanie.length];
    if(dzialanie.length > 0){
        document.getElementById("ekran").innerHTML = dzialanie;
    }
    else{
        document.getElementById("ekran").innerHTML = "";
        dzialanie = "";
        console.log("jakiś els");
    }
}