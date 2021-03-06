/*
||Banco||
* Servicios
    -Crédito Consumo
        +
    -Tarjeta de Crédito*/

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








class credito {

    constructor (tipoCredito, monto, cuotas, seguro, montoCuotas, montoTotal) { 

        this.tipoCredito = tipoCredito;
        this.monto = monto;
        this.cuotas = cuotas;
        this.seguro = seguro;
        this.montoCuotas = montoCuotas;
        this.montoTotal = montoTotal;    
    }
    getCuotaFinal() {
        return (creditoConsumo.monto /creditoConsumo.cuotas)*1.19;
        //this.montoCuotas*1.19;
    }
    getMontoTotal() {
        return this.getCuotaFinal()*this.cuotas
    }

}
class tarjeta {

    constructor (tipoTarjeta, proveedor, seguro, interes, cupo, renta) { 

        this.tipoTarjeta = tipoTarjeta;
        this.proveedor = proveedor;
        this.seguro = seguro;
        this.interes = interes;
        this.cupo = cupo;
        this.renta = renta;
        
    }
    getCupo() {
        return this.renta*0.4
    }

}

const creditoConsumo = new credito(
    "Crédito Consumo",
    0,
    0,
    "No",
    0,
    0,
)

const tarjetaBlack = new tarjeta(
    "Tarjeta Black",
    "Mastercard",
    "No",
    "0.03 por cuota",
    0,
    0,
)


const nombre = prompt("Bienvenido al Banco Estafa.\nPor favor ingrese su nombre");
const opcionBanco = ", por Favor seleccione una opción:\n 1. "+ creditoConsumo.tipoCredito+" \n 2. "+tarjetaBlack.tipoTarjeta;
let opcion = 0;
    
    while (opcion !== 1 && opcion !== 2) {

        opcion = parseInt(prompt(nombre + opcionBanco))

        switch (opcion) {
            case 1: {
                creditoConsumo.monto = parseInt(prompt(nombre+" Ingrese Monto a Solicitar"));
                creditoConsumo.cuotas = parseInt(prompt(nombre+" Ingrese Cantidad de Cuotas"));
                alert(nombre + " Seleccionó crédito, el detalle es el Siguiente:\n"+
                "Tipo: "+creditoConsumo.tipoCredito+"\n"+
                "Monto: $"+creditoConsumo.monto+"\n"+
                "Cuotas: "+creditoConsumo.cuotas+"\n"+
                "Seguro: "+creditoConsumo.seguro+"\n"+
                "Cuota Final Mensual: $"+creditoConsumo.getCuotaFinal()+"\n"+
                "Monto Total Crédito: $"+creditoConsumo.getMontoTotal()+"\n");
                break;
            }
            case 2: {
                tarjetaBlack.renta = parseInt(prompt(nombre+" Ingrese Renta"));
                alert(nombre + " Seleccionó Tarjeta, el detalle es el Siguiente:\n"+
                "Tipo: "+tarjetaBlack.tipoTarjeta+"\n"+
                "Proveedor: "+tarjetaBlack.proveedor+"\n"+
                "Seguro: "+tarjetaBlack.seguro+"\n"+
                "Interes Mensual: "+tarjetaBlack.interes+"\n"+
                "Cupo: $"+tarjetaBlack.getCupo()+"\n");
                break;
            }
            default: {
                alert(nombre + " La opción ingresada no es correcta.\n Vuelve a intentarlo");
                break;
            }
        }
    
    }