let fechaActual = new Date();

let meses = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciemnre'
];

let mesActual = meses[fechaActual.getMonth()];

console.log(mesActual);