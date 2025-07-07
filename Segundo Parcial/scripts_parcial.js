// Controles del carrusel
document.querySelectorAll('.carousel-container').forEach(carousel => {
  const row = carousel.querySelector('.movie-carousel');
  const controls = carousel.querySelector('.carousel-controls');
  const prevBtn = controls.querySelector('.prev-btn');
  const nextBtn = controls.querySelector('.next-btn');
  
  // Función para actualizar visibilidad de botones
  function updateButtonVisibility() {
  const tolerance = 1; 
  const showPrev = row.scrollLeft > tolerance;
  const showNext = row.scrollLeft + row.clientWidth < row.scrollWidth - tolerance;
  
  prevBtn.style.display = showPrev ? 'flex' : 'none';
  nextBtn.style.display = showNext ? 'flex' : 'none';
  }
  
  // Eventos de clic
  nextBtn.addEventListener('click', () => {
  row.scrollBy({ 
    left: row.clientWidth * 0.8, 
    behavior: 'smooth' 
  });
  setTimeout(updateButtonVisibility, 300);
});

prevBtn.addEventListener('click', () => {
  row.scrollBy({ 
    left: -row.clientWidth * 0.8, 
    behavior: 'smooth' 
  });
  setTimeout(updateButtonVisibility, 300);
});
  
  // Evento de scroll
  row.addEventListener('scroll', updateButtonVisibility);
  
  // Actualizar visibilidad inicial
  updateButtonVisibility();
  
  // Recalcular cuando se carguen todas las imágenes
  const images = row.querySelectorAll('img');
  let loadedImages = 0;
  
  if (images.length === 0) {
    updateButtonVisibility();
  } else {
    images.forEach(img => {
      if (img.complete) {
        imageLoaded();
      } else {
        img.addEventListener('load', imageLoaded);
      }
    });
  }
  
  function imageLoaded() {
    loadedImages++;
    if (loadedImages === images.length) {
      setTimeout(updateButtonVisibility, 100);
    }
  }
  
  // Actualizar también en redimensionamiento
  window.addEventListener('resize', () => {
    setTimeout(updateButtonVisibility, 100);
  });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar-cine');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Toggle para cambiar de dark mode a light mode
const themeToggle = document.createElement('button');
themeToggle.classList.add('theme-toggle');
themeToggle.innerHTML = '<i class="bi bi-moon"></i>';

const navButtons = document.querySelector('.d-flex.align-items-center');
if (navButtons) {
  navButtons.appendChild(themeToggle);
}

// Cambio de tema
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

themeToggle.addEventListener('click', toggleTheme);
document.addEventListener('DOMContentLoaded', applySavedTheme);