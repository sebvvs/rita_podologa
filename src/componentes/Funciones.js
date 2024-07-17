import Logo from '../img/logo.png'
import Logo_claro from '../img/logo_claro.png'

// Array para almacenar los productos en el carrito
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

// Función para agregar producto al carrito
export function agregarAlCarro(nombre, precio) {
    // Verificar si el producto ya está en el carrito
    const productoExistente = carrito.find(producto => producto.nombre === nombre);
    if (productoExistente) {
        // Incrementar la cantidad si ya está en el carrito
        productoExistente.cantidad++;
    } else {
        // Agregar nuevo producto al carrito
        carrito.push({ nombre: nombre, precio: precio, cantidad: 1 });
    }
    // Actualizar la tabla del carrito
    actualizarTablaCarrito();
}

// Función para formatear precios
export function formatearPrecio(precio) {
    return precio.toFixed(3).replace(/\d(?=(\d{3})+\.)/g, '$&,').replace('.', ',');
}

// Función para actualizar la tabla del carrito
export function actualizarTablaCarrito() {
    const tbody = document.querySelector('#tabla-carrito tbody');
    if (tbody) {
        tbody.innerHTML = ''; // Limpiar la tabla

        carrito.forEach((producto, index) => {
            const fila = document.createElement('tr');

            const celdaNombre = document.createElement('td');
            celdaNombre.textContent = producto.nombre;
            fila.appendChild(celdaNombre);

            const celdaPrecio = document.createElement('td');
            celdaPrecio.textContent = `$${formatearPrecio(producto.precio)}`;
            fila.appendChild(celdaPrecio);

            const celdaCantidad = document.createElement('td');
            const inputCantidad = document.createElement('input');
            inputCantidad.type = 'number';
            inputCantidad.value = producto.cantidad;
            inputCantidad.min = '1';
            inputCantidad.addEventListener('change', (event) => {
                producto.cantidad = parseInt(event.target.value);
                actualizarTablaCarrito();
            });
            celdaCantidad.appendChild(inputCantidad);
            fila.appendChild(celdaCantidad);

            const celdaAcciones = document.createElement('td');
            const botonEliminar = document.createElement('button');
            botonEliminar.textContent = 'Eliminar';
            botonEliminar.addEventListener('click', () => {
                eliminarDelCarrito(index);
            });
            celdaAcciones.appendChild(botonEliminar);
            fila.appendChild(celdaAcciones);

            tbody.appendChild(fila);
        });

        // Guardar el carrito en localStorage
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }
}

// Función para eliminar un producto del carrito
export function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    actualizarTablaCarrito();
}

// Función para mostrar el formulario de compra
export function mostrarFormularioCompra() {
    mostrarVista('formulario-compra');
}

// Función para guardar los datos de compra en localStorage
export function guardarDatosCompra(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const rut = document.getElementById('rut').value;
    const direccion = document.getElementById('direccion').value;
    const comuna = document.getElementById('comuna').value;

    if (!nombre || !rut || !direccion || !comuna) {
        alert('Por favor, complete todos los campos.');
        return;
    }

    const datosCompra = { nombre, rut, direccion, comuna, carrito };
    localStorage.setItem('datosCompra', JSON.stringify(datosCompra));

    alert('Compra confirmada y datos guardados en localStorage.');
    mostrarVista('gestion-datos');
    mostrarDatosCompra();
}

// Función para mostrar los datos de compra guardados
export function mostrarDatosCompra() {
    const datosCompra = JSON.parse(localStorage.getItem('datosCompra'));
    const contenedorDatos = document.getElementById('datos-compra');

    if (datosCompra && contenedorDatos) {
        contenedorDatos.innerHTML = `
            <p><strong>Nombre:</strong> ${datosCompra.nombre}</p>
            <p><strong>RUT:</strong> ${datosCompra.rut}</p>
            <p><strong>Dirección:</strong> ${datosCompra.direccion}</p>
            <p><strong>Comuna:</strong> ${datosCompra.comuna}</p>
            <button id="editar-datos">Editar</button>
            <button id="eliminar-datos">Eliminar</button>
        `;

        document.getElementById('editar-datos').addEventListener('click', editarDatosCompra);
        document.getElementById('eliminar-datos').addEventListener('click', eliminarDatosCompra);
    } else if (contenedorDatos) {
        contenedorDatos.innerHTML = '<p>No hay datos de compra guardados.</p>';
    }
}

// Función para editar los datos de compra guardados
export function editarDatosCompra() {
    const datosCompra = JSON.parse(localStorage.getItem('datosCompra'));

    if (datosCompra) {
        document.getElementById('nombre').value = datosCompra.nombre;
        document.getElementById('rut').value = datosCompra.rut;
        document.getElementById('direccion').value = datosCompra.direccion;
        document.getElementById('comuna').value = datosCompra.comuna;

        mostrarVista('formulario-compra');
    }
}

// Función para eliminar los datos de compra guardados
export function eliminarDatosCompra() {
    localStorage.removeItem('datosCompra');
    alert('Datos de compra eliminados.');
    mostrarDatosCompra();
}

// Función para verificar si el carrito está vacío
export function carritoVacio() {
    return carrito.length === 0;
}

// Función para modo oscuro 
export function modoOscuro() {
    const fondo = document.querySelector("body");
    const header = document.querySelector("header");
    const btn = document.querySelector(".btn");
    const containerBoxes = document.querySelectorAll(".container-box");
    const rows = document.querySelectorAll(".shop-content .row");
    const s_btn = document.querySelectorAll(".s-btn");
    const footer = document.querySelector("footer");
    const imagen = document.getElementById("logo");
  
    if (fondo) {
      if (fondo.style.backgroundColor === "rgb(30, 30, 30)") {
        fondo.style.backgroundColor = "#ffdcfc";
        if (header) header.style.backgroundColor = "#ffdcfc";
        if (header) header.style.color = "#000000";
        if (footer) footer.style.backgroundColor = "#ff7cf4";
        if (btn) btn.style.backgroundColor = "#ff9ae1";
        containerBoxes.forEach(box => {
          box.style.backgroundColor = "#ff9ae1";
        });
        rows.forEach(row => {
          row.style.backgroundColor = "#e8dfd8";
        });
        s_btn.forEach(button => {
          button.style.backgroundColor = "#ecbeec";
        });
  
        if (imagen) {
          imagen.src = Logo;
          console.log("Cambiado a img/Logo.png");
        }
  
      } else { 
        fondo.style.backgroundColor = "#1e1e1e";
        if (header) header.style.backgroundColor = "#A0A0A0";
        if (header) header.style.color = "#FFFFFF";
        if (footer) footer.style.backgroundColor = "#A0A0A0";
        if (btn) btn.style.backgroundColor = "#333333";
        containerBoxes.forEach(box => {
          box.style.backgroundColor = "#333333";
        });
        rows.forEach(row => {
          row.style.backgroundColor = "#333333";
        });
        s_btn.forEach(button => {
          button.style.backgroundColor = "#333333";
        });
  
        if (imagen) {
          imagen.src = Logo_claro;
          console.log("Cambiado a img/logo_claro.png");
        }
      }
    }
}

// Función para mostrar la vista correspondiente y ocultar las demás
export function mostrarVista(id) {
    const secciones = document.querySelectorAll('.seccion');
    secciones.forEach(seccion => {
        seccion.style.display = 'none';
    });

    const seccionActiva = document.getElementById(id);
    if (seccionActiva) {
        seccionActiva.style.display = 'block';
    }
}
