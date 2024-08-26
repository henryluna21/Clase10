let fecha = new Date('Feb 20, 2012 03:12:00');

let horas = fecha.getHours();
let minutos = fecha.getMinutes();
let amPm = horas >= 12 ? 'pm' : 'am';
horas = horas % 12;
horas = horas ? horas : 12;
minutos = minutos < 10 ? '0' + minutos : minutos;
let horaFormateada = `${horas}:${minutos} ${amPm}`;

console.log(horaFormateada);