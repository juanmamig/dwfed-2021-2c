const edades = [18,22,32,41];

// Si quiero agregar una nueva edad al final del array, utilizo el método push.

edades.push(19);
console.log(edades); // [18,22,32,41,19];

// Si quiero eliminar el último elemento de un array, utilizo el método pop. Puedo guardar en una variable el elemento eliminado.

// edades.pop();
const eliminado = edades.pop();
// eliminado = 19;
// edades = [18,22,32,41];

// Si quiero agregar un elemento al principio, utilizo el método unshift.

edades.unshift(62);

// Si quiero eliminar el pimrer elemento del array, utilozo el método shift

// edades.shift();
const primeroEliminado = edades.shift();
// primeroEliminado = 62;

// Para saber si existe un elemento dentro del array, y para saber su posición, utilizo el método indexOf

const indice22 = edades.indexOf(22); // 1
const indice102 = edades.indexOf(102); // -1

