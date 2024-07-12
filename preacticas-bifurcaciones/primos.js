let min = 2;
let max = 10;

if (min < 2 || min >= max) {
    console.log("Por favor pongo un numero mayor a 2");
} else {
    console.log(`Los números primos entre ${min} y ${max} son:`);
    
    for (let numero = min; numero <= max; numero++) {
        let esPrimo = true;

        if (numero === 2) {
            esPrimo = true;
        } else if (numero > 2) {
            for (let i = 2; i <= Math.sqrt(numero); i++) {
                if (numero % i === 0) {
                    esPrimo = false;
                    break;
                }
            }
        } else {
            esPrimo = false;
        }

        if (esPrimo) {
            console.log(numero);
        }
    }
}