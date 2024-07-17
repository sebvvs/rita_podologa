import React from "react";

function FormularioCompra() {
    return (
        <section class="seccion" id="formulario-compra" style={{ display: 'none' }}>
        <h2>Información de Compra</h2>
        <form id="form-compra">
            <div class="campo">
                <label for="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre" required />
            </div>
            <div class="campo">
                <label for="rut">RUT:</label>
                <input type="text" id="rut" name="rut" required />
            </div>
            <div class="campo">
                <label for="direccion">Dirección:</label>
                <input type="text" id="direccion" name="direccion" required /> 
            </div>
            <div class="campo">
                <label for="comuna">Comuna:</label>
                <input type="text" id="comuna" name="comuna" required />
            </div>
            <button type="submit">Confirmar Compra</button>
        </form>
    </section>
    )
}

export default FormularioCompra;