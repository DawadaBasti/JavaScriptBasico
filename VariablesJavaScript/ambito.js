'use strict';

var global = 'Variable Global'

function MostrarConsola(){
    var variable_funcion = 'Variable dentro de la funcion';
    console.log(global);
    console.log(variable_funcion);
}

MostrarConsola();

console.log(global);
console.log(variable_funcion);