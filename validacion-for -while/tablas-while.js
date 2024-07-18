let multi = 1;

while (multi <= 10) {
    console.log(`Tabla del ${multi}:`);
    let multiplicador = 1;
    while (multiplicador <= 10) {
        let resultado = multi * multiplicador;
        console.log(`${multi} x ${multiplicador} = ${resultado}`);
        multiplicador++;
    }
    multi++;
}


