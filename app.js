let nombreEmpleado = ""; // Siguiendo el valor del input
let inputEmpleado = document.getElementById("inputEmpleado");
let listaEmpleados = document.getElementById("listaEmpleados");
let addButton = document.getElementById("addEmpleado");

let errorMessage = document.getElementById("error");

inputEmpleado.addEventListener("change", (event) => {
  nombreEmpleado = event.target.value;
  console.log(nombreEmpleado);
});

addButton.addEventListener("click", () => {
  // Si el nombre del empleado esta vacio, cancela la funcion
  if (nombreEmpleado === "") {
    errorMessage.innerHTML = "El campo nombre no puede estar vacio";
    errorMessage.style.color = "red";
    return;
  } else {
    errorMessage.innerHTML = "";
  }

  //Creamos elemento LI y le asignamos valor con innerHtml
  let nuevoElemento = document.createElement("li");
  nuevoElemento.innerHTML = nombreEmpleado;

  // Agregar el elemento nuevo a la lista de empleados
  listaEmpleados.appendChild(nuevoElemento);

  // Limpiar los valores
  inputEmpleado.value = ""; // Limpiar valor del input
  nombreEmpleado = ""; // Limpiar valor de la variable
});
