//string (cadena de caracteres)

let srt_1 = "Hola soy un texto con comillas";
let srt_2 = 'Hola soy un texto con comillas simples';
let srt_3 = "Comillas dentro de comillas \"Ejemplo\"";
let srt_4 = 'Comillas dentro de comillas "Ejemplo" ';
let srt_5 = "Comillas dentro de comillas 'Ejemplo'";

console.log(srt_1); 
console.log(srt_2);
console.log(srt_3);
console.log(srt_4);
console.log(srt_5);

//Comillas invertidas (backticks)``

let srt_6 = `Comillas invertidas backticka`;
console.log(srt_6);
let nombre = "Diego";
let welcome = `Bienvenido Perrote, ${nombre}, esto es una variable dentro del valor de otra variable`
 console.log(welcome);

 //pantilla HTML
let plantilla = `
 <html>
    <h3>pagina web de ${nombre}</h3>
    <p>Un parrafo</p>
 </html>
 `
