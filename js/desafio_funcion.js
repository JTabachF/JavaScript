const nombre = prompt("Bienvenido al Banco Estafa.\nPor favor ingrese su nombre");

function seleccionTramite() {

    let opcion = 0;
    const opcionBanco = ", Por Favor seleccione trámite a realizar:\n 1. Crédito Consumo \n 2. Tarjeta de Crédito \n";

    while (opcion !== 1 && opcion !== 2) {

        opcion = parseInt(prompt(nombre + opcionBanco))

        switch (opcion) {
            case 1: {
                alert(nombre + " Seleccionó Crédito de Consumo");
                break;
            }
            case 2: {
                alert(nombre + " Seleccionó Tarjeta de Crédito");
                break;
            }
            default: {
                alert(nombre + " La opción ingresada no es correcta.\n Vuelve a intentarlo");
                break;
            }
        }
    }
    return opcion;
}

function tramiteCredito() {

    let montoCredito = parseInt(prompt(nombre + " Ingrese monto a solicitar"));
    let cuotas = parseInt(prompt(nombre + " Ingrese cantidad de cuotas"));
    let cuotasFijas = cuotas;
    let montoCuotas = 0;
    let saldo = 0;
    let option = true;
    const interes = 1.19;

    if (montoCredito !== "" && cuotas !== "") {
        if (montoCredito > 0 && cuotas > 0) {
            while (cuotas >= 1) {
                montoCuotas = (montoCredito / cuotasFijas) * interes;
                saldo = (montoCredito * interes) / cuotas;
                alert("Hola " + nombre + ", para la cuota N° " + cuotas + " el Monto es: " + montoCuotas + " El saldo adeudado es: " + saldo);
                cuotas--;
            }
        } else {
            alert("No se ingresaron Datos o son incorrectos");
        }
    }

}
    
function tramiteTarjeta() {

    let tipoTarjeta="";
    let renta = parseInt(prompt(nombre + " Ingrese su renta"));
    let cupo = renta*0.4;

    if (renta<=1000 && renta>0) {
        tipoTarjeta="Tarjeta Gold";
        alert(nombre+" Puedes obtener la "+tipoTarjeta+" y tienes un cupo de "+cupo);
        confirm("¿Aceptas la propuesta?");
    }else if (renta<=2000 && renta>1000){
         tipoTarjeta="Tarjeta Platinum";
        alert(nombre+" Puedes obtener la "+tipoTarjeta+" y tienes un cupo de "+cupo);
        confirm("¿Aceptas la propuesta?");
    }else if (renta>2000){
         tipoTarjeta="Tarjeta Black Premium";
         alert(nombre+" Puedes obtener la "+tipoTarjeta+" y tienes un cupo de "+cupo);
         confirm("¿Aceptas la propuesta?");
    }else {
        alert("Error en Ingreso de renta")
    }
    return tipoTarjeta, cupo
}
