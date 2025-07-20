// Controles del carrusel
document.querySelectorAll('.carousel-container').forEach(carousel => {
    const row = carousel.querySelector('.movie-carousel');
    const prevBtn = carousel.querySelector('.prev-btn');
    const nextBtn = carousel.querySelector('.next-btn');
    
    
    nextBtn.addEventListener('click', () => {
        row.scrollBy({ left: 300, behavior: 'smooth' });
    });
    
    
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
themeToggle.classList.add('theme-toggle', 'btn');
themeToggle.innerHTML = '<i class="bi bi-moon"></i>';


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


themeToggle.addEventListener('click', toggleTheme);

// Aplicar tema al cargar
document.addEventListener('DOMContentLoaded', applySavedTheme);


 // ALERTAS 
function showAlert(message, type = 'success') {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type} alert-dismissible fade show fixed-top mt-5 mx-3`;
    alertDiv.role = 'alert';
    alertDiv.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;
    
    document.body.prepend(alertDiv);
    
    
    setTimeout(() => {
        const bsAlert = new bootstrap.Alert(alertDiv);
        bsAlert.close();
    }, 5000);
}

//  Formulario de contacto
document.querySelector('.contact-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    
    const requiredFields = this.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            isValid = false;
            field.classList.add('is-invalid');
        } else {
            field.classList.remove('is-invalid');
        }
    });
    
    
    const email = document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(email)) {
        document.getElementById('email').classList.add('is-invalid');
        showAlert('Por favor ingrese un email válido', 'danger');
        isValid = false;
    }
    
    if (!isValid) {
        return;
    }
    
    showAlert('Mensaje enviado con éxito!');
    this.submit();
});

//  botón de suscripción

document.querySelector('#exampleModal .btn-primary')?.addEventListener('click', function() {
    const emailInput = document.querySelector('#exampleModal input[type="email"]');
    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!email || !emailRegex.test(email)) {
        emailInput.classList.add('is-invalid');
        showAlert('Por favor ingrese un email válido', 'danger');
        return;
    }
    
    showAlert('¡Suscripción exitosa! Gracias por suscribirte.');
    
    // Cerrar el modal después de suscribirse
    const modal = bootstrap.Modal.getInstance(document.getElementById('exampleModal'));
    modal.hide();
    
    
    emailInput.value = '';
    emailInput.classList.remove('is-invalid');
});


document.getElementById('exampleModal')?.addEventListener('hidden.bs.modal', function() {
    const emailInput = this.querySelector('input[type="email"]');
    emailInput.value = '';
    emailInput.classList.remove('is-invalid');
});

 