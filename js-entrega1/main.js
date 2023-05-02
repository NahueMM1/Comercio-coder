/*                                                           Anotaciones importantes sobre JS

Variables y Valores


Let => Palabra reservada , sirve para definir una variable (quiere decir que se va a utilizar un espacio disponible en la memoria RAM)


ejemplo:

let edad; (Define edad sin asignar un valor)

let edad = 45 (Defina edad agregando un valor con el signo = )

let edad = 45; // Manera recomendable para declarar una variable
var nombre = "andres"; //Forma no recomendada para declarar una variable utilizando Var
const NUMERO = 5;



[Cons (constantes)

    •Hace referencia a algo que es constante y que no cambia dentro del programa

]

•Acostumbrar al uso de cammelCase para definir variables y funciones
•Utilizar PascalCase para definir casles que no conocemos



parseInt = Pasa un string con un numero entero a number
parseFloat = Pasa un string  con decimal a un numero  decimal del tipo number

*/


// let numeroUno = 10;
// let numeroDos = 10;
// let suma = numeroUno + numeroDos;
// let resta = numeroUno - numeroDos;
// let multiplicacion = numeroUno * numeroDos;
// let divison = numeroUno / numeroDos;


// console.log("Aca esta la suma", suma);
// console.log("Aca esta la resta", resta);
// console.log("Aca esta la multiplicacion",multiplicacion);
// console.log("Aca esta la division", divison);

//          SALUDO A SOFI

// let saludo = "Hola ";
// let nombre = "Sofia";
// let mensaje = saludo + nombre;
// console.log(mensaje);


/* let nombre = prompt("Ingrese su nombre");
let mensaje = "Hola " + nombre;
alert(mensaje); */



/* let nombre = prompt("Ingrese su nombre");
let mensaje = "Hola " + nombre;
alert(mensaje);

let indicacion =  "a continuacion haz una suma";
alert(indicacion);

let numeroUno = parseInt(prompt("Coloca el primer numero a sumar"));
let numeroDos = parseInt(prompt("Coloca el segundo numero a sumar"));
let suma = numeroUno + numeroDos;
alert(suma); */

// Estructura del bucle for

/* for (desde; hasta; actualizacion){
    codigo a repetir
}
*/


//                          ENTREGA NRO #1


let nombreCliente = prompt('¡Bienvenido/a a la tienda de caramelos! ¿Cuál es su nombre?');
let saldo = 10; //saldo inicial de la cuenta
let precioCaramelo = 0.5; //precio de cada caramelo
let cantidadCaramelos = 0; //cantidad de caramelos comprados
let seguirComprando = true; //variable para saber si el usuario quiere seguir comprando

alert(`¡Hola ${nombreCliente}! Bienvenido/a a nuestra tienda de caramelos. Contamos con una gran variedad de sabores y colores. Comience su compra con $${saldo}.`);

while (seguirComprando) {
  let cantidad = parseInt(prompt(`Tiene $${saldo}. Cada caramelo cuesta $${precioCaramelo}. ¿Cuántos caramelos desea comprar?`));
  
  if (cantidad * precioCaramelo > saldo) {
    alert('No tiene suficiente dinero para comprar esa cantidad de caramelos.');
  } else {
    saldo -= cantidad * precioCaramelo;
    cantidadCaramelos += cantidad;
    
    seguirComprando = confirm(`Ha comprado ${cantidad} caramelos por $${cantidad * precioCaramelo}. ¿Desea seguir comprando?`);
  }
}

alert(`Gracias por su compra, ${nombreCliente}! Ha comprado un total de ${cantidadCaramelos} caramelos por un valor de $${cantidadCaramelos * precioCaramelo}. Le queda un saldo de $${saldo}. ¡Vuelva pronto!`);
