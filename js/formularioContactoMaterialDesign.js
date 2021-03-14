(function(){
    var formulario = document.formulario_contacto;
    var elementosDelFormulario = document.formulario_contacto.elements;
    for(var i=0;i<elementosDelFormulario.length;i++){
        if(
        elementosDelFormulario[i].type == 'text' || 
        elementosDelFormulario[i].type == 'email' ||
        elementosDelFormulario[i].nodeName.toLowerCase() == 'textarea') {
        elementosDelFormulario[i].addEventListener('focus',focus);
        elementosDelFormulario[i].addEventListener('blur',blur);
    }
    }
    function focus() {
        this.parentElement.children[1].className = 'label activo';
    }
    function blur() {
        if(this.value == '') {
        this.parentElement.children[1].className = 'label';
        }
    }
}())