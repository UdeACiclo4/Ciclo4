import '../styless/AppAdminVerProduc.css'; 
//import { stockData } from "../data.js";
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
        setProducto([
            {
              nombre: "Twitter Inc",
              ticker: "TWTR",
              precio: "22.76 USD",
              stock: "5",
              timeElapsed: "5 sec ago",
              img: "https://www.misangelitos.com.ar/image/cache/FUf8GZe77oy-600x315.png",
            },
            {
              nombre: "Square Inc",
              ticker: "SQ",
              precio: "45.28 USD",
              stock: "8",
              timeElapsed: "10 sec ago",
              img: "https://elclubmascotas.com/sites/default/files/accesorios.jpg",              
            },
            {
              nombre: "Shopify Inc",
              ticker: "SHOP",
              precio: "341.79 USD",
              stock: "15",
              timeElapsed: "3 sec ago",
              img: "https://mayoristasonce.com/wp-content/uploads/2014/11/accesorios-de-mascotas-al-por-mayor.jpg",
            },
            {
              nombre: "Sunrun Inc",
              ticker: "RUN",
              precio: "9.87 USD",
              stock: "3",
              timeElapsed: "4 sec ago",
              img: "http://alixblog.com/wp-content/uploads/2016/08/accesorios-perro-cama-coche.jpg",
            },
            {
              nombre: "Adobe Inc",
              ticker: "ADBE",
              precio: "300.99 USD",
              stock: "12",
              timeElapsed: "10 sec ago",
              img: "https://animalmascota.com/wp-content/2012/05/gato.jpg",
            },
            {
              nombre: "HubSpot Inc",
              ticker: "HUBS",
              precio: "115.22 USD",
              stock: "1",
              timeElapsed: "12 sec ago",
              img: "https://girodidacticolaplata.com.ar/wp-content/uploads/2021/02/PERRO.jpg",
            },
          ]);
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
                    <Producto key={newProducto} {...newProducto}/>) )}
                </div>
            </div>
        </Fragment>
    )
}
export default AppAdminSeeProduct;