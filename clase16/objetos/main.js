// OBJETOS

// key, value pair. Propiedad y un valor
let persona = {
  nombre: "Juan",
  apellido: "Perez",
  edad: 29,
  tieneMascota: true
}

// El punto se usa para acceder a la propiedad de un objeto.
console.log(persona.nombre);
console.log(persona.apellido);

if(persona.edad > 18) {
  console.log("Sos mayor de edad");
}
