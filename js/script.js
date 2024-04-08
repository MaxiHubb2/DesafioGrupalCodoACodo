// Obtener todas las secciones del documento
const secciones = document.querySelectorAll('section');

// Obtener todos los enlaces del menú
const enlacesMenu = document.querySelectorAll('.menu ul li a');

// Función para cambiar el color del enlace del menú cuando se hace clic
function cambiarColorEnlace(event) {
    enlacesMenu.forEach(enlace => {
        enlace.classList.remove('selected');
    });

    event.target.classList.add('selected');
}

// Agregar event listeners a los enlaces del menú
enlacesMenu.forEach(enlace => {
    enlace.addEventListener('click', cambiarColorEnlace);
});

// Función para verificar qué sección está visible en la ventana y cambiar el color del enlace correspondiente
function cambiarColorEnlaceScroll() {
    let scrollPos = window.scrollY;
    let windowHeight = window.innerHeight;

    // Agregar la clase 'menu-scrolled' al menú cuando se hace scroll hacia abajo
    if (scrollPos > 100) {
        document.querySelector('.menu').classList.add('menu-scrolled');
    } else {
        document.querySelector('.menu').classList.remove('menu-scrolled');
    }

    secciones.forEach(seccion => {
        let seccionTop = seccion.offsetTop;
        let seccionHeight = seccion.clientHeight;
        let seccionBottom = seccionTop + seccionHeight;

        // Calcular los límites de visibilidad de la sección
        let limiteSuperior = seccionTop - (windowHeight * 0.4); 
        let limiteInferior = seccionBottom - (windowHeight * 0.6); 

        if (scrollPos >= limiteSuperior && scrollPos < limiteInferior) {
            let enlaceSeleccionado;
            if (seccion.id === "home") {
                enlaceSeleccionado = document.querySelector('.menu a[href="#home"], .menu a[href="index.html"]');
            } else {
                enlaceSeleccionado = document.querySelector(`.menu a[href="#${seccion.getAttribute('id')}"]`);
            }
            if (enlaceSeleccionado) {
                // Remover la clase "selected" de todos los enlaces
                enlacesMenu.forEach(enlace => {
                    enlace.classList.remove('selected');
                });

                // Agregar la clase "selected" solo al enlace correspondiente
                enlaceSeleccionado.classList.add('selected');
            }
        }
    });

    // Mostrar u ocultar la flecha según la posición del scroll
    if (scrollPos > 200) {
        scrollTopButton.style.display = 'block';
    } else {
        scrollTopButton.style.display = 'none';
    }
}

// Llamar a la función cada vez que se haga scroll en la página
window.addEventListener('scroll', cambiarColorEnlaceScroll);

// Obtener el elemento de la flecha
const scrollTopButton = document.getElementById('scroll-top');

// Desplazar la página hacia arriba al hacer clic en la flecha
scrollTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

