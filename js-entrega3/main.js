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
}

function sumarCaramelos() {
  let carameloR = Number(prompt("Ingrese la cantidad de caramelos Rojos: "));
  let carameloV = Number(prompt("Ingrese la cantidad de caramelos Verdes: "));
  // Se utilizan dos prompts para que el usuario ingrese la cantidad de caramelos a sumar.
  // Los valores ingresados se convierten en números mediante la función Number().

  let totalCaramelos = carameloR + carameloV;

  return totalCaramelos;
}

let saldo = 500; //saldo inicial de la cuenta
let precioCaramelo = 10; //precio de cada caramelo

saludarCliente(); //Bienvenida al cliente
let nombre = saludarCliente;

let caramelos = alert(
  `En estos momentos solo contamos con caramelos Rojos y Verdes, todos nuestros caramelos tienen un valor de $${precioCaramelo} ,por apertura de la tienda te damos un voucher de regalo de $${saldo} para que lo utilices en los caramelos que quieras`
);

let resultado = sumarCaramelos();
alert("El total de caramelos es: " + resultado);

let importePagar = resultado * precioCaramelo;

let monto = alert(
  `Los ${resultado} caramelos tienen un costo total de $${importePagar}`
);

let confirmacion;
do {
  confirmacion = prompt(
    "¿Confirmamos la compra? coloque Si para proceder o No para cancelar"
  );
  switch (confirmacion) {
    case "Si":
      alert(
        `Gracias por su compra, Ha comprado un total de ${resultado} caramelos por un valor de $${importePagar}.`
      );
      break;
    case "No":
      alert("La compra ha sido cancelada");
      break;
    default:
      alert(
        "No se ha ingresado ninguna respuesta válida. Por favor, ingrese Si o No."
      );
  }
} while (confirmacion !== "Si");



//                    SEGUNDA ENTREGA

function ofrecerPromocion() {
  var chupetines = [
    { color: "rojo", sabor: "cereza" },
    { color: "verde", sabor: "manzana" },
    { color: "azul", sabor: "arándano" },
    { color: "amarillo", sabor: "limón" },
    { color: "naranja", sabor: "naranja" },
  ];

  // Generar un número aleatorio para dar la cantidad de chupetines en la promoción
  var cantidadChupetines = Math.floor(Math.random() * 10) + 4; // Entre 1 y 10 chupetines
  var chupetinesOfrecidos = [];

  // Seleccionar chupetines aleatorios y agregarlos a la lista de chupetines ofrecidos
  for (var i = 0; i < cantidadChupetines; i++) {
    var indice = Math.floor(Math.random() * chupetines.length);
    var chupetin = chupetines[indice];
    chupetinesOfrecidos.push(chupetin);
  }

  // Aca se da crea el mensaje que se da al cliente ofreciendo la promocion
  var mensaje = "Antes de irte ,¡Tenemos una promoción especial para ti!\n\n";
    mensaje +=
      "Esta vez te ofrecemos un surtido de " + cantidadChupetines + " chupetines:\n\n";
  for (var i = 0; i < chupetinesOfrecidos.length; i++) {
    var chupetin = chupetinesOfrecidos[i];
    mensaje +=
      "Chupetín " + (i + 1) + ": color " + chupetin.color + " y sabor " + chupetin.sabor + ".\n";
  }
    mensaje +=
      "\nEl precio de cada chupetín es de $25 , con esta promo cada chupetin costaria $15. ¿Deseas comprarla?";

    var confirmacion = confirm(mensaje);

  if (confirmacion) {
    var precioTotal = cantidadChupetines * 15;
    alert( "¡Gracias por tu compra! Se han cargado $" + precioTotal + " al total. Recuerda volver en otro momento, tendremos nuevas promos para ofrecerte");
  } else {
    alert("¡Esperamos verte denuevo! Tenemos más promociones para ti.");
  }
}

// Llamada a la función
ofrecerPromocion();


const caramelosDisponibles = [
  {id: "Caramelos" ,nombre:"Caramelos billiken" ,precio: 7},
  {id: "Chupetines" ,nombre:"Chupetines Pops" ,precio: 25},
  {id: "Chocolates" ,nombre:"Chocolates Aguila" ,precio:70},
  {id: "Gomitas" ,nombre:"Gomitas frutales" ,precio: 8},
];

 // Carrito de compras
 let carrito = [];
    
 // Función para mostrar los caramelos disponibles
 function mostrarCaramelosDisponibles() {
   const caramelosDisponiblesElement = document.getElementById("caramelosDisponibles");
   caramelosDisponiblesElement.innerHTML = "";
   
   caramelosDisponibles.forEach(caramelo => {
     const li = document.createElement("li");
     li.innerHTML = `${caramelo.nombre} - $${caramelo.precio}`;
     
     const button = document.createElement("button");
     button.innerHTML = "Agregar al carrito";
     button.addEventListener("click", () => agregarAlCarrito(caramelo));
     
     li.appendChild(button);
     caramelosDisponiblesElement.appendChild(li);
   });
 }
 
 // Función para agregar un caramelo al carrito
 function agregarAlCarrito(caramelo) {
   carrito.push(caramelo);
   actualizarCarrito();
 }
 
 // Función para actualizar el contenido del carrito
 function actualizarCarrito() {
   const carritoElement = document.getElementById("carrito");
   carritoElement.innerHTML = "";
   
   carrito.forEach(caramelo => {
     const li = document.createElement("li");
     li.innerHTML = `${caramelo.nombre} - $${caramelo.precio}`;
     
     carritoElement.appendChild(li);
   });
 }
 
 // Función para vaciar el carrito
 function vaciarCarrito() {
   carrito = [];
   actualizarCarrito();
 }
 
 // Mostrar los caramelos disponibles al cargar la página
 window.addEventListener("load", () => {
   mostrarCaramelosDisponibles();
   document.getElementById("vaciarCarrito").addEventListener("click", vaciarCarrito);
 });

 // Función para confirmar la compra
function confirmarCompra() {
  if (carrito.length === 0) {
    alert("El carrito está vacío. Agrega caramelos antes de confirmar la compra.");
    return;
  }

  const total = carrito.reduce((suma, caramelo) => suma + caramelo.precio, 0);

  if (confirm(`Confirmar compra por un total de $${total.toFixed(2)}?`)) {
    vaciarCarrito();
    alert("¡Compra realizada con éxito!");
  }
}

// Asignar el evento de clic al botón de confirmar compra
document.getElementById("confirmarCompra").addEventListener("click", confirmarCompra);