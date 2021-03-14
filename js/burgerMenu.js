(function(){
    var burguerMenu = document.getElementById('burguer-menu');
    var slideMenu = document.getElementById('slide-menu');
    var activo = false;
    burguerMenu.addEventListener('click',toggleMenu);
    function toggleMenu() {
        if(activo == false) {
            activo = true;
            slideMenu.className = slideMenu.className + ' activo';
        }
        else {
            ocultarSliderMenu;
        }
    }
    var elementosDeSlideMenu = document.querySelectorAll('#slide-menu .menu-principal a');
    for(var i = 0; i<elementosDeSlideMenu.length; i++) {
        elementosDeSlideMenu[i].addEventListener('click',ocultarSliderMenu);
    }
    function ocultarSliderMenu() {
        activo = false;
        slideMenu.className = slideMenu.className.replace(' activo','');
    }
}())