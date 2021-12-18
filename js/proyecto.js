//INICIO PROGRAMA
const nombre = prompt("Bienvenido al Banco Estafa.\nPor favor ingrese su nombre");

let resultadoF = seleccionTramite();
if (resultadoF == 1) {
    agregaSimulacion();
} else if (resultadoF == 2) {
    tramiteTarjeta();
} else {
    alert("Error");
}

//FUNCIONES
//FUNCIÓN DE SELECCIÓN DE TRÁMITE A REALIZAR
function seleccionTramite() {
    let opcion = 0;
    const opcionBanco = ", Por Favor seleccione trámite a realizar:\n 1. Créditos \n 2. Tarjeta de Crédito \n";

    while (opcion !== 1 && opcion !== 2) {

        opcion = parseInt(prompt(nombre + opcionBanco))

        switch (opcion) {
            case 1: {
                alert(nombre + " seleccionó Crédito");
                break;
            }
            case 2: {
                alert(nombre + " seleccionó Tarjeta de Crédito");
                break;
            }
            default: {
                alert(nombre + " la opción ingresada no es correcta.\n Vuelve a intentarlo");
                break;
            }
        }
    }
    return opcion;
}

//FUNCIÓN DE SIMULACIÓN DE CRÉDITO, CON ARRAY DE OBJETOS
function agregaSimulacion() {
    let simulacion = [];

    class simCreditos {
        constructor(nombreCliente, tipoCredito, monto, cuotas, seguro, montoCuotas, montoTotal) {

            this.nombreCliente = nombreCliente;
            this.tipoCredito = tipoCredito;
            this.monto = monto;
            this.cuotas = cuotas;
            this.seguro = seguro;
            this.montoCuotas = montoCuotas;
            this.montoTotal = montoTotal;
        }
        getCuotaFinal() {
            return (creditos.monto / creditos.cuotas) * 1.19;
            //this.montoCuotas*1.19;
        }
        getMontoTotal() {
            return this.getCuotaFinal() * this.cuotas
        }
    }

    let nombreCliente = nombre;
    let tipoCredito = prompt("Ingrese tipo de crédito (Consumo, Hipotecario o Automotriz");
    let monto = parseInt(prompt("Ingrese monto a solicitar"));
    let cuotas = parseInt(prompt("Ingrese cantidad de cuotas deseadas"));
    let seguro = prompt("Solicita seguros (Si, No)");
    let montoCuotas = (monto / cuotas) * 1.19;
    let montoTotal = montoCuotas * cuotas;
    let saldo = 0;
    const sim = new simCreditos(nombreCliente, tipoCredito, monto, cuotas, seguro, montoCuotas, montoTotal);
    simulacion.push(sim);

    if (monto !== "" && cuotas !== "") {
        if (monto > 0 && cuotas > 0) {
            while (cuotas >= 1) {
                montoCuotas;
                saldo = montoTotal / cuotas;
                alert("Hola " + nombre + ", para la cuota N° " + cuotas + " el Monto es: " + montoCuotas + " El saldo adeudado es: " + saldo);
                cuotas--;
            }
        } else {
            alert("No se ingresaron Datos o son incorrectos");
        }
    }

    function pregunta() {

        if (confirm("Quiere simular otro tipo de crédito y/o monto?") == true) {
            agregaSimulacion()
            pregunta()
        } else {
            alert("Gracias, hasta pronto")
        }
    }
    pregunta();
    //IMPRESION DE LA CANTIDAD DE SIMULACONES EN EL ARRAY
    console.log(simulacion)
}
//FUNCIÓN DE SOLICITUD TARJETA DE CRÉDITO, ADICIONANDO UN ARRAY
function tramiteTarjeta() {
    let simulacionTarjeta = [];

    class tarjetas {
        constructor(nombreCliente, tipoTarjeta, renta, cupo) {

            this.nombreCliente = nombreCliente;
            this.tipoTarjeta = tipoTarjeta;
            this.renta = renta;
            this.cupo = cupo;
        }
    }

    let nombreCliente = nombre;
    let tipoTarjeta = "";
    let renta = parseInt(prompt(nombre + " Ingrese su renta"));
    let cupo = renta * 0.4;
    

    if (renta <= 1000 && renta > 0) {
        tipoTarjeta = "Tarjeta Gold";
        alert(nombre + " Puedes obtener la " + tipoTarjeta + " y tienes un cupo de " + cupo);
        confirm("¿Aceptas la propuesta?");
    } else if (renta <= 2000 && renta > 1000) {
        tipoTarjeta = "Tarjeta Platinum";
        alert(nombre + " Puedes obtener la " + tipoTarjeta + " y tienes un cupo de " + cupo);
        confirm("¿Aceptas la propuesta?");
    } else if (renta > 2000) {
        tipoTarjeta = "Tarjeta Black Premium";
        alert(nombre + " Puedes obtener la " + tipoTarjeta + " y tienes un cupo de " + cupo);
        confirm("¿Aceptas la propuesta?");
    } else {
        alert("Error en Ingreso de renta")
    }

    const simTar = new tarjetas(nombreCliente, tipoTarjeta, renta, cupo)
    simulacionTarjeta.push(simTar)

    console.log(simulacionTarjeta)
}