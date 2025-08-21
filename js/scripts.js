// Función para mostrar los productos en el carrito
function displayCartItems() {
    const cartItems = document.getElementById('cart-items');
    const subtotalElement = document.getElementById('subtotal');
    const totalElement = document.getElementById('total');
    
    // Limpiar el carrito antes de mostrar los items
    cartItems.innerHTML = '';
    
    let subtotal = 0;
    
    // Recorrer todos los productos en el carrito
    cart.forEach(item => {
        // Crear elemento para cada producto
        const productElement = document.createElement('div');
        productElement.className = 'col-12 mb-3';
        productElement.innerHTML = `
            <div class="card">
                <div class="row g-0">
                    <div class="col-md-2">
                        <img src="${item.image}" class="img-fluid rounded-start" alt="${item.name}">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${item.name}</h5>
                            <p class="card-text">${item.price}</p>
                            <div class="input-group" style="width: 120px;">
                                <button class="btn btn-outline-secondary" type="button">-</button>
                                <input type="text" class="form-control text-center" value="${item.quantity}">
                                <button class="btn btn-outline-secondary" type="button">+</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-2 d-flex align-items-center justify-content-end">
                        <button class="btn btn-danger remove-item" data-id="${item.id}">
                            Eliminar
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        cartItems.appendChild(productElement);
        subtotal += parseFloat(item.price.replace('$', ''));
    });
    
    // Calcular totales
    const shipping = 10.00; // Costo fijo de envío
    const total = subtotal + shipping;
    
    // Actualizar los totales
    subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
    totalElement.textContent = `$${total.toFixed(2)}`;
}

// Llamar a la función cuando se cargue la página
document.addEventListener('DOMContentLoaded', () => {
    displayCartItems();
    
    // Aquí iría más lógica para manejar los botones +/-, eliminar, etc.
});