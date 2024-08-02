const video = document.querySelector('#framevideo');
const container = document.querySelector('#container');
// Video set display size
if(window.matchMedia("(max-width: 767px)").matches) {
    // change style left
    video.style.left = '-50vw';
    video.width = window.innerWidth * 2;
    video.height = window.innerHeight;
} else {
    video.width = window.innerWidth;
    video.height = window.innerHeight;
}
let interactions = 0;
// pouse video on its second 14
video.addEventListener('timeupdate', function(e) {
    e.preventDefault();
    console.log({interactions});
    if (video.currentTime >= 14.5 && interactions === 0) {
        console.log("time video updated")
        video.pause();
        changeSlide();
        interactions++;
    } else if(video.currentTime >= 21.5 && interactions === 1) {
        video.pause();
        interactions = 1;
        changeSlide();
    } else if (video.currentTime >= 55.5 && interactions === 1) {
        video.pause();
        interactions = 2;
        changeSlide();
    }
});

const cuteTexts = [
    `<div class="slider_caption">
        <span class="span-medieval">Lady y/o Sir Caballero. Se le hace la cordial invitación para asistir
        al cumpleaños de Lady Jaz el día sábado 5 de octubre para celebrar sus 25
        primaveras.<br>Esperando su participación para el gran evento en la siguiente
        dirección:<br>
        <a href="https://maps.app.goo.gl/fCu4U66y1sVXphgn8">Av. Girasol 1, Las Huertas
        1ra Secc, 53427 Naucalpan de Juárez, Méx.</a></span>
        <div class="btn-container">
            <button id="si" >¿Confirmas asistencia?</button>
            <button id="no" >No, gracias</button>
        </div>
    </div>`,
    `<div class="slider_caption">
    <span class="span-medieval">Le agradezco el contar con vuestra apreciable asistencia
    si fuera tan gentil de proporcionar los datos necesarios para su registro
    le agradeceré infinitamente.<BR>Recuerde que este evento tiene la temática sobre
    Sir Shrek le rogamos que su vestimenta se asemeje a algún personaje que haya
    aparecido con él, no es necesario que sea un disfraz</span>
    <form id="inviteForm">
        <input class="pap-input" type="text" placeholder="Nombre" id="nombre" required>
        <input class="pap-input" type="tel" placeholder="Teléfono" id="telefono" required>
        <input class="pap-input" type="number" placeholder="Acompañantes (0 si no)" id="acompanantes" required>
        <button class="pap-btn" id="enviar" >Enviar</button>
    </form></div>`,
    `<div class="slider_caption">
    <sapn class="span-medieval">
        Como si estas cosas pasaran, esto es pura 💩...<br><br><br>
        Es broma, pero si cambias de opinión puedes confirmar tu asistencia
        usando el mismo enlace de antes.
    </span>
    </div>`,
]

const animateClasses = [
    'animate__backInLeft',
    'animate__backInRight',
    'animate__bounceInDown',
    'animate__rotateIn',
    'animate__zoomInUp'
]

function changeSlide () {
    console.log("changeSlide");
    const sliderArea = document.createElement('div');
    sliderArea.innerHTML = cuteTexts[interactions];
    sliderArea.className = `slider-area animate__animated ${ animateClasses[( Math.random() * 73437 | 0 ) % 5] }`;

    container.appendChild( sliderArea );

    if (interactions === 0) {
        addFirstListenerButtons();
    }

}

function addFirstListenerButtons () {
    const buttonSi = document.querySelector('#si');
    const buttonNo = document.querySelector('#no');
    buttonSi.addEventListener( 'click', (e) => {
        e.preventDefault();
        video.play();
        container.removeChild( document.querySelector('.slider-area') );
        console.log("remueve")
    })

    buttonNo.addEventListener( 'click', (e) => {
        e.preventDefault();
        container.removeChild( document.querySelector('.slider-area') );
        video.currentTime = 45.3;
        video.play();
    })
}