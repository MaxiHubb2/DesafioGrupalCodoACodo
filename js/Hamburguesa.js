document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const menuItems = document.querySelector('.menu ul');
    const mainContent = document.querySelector('main');
    const scrollButton = document.getElementById('scroll-top'); 

    menuIcon.addEventListener('click', function() {
        menuItems.classList.toggle('open'); 
        mainContent.classList.toggle('push-down'); 
    });

    // Cerrar el menú al seleccionar una opción
    menuItems.querySelectorAll('a').forEach(function(item) {
        item.addEventListener('click', function() {
            menuItems.classList.remove('open'); 
            mainContent.classList.remove('push-down'); 
        });
    });

    // Ocultar el menú al hacer scroll con el botón de flecha
    scrollButton.addEventListener('click', function() {
        if (menuItems.classList.contains('open')) {
            menuItems.classList.remove('open'); 
            mainContent.classList.remove('push-down'); 
        }
    });
});
