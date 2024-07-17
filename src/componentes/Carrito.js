import React from "react";

function Carrito() {
    return (
        <section className="seccion" id="carrito" style={{ display: 'none' }}>
        <h2>Carrito de Compras</h2>
        <table id="tabla-carrito">
            <thead>
                <tr>
                    <th>Producto</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {/* Los elementos del carrito se agregarán aquí dinámicamente  */}
            </tbody>
        </table>
        <button id="btn-comprar">Comprar</button>
    </section>
    )
}

export default Carrito;
