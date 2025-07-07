//  controles del carrusel
document.querySelectorAll('.carousel-container').forEach(carousel => {
const row = carousel.querySelector('.movie-carousel');
const controls = carousel.querySelector('.carousel-controls');
const prevBtn = carousel.querySelector('.prev-btn');
const nextBtn = carousel.querySelector('.next-btn');
            
//  clic en los botones
nextBtn.addEventListener('click', () => {
row.scrollBy({ left: 300, behavior: 'smooth' });
});
            
prevBtn.addEventListener('click', () => {
row.scrollBy({ left: -300, behavior: 'smooth' });
});
            
// Mostrar/ocultar controles 
row.addEventListener('scroll', () => {
const showPrev = row.scrollLeft > 0;
const showNext = row.scrollLeft < (row.scrollWidth - row.clientWidth);
                
prevBtn.style.display = showPrev ? 'flex' : 'none';
nextBtn.style.display = showNext ? 'flex' : 'none';
});
            
 //  visibilidad de controles
prevBtn.style.display = 'none';
    if (row.scrollWidth > row.clientWidth) {
        nextBtn.style.display = 'flex';
    } else {
        nextBtn.style.display = 'none';
            }
        });
// nav bar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar-cine');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
            }
        });  
// toggle para cambiar de dark mode a light mode
const themeToggle = document.createElement('button');
themeToggle.classList.add('theme-toggle');
themeToggle.innerHTML = '<i class="bi bi-moon"></i>';

const navButtons = document.querySelector('.d-flex.align-items-center');
if (navButtons) {
  navButtons.appendChild(themeToggle);}

// cambio de tema
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

