//Crear la clase "Libro".
class Libro {

    constructor(nombreC, autorC, editorialC, generoC) {
        this.nombreLibro = nombreC;
        this.autor = autorC;
        this.editorial = editorialC;
        this.genero = generoC
    }
    mostrarLibro () {
        console.log("nombre libro: " + this.nombreLibro);
        console.log("autor: " + this.autor);
        console.log("editorial: " + this.editorial);
        console.log("genero: " + this.genero);
        console.log("_____________________________________")
    }

}

//Instanciar los objetos.
var elSimboloPerdido = new Libro ("El Símbolo Perdido", "Dan Brown", "Planeta", "Misterio-Aventura");

var colmilloBlanco = new Libro ("Colmillo Blanco", "Jack London", "Susaeta", "Aventura");

var laIliada= new Libro ("La Iliada", "Homero", "Zig-Zag", "Ficción");

//Invocar método "mostrarLibro" desde cada objeto.
elSimboloPerdido.mostrarLibro ();
colmilloBlanco.mostrarLibro ();
laIliada.mostrarLibro ();

//Poblar arreglo "libros".
var libros = [];

libros[0] = elSimboloPerdido;
libros[1] = colmilloBlanco;
libros[2] = laIliada;

//Imprimir en console el arreglo poblado.
console.log(libros);
console.log("_____________________________________");


//Crear la función "filtrarPorAutor".
function filtrarPorAutor(arregloLibrosP, AutorP) {
        for (i= 0; i < arregloLibrosP.length; i++) {
            if (AutorP == (arregloLibrosP[i].autor)) {
                console.log (arregloLibrosP[i].nombreLibro);
                console.log("_____________________________________");

            }
        }
}
//Invocación de la función "filtrarPorAutor". Acontinuación se testea con el arreglo "libros", junto a los autores "Homero" y "Jack London".
filtrarPorAutor (libros, "Homero");

filtrarPorAutor (libros, "Jack London");

