let n = 0;
for (let numero = 0; numero <= 1000; numero++) {
    if (numero % 2 === 1) {
        n += numero;
    }
}
console.log("La suma de todos los impares es: ", n);