// src/componentes/ProductoSelector.js

import React, { useState, useEffect } from 'react';
import { fetchProductos } from './api';

const ProductoSelector = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const getProductos = async () => {
            const productosDesdeAPI = await fetchProductos();
            setProductos(productosDesdeAPI);
        };

        getProductos();
    }, []);

    return (
        <>
            {productos.map((producto) => (
                <div key={producto.id} className="row">
                    <img src={producto.image} alt={producto.title} />
                    <h3>{producto.title}</h3>
                    <p>{producto.description}</p>
                    <div className="in-text">
                        <div className="price">
                            <h6>${producto.price}</h6>
                        </div>
                        <div className="s-btn">
                            <a href="#">Agregar al carro</a>
                        </div>
                    </div>
                    <div className="top-icon">
                        <a href="#"><i className="bx bx-heart"></i></a>
                    </div>
                </div>
            ))}
        </>
    );
};

export default ProductoSelector;
