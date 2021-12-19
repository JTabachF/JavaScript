//Captura de datos
const inputNombre = document.querySelector("#input-nombre");
const inputApellido = document.querySelector("#input-apellido");
const inputDNI = document.querySelector("#input-dni");
const inputEmail = document.querySelector("#input-email");
const opcionCredito = document.querySelector("#opcion-credito");
const inputMonto = document.querySelector("#input-monto");
const inputCuotas = document.querySelector("#input-cuotas");
const opcionSeguro = document.querySelector("#opcion-seguro");
const montoCuotas = 0;
const montoTotal = inputMonto;

const listaSimulaciones = document.querySelector("#lista-simulaciones");

//
let arraySimulaciones = JSON.parse(localStorage.getItem("arraySimulaciones")) || [];

if (arraySimulaciones.length) {
	console.log("recuperado de localStorage");
	imprimirSimulaciones(arraySimulaciones);
}

class simulaciones {
	constructor(nombre, apellido, dni, email, opCredito, monto, cuotas, opSeguro, montoCuotas, montoTotal) {
		this.nombre = nombre;
		this.apellido = apellido;
		this.dni = dni;
		this.email = email;
		this.opCredito = opCredito;
		this.monto = monto;
		this.cuotas = cuotas;
		this.opSeguro = opSeguro;
		this.montoCuotas = montoCuotas;
		this.montoTotal = montoTotal;
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
        montoCuotas.value,
        montoTotal.value,
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
          <h3 class="card-text">Monto Cuota a pagar: ${simulaciones.montoCuotas}</h3>
          <h3 class="card-text">Monto Total a Pagar: ${simulaciones.montoTotal}</h3>
          
          <button type="submit" class="btn btn-primary">Solicitar Simulación</button>`;
		listaSimulaciones.innerHTML += cardSimulaciones;
	});
}

// funcion para actualizar localStorage
function actualizarLocalStorage(array) {
	localStorage.setItem("arraySimulaciones", JSON.stringify(array));
}

// funcion para resetear los imputs
function borrarInputs() {
	nombre.value = "";
	apellido.value = "";
	dni.value = "";
	email.value = "";
	opCredito.value = "";
	monto.value = "";
	cuotas.value = "";
	opSeguro.value = "";
	montoCuotas.value = "";
	montoTotal.value = "";
}