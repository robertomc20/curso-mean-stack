'use strict'

// bucle while

var year = 2019;

while(year <= 2051){
    //ejecuta esto
    console.log("Estamos en el año "+year);

    // PARA DETENER EL WHILE SE USA UN BREAK con tal condicion
    if(year == 2000){
        break;
    }

    year++; //esto permite que en cada iteración la variable year se incremente y asi termina el bucle
            //de no hace el year++ no termina nunca el bucle ya que el valor no esta cambiando
}


// do while

var years = 20;

do{
    alert("SOLO CUANDO SEA DIFERENTE A 20");
    years++;
}while(years > 25)