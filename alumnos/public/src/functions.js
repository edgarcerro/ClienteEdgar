'use strict'

function buscaAlumno(datos, nia) {
	return datos.find((item) => item.nia == nia);
}

function modulosAprobadosDelAlumno(notas) {
	let arrayFiltrado = notas.filter(function (item) {
		if (item.nota >= 5) {
			return true
		} else {
			return false
		}
	})
	let arrayBueno = arrayFiltrado.map(function (item) {
		return item.modulo
	})
	return arrayBueno
}

function media(notas) {
	let arrayNotas = notas.map(function (item) {
		return item.nota;
	})
	return (arrayNotas.reduce((media, nota) => (media + nota)) / arrayNotas.length).toFixed(2);
}

function ordenaAlumnosPorNia(datos) {

	let alumnosOrdenados = datos.sort(function (alumno1, alumno2) {
		return alumno1.nia - alumno2.nia;
	});
	let arrayAlumno = alumnosOrdenados.map(function (item) {
		return item.alumno
	})
	let arrayFinal = arrayAlumno.map(function (alum) {
		return alum.nombre + " " + alum.apellido
	})

	return arrayFinal
}

function ordenaAlumnosPorApellido(datos) {
	let arrayNombreApellido = datos.map(function (item) {
		return item.alumno
	})

	let arrayOrdenado = arrayNombreApellido.sort(function (a, b) {
		if (a.apellido.toLowerCase() < b.apellido.toLowerCase()) { return -1; }
		if (a.apellido.toLowerCase() > b.apellido.toLowerCase()) { return 1; }
		return 0;
	})
	let arrayFinal = arrayOrdenado.map(function (alum) {
		return alum.nombre + " " + alum.apellido
	})
	return arrayFinal
}

function alumnosConSuspensos(datos) {
	let arrayAlumSusp = []

	datos.forEach(dato => {
		var algunSuspenso = dato.notas.some((n) => {
			return n.nota < 5
		});

		if (algunSuspenso) {
			arrayAlumSusp.push(dato.alumno.nombre + " " + dato.alumno.apellido)
		}
	});

	return arrayAlumSusp;
}

function alumnosConTodoAprobado(datos) {
	let arrayAlumApro = []

	datos.forEach(dato => {
		var algunSuspenso = dato.notas.some((n) => {
			return n.nota < 5
		});

		if (!algunSuspenso) {
			arrayAlumApro.push(dato.alumno.nombre + " " + dato.alumno.apellido)
		}
	});

	return arrayAlumApro
}

function alumnosAprobadosDelModulo(datos, mod) {
	let alumnosAprobados = []
	datos.forEach(dato => {
		let buscaModulo = dato.notas.find((n) => {
			return n.modulo == mod
		})

		if (buscaModulo.nota >= 5) {
			alumnosAprobados.push(dato.alumno.nombre + " " + dato.alumno.apellido)
		}
	});
	return alumnosAprobados
}


module.exports = {
	buscaAlumno,
	modulosAprobadosDelAlumno,
	media,
	ordenaAlumnosPorNia,
	ordenaAlumnosPorApellido,
	alumnosConSuspensos,
	alumnosConTodoAprobado,
	alumnosAprobadosDelModulo
}