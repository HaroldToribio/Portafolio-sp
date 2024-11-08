// Obtener el botón de modo oscuro, el icono y el body de la página
const darkModeButton = document.getElementById('dark-mode-toggle');
const modeIcon = document.getElementById('mode-icon');
const body = document.body;

// Función para activar/desactivar el modo oscuro
darkModeButton.addEventListener('click', () => {
    // Alternar la clase 'dark-mode' en el body
    body.classList.toggle('dark-mode');

    // Cambiar el ícono dependiendo del modo
    if (body.classList.contains('dark-mode')) {
        modeIcon.classList.remove('bi-sun');
        modeIcon.classList.add('bi-moon'); // Cambiar al ícono de luna
    } else {
        modeIcon.classList.remove('bi-moon');
        modeIcon.classList.add('bi-sun'); // Cambiar al ícono de sol
    }
});


// Función para mostrar una alerta al cargar la página
function showAlert() {
    alert("¡Bienvenido al Museo Hip-Hop 90s!");
}

// Función para mostrar un modal con detalles del artista
function showArtistDetails(artistName) {
    alert(`Aprende más sobre ${artistName}. ¡Próximamente en el Museo Hip-Hop 90s!`);
}

// Agregar eventos de clic a cada imagen de artista
document.addEventListener("DOMContentLoaded", function() {
    const artists = document.querySelectorAll(".artist");
    artists.forEach(artist => {
        artist.addEventListener("click", () => {
            showArtistDetails(artist.alt);
        });
    });
});

// Función para mostrar el banner lateral
function showBanner(artist) {
    // Cambiar el contenido del banner si es necesario
    const banner = document.getElementById('info-banner');
    banner.querySelector('p').innerText = `Próximamente disponible en nuestro museo: ${artist}`;

    // Mostrar el banner
    banner.style.display = 'block';
}

// Función para cerrar el banner
function closeBanner() {
    const banner = document.getElementById('info-banner');
    banner.style.display = 'none';
}

// Selecciona todos los videos de las tarjetas
const videos = document.querySelectorAll('.card-video');

videos.forEach(video => {
    video.parentElement.addEventListener('mouseenter', () => {
        video.play(); // Reproduce el video al pasar el mouse
    });
    video.parentElement.addEventListener('mouseleave', () => {
        video.pause(); // Pausa el video cuando el mouse se retira
        video.currentTime = 0; // Reinicia el video
    });
});

// Selecciona todos los videos dentro de las tarjetas
const videoCards = document.querySelectorAll('.flex-video-card video');

// Agrega eventos para cada video
videoCards.forEach((video) => {
    video.addEventListener('mouseover', () => {
        video.muted = false; // Activa el sonido
        video.play(); // Reproduce el video si está pausado
    });

    video.addEventListener('mouseout', () => {
        video.muted = true; // Silencia el sonido al salir
        video.pause(); // Pausa el video al salir del hover, opcional
    });
});

function showComingSoonMessage() {
    const banner = document.getElementById('coming-soon-banner');
    banner.style.right = '20px'; // Desliza el banner a la vista
}

function hideComingSoonMessage() {
    const banner = document.getElementById('coming-soon-banner');
    banner.style.right = '-300px'; // Oculta el banner deslizándolo fuera de la vista
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    document.querySelectorAll('.navbar, .card, footer').forEach(element => {
        element.classList.toggle('dark-mode');
    });

    // Guardar la preferencia en localStorage para persistencia
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
}

// Revisar la preferencia de modo oscuro en cada carga de página
window.onload = () => {
    if (localStorage.getItem('darkMode') === 'enabled') {
        toggleDarkMode();
    }
};
