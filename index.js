var nombre = prompt("Escriba su nombre");
var apellido = prompt("Escriba su apellido");

if(nombre !=="" && apellido !=="") {
    alert("Bienvenido "+nombre+" "+apellido)
}else if(nombre !=="" && apellido =="") {
    alert("Bienvenido "+nombre+" Falta tu apellido")
}else if(nombre =="" && apellido !=="") {
    alert("Bienvenido " +"Falta tu Nombre "+apellido)
}