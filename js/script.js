/* Funcionalidades para la Tienda */


function comienzoArrastre(event){
    event.dataTransfer.setData('id_arrastrado', event.target.id);
    event.dataTransfer.setData('nombreProducto', event.target.dataset.nom);
    event.dataTransfer.setData('precioProducto', event.target.dataset.pre);

}

function arrastrando(event){
    //pruebas
}

function permitirSoltar(event){
    event.preventDefault();
}

function alSoltar(objetoContainer, event){
    var idArrastrado = event.dataTransfer.getData('id_arrastrado'); 
    var nombreArrastrado = event.dataTransfer.getData('nombreProducto');
    var precioArrastrado = event.dataTransfer.getData('precioProducto');
    //objetoContainer.innerHTML = document.getElementById(idArrastrado).outerHTML;
    var laLista = document.getElementById('totales');
    var linea = '<tr><td>' + nombreArrastrado + '</td><td>' + precioArrastrado + '</td></tr>';
    laLista.innerHTML += linea;
}