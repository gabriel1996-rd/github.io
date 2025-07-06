// Funcionalidad para los controles del carrusel
        document.querySelectorAll('.carousel-container').forEach(carousel => {
            const row = carousel.querySelector('.movie-carousel');
            const prevBtn = carousel.querySelector('.prev-btn');
            const nextBtn = carousel.querySelector('.next-btn');
            
            // Desplazamiento al hacer clic en los botones
            nextBtn.addEventListener('click', () => {
                row.scrollBy({ left: 300, behavior: 'smooth' });
            });
            
            prevBtn.addEventListener('click', () => {
                row.scrollBy({ left: -300, behavior: 'smooth' });
            });
            
            // Mostrar/ocultar controles según la posición del scroll
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