import React from "react";

const Producto = ({nombre, precio, stock}) => (
    <div className="producto">       
        <img src="https://www.misangelitos.com.ar/image/cache/FUf8GZe77oy-600x315.png" alt={nombre}/>
        <div className="producto-info">
            <h4>Nombre: {nombre}</h4>
            <h4>Precio: ${precio}</h4>            
            <h4>Stock: {stock} unidades</h4>
        </div>
    </div>
);

export default Producto;