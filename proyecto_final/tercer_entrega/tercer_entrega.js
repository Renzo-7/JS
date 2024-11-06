// Calculo de nota final de alumnos ingresados

document.getElementById("calcular").addEventListener("click", () => {
  const mensajeError = document.getElementById("mensaje-error");
  mensajeError.classList.add("d-none");

  const nombre = document.getElementById("nombre").value;
  const nota1 = parseFloat(document.getElementById("nota1").value);
  const nota2 = parseFloat(document.getElementById("nota2").value);
  const nota3 = parseFloat(document.getElementById("nota3").value);

  if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
    mensajeError.textContent = "Por favor, ingrese todas las notas.";
    mensajeError.classList.remove("d-none");
    return;
  }

  const promedio = calcularPromedio(nota1, nota2, nota3);
  const clasificacion = clasificarPromedio(promedio);

  const alumno = {
    id: Date.now(),
    nombre,
    notas: [nota1, nota2, nota3],
    promedio,
    clasificacion,
  };

  mostrarResultados(alumno);
  guardarEnLocalStorage(alumno);
  actualizarPromedioClase();
});

function calcularPromedio(nota1, nota2, nota3) {
  return (nota1 + nota2 + nota3) / 3;
}

function clasificarPromedio(promedio) {
  if (promedio >= 9) return "Excelente";
  if (promedio >= 8) return "Muy Bien";
  if (promedio >= 6) return "Aprobado";
  return "Desaprobado";
}

function mostrarResultados(alumno) {
  const resultadosDiv = document.getElementById("resultados");

  const alumnoItem = document.createElement("li");
  alumnoItem.classList.add("list-group-item");

  if (alumno.clasificacion === "Desaprobado") {
    alumnoItem.classList.add("list-group-item-danger");
  } else {
    alumnoItem.classList.add("list-group-item-success");
  }

  alumnoItem.innerHTML = `
      <span>
        <strong>Alumno:</strong> ${alumno.nombre} | 
        <strong>Promedio:</strong> ${alumno.promedio.toFixed(2)} | 
        <strong>Clasificación:</strong> ${alumno.clasificacion}
      </span>
    `;

  const botonEliminar = document.createElement("button");
  botonEliminar.classList.add("btn", "btn-danger", "btn-sm");
  botonEliminar.textContent = "Eliminar";
  botonEliminar.onclick = () => {
    eliminarAlumno(alumno.id);
    actualizarPromedioClase();
  };

  alumnoItem.appendChild(botonEliminar);
  resultadosDiv.appendChild(alumnoItem);
}

function guardarEnLocalStorage(alumno) {
  let alumnos = JSON.parse(localStorage.getItem("alumnos")) || [];
  alumnos.push(alumno);
  localStorage.setItem("alumnos", JSON.stringify(alumnos));
}

function eliminarAlumno(id) {
  let alumnos = JSON.parse(localStorage.getItem("alumnos")) || [];
  alumnos = alumnos.filter((alumno) => alumno.id !== id);
  localStorage.setItem("alumnos", JSON.stringify(alumnos));

  actualizarLista();
}

function actualizarLista() {
  const resultadosDiv = document.getElementById("resultados");
  resultadosDiv.innerHTML = "";
  const alumnos = JSON.parse(localStorage.getItem("alumnos")) || [];

  alumnos.forEach((alumno) => mostrarResultados(alumno));
}

function calcularPromedioClase() {
  const alumnos = JSON.parse(localStorage.getItem("alumnos")) || [];
  if (alumnos.length === 0) return 0;

  const totalPromedios = alumnos.reduce(
    (total, alumno) => total + alumno.promedio,
    0
  );
  return totalPromedios / alumnos.length;
}

function actualizarPromedioClase() {
  const promedioClase = calcularPromedioClase();
  const promedioClaseDiv = document.getElementById("promedio-clase");
  promedioClaseDiv.textContent = `Promedio de la clase: ${promedioClase.toFixed(
    2
  )}`;
}

document.addEventListener("DOMContentLoaded", () => {
  actualizarLista();
  actualizarPromedioClase();
});
