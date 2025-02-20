class Cola {
    constructor(capacidad) {
        this.items = [];
        this.capacidad = capacidad; // Capacidad máxima de la cola
    }

    CrearCola(capacidad) {
        return new Cola(capacidad);
    }

    insertar(elemento) {
        if (this.colaLlena()) {
            return "La cola está llena";
        }
        this.items.push(elemento);
    }

    quitar() {
        if (this.colaVacia()) {
            return "La cola está vacía";
        }
        return this.items.shift();
    }

    frente() {
        if (this.colaVacia()) {
            return "La cola está vacía";
        }
        return this.items[0];
    }

    colaVacia() {
        return this.items.length === 0;
    }

    colaLlena() {
        return this.items.length === this.capacidad;
    }

    tamanoCola() {
        return this.items.length;
    }

    mostrar() {
        console.log(this.items);
    }
}

// Prueba
let capacidadMaxima = 3;
CrearCola(capacidadMaxima);
colaDeMario.insertar("Cliente 1");
colaDeMario.insertar("Cliente 2");
colaDeMario.insertar("Cliente 3");

colaDeMario.mostrar();
console.log("Atendiendo:", colaDeMario.quitar());
console.log("Siguiente en la fila:", colaDeMario.frente());
console.log("Cola vacía:", colaDeMario.colaVacia());
console.log("Cola llena:", colaDeMario.colaLlena());
console.log("Tamaño de la cola:", colaDeMario.tamanoCola());