import React, { useEffect } from "react";
import Logo from '../img/logo.png';
import { mostrarVista, agregarAlCarro, mostrarFormularioCompra, guardarDatosCompra, mostrarDatosCompra, actualizarTablaCarrito, carritoVacio, modoOscuro } from "./Funciones";

function Header() {
    useEffect(() => {
        // Mostrar solo la vista 'home' al cargar la página
        ocultarTodasLasVistas();
        mostrarVista('home');
        actualizarTablaCarrito();
        mostrarDatosCompra();

        // Agregar los event listeners a los botones "Agregar al carro"
        const botonesAgregar = document.querySelectorAll('.s-btn a');
        if (botonesAgregar) {
            botonesAgregar.forEach(boton => {
                boton.addEventListener('click', (event) => {
                    event.preventDefault();
                    const producto = event.target.closest('.row');
                    if (producto) {
                        const nombre = producto.querySelector('h3').textContent;
                        const precio = parseFloat(producto.querySelector('.price h6').textContent.replace('$', ''));
                        agregarAlCarro(nombre, precio);
                    }
                });
            });
        }

        // Mostrar la vista del carrito cuando se haga clic en el ícono del carrito
        const cartIcon = document.querySelector('#cart-icon');
        if (cartIcon) {
            cartIcon.addEventListener('click', (event) => {
                event.preventDefault();
                mostrarVista('carrito');
            });
        }

        // Mostrar el formulario de compra cuando se haga clic en el botón "Comprar"
        const btnComprar = document.querySelector('#btn-comprar');
        if (btnComprar) {
            btnComprar.addEventListener('click', (event) => {
                event.preventDefault();
                if (carritoVacio()) {
                    alert('El carrito está vacío. Por favor, agregue productos antes de comprar.');
                } else {
                    mostrarFormularioCompra();
                }
            });
        }

        // Manejar el formulario de compra
        const formCompra = document.getElementById('form-compra');
        if (formCompra) {
            formCompra.addEventListener('submit', guardarDatosCompra);
        }

        // Manejar el clic en el ícono del menú
        const menuIcon = document.getElementById('menu-icon');
        const navList = document.querySelector('.navlist');
        if (menuIcon && navList) {
            menuIcon.addEventListener('click', () => {
                navList.classList.toggle('active');
            });
        }
    }, []);

    const ocultarTodasLasVistas = () => {
        const secciones = document.querySelectorAll('.seccion');
        secciones.forEach(seccion => {
            seccion.style.display = 'none';
        });
    };

    return (
        <header>
            <div className="logo">
                <img id="logo" src={Logo} alt="Logo" />
            </div>

            <ul className="navlist">
                <li>
                    <p onClick={() => mostrarVista('home')}>Inicio</p>
                </li>
                <li>
                    <p onClick={() => mostrarVista('sobremi')}>Sobre mí</p>
                </li>
                <li>
                    <p onClick={() => mostrarVista('tienda')}>Mis Productos</p>
                </li>
                <li>
                    <p onClick={() => mostrarVista('misespecialidades')}>Mis Especialidades</p>
                </li>
                <li>
                    <p onClick={() => mostrarVista('contacto')}>Contacto</p>
                </li>
            </ul>
            
            <div className="nav-icons">
                <div className="bx bx-menu" id="menu-icon"></div>
                <p id="cart-icon"><i className="bx bx-cart"></i></p>
                <div onClick={modoOscuro} id="bx bx-moon"><i class='bx bxs-moon'></i></div>
            </div>
        </header>
    );
};

export default Header;
