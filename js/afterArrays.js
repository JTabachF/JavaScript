

//array donde vamos a cargar los libros
let biblioteca =[]

class Libro{
    constructor(autor, año, titulo, precio){
        this.autor = autor,
        this.año = año,
        this.titulo = titulo,
        this.precio = precio
    }
    // //método, lo dejo comentado--es lo último visto en clase
    // cargarLibro(){
    // this.autor = prompt("Ingrese el nombre del autor");
    // this.año =parseInt(prompt("Ingrese el año del nuevo libro"))
    // this.titulo =prompt("Ingrese el título");
    // this.precio =parseInt(prompt("Ingrese el precio"))
    
    
    
    // }
}
    
// 
//Instancias de objetos:



const libro1 = new Libro("Ernesto Sábato", 1961, "Sobre heroés y tumbas", 2300)

biblioteca.push(libro1)
console.log(biblioteca);
const aleph = new Libro("Jorge Luis Borges", 1949, "El aleph", 1650);
biblioteca.push(aleph)
// 
const libro2 = new Libro("Mario Benedetti", 1996, "Andamios", 2000);

biblioteca.push(libro2)
const libro3 = new Libro("Gabriel García Marquez", 1967, "Cien años de soledad", 3000);

biblioteca.push(libro3)
const libro4 = new Libro("Isabel Allende", 1994, "Paula", 2800);

biblioteca.push(libro4)
const libro5 = new Libro("Jorge Luis Borges", 1944, "Ficciones", 1400);

biblioteca.push(libro5)
const libro6 = new Libro("Mario Vargas Llosa", 1963, "La ciudad y los perros", 2000);

biblioteca.push(libro6)

const libro7 = new Libro("Octavio Paz", 1950, "El laberinto de la soledad", 2350);

biblioteca.push(libro7)


//MÉTODOS para aplicar a arrays

// //find devuelve un único elemento, el primero que cumpla con la condición
console.log(biblioteca.find(escritor => escritor.autor == "Ernesto Sábato"));
console.log(biblioteca.find(libro => libro.precio > 2500))

// console.log(biblioteca.find(libro => libro.autor == "Jorge Luis Borges"))

//filter devuelve un array con todos los que cumplan la condición
console.log(biblioteca.filter(elemento => elemento.autor == "Jorge Luis Borges"))

// //filter y map
// let valor =parseInt(prompt("ingrese el valor a buscar"))
// console.log(biblioteca.filter(libro => libro.precio >= valor))
// console.log(biblioteca.map(persona => persona.precio >= valor))


// //función para agregar libro -- función que agrega un objeto a nuestro array de objetos
function agregarLibro(){
    let autorNuevo = prompt("Ingrese el nombre del autor");
    let añoNuevo =parseInt(prompt("Ingrese el año del nuevo libro"))
    let tituloNuevo =prompt("Ingrese el título");
    let precioNuevo =parseInt(prompt("Ingrese el precio"));
    const libro =new Libro(autorNuevo, añoNuevo, tituloNuevo,precioNuevo)
    console.log(libro);
    biblioteca.push(libro)
}


//función para preguntar si quiere ingresar
function pregunta(){
    let consulta = prompt("Quiere sumar un libro al catálogo (si/no)")
    if(consulta.toLowerCase()=="si"){
        agregarLibro()
        pregunta()
    }else{
        alert("Gracias, puede consultar en la consola nuestro catalogo")
    }
}
pregunta()



// //  método sort
// //  Documentación útil:
// //  https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// //  https://davidyero.medium.com/ordenar-arreglo-de-objetos-por-propiedad-o-atributo-javascript-56f74fc48906

// // Ordenar por dato númerico: si a.tributo - b.atributo (de menor a mayor); si b.atributo - a.atributo (mayor a menor)
// biblioteca.sort(function(a, b){
//     return a.año - b.año
// })
// console.log(biblioteca);
biblioteca.sort(function(a,b) {
    return a.precio - b.precio;
  });
  console.log(biblioteca);

// Ordenar por cadena de string:  
  biblioteca.sort(function (a, b) {
    if (a.autor > b.autor) {
      return 1;
    }
    
    if (a.autor < b.autor) {
      return -1;
    }
    
    // a must be equal to b
    return 0;
  });
console.log(biblioteca);



// //MÉTODO
// cargarLibro(){
//     this.autor = prompt("Ingrese el nombre del autor");
//     this.año =parseInt(prompt("Ingrese el año del nuevo libro"))
//     this.titulo =prompt("Ingrese el título");
//     this.precio =parseInt(prompt("Ingrese el precio"))
    
    
//     
//     }

// //Pushear por método
//     const librito = new Libro;
//     librito.cargarLibro()
//     console.log(librito);
//     biblioteca.push(librito)
//     console.log(biblioteca);
//     const librito2 = new Libro;
//     librito2.cargarLibro()
//     biblioteca.push(librito2)
//     console.log(biblioteca);