// Array completo de productos
const products = [
    // Ceviches
    {
        id: 1,
        name: "Ceviche de Maruchas",
        category: "ceviches",
        price: 15.00,
        description: "Ceviche fresco de maruchas.",
        image: "./images/menu/ceviche-maruchas.jpg",
        available: true
    },
    {
        id: 2,
        name: "Ceviche Simple",
        category: "ceviches",
        price: 15.00,
        description: "Ceviche clásico de pescado.",
        image: "./images/menu/ceviche-simple.jpg",
        available: true
    },
    {
        id: 3,
        name: "Ceviche Mixto",
        category: "ceviches",
        price: 20.00,
        description: "Ceviche mixto de pescado y mariscos.",
        image: "./images/menu/ceviche-mixto.jpg",
        available: true
    },
    {
        id: 4,
        name: "Ceviche de Cangrejos",
        category: "ceviches",
        price: 25.00,
        description: "Ceviche especial de cangrejos.",
        image: "./images/menu/ceviche-cangrejos.jpg",
        available: true
    },
    {
        id: 5,
        name: "Leche de Tigre",
        category: "ceviches",
        price: 15.00,
        description: "Leche de tigre tradicional.",
        image: "./images/menu/leche-tigre.jpg",
        available: true
    },
    {
        id: 6,
        name: "Ceviche de Conchas Negras",
        category: "ceviches",
        price: 15.00,
        description: "Ceviche de conchas negras disponible solo jueves.",
        image: "./images/menu/ceviche-conchas-negras.jpg",
        available: true
    },
    {
        id: 7,
        name: "Chancadito de Cangrejos",
        category: "ceviches",
        price: 25.00,
        description: "Chancadito especial de cangrejos.",
        image: "./images/menu/chancadito-cangrejos.jpg",
        available: true
    },
    // Combinados
    {
        id: 11,
        name: "Combinado Simple",
        category: "combinados",
        price: 10.00,
        description: "Combinado simple tradicional.",
        image: "./images/menu/combinado-simple.jpg",
        available: true
    },
    {
        id: 12,
        name: "Combinado con Patita",
        category: "combinados",
        price: 13.00,
        description: "Combinado acompañado de patita.",
        image: "./images/menu/combinado-patita.jpg",
        available: true
    },
    {
        id: 13,
        name: "Patita con Ceviche",
        category: "combinados",
        price: 15.00,
        description: "Patita servida con ceviche fresco.",
        image: "./images/menu/patita-ceviche.jpg",
        available: true
    },
    {
        id: 14,
        name: "Patita en Fiambre",
        category: "combinados",
        price: 14.00,
        description: "Patita en fiambre tradicional.",
        image: "./images/menu/patita-fiambre.jpg",
        available: true
    },
    // Duos Marinos
    {
        id: 20,
        name: "Ceviche de Maruchas con Chicharrón de Pescado",
        category: "duos-marinos",
        price: 25.00,
        description: "Ceviche de maruchas acompañado de chicharrón de pescado.",
        image: "./images/menu/duo-maruchas-chicharron.jpg",
        available: true
    },
    {
        id: 21,
        name: "Ceviche con Chicharrón de Pescado",
        category: "duos-marinos",
        price: 25.00,
        description: "Ceviche clásico acompañado de chicharrón de pescado.",
        image: "./images/menu/duo-ceviche-chicharron.jpg",
        available: true
    },
    {
        id: 22,
        name: "Ceviche Mixto con Chicharrón de Pescado",
        category: "duos-marinos",
        price: 30.00,
        description: "Ceviche mixto acompañado de chicharrón de pescado.",
        image: "./images/menu/duo-mixto-chicharron.jpg",
        available: true
    },
    // Porciones
    {
        id: 30,
        name: "Tallarín con Crema",
        category: "porciones",
        price: 5.00,
        description: "Porción de tallarín con crema.",
        image: "./images/menu/tallarin-crema.jpg",
        available: true
    },
    {
        id: 31,
        name: "Porción de Yuca",
        category: "porciones",
        price: 3.00,
        description: "Porción de yuca frita.",
        image: "./images/menu/porcion-yuca.jpg",
        available: true
    },
    {
        id: 32,
        name: "Porción de Cangrejo",
        category: "porciones",
        price: 5.00,
        description: "Porción de cangrejo fresco.",
        image: "./images/menu/porcion-cangrejo.jpg",
        available: true
    },
    {
        id: 33,
        name: "Porción de arroz",
        category: "porciones",
        price: 4.00,
        description: "Porción de arroz.",
        image: "./images/menu/porcion-arroz.jpg",
        available: true
    },
    // Platos a la carta
    {
        id: 40,
        name: "Salchipollo",
        category: "platos-a-la-carta",
        price: 10.00,
        description: "Salchipollo tradicional.",
        image: "./images/menu/salchipollo.jpg",
        available: true
    },
    {
        id: 41,
        name: "Tallarín saltado",
        category: "platos-a-la-carta",
        price: 13.00,
        description: "Tallarín saltado al estilo peruano.",
        image: "./images/menu/tallarin-saltado.jpg",
        available: true
    },
    {
        id: 42,
        name: "Lomo saltado",
        category: "platos-a-la-carta",
        price: 13.00,
        description: "Lomo saltado clásico.",
        image: "./images/menu/lomo-saltado.jpg",
        available: true
    },
    {
        id: 43,
        name: "Broaster",
        category: "platos-a-la-carta",
        price: 13.00,
        description: "Pollo broaster crujiente.",
        image: "./images/menu/broaster.jpg",
        available: true
    },
    {
        id: 44,
        name: "Cabrito",
        category: "platos-a-la-carta",
        price: 15.00,
        description: "Cabrito disponible solo sábado y domingo.",
        image: "./images/menu/cabrito.jpg",
        available: true
    },
    // Bebidas
    {
        id: 101,
        name: "Jarra de Chicha Morada",
        category: "bebidas",
        price: 8.00,
        description: "Refrescante jarra de chicha morada, perfecta para compartir en familia o con amigos.",
        image: "./images/menu/jarra-chicha-morada.jpg",
        available: true
    },
    {
        id: 102,
        name: "1/2 Jarra de Chicha Morada",
        category: "bebidas",
        price: 5.00,
        description: "Media jarra de chicha morada, ideal para acompañar tu plato favorito.",
        image: "./images/menu/media-jarra-chicha-morada.jpg",
        available: true
    },
            // Gaseosas Personal
    {
        id: 103,
        name: "Gaseosa Personal Coca Cola",
        category: "bebidas",
        price: 3.00,
        description: "Botella personal de Coca Cola, ideal para refrescarte solo.",
        image: "./images/menu/gaseosa-personal-coca.jpg",
        available: true
    },
    {
        id: 104,
        name: "Gaseosa Personal Inca Kola",
        category: "bebidas",
        price: 3.00,
        description: "Botella personal de Inca Kola, ideal para refrescarte solo.",
        image: "./images/menu/gaseosa-personal-inca.jpg",
        available: true
    },
            // Gaseosas 500ml
    {
        id: 105,
        name: "Gaseosa de 500ml Coca Cola",
        category: "bebidas",
        price: 4.00,
        description: "Coca Cola en presentación de 500ml, para compartir o disfrutar más.",
        image: "./images/menu/gaseosa-coca-500ml.jpg",
        available: true
    },
    {
        id: 106,
        name: "Gaseosa de 500ml Inca Kola",
        category: "bebidas",
        price: 4.00,
        description: "Inca Kola en botella de 500ml, para compartir o disfrutar más.",
        image: "./images/menu/gaseosa-inca-500ml.jpg",
        available: true
    },
            // Gaseosas 1L
    {
        id: 107,
        name: "Gaseosa de 1L Coca Cola",
        category: "bebidas",
        price: 6.00,
        description: "Coca Cola en botella de 1 litro, ideal para compartir en la mesa.",
        image: "./images/menu/gaseosa-coca-1l.jpg",
        available: true
    },
    {
        id: 108,
        name: "Gaseosa de 1L Inca Kola",
        category: "bebidas",
        price: 6.00,
        description: "Inca Kola en presentación de 1 litro, ideal para compartir en la mesa.",
        image: "./images/menu/gaseosa-inca-1l.jpg",
        available: true
    },
            // Gaseosas 2L
    {
        id: 109,
        name: "Gaseosa de 2L Coca Cola",
        category: "bebidas",
        price: 10.00,
        description: "Coca Cola en botella de 2 litros, perfecta para reuniones y familias.",
        image: "./images/menu/gaseosa-2l-coca.jpg",
        available: true
    },
    {
        id: 110,
        name: "Gaseosa de 2L Inca Kola",
        category: "bebidas",
        price: 10.00,
        description: "Inca Kola en botella de 2 litros, para compartir el sabor nacional.",
        image: "./images/menu/gaseosa-2l-inca.jpg",
        available: true
    },
    {
        id: 111,
        name: "Agua",
        category: "bebidas",
        price: 3.00,
        description: "Agua embotellada, pura y fresca para hidratarte en cualquier momento.",
        image: "./images/menu/agua.jpg",
        available: true
    },
    {
        id: 112,
        name: "Pilsen Trujillo",
        category: "bebidas",
        price: 8.00,
        description: "Cerveza Pilsen Trujillo, sabor tradicional para acompañar tus mejores momentos.",
        image: "./images/menu/cerveza-pilsen-trujillo.jpg",
        available: true
    },
    {
        id: 113,
        name: "Pilsen Callao",
        category: "bebidas",
        price: 9.00,
        description: "Cerveza Pilsen Callao, refrescante y perfecta para compartir entre amigos.",
        image: "./images/menu/cerveza-pilsen-callao.jpg",
        available: true
    },
    {
        id: 114,
        name: "Cusqueña Trigo/Negra",
        category: "bebidas",
        price: 10.00,
        description: "Cerveza Cusqueña de Trigo y Negra, calidad premium para paladares exigentes.",
        image: "./images/menu/cerveza-cusqueña.jpg",
        available: true
    }
];

