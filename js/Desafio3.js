let nombre = prompt("Bienvenido, Ingrese su nombre");
let montoCredito = parseInt(prompt("Ingrese monto a solicitar"));
let cuotas = parseInt(prompt("Ingrese cantidad de cuotas"));
let cuotasFijas = cuotas;
let montoCuotas = 0;
let saldo = 0;
const interes = 1.19;

if (montoCredito !== "" && cuotas !== "") {
  if (montoCredito > 0 && cuotas > 0) {
    while (cuotas >= 1) {
      montoCuotas = (montoCredito / cuotasFijas) * interes;
      saldo = (montoCredito * interes) / cuotas;
      alert("Hola " +nombre +", para la cuota N° " +cuotas +" el Monto es: " +montoCuotas +" El saldo adeudado es: " +saldo);
      cuotas--;
    }
  } else {
    alert("No se ingresaron Datos o son incorrectos");
  }
}
