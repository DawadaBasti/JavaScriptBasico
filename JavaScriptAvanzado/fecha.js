'use stricts';

var dia = new Date();
var hora = dia.getHours().toString();
var minutos = dia.getMinutes().toString();
var segundos = dia.getSeconds().toString();

console.log(hora);
console.log(minutos);
console.log(segundos);

console.log(hora + minutos + segundos);