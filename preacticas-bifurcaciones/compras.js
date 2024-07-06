
let articulos = 10;  
let precio = 10;     

let subtotal = articulos * precio;


let descuento = 0;
if (articulos >= 0 && articulos <= 10) {
  descuento = subtotal * 0.05;
  console.log(`Descuento del 5%: ${descuento}`);
} else if (articulos >= 11 && articulos <= 20) {
  descuento = subtotal * 0.10;
  console.log(`Descuento del 10%: ${descuento}`);
} else if (articulos >= 21) {
  descuento = subtotal * 0.15;
  console.log(`Descuento del 15%: ${descuento}`);
}

subtotal -= descuento;

let iva = subtotal * 0.16;
console.log(`IVA del 16%: ${iva}`);

let total_Compra = subtotal + iva;
console.log(`Total de la compra: ${total_Compra}`); 


