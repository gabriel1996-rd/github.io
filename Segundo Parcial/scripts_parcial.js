// Controles del carrusel
document.querySelectorAll('.carousel-container').forEach(carousel => {
    const row = carousel.querySelector('.movie-carousel');
    const prevBtn = carousel.querySelector('.prev-btn');
    const nextBtn = carousel.querySelector('.next-btn');
    
    // Evento para botón siguiente
    nextBtn.addEventListener('click', () => {
        row.scrollBy({ left: 300, behavior: 'smooth' });
    });
    
    // Evento para botón anterior
    prevBtn.addEventListener('click', () => {
        row.scrollBy({ left: -300, behavior: 'smooth' });
    });
    
    // Mostrar/ocultar controles según la posición de desplazamiento
    row.addEventListener('scroll', () => {
        const showPrev = row.scrollLeft > 0;
        const showNext = row.scrollLeft < (row.scrollWidth - row.clientWidth);
        
        prevBtn.style.display = showPrev ? 'flex' : 'none';
        nextBtn.style.display = showNext ? 'flex' : 'none';
    });
    
    // Inicializar visibilidad de controles
    prevBtn.style.display = 'none';
    if (row.scrollWidth > row.clientWidth) {
        nextBtn.style.display = 'flex';
    } else {
        nextBtn.style.display = 'none';
    }
});

// Efecto de navbar al hacer scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar-cine');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Toggle de tema claro/oscuro
const themeToggle = document.createElement('button');
themeToggle.classList.add('theme-toggle');
themeToggle.innerHTML = '<i class="bi bi-moon"></i>';

// Buscar el contenedor de botones en la barra de navegación
const navButtons = document.querySelector('.d-flex.align-items-center');
if (navButtons) {
    navButtons.appendChild(themeToggle);
}

// Función para cambiar el tema
function toggleTheme() {
    const body = document.body;
    const isLightTheme = body.classList.contains('light-theme');
    
    if (isLightTheme) {
        body.classList.remove('light-theme');
        localStorage.setItem('theme', 'dark');
        themeToggle.innerHTML = '<i class="bi bi-moon"></i>';
    } else {
        body.classList.add('light-theme');
        localStorage.setItem('theme', 'light');
        themeToggle.innerHTML = '<i class="bi bi-sun"></i>';
    }
}

// Aplicar tema guardado
function applySavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
        themeToggle.innerHTML = '<i class="bi bi-sun"></i>';
    } else {
        document.body.classList.remove('light-theme');
        themeToggle.innerHTML = '<i class="bi bi-moon"></i>';
    }
}

// Event listeners
themeToggle.addEventListener('click', toggleTheme);

// Aplicar tema al cargar
document.addEventListener('DOMContentLoaded', applySavedTheme);

