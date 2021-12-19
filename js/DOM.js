//Captura de datos
const inputNombre = document.querySelector("#input-nombre");
const inputApellido = document.querySelector("#input-apellido");
const inputDNI = document.querySelector("#input-dni");
const inputEmail = document.querySelector("#input-email");
const opcionCredito = document.querySelector("#opcion-credito");
const inputMonto = document.querySelector("#input-monto");
const inputCuotas = document.querySelector("#input-cuotas");
const opcionSeguro = document.querySelector("#opcion-seguro");

const listaSimulaciones = document.querySelector("#lista-simulaciones");

//JSON en localstorage
let arraySimulaciones = JSON.parse(localStorage.getItem("arraySimulaciones")) || [];

if (arraySimulaciones.length) {
	console.log("recuperado de localStorage");
	imprimirSimulaciones(arraySimulaciones);
}

class simulaciones {
	constructor(nombre, apellido, dni, email, opCredito, monto, cuotas, opSeguro) {
		this.nombre = nombre;
		this.apellido = apellido;
		this.dni = dni;
		this.email = email;
		this.opCredito = opCredito;
		this.monto = monto;
		this.cuotas = cuotas;
		this.opSeguro = opSeguro;
	}
}

function cargarSimulaciones() {
	arraySimulaciones.push(new simulaciones(
        inputNombre.value,
        inputApellido.value,
        inputDNI.value,
        inputEmail.value,
        opcionCredito.value,
        inputMonto.value,
        inputCuotas.value,
        opcionSeguro.value,
  		)
	);
	actualizarLocalStorage(arraySimulaciones);
	imprimirSimulaciones(arraySimulaciones);


}

function imprimirSimulaciones(array) {
	listaSimulaciones.innerHTML = "";
	array.forEach((simulaciones) => {
		const cardSimulaciones = `<div class="card-header"><h2>Simulación </h2></div>
          <div class="card-body">
          <p class="card-title">Tipo Crédito: <strong>${simulaciones.opCredito}</strong></p>
          <p class="card-text">Nombres: <strong>${simulaciones.nombre}</strong></p>
          <p class="card-text">Apellidos: <strong>${simulaciones.apellido}</strong></p>
          <p class="card-text">Monto a Solicitar: <strong>${simulaciones.monto}</strong></p>
          <p class="card-text">Cuotas: <strong>${simulaciones.cuotas}</strong></p>
          <h3 class="card-text">Monto Cuota a pagar: ${((simulaciones.monto/simulaciones.cuotas)*1.19).toFixed(0)}</h3>
          <h3 class="card-text">Monto Total a Pagar: ${(((simulaciones.monto/simulaciones.cuotas)*1.19)*simulaciones.cuotas).toFixed(0)}</h3>
          
          <button type="submit" class="btn btn-primary">Solicitar Simulación</button>
          <hr>`;
		listaSimulaciones.innerHTML += cardSimulaciones;

	});
}

// funcion para actualizar localStorage
function actualizarLocalStorage(array) {
	localStorage.setItem("arraySimulaciones", JSON.stringify(array));
}
//Borrar titulo
if (arraySimulaciones.length>0) {
const eliminar = document.getElementById("sinSimu");
sinSimu.parentElement.removeChild(eliminar);
}