const turOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');

function lampOn(){
    lamp.src = './img/lampada2.jpg';
}

turOn.addEventListener ('click', lampOn);

function lampOff(){
    lamp.src = './img/lampada1.jpg';
}

turnOff.addEventListener ('click', lampOff);
