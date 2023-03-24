
/**Más Sobre Mi*/

var show1 = document.getElementById('show1'),
    hide1 = document.getElementById('hide1'),
    elemento1 = document.getElementById('mas_sobre_mi');

function mostrar1() {
    if(elemento1.style.display = 'none') {
        elemento1.style.display = 'block';
        show1.style.display = 'none'
        hide1.style.display = 'block'
    }
}

function ocultar1() {
    if(elemento1.style.display = 'block') {
        elemento1.style.display = 'none';
        show1.style.display = 'block'
        hide1.style.display = 'none'
    }
}




show1.addEventListener('click', mostrar1)
hide1.addEventListener('click', ocultar1)



/**Experiencia Laboral*/

var show2 = document.getElementById('show2'),
    hide2 = document.getElementById('hide2'),
    elemento2 = document.getElementById('experiencia_laboral');

function mostrar2() {
    if(elemento2.style.display = 'none') {
        elemento2.style.display = 'block';
        show2.style.display = 'none'
        hide2.style.display = 'block'
    }
}

function ocultar2() {
    if(elemento2.style.display = 'block') {
        elemento2.style.display = 'none';
        show2.style.display = 'block'
        hide2.style.display = 'none'
    }
}




show2.addEventListener('click', mostrar2)
hide2.addEventListener('click', ocultar2)

/**Fomación*/

var show3 = document.getElementById('show3'),
    hide3 = document.getElementById('hide3'),
    elemento3 = document.getElementById('formacion_academica');

function mostrar3() {
    if(elemento3.style.display = 'none') {
        elemento3.style.display = 'block';
        show3.style.display = 'none'
        hide3.style.display = 'block'
    }
}

function ocultar3() {
    if(elemento3.style.display = 'block') {
        elemento3.style.display = 'none';
        show3.style.display = 'block'
        hide3.style.display = 'none'
    }
}




show3.addEventListener('click', mostrar3)
hide3.addEventListener('click', ocultar3)

/**Me hubiera gustado tener un código menos repetitivo pero no encontré forma de que funcionara*/


