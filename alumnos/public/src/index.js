'use strict'




var pregunta = prompt("Introduce el nombre del modulo o el NIA para mostrar la informacion");

if (Number(pregunta)) {
    let alumno = buscaAlumno(datosAlumnos, pregunta)
    console.log("Los modulos aprobados por el alumno con nia " + pregunta + " son")
    console.log(modulosAprobadosDelAlumno(alumno.notas))
    console.log("La nota media del alumno es: " + media(alumno.notas))

} else if (isNaN(pregunta)) {
    console.log("Alumnos aprobados en el modulo " + pregunta + " son")
    console.log(alumnosAprobadosDelModulo(datosAlumnos, pregunta))
} else {
    console.log("No has introducido nada")
}

if (pregunta) {
    console.log("La lista alfabetica de alumnos es ")
    console.log(ordenaAlumnosPorApellido(datosAlumnos))

    console.log("La lista de alumnos por nia es ")
    console.log(ordenaAlumnosPorNia(datosAlumnos))

    console.log("Los alumnos con algun modulo suspenso son: ")
    console.log(alumnosConSuspensos(datosAlumnos))

    console.log("Los alumnos con todo aprobado son: ")
    console.log(alumnosConTodoAprobado(datosAlumnos))
}
