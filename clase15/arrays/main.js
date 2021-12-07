const nombres = ["Juan","Sofía","Pedro"];
//                  0      1       2

console.log(nombres[0]); // Juan
console.log(nombres[1]); // Sofía
console.log(nombres[2]); // Pedro
nombres[3] = "Luciano";
console.log(nombres[3]); // Luciano
nombres[4] = "Gabriel";
nombres[5] = "Gladys";
nombres[6] = "Martín";
nombres[7] = "Marcela";

console.log(nombres); // array

console.log(nombres.length); // 8

for(let i = 0; i < nombres.length; i++){
  // i = 0
  // i = 1
  // i = 2
  // i = 3

  console.log("Hola " + nombres[i]);
}