(function(){
    setInterval(mover,3000);
    function mover() {
        document.getElementById('slider').style.transition = 'all 1s ease'; 
        /* el cambio es progresivo de 1s*/
        document.getElementById('slider').style.marginLeft = '-100%';
        /* moverlo -100% a la izquierda hace que se muestre el segundo elemento*/
        setTimeout(function() {
        document.getElementById('slider').appendChild(slider.firstElementChild);
        /*muveve el primer elemento para el al final de la cola, esto hace que se muestre 
        el tercer elemento, ya que ahora es el segundo*/
        document.getElementById('slider').style.transition = 'all 0s';
        /*el transition es de 0, asi que el cambio es inmediato*/
        document.getElementById('slider').style.marginLeft = 'unset';
        /*hace que se muestre el primer elemento, que era el antiguo segundo elemento*/
        /*document.getElementById('slider').marginLeft = 0;* no se que hace esto pero no es necesario*/
    },1000)
    /*too despes de un segundo despues, esto se hace el primer transition tenga efecto completo*/
    }
}())