let simulacion = [];

class creditos {
    constructor (nombreCliente, tipoCredito, monto, cuotas, seguro, montoCuotas, montoTotal){

        this.nombreCliente = nombreCliente;
        this.tipoCredito = tipoCredito;
        this.monto = monto;
        this.cuotas = cuotas;
        this.seguro = seguro;
        this.montoCuotas = montoCuotas;
        this.montoTotal = montoTotal;  
    }
    getCuotaFinal() {
        return (creditos.monto /creditos.cuotas)*1.19;
        //this.montoCuotas*1.19;
    }
    getMontoTotal() {
        return this.getCuotaFinal()*this.cuotas
    }
}

//Agregando objetos al array predefinidos
const sim1 = new creditos("Jorge", "Consumo", 2000000, 24, "No", 99166.6, 2380000)
simulacion.push(sim1)
const sim2 = new creditos("Juan", "Hipotecario", 20000000, 240, "Si", 99166.6, 23800000)
simulacion.push(sim2)
const sim3 = new creditos("Maria", "Consumo", 200000, 24, "No", 9916.6, 238000)
simulacion.push(sim3)
const sim4 = new creditos("Julia", "Automotriz", 2000000, 24, "No", 99166.6, 2380000)
simulacion.push(sim4)

//Agregando objetos al array desde usuario
let nombre = prompt("Bienvenido al Banco Estafa.\nPor favor ingrese su nombre");

function agregaSimulacion(){
    let nombreCliente = nombre;
    let tipoCredito =prompt("Ingrese tipo de crédito (Consumo, Hipotecario o Automotriz");
    let monto =parseInt(prompt("Ingrese monto a solicitar"));
    let cuotas =parseInt(prompt("Ingrese cantidad de cuotas deseadas"));
    let seguro =prompt("Solicita seguros (Si, No)");
    let montoCuotas =(monto/cuotas)*1.19;
    let montoTotal =montoCuotas*cuotas;
    const sim =new creditos(nombreCliente, tipoCredito, monto, cuotas, seguro, montoCuotas, montoTotal)
    simulacion.push(sim)
}
agregaSimulacion()

function pregunta(){

    if(confirm("Quiere simular otro tipo de crédito y/o monto?")==true){
        agregaSimulacion()
        pregunta()
    }else{
        alert("Gracias, hasta pronto")
    }
}
pregunta()

//Ordenamiento por monto del crédito de menor a mayor
simulacion.sort(function(menorMonto,mayorMonto) {
    return menorMonto.monto - mayorMonto.monto;});

console.log(simulacion);

// Ordenar por nombre de los clientes
/*function ordenNombre(){
simulacion.sort(function(clientesA,clientesB) {
    if (clientesA.nombreCliente > clientesB.nombreCliente) {
      return 1;
    }
    
    if (clientesA.nombreCliente < clientesB.nombreCliente) {
      return -1;
    }
    return 0;});
  console.log(simulacion);
}
ordenNombre()*/
