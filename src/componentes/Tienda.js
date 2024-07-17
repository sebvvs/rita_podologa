// src/componentes/Tienda.js

import React, { useState, useEffect } from "react";
import Crema from '../img/crema.jpg';
import Crema_100 from '../img/crema-100.jpg';
import Esmalte from '../img/esmalte.jpg';
import Gotitas from '../img/gotitas.jpg';
import Labial from '../img/labial.jpg';
import Aceite from '../img/aceite.jpg';
import Polvo from '../img/polvo.jpg';
import crema_aloe from '../img/crema-aloe.jpg';

function Tienda() {

    return (
        <section className="seccion" id="tienda">
            <div className="middle-text">
                <h4>Tienda</h4>
                <h2>Productos naturales y caseros</h2>
            </div>

            <div className="shop-content">
                <div className="row">
                    <img src={Crema} alt="Crema 30gr"/>
                    <h3>Crema urea al 20% - 30 grs</h3>
                    <p>Un factor hidrantante natural que ayuda a regenerar la piel seca.</p>
                    <div className="in-text">
                        <div className="price">
                            <h6>$2.500</h6>
                        </div>
                        <div className="s-btn">
                            <a href="#">Agregar al carro</a>
                        </div>
                    </div>
                    <div className="top-icon">
                        <a href="#"><i className="bx bx-heart"></i></a>
                    </div>
                </div>
                <div className="row">
                    <img src={Crema_100} alt="Crema 100gr"/>
                    <h3>Crema urea al 20% - 100 grs</h3>
                    <p>Hidratación intensa y protección natural para una piel suave, tersa y radiante.</p>
                    <div className="in-text">
                        <div className="price">
                            <h6>$6.990</h6>
                        </div>
                        <div className="s-btn">
                            <a href="#">Agregar al carro</a>
                        </div>
                    </div>
                    <div className="top-icon">
                        <a href="#"><i className="bx bx-heart"></i></a>
                    </div>
                </div>
                <div className="row">
                    <img src={Esmalte} alt="Esmalte"/>
                    <h3>Esmalte Terbinafina</h3>
                    <p>Especializada para el cuidado y tratamiento, eficaz de afecciones podológicas.</p>
                    <div className="in-text">
                        <div className="price">
                            <h6>$5.990</h6>
                        </div>
                        <div className="s-btn">
                            <a href="#">Agregar al carro</a>
                        </div>
                    </div>
                    <div className="top-icon">
                        <a href="#"><i className="bx bx-heart"></i></a>
                    </div>
                </div>
                <div className="row">
                    <img src={Gotitas} alt="Gotas antimicóticas"/>
                    <h3>Gotas antimicóticas</h3>
                    <p>Las gotas antimicóticas intervienen en el primer paso de la biosíntesis de los esteroles fúngicos.</p>
                    <div className="in-text">
                        <div className="price">
                            <h6>$2.500</h6>
                        </div>
                        <div className="s-btn">
                            <a href="#">Agregar al carro</a>
                        </div>
                    </div>
                    <div className="top-icon">
                        <a href="#"><i className="bx bx-heart"></i></a>
                    </div>
                </div>
                <div className="row">
                    <img src={Labial} alt="Labial humectante"/>
                    <h3>Labial humectante</h3>
                    <p>Su fórmula contiene sus labios suaves e hidratados. Textura cremosa y suave, no reseca los labios</p>
                    <div className="in-text">
                        <div className="price">
                            <h6>$1.990</h6>
                        </div>
                        <div className="s-btn">
                            <a href="#">Agregar al carro</a>
                        </div>
                    </div>
                    <div className="top-icon">
                        <a href="#"><i className="bx bx-heart"></i></a>
                    </div>
                </div>
                <div className="row">
                    <img src={Aceite} alt="Aceite aromático"/>
                    <h3>Aceite aromático relajante</h3>
                    <p>Es altamente hidratante y ayuda a disminuir la sensación de cansancio del cuerpo.</p>
                    <div className="in-text">
                        <div className="price">
                            <h6>$4.500</h6>
                        </div>
                        <div className="s-btn">
                            <a href="#">Agregar al carro</a>
                        </div>
                    </div>
                    <div className="top-icon">
                        <a href="#"><i className="bx bx-heart"></i></a>
                    </div>
                </div>
                <div className="row">
                    <img src={Polvo} alt="Polvo dérmico"/>
                    <h3>Polvo dérmico</h3>
                    <p>Tratamiento para la hiperhidrosis, bromhidrosis, complemento a dermatomicosis.</p>
                    <div className="in-text">
                        <div className="price">
                            <h6>$4.990</h6>
                        </div>
                        <div className="s-btn">
                            <a href="#">Agregar al carro</a>
                        </div>
                    </div>
                    <div className="top-icon">
                        <a href="#"><i className="bx bx-heart"></i></a>
                    </div>
                </div>
                <div className="row">
                    <img src={crema_aloe} alt="Crema urea + Aloe vera + Llantén"/>
                    <h3>Crema urea + Aloe vera + Llantén</h3>
                    <p>Tratamiento para la resequedad, protección de irritación y heridas.</p>
                    <div className="in-text">
                        <div className="price">
                            <h6>$4.990</h6>
                        </div>
                        <div className="s-btn">
                            <a href="#">Agregar al carro</a>
                        </div>
                    </div>
                    <div className="top-icon">
                        <a href="#"><i className="bx bx-heart"></i></a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Tienda;
