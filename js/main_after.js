//Casa de cambio.

//Usuario debe ingresar cantidad de pesos a cambiar dolar.

const valorDolar = 200;
let opcion=true
//let resultado
let pesos_a_cambiar
let dolares_a_cambiar

// function cambio_a_dolar(cant_pesos_cambiar){
//     return cant_pesos_cambiar/valorDolar    
// }

const cambio_a_dolar = cant_pesos_cambiar => cant_pesos_cambiar/valorDolar

function cambio_a_peso(cant_dolar_cambiar){
    return cant_dolar_cambiar*valorDolar
}

while(opcion===true){

    let a_que_venis = parseInt(prompt("¿Qué desea hacer: \n 1:Cambiar pesos \n 2:Cambiar Dolares"))
    switch (a_que_venis) {
        case 1:
                pesos_a_cambiar = parseInt(prompt("Cuantos pesos desea cambiar?"))
                console.log("Dolares recibidos:" + cambio_a_dolar(pesos_a_cambiar))
            break;
        case 2:
                dolares_a_cambiar = parseInt(prompt("Cuantos dolares desea cambiar?"))
                console.log("Pesos recibidos:" + cambio_a_peso(dolares_a_cambiar))
            break;

        default:
                alert("Valor invalido")
            break;
    } 

    opcion= confirm("¿Quiere seguir cambiando?")    
} 



    quiere_invertir = prompt("Quiere invertir plata? Responda: SI o NO").toUpperCase()
    console.log("quiere_invertir: "+quiere_invertir)

    if(quiere_invertir==="SI"){
        console.log("Usted quiere invertir")
        let tiempo=0
        let ganancia=0
        let ganancia_aux=0
        let dinero_a_invertir = parseInt(prompt("Cuanto dinero quiere invertir"))
        while(tiempo!=30 && tiempo!=60 && tiempo!=90){
            tiempo = parseInt(prompt("Cuanto tiempo quiere invertir 30 60 o 90 dias"))
        }

        for (let index = 1; index <= tiempo; index++) {
            ganancia = ganancia + dinero_a_invertir*0.001              
        }
        
        console.log(`Usted invirtio: ${dinero_a_invertir} por ${tiempo} dias y obtuvo una ganancia de: $ ${ganancia} .- `)
        //console.log("Usted invirtio: "+dinero_a_invertir+" por " +tiempo+ " dias y obtuvo una ganancia de: $ "+ ganancia+" .- ")

    }else if(quiere_invertir==="NO"){
        console.log("Usted no quiere invertir")
    } else{
        console.log("Valor invalido")
    }
    
   



