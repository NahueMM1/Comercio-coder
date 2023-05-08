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



function saludarCliente() {
  let nombre;
  do {
    nombre = prompt("¡Bienvenido! Por favor, introduce tu nombre:");
    if (!/^[a-zA-Z]+$/.test(nombre)) {
      alert("Lo siento, el nombre solo debe contener letras.");
    }
  } while (!nombre || !/^[a-zA-Z]+$/.test(nombre));

  alert("¡Hola " + nombre + "! Bienvenido/a a la carameleria.");
};

function sumarCaramelos() {
  let carameloR = Number(prompt("Ingrese la cantidad de caramelos Rojos: "));
  let carameloV = Number(prompt("Ingrese la cantidad de caramelos Verdes: "));
  // Se utilizan dos prompts para que el usuario ingrese la cantidad de caramelos a sumar.
  // Los valores ingresados se convierten en números mediante la función Number().

  let totalCaramelos = carameloR + carameloV;

  return totalCaramelos;
}

let saldo = 150; //saldo inicial de la cuenta
let precioCaramelo = 10; //precio de cada caramelo


//Inicio de la entrega.


saludarCliente(); //Bienvenida al cliente
let nombre = saludarCliente;

let caramelos = alert(`En estos momentos solo contamos con caramelos Rojos y Verdes, todos nuestros caramelos tienen un valor de $${precioCaramelo} ,por apertura de la tienda te damos un voucher de regalo de $${saldo} para que lo utilices en los caramelos que quieras`);

let resultado = sumarCaramelos();
alert("El total de caramelos es: " + resultado);


let importePagar = resultado * precioCaramelo

let monto = alert(`Los ${resultado} caramelos tienen un costo total de $${importePagar}`);


let confirmacion;
  do {
    confirmacion = prompt("¿Confirmamos la compra? coloque Si para proceder o No para cancelar");
    switch (confirmacion) {
      case "Si":
        alert(`Gracias por su compra, Ha comprado un total de ${resultado} caramelos por un valor de $${importePagar}. Le queda un saldo de $${saldo - importePagar}. ¡Vuelva pronto!`);
        break;
      case "No":
        alert("La compra ha sido cancelada")
      break;
      default:
        alert("No se ha ingresado ninguna respuesta válida. Por favor, ingrese Si o No.")
    }
  } while (confirmacion !== "Si");
