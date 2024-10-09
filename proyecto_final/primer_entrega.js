// Calculo de nota final de alumnos ingresados

function calcularPromedio(nota1, nota2, nota3) {
  return (nota1 + nota2 + nota3) / 3;
}

function cantidadAlumnos() {
  let numeroAlumnos = parseInt(prompt("Ingrese la cantidad de alumnos a promediar. (Máximo 5):"));
  
  while (isNaN(numeroAlumnos) || numeroAlumnos < 1 || numeroAlumnos > 5) {
    alert("Error: Debe ingresar un número válido entre 1 y 5");
    numeroAlumnos = parseInt(prompt("Ingrese un número válido de alumnos (entre 1 y 5):"))
  }
  
  return numeroAlumnos;
}

function notaValida(alumno, numeroNota) {
  let nota = parseFloat(prompt("Ingrese la nota " + numeroNota + " del alumno " + alumno + " (entre 1 y 10):"));

  while (isNaN(nota) || nota < 1 || nota > 10) {
    alert("Error: Debe ingresar una nota válida (entre 1 y 10).");
    nota = parseFloat(prompt("Ingrese nuevamente la nota " + numeroNota + " del alumno " + alumno + " (entre 1 y 10):"));
  }

  return nota;
}

function ingresarAlumnos() {
  let numeroAlumnos = cantidadAlumnos();
  let i = 0;

  while (i < numeroAlumnos) {
    let nombreCompleto = prompt("Ingrese el nombre y el apellido del alumno " + (i + 1) + ":");

    let nota1 = notaValida(nombreCompleto, 1);
    let nota2 = notaValida(nombreCompleto, 2);
    let nota3 = notaValida(nombreCompleto, 3);

    let promedio = calcularPromedio(nota1, nota2, nota3);

    console.log("Alumno " + (i + 1) + ":" + nombreCompleto + " | Promedio: " + promedio.toFixed(2));

    i++;
  }
}

ingresarAlumnos();


