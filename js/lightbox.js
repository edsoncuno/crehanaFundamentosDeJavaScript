(function(){
    var lightbox = {
        imagenesContenidas: document.getElementsByClassName('lightbox'),
        start: function() {
            for(var i = 0;i<this.imagenesContenidas.length;i++) {
            this.imagenesContenidas[i].addEventListener('click',this.lightbox);
            }
        },
        lightbox: function() {
            var urlDeImagen = window.getComputedStyle(this,null).backgroundImage.slice(5,-2);
            document.getElementsByTagName('body')[0].appendChild(document.createElement('div')).setAttribute('id','lightboxContenedor');
            var lightboxContenedor = document.getElementById('lightboxContenedor');
            lightboxContenedor.style.width = '100%';
            lightboxContenedor.style.height = '100%';
            lightboxContenedor.style.position = 'fixed';
            lightboxContenedor.style.zIndex = '1000';
            lightboxContenedor.style.background = 'rgba(0,0,0,0.8)';
            lightboxContenedor.style.top = '0';
            lightboxContenedor.style.left = '1000';
            lightboxContenedor.appendChild(document.createElement('div')).setAttribute('id','modal');
            var modal = document.getElementById('modal');
            modal.style.height = '100%';
            modal.appendChild(document.createElement('img')).setAttribute('src',urlDeImagen);
            modal.getElementsByTagName('img')[0].setAttribute('class','modal-img');
            document.getElementsByClassName('modal-img')[0].style.opacity = 0;
            setTimeout(function() {
                document.getElementsByClassName('modal-img')[0].style.opacity = 1;
            }, 50);
            modal.innerHTML += '<div id = "modal-cerrar">x</div>'
            document.getElementById('modal-cerrar').addEventListener('click',function(){
                document.getElementsByTagName('body')[0].removeChild(lightboxContenedor);
            });
        },
    }
    lightbox.start();
}())