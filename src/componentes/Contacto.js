import React from "react";

function Contacto() {
    return (
        <section class="seccion" id="contacto">
        <h2>Contáctame</h2>
        <form action="form.html">
            <div class="campo">
                <label for="name">Nombre:</label>
                <input type="text" id="name" name="name" required />
            </div>
            <div class="campo">
                <label for="email">Correo electrónico:</label>
                <input type="text" id="email" name="email" required />
            </div>
            <div class="campo">
                <label for="asunto">Asunto:</label>
                <input type="text" id="asunto" name="asunto" required />
            </div>
            <div class="campo">
                <label for="mensaje">Mensaje:</label>
                <textarea id="mensaje" name="mensaje" rows="4" required></textarea>
            </div>
            <button type="submit">Enviar</button>
        </form>
    </section>
    )
}

export default Contacto;