class Mercado {
    constructor(totalFichado) {
        this.carrito = totalFichado
    }
    obtenerTotal() {
        if (this.carrito.length > 0) {
            return this.carrito.reduce((valor, jugador) => valor + jugador.valor, 0)
        }
    }
}