import React from "react";

const Producto = ({nombre, precio, stock, img}) => (
    <div className="producto">       
        <img Class="img" src={img} alt={nombre}/>
        <div className="producto-info">
            <h3>Nombre: {nombre}</h3>
            <h3>Precio: {precio}</h3>            
            <h3>Stock: {stock} unidades</h3>
            <button onClick={"carrito"}> comprar</button>
            
        </div>
    </div>
);

export default Producto;

