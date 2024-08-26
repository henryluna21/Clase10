let fecha1 = new Date('2024-08-01');
let fecha2 = new Date('2024-08-26');


let diferenciaMilisegundos = fecha2 - fecha1;


let diferenciaDias = Math.floor(diferenciaMilisegundos / (1000 * 60 * 60 * 24));

console.log(diferenciaDias); 
