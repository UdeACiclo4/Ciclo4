import '../styless/AppAdminVerProduc.css'; 
import { Fragment } from 'react';
import Producto from './producto';
import React, { useState } from 'react';

function AppAdminSeeProduct(){  
    // const apiKey = 'KiQxqBqzWIzAsHFf7WkAclTnPrnRIvVH';
    //const peticion = "http://api.giphy.com/v1/gifs/random?api_key=${apiKey}";

    // peticion
    //     .then(resp => resp.json())
    //     .then(({data}) => {
    //         const {url} = data.images.original;
    //         const img = document.createElement('img');
    //         img.src = url;

    //         document.body.append(img);
    //     }).catch(console.warn());

    // const getImg = async() => {
    //     return ('https://www.ultrachollo.com/wp-content/uploads/2019/04/juguetes-para-perros-juego-de-regalo-de-12-paquetes-cuerda-de-bola-royalcare.jpg');
    //     }
    //     getImg().then(console.log);            

    const [stateProducto, setProducto] = useState([]);

    const getProducto = () => {
        setProducto([{
            nombre: "Kit Sweet Dreams Dog",
            precio: 10000,
            stock: 5
        }]);
    }

    return(
        <Fragment>
            <div>
                <header Class="HeaderAdmin">
                    <nav> 
                        <ul>
                            <h Class="Text1">Lista productos</h>       
                            <h Class="Text1"> Modificar productos</h>  
                            <h Class="Text1"> Lista ventas</h>
                        </ul>
                    </nav>
                </header>
                <button onClick={getProducto}> Ver Artículos</button>
                <div className='producto-container'>
                    {stateProducto.map( newProducto => (
                    <Producto key={newProducto.nombre} {...newProducto}/>) )}
                </div>
            </div>
        </Fragment>
    )
}

export default AppAdminSeeProduct;
