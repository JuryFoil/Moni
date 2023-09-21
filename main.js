// uso de var let y const. Se pueden declarar sin iniciar
var gato;
let carro;
console.log(gato);
console.log(carro);

// Se var puede volver a declarar
var gato = "felix";
console.log(gato);
var gato; "bobby";
console.log(gato);

// let no se puede declar de nuevo
let perro = "tobby";
console.log(perro);
perro = "doki";
console.log(perro);

// Const no se puede declar sin iniciar
// const direccion;
// console.log(direccion);
const direccion = "avenida paseos";
console.log(direccion);

//const no se puede reasignar. solo se puede asignar una sola vez pero hay formas de alterar el contenido
// direccion= "avenida principal";
// console.log(direccion);

//Scope (alcance). donde es que esa variable puede acceder y donde es que es visible.
//const y let solo son visibles en el bloque sonde se ha declarado
//var no se debe usar. si esta fuera de la funcion es global
//let variables que van a cambiar 
//const variables que no van a cambiar

//reglas de variables. 
// no se pueden usar palabras reservadas
//no pueden empezar con un digito
// let 2x=6;

//pueden empezar con letra, guion bajo o $
let $car = "ford mustang";
console.log($car);

//para nombres complejos se usa notacion de camello
let User_Name = "Juan"
console.log(UserName);

// TIPOS DE DATOS
//primitivos

let velocidad = 98.5;
console.log(typeof velocidad);

//STRING
let User_Name = "Jose";
console.log(typeof User_Name);

// BOOLEAN
let isActive=true;
console.log(typeof isActive);

// undefined
let nombre;
console.log(typeof nombre);

// null
let edad = null;
console.log(typeof edad);

//bigInt (numeros muy grandes)
let z = 3n ** 55n;
console.log(typeof z);

// symbol- identificador unico
let clave= Symbol("sym");
console.log(typeof clave);

//objetos
//ARRAY (matrices)
let carros=["ford mustang", 500, true];
console.log(typeof carros);

//OBJECT
let $carro = {modelo: "ford mustang", potencia: 300, velocidad: 200};
console.log(typeof carro);

//copiado por referencia
let x = [2,4]

let y = x;

y.push(5);

console.log(x);
console.log(y);
# mh
