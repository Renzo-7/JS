// Calculo de nota final de alumnos ingresados

const calcularPromedio = (nota1, nota2, nota3) => (nota1 + nota2 + nota3) / 3;

function cantidadAlumnos() {
  let numeroAlumnos = prompt("Ingrese la cantidad de alumnos a promediar. (Máximo 10) o presione 'S' para salir:");
  
  while (numeroAlumnos.toLowerCase() !== 's') {
    numeroAlumnos = parseInt(numeroAlumnos);
    
    if (!isNaN(numeroAlumnos) && numeroAlumnos >= 1 && numeroAlumnos <= 10) {
      return numeroAlumnos; 
    }

    alert("Error: Debe ingresar un número válido entre 1 y 5, o presionar 'S' para cancelar.");
    numeroAlumnos = prompt("Ingrese un número válido de alumnos (entre 1 y 5) o presione 'S' para cancelar:");
  }

  alert("Operación cancelada por el usuario.");
  return null;
}

function notaValida(alumno, numeroNota) {
  let nota = solicitarNota(alumno, numeroNota);

  while (nota.toLowerCase() !== 's' && !esNotaValida(nota)) {
    alert(`Error: La nota debe estar entre 1 y 10. Usted ingresó: ${nota}`);
    nota = solicitarNota(alumno, numeroNota);
  }

  if (nota.toLowerCase() === 's') {
    alert("Operación cancelada por el usuario.");
    return null;
  }

  return parseFloat(nota);
}

function solicitarNota(alumno, numeroNota) {
  return prompt(`Ingrese la nota ${numeroNota} del alumno ${alumno} (entre 1 y 10) o presione 's' para cancelar:`);
}

function esNotaValida(nota) {
  let numeroNota = parseFloat(nota);
  return !isNaN(numeroNota) && numeroNota >= 1 && numeroNota <= 10;
}

function clasificarPromedio(promedio) {
  if (promedio >= 9) return "Excelente";
  if (promedio >= 8) return "Muy Bien";
  if (promedio >= 6) return "Aprobado";
  return "Desaprobado";
}

function promedioCurso(alumnos) {
  const sumaPromedios = alumnos.reduce((suma, alumno) => suma + alumno.promedio, 0);
  return sumaPromedios / alumnos.length;
}

function mostrarResultados(alumnos) {
  alumnos.forEach((alumno, index) => {
    const clasificacion = clasificarPromedio(alumno.promedio)
    console.log(`Alumno ${index + 1}: ${alumno.nombre} | Notas: ${alumno.notas.join(", ")} | Promedio: ${alumno.promedio.toFixed(2)} | Clasificación: ${clasificacion}`);
  });

  console.log(`Promedio General del Curso: ${promedioCurso(alumnos).toFixed(2)}`);
}

function filtrarAlumnosDesaprobados(alumnos) {
  return alumnos.filter(alumno => clasificarPromedio(alumno.promedio) === "Desaprobado");
}

function ingresarAlumnos() {
  let numeroAlumnos = cantidadAlumnos();
  let alumnos = [];

  for (let i = 0; i < numeroAlumnos; i++) {
    let nombreCompleto = prompt("Ingrese el nombre y el apellido del alumno " + (i + 1) + ":");

    let notas = [
      notaValida(nombreCompleto, 1),
      notaValida(nombreCompleto, 2),
      notaValida(nombreCompleto, 3)
    ];

    let promedio = calcularPromedio(...notas);
    
    alumnos.push({nombre: nombreCompleto, notas, promedio});  
  }

  mostrarResultados(alumnos);

  let alumnosDesaprobados = filtrarAlumnosDesaprobados(alumnos);

  if (alumnosDesaprobados.length > 0) {
    console.log("Alumnos desaprobados:");
    alumnosDesaprobados.forEach(alumno => {
      console.log(`- ${alumno.nombre} | Promedio: ${alumno.promedio.toFixed(2)}`)
    });
  } else {
    console.log("Todos los alumnos aprobaron.");
  }
}

ingresarAlumnos();