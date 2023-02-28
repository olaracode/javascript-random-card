// addProperty agregar una propiedad al objeto
function addProperty(obj, key, value) {
  obj[key] = value; // Asignando un valor a una llave
  return obj;
}

let person = {
  firstName: "Octavio",
  lastname: "Lara",
};

// console.log("Antes de agregar", person);
addProperty(person, "esMayorDeEdad", true);
addProperty(person, "documentoIdentidad", "V-11111111");
addProperty(person, "direction", "Maturin, Monagas");
addProperty(person, "firstName", "Jose");
addProperty(person, "edad", 18);
console.log("Despues de agregar", person);
addProperty(person, "lastname");

// Remover propiedades -> delete objeto['llave']
delete person["firstName"];

// Otro modo de agregar propiedades
// person.nacionalidad = "Venezolano";
