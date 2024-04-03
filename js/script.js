const enlacesMenu = document.querySelectorAll('.menu ul li a');

enlacesMenu.forEach(enlace => {
    enlace.addEventListener('click', function(event) {
        
        // Remover la clase "selected" de todos los enlaces
        enlacesMenu.forEach(enlace => {
            enlace.classList.remove('selected');
        });

        // Agregar la clase "selected" solo al enlace clickeado
        this.classList.add('selected');
    });
});
