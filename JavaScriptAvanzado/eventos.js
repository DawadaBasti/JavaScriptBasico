'use stricts';

//Selecciona lo que pasemos 
var boton = document.querySelector('#boton');
var div = document.querySelector('#div');

//Añadiendo un escuchador de evento, parametro callback
/*
boton.addEventListener('click', function(){
    console.log("Has pulsado el boton");
    div.innerHTML = "As pulsado el boton";
})
*/

//funcion pulsar
function pulsar(){
    div.innerHTML = "As pulsado el boton";
}

//funcion alerta
function alerta(){
    alert("Has pulsado el div");
}

//Extras
//onclick
//oncontextmenu     boton secundario del raton
//onmouseenter      boton central del raton
//onmousedown       al bajar el raton
//ondblclick
//onmouseleave      al levantar el mouse una vez presionado
//onmouseover       pasa el raton por abajo
//onmouseup         pasa el raton por arriba