setInterval(setClock, 1000);

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')
const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');
const year = document.querySelector('.year');


function setClock(){
    const currentDate = new Date();
    hour.innerHTML = currentDate.getHours();
    minute.innerHTML = currentDate.getMinutes();
    second.innerHTML = currentDate.getSeconds();
    const secondRatio = currentDate.getSeconds() / 60;
    const minuteRatio = (secondRatio + currentDate.getMinutes()) / 60;
    const hourRatio = (minuteRatio + currentDate.getHours()) / 12;
    setRotation(secondHand, secondRatio);
    setRotation(minuteHand, minuteRatio);
    setRotation(hourHand, hourRatio);
}

function setRotation(element, rotationRatio){
    element.style.setProperty('--rotation', rotationRatio * 360);
}

setClock();

