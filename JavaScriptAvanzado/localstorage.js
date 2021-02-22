'use stricts';

//guardar datos dentro del navegador

if(typeof(Storage)){
    console.log("disponible");
}else{
    console.log("no disponible");
}

//para insertar un item setItem
localStorage.setItem('clave','texto o valor de esta clave');
localStorage.setItem('edad','20');

//para recoger un item getItem
var valor = localStorage.getItem('clave');
console.log(valor);

//json {}
var persona = {
    edad: 37,
    nombre: "Manuel",
}

localStorage.setItem('persona', JSON.stringify(persona));

var per = JSON.parse(localStorage.getItem('persona'));

console.log(per.nombre);