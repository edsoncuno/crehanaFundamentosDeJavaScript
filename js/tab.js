(function(){
    var primerHijoDeEncabezado = document.getElementById('encabezado').firstElementChild;
var primerHijoDeContenido = document.getElementById('contenido').firstElementChild;
primerHijoDeEncabezado.className = "activo";
primerHijoDeContenido.className = "activo";
// activar el primer tab y el primer div de contenido
var linksDeEncabezado = document.querySelectorAll('#encabezado li a');
for(var i = 0;i<linksDeEncabezado.length;i++){
    linksDeEncabezado[i].addEventListener('click',evento);
}
// agregando un evento click a cada tab
function evento(e) {
    e.preventDefault();
    /*detener la accion por defecto del hypervinculo para que no
    haga el refresh a la pagina*/
    var lisDeEncabezado = document.querySelectorAll('#encabezado li');
    for(var i = 0;i<lisDeEncabezado.length;i++) {
        lisDeEncabezado[i].className = '';
    }
    var divsHijosDeContenido = document.querySelectorAll('#contenido > div');
    for(var i = 0;i<divsHijosDeContenido.length; i++) {
        divsHijosDeContenido[i].className = '';
    }
    //al hacer click en cualquier tab se desactiva el tab y el contenido
    this.parentElement.className = 'active';
    // el this se refiere al a, con el parent se refiere al li
    // se activa el encabezado donde se hizo click
    var encabezadoLiAHref = this.getAttribute('href');
    // obtengo el valor del href de a dentro de li dentro de encabezado
    // #postres o #cafes
    var divContenido = document.querySelector(encabezadoLiAHref);
    // div de Contenido que muestra los postres o cafes
    divContenido.className = 'activo';
    // se activa el div
    divContenido.style.opacity = 0;
    setTimeout(function () {
        divContenido.style.opacity = 1;
    },100);
    // se le da un efeco para el cambio no sea tan brusco, ya tiene el efecto de transition en el css
}
}())