// requisição das horas
const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();
 

    //  colocar 0 antes da horas se for menor que 10hrs
    if (hr < 10) hr = '0' + hr;
    
    if (min < 10) min = '0' + min;

    if (s < 10) s = '0' + s;
 
    // fazer mudar horas
    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;

})