'use stricts';

function Persona(edad, altura, peso){
    this.edad = edad;
    this.altura = altura;
    this.peso = peso;

    //Usaremos arrow functions, son funciones que no tienen nombre
    //simplemente de ejecutan cuando se llama 
    this.caminar = ()=>{
        console.log('Esta persona esta caminando');
    }
    this.sentarse = ()=>{
        console.log('La persona esta sentada');
    }

}

//objeto instanciado con estas caracteristicas
var Sebastian = new Persona(20, 1.63, 40);
console.log(Sebastian.caminar);