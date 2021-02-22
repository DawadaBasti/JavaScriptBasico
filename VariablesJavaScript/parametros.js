'use strict';

var n1 = prompt("Dime una palabra", "No has puesto nada");
var n2 = prompt("Dime otra palabra", "No has puesto nada");

function UnirPalabras(n1, n2){
    var PalabrasUnidas = n1 + " " +n2;
    return PalabrasUnidas;
}

var resultado = UnirPalabras(n1, n2);
console.log(resultado);

//funcion con parametro adicional
var n3 = prompt("Dime una palabra", "No has puesto nada");
var n4 = prompt("Dime otra palabra", "No has puesto nada");

function Unir(n3, n4, n5 = false){
    if(n5 == false){
        console.log(n3 + " " + n4);
    }else{
        document.write(n3 + " " + n4);
    }
}

Unir(n3, n4, true);