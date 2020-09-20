/* Funcionalidades para la Tienda */

//Contador que se incrementará cada vez que soltemos un objeto en la lista de la compra para añadir al id de línea y que no haya ids iguales
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

    //Esta variable vale 0 si el artículo aún no se ha añadido previamente
    let existe = 0;

    //Aquí comprobamos la existencia previa o no de un artículo en la lista para actuar en consecuencia
    let lineas = document.getElementsByClassName("nombre");
    for(let i=0;i<lineas.length;i++){

        let nombre = lineas[i].innerHTML;
        nombre = nombre.trim();

        if(nombreArrastrado == nombre){
            existe = 1;
        }
    }

    if(existe == 1){
        //Incrementamos el multiplicador de línea de producto
        let multiplicador = document.getElementById("mul-" + nombreArrastrado).innerHTML;
        multiplicador = multiplicador.substring(1);
        multiplicador = +multiplicador;
        multiplicador++;
        let nuevoMulti = document.getElementById("mul-" + nombreArrastrado);
        nuevoMulti.innerHTML = `x${multiplicador}`;

        //Incrementamos en total general
        precioArrastrado = parseFloat(precioArrastrado);
        total = total + precioArrastrado;
    
        money.innerHTML = total.toFixed(2);


    }else{
        let eli = "lin" + contador;

        let linea = `<div id="lin${contador}" class="linea"><span class="articulo"><span class="borrar" onclick="eliminar('${eli}')" data-pos="${eli}">X</span><span class="nombre"> ${nombreArrastrado}</span></span>`;
        linea += `<span id="mul-${nombreArrastrado}" name="lin${contador}">x1</span><span class="precioTotal"><span id="prto${contador}" class="prto">${precioArrastrado}</span> €</span></div>`;
    
        laLista.innerHTML += linea;
    
        precioArrastrado = parseFloat(precioArrastrado);
        total = total + precioArrastrado;
    
        money.innerHTML = total.toFixed(2);
    
        contador++;
    }


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

    let multiplicador = document.getElementsByName(id_linea)[0].innerHTML;
    multiplicador = multiplicador.substring(1);
    multiplicador = +multiplicador;

    total = total - (prec * multiplicador);
    total = total.toFixed(2);

    money.innerHTML = total;

    linea.parentNode.removeChild(linea);
}

/* Esto es solo para los casos en los que estemos desde móvil o tablet, ya que drag&drop dejará de funcionar en el navegador */ 
if( navigator.userAgent.match(/Android/i)
|| navigator.userAgent.match(/webOS/i)
|| navigator.userAgent.match(/iPhone/i)
|| navigator.userAgent.match(/iPad/i)
|| navigator.userAgent.match(/iPod/i)
|| navigator.userAgent.match(/BlackBerry/i)
|| navigator.userAgent.match(/Windows Phone/i)) {

    // estamos desde un movil o tablet
    let productos = document.getElementsByClassName('prod-img');
    for(let i=0;i<productos.length;i++){
        //productos[i].addEventListener("click", agregarProducto, false);
        productos[i].onclick = function(){
            let nombreProducto = this.dataset.nom;
            let precioProducto = this.dataset.pre;
            let laLista = document.getElementById('listaCompra');
            let money = document.getElementById("money");
            let total = money.innerHTML;
            total = parseFloat(total);
        
            //Esta variable vale 0 si el artículo aún no se ha añadido previamente
            let existe = 0;
        
            //Aquí comprobamos la existencia previa o no de un artículo en la lista para actuar en consecuencia
            let lineas = document.getElementsByClassName("nombre");
            for(let i=0;i<lineas.length;i++){
        
                let nombre = lineas[i].innerHTML;
                nombre = nombre.trim();
        
                if(nombreProducto == nombre){
                    existe = 1;
                }
            }
        
            if(existe == 1){
                //Incrementamos el multiplicador de línea de producto
                let multiplicador = document.getElementById("mul-" + nombreProducto).innerHTML;
                multiplicador = multiplicador.substring(1);
                multiplicador = +multiplicador;
                multiplicador++;
                let nuevoMulti = document.getElementById("mul-" + nombreProducto);
                nuevoMulti.innerHTML = `x${multiplicador}`;
        
                //Incrementamos en total general
                precioProducto = parseFloat(precioProducto);
                total = total + precioProducto;
            
                money.innerHTML = total.toFixed(2);
        
        
            }else{
                let eli = "lin" + contador;
        
                let linea = `<div id="lin${contador}" class="linea"><span class="articulo"><span class="borrar" onclick="eliminar('${eli}')" data-pos="${eli}">X</span><span class="nombre"> ${nombreProducto}</span></span>`;
                linea += `<span id="mul-${nombreProducto}" name="lin${contador}">x1</span><span class="precioTotal"><span id="prto${contador}" class="prto">${precioProducto}</span> €</span></div>`;
            
                laLista.innerHTML += linea;
            
                precioProducto = parseFloat(precioProducto);
                total = total + precioProducto;
            
                money.innerHTML = total.toFixed(2);
            
                contador++;
            }
        }
    }
}