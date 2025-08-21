// Base de datos de productos (puedes moverla a un archivo aparte)
const productos = [
    {
        id: 1,
        nombre: "Atardecer en Venecia",
        categoria: "paisajes",
        precio: 189.99,
        imagen: "img/cuadro1.jpg",
        descripcion: "Óleo sobre lienzo. 50x70cm",
        destacado: true
    },
    {
        id: 2,
        nombre: "Emociones Abstractas",
        categoria: "abstracto",
        precio: 220.50,
        imagen: "img/cuadro2.jpg",
        descripcion: "Acrílico sobre lienzo. 60x90cm",
        destacado: false
    },
    // Agrega más productos aquí...
];

// Función para renderizar productos
function renderizarProductos(productosAMostrar = productos) {
    const grid = document.getElementById('products-grid');
    grid.innerHTML = '';

    productosAMostrar.forEach(producto => {
        grid.innerHTML += `
            <div class="col-md-6 col-lg-4 col-xl-3" data-category="${producto.categoria}" data-price="${producto.precio}">
                <div class="card h-100 shadow-sm">
                    <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                    <div class="card-body">
                        <h5 class="card-title">${producto.nombre}</h5>
                        <p class="card-text text-muted">${producto.descripcion}</p>
                    </div>
                    <div class="card-footer bg-white">
                        <div class="d-flex justify-content-between align-items-center">
                            <span class="h5 text-primary">$${producto.precio.toFixed(2)}</span>
                            <button class="btn btn-sm btn-outline-primary add-to-cart" data-id="${producto.id}">
                                <i class="fas fa-cart-plus"></i> Añadir
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });

    // Agregar eventos a los botones
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', agregarAlCarrito);
    });
}

// Función para agregar al carrito
function agregarAlCarrito(e) {
    const id = e.target.dataset.id;
    const producto = productos.find(p => p.id == id);
    
    // Aquí iría la lógica para agregar al carrito
    console.log(`Agregado: ${producto.nombre}`);
    actualizarContadorCarrito();
}

// Filtrado de productos
document.getElementById('search-input').addEventListener('input', filtrarProductos);
document.getElementById('category-filter').addEventListener('change', filtrarProductos);
document.getElementById('price-filter').addEventListener('change', filtrarProductos);

function filtrarProductos() {
    const busqueda = document.getElementById('search-input').value.toLowerCase();
    const categoria = document.getElementById('category-filter').value;
    const precio = document.getElementById('price-filter').value;

    let productosFiltrados = productos.filter(p => 
        p.nombre.toLowerCase().includes(busqueda) && 
        (categoria === 'all' || p.categoria === categoria)
    );

    // Ordenar por precio
    if (precio === 'price-asc') {
        productosFiltrados.sort((a, b) => a.precio - b.precio);
    } else if (precio === 'price-desc') {
        productosFiltrados.sort((a, b) => b.precio - a.precio);
    }

    renderizarProductos(productosFiltrados);
}

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    renderizarProductos();
    actualizarContadorCarrito();
});