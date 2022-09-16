
const dias = document.getElementById('dias')
horas = document.getElementById('horas')
minutos = document.getElementById('minutos')
segundos = document.getElementById('segundos')


const newYear = '19 Sep 2022';


let countTimer =()=>{
    const newYearDate = new Date(newYear);
    const currentDate = new Date();

    const totalSeconds = (newYearDate - currentDate) / 1000;

    const daysCalc = Math.floor(totalSeconds / 3600 / 24);
    const hoursCalc = Math.floor(totalSeconds / 3600) % 24;
    const minsCalc = Math.floor(totalSeconds / 60) % 60;
    const secondsCalc = Math.floor(totalSeconds % 60)

    dias.innerHTML = daysCalc;
    horas.innerHTML = hoursCalc;
    minutos.innerHTML = minsCalc;
    segundos.innerHTML = secondsCalc;

    if (totalSeconds < 0) {
        dias.innerHTML = '00';
        horas.innerHTML = '00';
        minutos.innerHTML = '00';
        segundos.innerHTML = '00';
    }
}

countTimer();
setInterval(countTimer, 1000);