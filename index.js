var nombre = prompt("Escriba su nombre");
var apellido = prompt("Escriba su apellido");
var edad = prompt("Ingrese su edad");

if(nombre !=="" && apellido !=="" && parseInt(edad) >= 18) {
    alert("Bienvenido "+nombre+" "+apellido+"\nEres mayor de edad, puedes acceder")
}else if(nombre !=="" && apellido =="" && parseInt(edad) >= 18) {
    alert("Bienvenido "+nombre+" Falta tu apellido\nEres mayor de edad, puedes acceder")
}else if(nombre =="" && apellido !=="" && parseInt(edad) >= 18) {
    alert("Bienvenido " +"Falta tu Nombre "+apellido+"\nEres mayor de edad, puedes acceder")
}else if(nombre !=="" && apellido !=="" && parseInt(edad) < 18) {
    alert("Bienvenido "+nombre+" "+apellido+"\nNo eres mayor de edad, no puedes acceder")
}else if(nombre !=="" && apellido =="" && parseInt(edad) < 18) {
    alert("Bienvenido "+nombre+" Falta tu apellido\nNo eres mayor de edad, no puedes acceder")
}else if(nombre =="" && apellido !=="" && parseInt(edad) < 18) {
    alert("Bienvenido " +"Falta tu Nombre "+apellido+"\nNo eres mayor de edad, no puedes acceder")
} else {
    alert("Error en ingreso de edad, no puedes acceder. Hasta pronto")
}