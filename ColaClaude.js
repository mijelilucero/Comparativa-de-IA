class Cola {
    constructor(tamanoMaximo) {
        this.tamanoMaximo = tamanoMaximo;
        this.items = [];
    }

    // Insertar: Añade un elemento por el final de la cola
    enqueue(elemento) {
        if (this.isColaLlena()) {
            return "Error: La cola está llena";
        }
        this.items.push(elemento);
        return true;
    }

    // Quitar: Retira el elemento frente de la cola
    dequeue() {
        if (this.isColaVacia()) {
            return "Error: La cola está vacía";
        }
        return this.items.shift();
    }

    // Frente: Obtiene el elemento frente de la cola
    frente() {
        if (this.isColaVacia()) {
            return "Error: La cola está vacía";
        }
        return this.items[0];
    }

    // Cola vacía: Comprueba si la cola no tiene elementos
    isColaVacia() {
        return this.items.length === 0;
    }

    // Cola llena: Comprueba si la cola está llena de elementos
    isColaLlena() {
        return this.items.length >= this.tamanoMaximo;
    }

    // Tamaño actual de la cola
    tamanoActual() {
        return this.items.length;
    }

    // Tamaño máximo de la cola
    getTamanoMaximo() {
        return this.tamanoMaximo;
    }

    // Mostrar elementos de la cola
    mostrar() {
        if (this.isColaVacia()) {
            return "La cola está vacía";
        }
        return this.items;
    }
}

//Prueba de la cola
// Crear una cola con capacidad máxima de 5 clientes
let miCola = new Cola(5);

console.log("\n--- Pruebas de la Cola ---");

// Prueba 1: Agregar clientes
console.log("\nAgregando clientes a la cola:");
miCola.enqueue("Cliente 1");
miCola.enqueue("Cliente 2");
miCola.enqueue("Cliente 3");
console.log("Estado actual de la cola:");
console.log(miCola.mostrar());

// Prueba 2: Atender al primer cliente
console.log("\nAtendiendo al primer cliente:");
console.log("Cliente atendido:", miCola.dequeue());

// Prueba 3: Ver quién sigue
console.log("\nSiguiente cliente en la fila:");
console.log("Siguiente:", miCola.frente());

// Prueba 4: Verificar estado de la cola
console.log("\nEstado actual de la cola después de atender:");
console.log(miCola.mostrar());

// Prueba 5: Verificar si la cola está llena
console.log("\nVerificando si la cola está llena:");
console.log("¿Cola llena?:", miCola.isColaLlena());

// Prueba 6: Verificar el tamaño actual
console.log("\nTamaño actual de la cola:");
console.log("Clientes en espera:", miCola.tamanoActual());