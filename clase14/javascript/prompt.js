// El prompt me permite interactuar con el usuario
// let nombre = prompt("Ingrese su nombre");
// console.log('Hola ' + nombre);

// let edad = prompt("Ingrese su edad");
// console.log('Tu edad es ' + edad);

// if(nombre == 'Juan'){
//   console.log('Hola ' + nombre);
// } else {
//   console.log("Vos no sos Juan");
// }

// if(edad > 18){
//   console.log("Puede pasar");
// } else {
//   console.log("Sos menor, no podés pasar");
// }
// OPERADORES DE COMPARACIÓN
// >    Mayor
// <    Menor
// ==   Igual
// >=   Mayor Igual
// <=   Menor Igual
// !=   Distinto


// Un usuario tiene en su cuenta bancaria un total de $45000. Como es su cumpleaños, su mejor amigo le hace una transferencia.

// Pedirle al usuario que ingrese el monto a transferir y hacer un console.log del total + lo que transifirió el usuario

let cuentaBancaria = 45000;
const montoTransferido = prompt("Ingrese el monto a tranferir");

let total = cuentaBancaria + Number(montoTransferido);
console.log("El total el: " + total);

// ¿Cómo convierto un string numérico a number?
// Number("10") // => 10


/// Explicación
// let total = 45000 + "10"; // Paso 1
// let total = 45000 + Number("10"); // Paso 2
// let total = 45000 + 10; // Paso 3

// Pedirle al usuario que ingrese un codigo y guardar ese codigo en una variable. Si el código ingresado es hola123, creamos un programa que diga que la contraseña es correcta. Sino, le decimos que la contraseña es incorrecta.

const codigo = prompt("Ingrese un codigo");

if(codigo == 'hola123') {
  console.log('Contraseña correcta');
} else {
  console.log('Contraseña incorrecta');
}
