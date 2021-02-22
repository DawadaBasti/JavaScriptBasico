'use strict';

//funciones anonimas

function sumar(n1, n2, fun){
    var suma = n1 + n2;
    fun(suma);
    return suma;
}

sumar(5, 7, d => {
    console.log('La suma es ' + d);
    console.log('La multiplicacion es ' + d * 2);
});