// Hacer el array accesible globalmente
window.restaurantProducts = products;

// Lógica para disponibilidad especial según el día
function updateSpecialAvailability() {
    const today = new Date().getDay(); // 0=domingo, 1=lunes, ..., 6=sábado
    // Ceviche de Conchas Negras solo jueves (4)
    const conchasNegras = products.find(p => p.name.includes('Conchas Negras'));
    if (conchasNegras) {
        conchasNegras.available = (today === 4);
    }
    // Cabrito solo sábado (6) y domingo (0)
    const cabrito = products.find(p => p.name.toLowerCase().includes('cabrito'));
    if (cabrito) {
        cabrito.available = (today === 6 || today === 0);
    }
}

updateSpecialAvailability();

function renderProducts(category = 'combinados') {
    const menuItemsContainer = document.getElementById('menu-items');
    if (!menuItemsContainer) return;

    menuItemsContainer.innerHTML = '';

    const filteredProducts = products.filter(product => product.category === category);

    if (filteredProducts.length === 0) {
        menuItemsContainer.innerHTML = `
            <div class="no-products">
                <i class="fas fa-utensils"></i>
                <p>No hay productos disponibles en esta categoría</p>
            </div>
        `;
        return;
    }

    filteredProducts.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'menu-item';
        productElement.innerHTML = `
            <div class="item-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                ${!product.available ? '<span class="sold-out">Agotado</span>' : ''}
            </div>
            <div class="item-info">
                <h3>${product.name}</h3>
                <p class="description">${product.description}</p>
                <span class="price">S/ ${product.price.toFixed(2)}</span>
                ${product.available ? `
                <div class="item-actions">
                    <div class="quantity-control">
                        <button class="quantity-btn minus" data-id="${product.id}">-</button>
                        <input type="number" class="quantity-input" value="1" min="1" data-id="${product.id}">
                        <button class="quantity-btn plus" data-id="${product.id}">+</button>
                    </div>
                    <button class="add-to-cart" data-id="${product.id}">
                        Añadir al carrito
                    </button>
                </div>
                ` : ''}
            </div>
        `;
        menuItemsContainer.appendChild(productElement);
    });
}

function setupFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            renderProducts(this.dataset.category);
        });
    });
}

function setupProductEvents() {
    // Evento delegado para controles de cantidad
    document.addEventListener('click', function(e) {
        // Control de cantidad
        const quantityBtn = e.target.closest('.quantity-btn');
        if (quantityBtn) {
            const input = quantityBtn.parentElement.querySelector('.quantity-input');
            let value = parseInt(input.value);
            
            if (quantityBtn.classList.contains('minus') && value > 1) {
                input.value = value - 1;
            } else if (quantityBtn.classList.contains('plus')) {
                input.value = value + 1;
            }
            return; // Salir para no procesar el clic como add-to-cart
        }
        
        // Evento para añadir al carrito
        const addToCartBtn = e.target.closest('.add-to-cart');
        if (addToCartBtn) {
            const productId = parseInt(addToCartBtn.dataset.id);
            const product = window.restaurantProducts.find(p => p.id === productId);
            
            if (product) {
                const quantityInput = addToCartBtn.closest('.item-actions').querySelector('.quantity-input');
                const quantity = parseInt(quantityInput.value) || 1;
                
                // Disparar evento personalizado con la cantidad correcta
                const event = new CustomEvent('productAddedToCart', {
                    detail: { product, quantity }
                });
                document.dispatchEvent(event);
                
                // Mostrar feedback visual
                const notification = document.createElement('div');
                notification.className = 'add-to-cart-feedback';
                notification.textContent = `+${quantity}`;
                addToCartBtn.appendChild(notification);
                
                setTimeout(() => {
                    notification.remove();
                }, 1000);
            }
        }
    });
}

function initProducts() {
    updateSpecialAvailability();
    renderProducts('combinados');
    setupFilters();
    setupProductEvents();
}

document.addEventListener('DOMContentLoaded', initProducts);