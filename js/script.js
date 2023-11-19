let club;
let mensaje;
let seguir = true;
let total;

const jugadores = [
    { codigo: 1, nombre: 'Lionel Messi', valor: 35000 },
    { codigo: 2, nombre: 'Erling Haaland', valor: 31000 },
    { codigo: 3, nombre: 'Kylian Mbappe', valor: 27000 },
    { codigo: 4, nombre: 'Robert Lewandoski', valor: 13000 },
    { codigo: 5, nombre: 'Frenkie De Jong', valor: 19000 },
    { codigo: 6, nombre: 'Jude Bellingham', valor: 29500 },
];

const carrito = [];

function saludar() {
    nombre = prompt("Cual es tu nombre?");
    club = prompt("Cual es tu CLUB favorito");

    if (nombre) {
        mensaje = "Hola " + nombre + ", El " + club + " es el mejor club del mundo\n\nTe gustaria que se reforzara con algunos jugadores?";
    } else {
        mensaje = "Debes ingresar un nombre valido";
    }

    alert(mensaje);
    ficharJugador();
}

function buscarJugador(codigo) {
    let codigoJugador = jugadores.find((jugador) => jugador.codigo === codigo);
    return codigoJugador;
}

function ficharJugador() {
    while (seguir) {
        let codigo = prompt("Lista de jugadores en venta:\n\n1. Lionel Messi\n2. Earling Haland\n3. Kyliam Mbappe\n4. Robert Lewandoski\n5. Frankie deJohn\n6. Jude Bellingham\nQue jugador te gustaria en tu club favorito?");
        let codigoJugador = buscarJugador(parseInt(codigo))

        if (codigoJugador !== undefined) {

            carrito.push(codigoJugador)
            alert(codigoJugador.nombre + " SE UNIRA A TU CLUB")
            let respuesta = confirm("¿Algun otro jugador?\n\nAceptar: Si\nCancelar: No");
            if (respuesta === true) {
                ficharJugador()
            } else {
                const fichajes = new Mercado(carrito)
                let total = fichajes.obtenerTotal()

                console.warn("TUS REFUERZOS SON: ");
                console.table(carrito)
                console.warn("TUS FICHAJES TIENE UN VALOR DE MERCADO DE $", total)

                let venta = confirm("Quieres ceder algun jugador fichado?\n\nAceptar: Si\nCancelar: No");
                if (venta === true) {
                    venderJugador();
                }
                else {
                    alert("NOS VEMOS EN EL PROXIMO MERCADO DE FICHAJES");
                }
            }
            break;
        } else {
            alert("DEBES ESCOGER UN JUGADOR EN VENTA")
        }
    }
}

function venderJugador() {

    mostrarCarrito();
    let codigo = parseInt(prompt("Que jugador de los fichados quieres ceder?\n\nIndica su codigo:"));
    let indice = carrito.findIndex((jugador) => jugador.codigo === parseInt(codigo))
    let codigoJugador = buscarJugador(parseInt(codigo))

    if (indice !== -1) {

        alert(codigoJugador.nombre + " SE VA CEDIDO A OTRO CLUB")
        carrito.splice(indice, 1)
        console.warn("NUEVA LISTA DE JUGADORES FICHADOS")
        console.table(carrito)

        const fichajes = new Mercado(carrito)
        let total = fichajes.obtenerTotal()

        console.warn("TU NUEVO VALOR DE MERCADO ES $", total)
        alert("NOS VEMOS EN EL PROXIMO MERCADO DE FICHAJES");
    }
    else {
        alert("DEBES ESCOGER UN JUGADOR FICHADO")
        venderJugador();
    }
}

function mostrarCarrito(jugadores) {
    let detalleCarrito = carrito.map((jugador) => jugador.codigo + ". " + jugador.nombre + "\n\n")
    alert("JUGADORES FICHADOS: \n\n" + detalleCarrito);
}

console.log("LISTA DE JUGADORES EN VENTA");
console.table(jugadores);
saludar();