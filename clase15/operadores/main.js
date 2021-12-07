// Para acceder a programador web avanzado, hay que saber html y css. Preguntarle al usuario si sabe html y css. Si sabe ambas, entonces le digo que puede hacer el curso, sino, entonces le digo que no puede hacer el cueso

// Paso #1. const sabeHTML =  prompt("sabes html")

// Paso #2. const sabeCSS =  prompt("sabes css")

// Paso #3. Si (sabe html && css). Podés hacer el curso, sino no
 
// Las mayúsculas las convierte en minúsculas.
const html = prompt("¿Sabe HTML?").toLowerCase();
const css = prompt("¿Sabe CSS?").toLowerCase();

// Usamos el operador AND &&
// if(html == "si" && css == "si"){
//   console.log("Puede participar del curso");
// } else {
//   console.log("No puede participar del curso");
// }


// Usamos el operados OR ||
if((html == "si" || html == "sí") && (css == "si" || css == "sí")){
  console.log("Puede participar del curso");
} else {
  console.log("No puede participar del curso");
}
