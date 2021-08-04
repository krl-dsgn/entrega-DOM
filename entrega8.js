class Planta {
    constructor(nombre, altura, tipo, precio){
        this.nombre = nombre;
        this.altura = altura;
        this.tipo = tipo;
        this.precio = precio;
    };

    toString(){
        return `${this.nombre} - $${this.precio}`
    }
    
    iva(){
        return parseFloat(this.precio) * 0.19;
    }

    precioTotal(){
        return parseFloat(this.precio) + parseFloat(this.iva());
    }
}

const arregloPlantas = []

let solicitarDatos = true;
alert("Añade las plantas al catálogo. Su nombre, precio, altura en cm y tipo (interior o exterior). Escribe ESC para terminar.")
do{
    const nombre = prompt('Nombre planta');
    let altura;
    let tipo;
    let precio;
    if (nombre === 'ESC'){
        solicitarDatos = false;
        alert("Ha cancelado el agregar planta.")
    }else {
        altura = prompt('Altura planta');
        if (altura === 'ESC'){
            solicitarDatos = false;
            alert("Ha cancelado el agregar planta.");
        }else {
            tipo = prompt('Tipo planta');
            if (tipo === 'ESC'){
                solicitarDatos = false;
                alert("Ha cancelado el agregar planta.");
            }else {
                precio  = prompt("Precio de planta");
                if (precio === 'ESC'){
                    solicitarDatos = false;
                    alert("Ha cancelado el agregar planta.");
                }
            }
        }
    }
   
 
 
    
    if (solicitarDatos){
        const nuevaPlanta = new Planta(nombre, altura, tipo, precio);
        arregloPlantas.push(nuevaPlanta);
       // alert(`Planta agregada: ${nuevaPlanta.toString()}.  Precio + IVA: ${nuevaPlanta.precioTotal()}`)    
    }


}while(solicitarDatos);

const contenedor = document.getElementById('contenedor-plantas');

for(const planta of arregloPlantas){
    //Div producto
    const elementoPlanta = crearElementoPlanta();
    //Imagen
    const imgPlanta = crearImagenPlanta();
    //Nombre
    const nombrePlanta = crearNombrePlanta(planta);
    //Categoria
    const categoriaPlanta = crearElementoCategoriaPlanta(planta);
    //Valor
    const valorPlanta = crearElementoValorPlanta(planta);
    elementoPlanta.appendChild(imgPlanta);
    elementoPlanta.appendChild(nombrePlanta);
    elementoPlanta.appendChild(categoriaPlanta);
    elementoPlanta.appendChild(valorPlanta);
    contenedor.appendChild(elementoPlanta);
}




function crearElementoPlanta () {
    const elementoPlanta = document.createElement('div');
    elementoPlanta.classList.add('producto');
    return elementoPlanta
}


function crearImagenPlanta(){
    const elementoImg = document.createElement('img');
    elementoImg.src = 'monstera.jpeg';
    return elementoImg
}

function crearNombrePlanta(planta) {
    const nombreProductoElement = document.createElement('p');
    nombreProductoElement.classList.add('nombreProducto');
    nombreProductoElement.innerHTML = planta.nombre;
    return nombreProductoElement
}

function crearElementoCategoriaPlanta(planta) {
    const categoriaProductoElement = document.createElement('p');
    categoriaProductoElement.classList.add('categoriaProducto');
    categoriaProductoElement.innerHTML = planta.tipo;
    return categoriaProductoElement
}

function crearElementoValorPlanta(planta){
    const valorProductoElement = document.createElement('p');
    valorProductoElement.classList.add('valorProducto');
    valorProductoElement.innerHTML = planta.precio;
    return valorProductoElement
}