/* Funcionalidades para la Tienda */

let contador = 0;

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
    let nombreArrastrado = event.dataTransfer.getData('nombreProducto');
    let precioArrastrado = event.dataTransfer.getData('precioProducto');
    let laLista = document.getElementById('listaCompra');
    let money = document.getElementById("money");
    let total = money.innerHTML;
    total = parseFloat(total);

    let linea = '<div class="linea"><span class="articulo">X<span class="nombre"> ' + nombreArrastrado + '</span></span>';
    linea += '<span class="precioTotal"><span id="prto">' + precioArrastrado + '</span> €</span></div>';

    laLista.innerHTML += linea;

    precioArrastrado = parseFloat(precioArrastrado);
    total = total + precioArrastrado;

    money.innerHTML = total.toFixed(2);
}