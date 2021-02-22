'use stricts';

//Seleccionar un elemento de html desde javascript
var div1 = document.getElementById('div1');

//console.log(div1);

//Cambiar texto del div desde javascript
div1.innerHTML = 'texto cambiado desde javascript';

//cambiando estilo del div1 tamaño de letra
div1.style.fontSize = '25px';

console.log(div1);

var parrafo1 = document.getElementsByClassName('parrafo1');
//console.log(parrafo1);

//cambiat texto del parrafo desde javasript
parrafo1[1].innerHTML = 'texto cambiado';