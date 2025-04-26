// Ejercicio 1
let nombre = "Gonzalo";
let edad = 28;
let tieneMascotas = true;
console.log("Ejercicio 1:", nombre, edad, tieneMascotas);

// Ejercicio 2
let num1 = 5;
let num2 = 25;
console.log("Ejercicio 2:");
console.log("Primer numero: " + num1 + " | Segundo numero:" + num2)
console.log("Suma:", num1 + num2);
console.log("Resta:", num1 - num2);
console.log("Multiplicación:", num1 * num2);
console.log("División:", num1 / num2);

// Ejercicio 3
function saludar(nombre) {
    return ("¡Hola, "+ nombre +"!");
}
console.log("Ejercicio 3:", saludar("Fernando"));

// Ejercicio 4
const frutas = ["Manzana", "Banana", "Naranja", "Uva", "Mango"];
console.log("Ejercicio 4:");
for (let i = 0; i < frutas.length; i++) {
    console.log("Fruta numero " + (i+1) + ": " + frutas[i]);
}

// Ejercicio 5
const numeros = [3, 6, 9];
const multiplicados = numeros.map(num => num * 2); //crea un nuevo array aplicando una función a cada elemento del array original
console.log("Ejercicio 5:", multiplicados);

// Ejercicio 6
const personas = [
    { nombre: "Pipeh", edad: 15 },
    { nombre: "Pupa", edad: 16 },
    { nombre: "Dani", edad: 28 }
];
console.log("Ejercicio 6:");
personas.forEach(persona => console.log("Su nombre es " + persona.nombre));

// Ejercicio 7
const numerosFilter = [2, 7, 4, 9, 1, 3, 5, 8, 6, 11, 0];
const mayores5 = numerosFilter.filter(num => num > 5);
console.log("Ejercicio 7:", mayores5);

// Ejercicio 8
const numerosReduce = [2, 7, 4, 9, 1, 3, 5, 8, 6, 11, 0];
const sumaTotal = numerosReduce.reduce((num1, num2) => num1 + num2, 0);
console.log("Ejercicio 8:", sumaTotal);

// Ejercicio 9
function esperar() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Mensaje después de 2 segundos");
        }, 2000);
    });
}

async function ejecutarAsync() {
    const mensaje = await esperar();
    console.log("Ejercicio 9: ", mensaje);
}
ejecutarAsync();
