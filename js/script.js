/* Funcionalidades para la Tienda */


function start(e) {
    e.dataTransfer.effecAllowed = 'move'; // Define el efecto como mover (Es el por defecto)
    e.dataTransfer.setData("Data", e.target.id); // Coje el elemento que se va a mover
    e.dataTransfer.setDragImage(e.target, 0, 0); // Define la imagen que se vera al ser arrastrado el elemento y por donde se coje el elemento que se va a mover (el raton aparece en la esquina sup_izq con 0,0)
    e.target.style.opacity = '0.4'; 
}

function end(e){
    e.target.style.opacity = ''; // Pone la opacidad del elemento a 1 			
    e.dataTransfer.clearData("Data");
}

function drop(e){

    var elementoArrastrado = e.dataTransfer.getData("Data"); // Elemento arrastrado
    e.target.appendChild(document.getElementById(elementoArrastrado));
    e.target.style.border = '';  // Quita el borde
    tamContX = $('#'+e.target.id).width();
    tamContY = $('#'+e.target.id).height();

    tamElemX = $('#'+elementoArrastrado).width();
    tamElemY = $('#'+elementoArrastrado).height();

    posXCont = $('#'+e.target.id).position().left;
    posYCont = $('#'+e.target.id).position().top;

    // Posicion absoluta del raton
    x = e.layerX;
    y = e.layerY;

    // Si parte del elemento que se quiere mover se queda fuera se cambia las coordenadas para que no sea asi
    if (posXCont + tamContX <= x + tamElemX){
        x = posXCont + tamContX - tamElemX;
    }

    if (posYCont + tamContY <= y + tamElemY){
        y = posYCont + tamContY - tamElemY;
    }

    document.getElementById(elementoArrastrado).style.position = "absolute";
    document.getElementById(elementoArrastrado).style.left = x + "px";
    document.getElementById(elementoArrastrado).style.top = y + "px";
}
