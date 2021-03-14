(function(){
    var formulario = document.formulario_contacto;
    // form con un div como hijo
    formulario.addEventListener('submit',validar);
    var elementosDelDivDelFormulario = document.formulario_contacto.elements;
    // me da los elementos dentro del div en el formulario que son los 4 inputs
    function validar(e){
        for(var i=0; i < elementosDelDivDelFormulario.length; i++){
            if(elementosDelDivDelFormulario[i].value == '') {
                // si el capo esta vacio
                e.preventDefault();
                // detiene la recarga de la pagina
                if(elementosDelDivDelFormulario[i].parentElement.children.length < 3) {
                    // si la cantidad de elementos en el inout grup es menor a 3
                    var nuevoParrafoParaElError = document.createElement('p');
                    var textoParaElError = document.createTextNode(
                    'Por favor llena el campo con tu ' 
                    + elementosDelDivDelFormulario[i].name
                    );
                    nuevoParrafoParaElError.appendChild(textoParaElError);
                    nuevoParrafoParaElError.className = 'error';
                    elementosDelDivDelFormulario[i].parentElement.appendChild(nuevoParrafoParaElError);
                    // ya que el padre del elemento del formulario que es el input group
                    // se le agrega al final un nuevo hijo que es el parrafo creado
                }
            }
            else{
                if(elementosDelDivDelFormulario[i].parentElement.children.length >= 3) {
                    // si la cantidad de elemento sen el input group es mayor igual a 3
                    var parrafoParaElError = elementosDelDivDelFormulario[i].parentElement.getElementsByTagName('p')[0];
                    // seleccionar el parrafo de error
                    elementosDelDivDelFormulario[i].parentElement.removeChild(parrafoParaElError);
                    // removerlo del input group
                }
            }
        }
    }
}())