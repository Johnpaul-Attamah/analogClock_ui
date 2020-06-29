const hrs = document.querySelector('.clock__hrs--hand');
const mins = document.querySelector('.clock__mins--hand');
const secs = document.querySelector('.clock__secs--hand');
const DEG_ROTATION = 6;

setInterval(() => {

    let day = new Date();

    let hrsArc = day.getHours() * 30;
    let minsArc = day.getMinutes() * DEG_ROTATION;
    let secArc = day.getSeconds() * DEG_ROTATION;


    hrs.style.transform = `rotateZ(${(hrsArc) + (minsArc / 12)}deg)`;
    mins.style.transform = `rotateZ(${minsArc}deg)`;
    secs.style.transform = `rotateZ(${secArc}deg)`;
},1000)