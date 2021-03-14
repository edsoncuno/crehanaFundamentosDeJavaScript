(function(){
    /* 
    Al hacer click en uno de los enlaces al layout, se mueve el scroll hasta esa seccion
    pero aqui se le dara efecto a ese movimiento
    */
    //var hypervinculosALasSecciones = document.getElementsByClassName('referenciaASeccion')
    var hypervinculosALasSecciones = document.getElementsByClassName('referenciaASeccion')
    var movimiento;
    for(var i = 0; i < hypervinculosALasSecciones.length; i++) {
        hypervinculosALasSecciones[i].addEventListener('click', irASeccion);
    }
    function irASeccion(e) {
        e.preventDefault();
        // detengo el efecto de desplazamiento automatico
        clearInterval(movimiento);
        // con esto hago que ir a otra seccion mientras se esta moviendo
        // no sea posible, se estaria deteniendo el primer intervalo para realizar el ultimo
        var seccion = this.getAttribute('href');
        var yDeLaSeccion = document.querySelector(seccion).offsetTop - 90;
        // le resto un poco de pixeles para que encaje
        var yActual = window.pageYOffset;
        movimiento = setInterval(mover, 1);
        // mover scroll cada micro segundo
        function mover() {
            if(yActual < yDeLaSeccion) {
                yActual += 9;
                window.scroll(0,yActual);
                if(yActual >= yDeLaSeccion){
                    clearInterval(movimiento);
                    // hacer que el intervalo se detega
                }
            }
            else {
                yActual -= 9;
                window.scroll(0,yActual);
                if(yActual <= yDeLaSeccion) {
                clearInterval(movimiento);
                }
            }
        }
    }
    var hypervinculoAlInicio = document.getElementsByClassName('referenciaAlInicio')[0]
    hypervinculoAlInicio.addEventListener('click',irAlInicio);
    function irAlInicio(e) {
        e.preventDefault();
        clearInterval(movimiento);
        movimiento = setInterval(mover, 1);
        function mover() {
            if(window.pageYOffset > 0) {
                yActual -= 9;
                window.scroll(0,yActual);
                if(window.pageYOffset <= 0 ) {
                    clearInterval(movimiento);
                }
            }
            else{
                return;
            }
        }
    }
}())