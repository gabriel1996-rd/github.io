document.addEventListener('DOMContentLoaded', function() {
  // Controles del carrusel
  document.querySelectorAll('.carousel-container').forEach(carousel => {
    const row = carousel.querySelector('.movie-carousel');
    const prevBtn = carousel.querySelector('.prev-btn');
    const nextBtn = carousel.querySelector('.next-btn');
    const movieCards = row.querySelectorAll('.movie-card');
    
    // Función para actualizar visibilidad de botones
    function updateButtonVisibility() {
      const tolerance = 1;
      const showPrev = row.scrollLeft > tolerance;
      const showNext = row.scrollLeft + row.clientWidth < row.scrollWidth - tolerance;
      
      prevBtn.style.display = showPrev ? 'flex' : 'none';
      nextBtn.style.display = showNext ? 'flex' : 'none';
    }
    
    // Calcular el desplazamiento considerando el gap
    function getScrollAmount() {
      const cardWidth = movieCards[0].offsetWidth;
      const gap = parseInt(getComputedStyle(row).gap) || 15;
      return cardWidth + gap;
    }
    
    // Eventos de clic
    nextBtn.addEventListener('click', () => {
      row.scrollBy({ 
        left: getScrollAmount(),
        behavior: 'smooth' 
      });
      setTimeout(updateButtonVisibility, 300);
    });

    prevBtn.addEventListener('click', () => {
      row.scrollBy({ 
        left: -getScrollAmount(),
        behavior: 'smooth' 
      });
      setTimeout(updateButtonVisibility, 300);
    });
    
    // Evento de scroll
    row.addEventListener('scroll', updateButtonVisibility);
    
    // Manejo de carga de imágenes
    const images = row.querySelectorAll('img');
    let loadedImages = 0;
    
    function imageLoaded() {
      loadedImages++;
      if (loadedImages === images.length) {
        updateButtonVisibility();
        setTimeout(updateButtonVisibility, 500);
      }
    }
    
    if (images.length === 0) {
      updateButtonVisibility();
    } else {
      images.forEach(img => {
        if (img.complete) {
          imageLoaded();
        } else {
          img.addEventListener('load', imageLoaded);
          img.addEventListener('error', imageLoaded);
        }
      });
    }
    
    // Actualizar en redimensionamiento
    window.addEventListener('resize', () => {
      setTimeout(updateButtonVisibility, 100);
    });
    
    // Actualizar después de un retraso inicial
    setTimeout(updateButtonVisibility, 1000);
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
  applySavedTheme();
});
