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

    let eli = "lin" + contador;

    let linea = `<div id="lin${contador}" class="linea"><span class="articulo"><span class="borrar" onclick="eliminar('${eli}')" data-pos="${eli}">X</span><span class="nombre"> ${nombreArrastrado}</span></span>`;
    linea += '<span class="precioTotal"><span id="prto' + contador + '" class="prto">' + precioArrastrado + '</span> €</span></div>';

    laLista.innerHTML += linea;

    precioArrastrado = parseFloat(precioArrastrado);
    total = total + precioArrastrado;

    money.innerHTML = total.toFixed(2);

    contador++;
}

function eliminar(id_linea){

    let linea = document.getElementById(id_linea);

    let money = document.getElementById("money");
    let total = money.innerHTML;
    total = parseFloat(total);
    total = total.toFixed(2);

    let cadena = id_linea.substring(3);

    cadena = "prto" + cadena;

    console.log(cadena);

    let precio = document.getElementById(cadena);
    let prec = precio.innerHTML;
    prec = parseFloat(prec);
    prec = prec.toFixed(2);

    total = total - prec;
    total = total.toFixed(2);

    money.innerHTML = total;

    linea.parentNode.removeChild(linea);
}