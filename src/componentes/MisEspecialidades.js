import React from "react";
import Imagen2 from '../img/imagen2.jpg';
import DataFetcher from "./DataFetcher";


function MisEspecialidades() {
    return (
        <section className="seccion" id="misespecialidades">
            <h2>Mis Especialidades</h2><br/>
            <div className="contenedor">
                <div className="imagen2">
                    <img src={Imagen2} alt="Especialidad" />
                </div>
                <div className="texto">
                    <h3>Reflexología</h3>
                    <h5>¿Qué es?</h5>
                    <p>
                        Se considera la aplicación de una presión sobre distintos puntos de los pies,
                        mejora el flujo sanguíneo, los impulsos nerviosos y conduce a una liberación de toxinas y endorfinas,
                        lo que facilita una potenciación de la función nerviosa y crea una sensación de bienestar.
                    </p><br/>
                    <h3>Podología</h3>
                    <p>
                        El podólogo es el profesional sanitario universitario con los conocimientos,
                        habilidades y aptitudes para realizar las actividades dirigidas a la prevención,
                        al diagnóstico y tratamiento de las afecciones y deformidades de los pies,
                        mediante procedimientos terapéuticos podológicos.
                    </p>
                </div>
            </div><br /><br /><br />
            <DataFetcher />
        </section>
    )
}

export default MisEspecialidades;
