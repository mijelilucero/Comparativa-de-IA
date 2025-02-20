class Cola {
    constructor(tamañoMaximo) {
        this.items = [];
        this.maxSize = tamañoMaximo;
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
        return this.items.length === this.maxSize;
    }

    tamaño() {
        return this.maxSize;
    }

    mostrar() {
        console.log(this.items);
    }
}

// Ejemplo de uso
const miCola = new Cola(3); // Cola con capacidad máxima de 3 elementos

miCola.insertar("Cliente 1");
miCola.insertar("Cliente 2");
miCola.insertar("Cliente 3");



console.log("Intento insertar en cola llena:", miCola.insertar("Cliente 4")); // Devuelve mensaje de llena
miCola.mostrar(); // Muestra ["Cliente 1", "Cliente 2", "Cliente 3"]

console.log("Atendiendo:", miCola.quitar()); // Atiende al primero
console.log("Siguiente en fila:", miCola.frente()); // Muestra nuevo primero
console.log("¿Está vacía?:", miCola.colaVacia()); // false
console.log("¿Está llena?:", miCola.colaLlena()); // false (ahora tiene 2 elementos)
console.log("Tamaño máximo:", miCola.tamaño()); // 3
miCola.mostrar(); // Muestra ["Cliente 2", "Cliente 3"]