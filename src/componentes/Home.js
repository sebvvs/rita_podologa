import React from 'react';
import imagen5 from '../img/imagen5.jpeg';
import reloj from '../img/reloj.png';

function Home() {
    return (
        <section className="seccion activa" id="home">
            <div className="home-container">
                <div className="home-text">
                    <h1>Podóloga Clínica <br />
                    <span>Rita Lizama.</span></h1>
                    <button className="btn">Agende una cita <i className="bx bxs-right-arrow"></i></button>
                </div>

                <div className="home-image">
                    <img src={imagen5} alt="Imagen de inicio" />
                </div>
            </div>
            <div className="container">
                <div className="container-box">
                    <img src={reloj} alt="Reloj de horario de atención" />
                    <h3>Lunes a Viernes - 14:30 a 21:00 HORAS</h3>
                    <h3>Sábados - 8:30 a 19:00 HORAS</h3>
                    <a>Horario de atención</a>
                </div>

                <div className="container-box">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.958209669972!2d-70.62308489999995!3d-33.55446209999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662da0a1f98d6b5%3A0x5f665ee71b9387c4!2sLago%20Lucerna%2010331%2C%208800880%20La%20Granja%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses-419!2scl!4v1720488233937!5m2!1ses-419!2scl"
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Mapa de ubicación"
                    ></iframe>
                    <h3>Pasaje Lago Lucerna 10331, La Granja</h3>
                    <a href="https://maps.app.goo.gl/1yw3KfaQn2dCHy5a7" target="_blank" rel="noopener noreferrer">Dirección</a>
                </div>
            </div>
        </section>
    );
}

export default Home;
