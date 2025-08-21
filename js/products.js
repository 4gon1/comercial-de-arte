// Filtrado de productos
document.getElementById('category-filter').addEventListener('change', filterProducts);
document.getElementById('price-filter').addEventListener('change', filterProducts);

function filterProducts() {
    const category = document.getElementById('category-filter').value;
    const priceOrder = document.getElementById('price-filter').value;
    const products = document.querySelectorAll('.product-card');
    
    products.forEach(product => {
        const productCategory = product.closest('[data-category]').dataset.category;
        const showProduct = category === 'Todas las categorías' || productCategory === category;
        
        product.closest('.col-lg-4').style.display = showProduct ? 'block' : 'none';
    });

    // Ordenar por precio
    if(priceOrder !== 'Ordenar por precio') {
        const productsGrid = document.getElementById('products-grid');
        const productItems = Array.from(productsGrid.children);
        
        productItems.sort((a, b) => {
            const priceA = parseFloat(a.dataset.price);
            const priceB = parseFloat(b.dataset.price);
            return priceOrder === 'asc' ? priceA - priceB : priceB - priceA;
        });
        
        productsGrid.innerHTML = '';
        productItems.forEach(item => productsGrid.appendChild(item));
    }
}

// Añadir al carrito
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const productId = this.dataset.id;
        const productCard = this.closest('.product-card');
        const productName = productCard.querySelector('.card-title').textContent;
        const productPrice = productCard.querySelector('.price').textContent;
        const productImage = productCard.querySelector('img').src;
        
        // Añadir al array del carrito
        cart.push({
            id: productId,
            name: productName,
            price: productPrice,
            image: productImage,
            quantity: 1
        });
        
        updateCartCount();
        alert(`${productName} añadido al carrito`);
    });
});