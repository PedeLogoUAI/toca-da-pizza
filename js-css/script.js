document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const productsContainer = document.getElementById('products-container');
    const categoriesTabs = document.getElementById('categories-tabs');
    const cartLink = document.getElementById('cart-link');
    const homeLink = document.getElementById('home-link');
    const modal = document.getElementById('confirmation-modal');
    const modalMessage = document.getElementById('modal-message');
    const continueShoppingBtn = document.getElementById('continue-shopping');
    const goToCartBtn = document.getElementById('go-to-cart');
    
    const API_URL = 'https://script.google.com/macros/s/AKfycbwU0J8BjZPTRSxOdQUQMY00e2LzzFv7Rr88uY0BagqMIbdStjwEHC_lhKHg1uZjiV4h/exec';
    
    let allProducts = [];
    let categories = [];
    let currentCategory = null;
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    let ultimasPizzasAdicionadas = [];
    const PRECO_PIZZA_MEIO_A_MEIO = 'metade'; // 'metade' ou 'maior'

    function formatPrice(price) {
        if (!price) return '--';
        const number = typeof price === 'string' ? parseFloat(price.replace(',', '.')) : price;
        return number.toFixed(2).replace('.', ',');
    }
    
    function loadProducts() {
        productsContainer.innerHTML = '<div class="loading">Carregando produtos...</div>';
        
        fetch(API_URL)
            .then(response => response.json())
            .then(data => {
                allProducts = data.produtos;
                allProducts.forEach((product, index) => {
                    if (!product.id) product.id = `prod-${index}`;
                });
                
                categories = [...new Set(allProducts.map(product => product.categoria))];
                categories.sort();
                createCategoryTabs();
                showInitialMessage();
                updateCartIcon();
            })
            .catch(error => {
                console.error('Erro ao carregar produtos:', error);
                productsContainer.innerHTML = '<div class="error">Erro ao carregar os produtos. Por favor, tente novamente mais tarde.</div>';
            });
    }
    
    function createCategoryTabs() {
        categoriesTabs.innerHTML = '';
        categories.forEach(category => {
            const tab = document.createElement('div');
            tab.className = 'category-tab';
            tab.textContent = category;
            tab.dataset.category = category;
            
            tab.addEventListener('click', function() {
                if (currentCategory === category) {
                    this.classList.remove('active');
                    currentCategory = null;
                    showInitialMessage();
                    return;
                }
                
                document.querySelectorAll('.category-tab').forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                currentCategory = category;
                const filteredProducts = allProducts.filter(product => product.categoria === category);
                displayProducts(filteredProducts);
            });
            
            categoriesTabs.appendChild(tab);
        });
    }
    
    function showInitialMessage() {
        productsContainer.innerHTML = '<div class="initial-message">Selecione uma categoria para visualizar os produtos</div>';
    }
    
    function displayProducts(products) {
        if (products.length === 0) {
            productsContainer.innerHTML = '<div class="error">Nenhum produto encontrado.</div>';
            return;
        }
        
        productsContainer.innerHTML = '';
        const productsGrid = document.createElement('div');
        productsGrid.className = 'products-grid';
        
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
                <img src="${product.imagem || 'https://via.placeholder.com/300x180?text=Sem+imagem'}" alt="${product.produto}" class="product-image">
                <div class="product-info">
                    <h3 class="product-name">${product.produto}</h3>
                    <span class="product-category">${product.categoria}</span>
                    <p class="product-description">${product.descricao}</p>
                    <div class="product-price-container">
                        <div class="product-price">R$ ${formatPrice(product.valor)}</div>
                        <button class="add-to-cart-button" data-id="${product.id}">Adicionar</button>
                    </div>
                </div>
            `;
            productsGrid.appendChild(productCard);
        });
        
        productsContainer.appendChild(productsGrid);
        
        document.querySelectorAll('.add-to-cart-button').forEach(button => {
            button.addEventListener('click', function() {
                const productId = this.dataset.id;
                addToCart(productId);
            });
        });
    }
    
    function addToCart(productId) {
        const product = allProducts.find(p => p.id == productId);
        if (!product) return;

        if (product.categoria.toLowerCase().includes('pizza')) {
            ultimasPizzasAdicionadas.push({
                id: product.id,
                name: product.produto,
                price: product.valor,
                image: product.imagem
            });
            
            if (ultimasPizzasAdicionadas.length === 2) {
                showPizzaModal();
                return;
            }
        } else {
            ultimasPizzasAdicionadas = [];
        }
        
        addItemToCart(product);
    }
    
    function addItemToCart(product) {
        const existingItem = carrinho.find(item => item.id == product.id);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            carrinho.push({
                id: product.id,
                name: product.produto,
                price: product.valor,
                quantity: 1,
                image: product.imagem
            });
        }
        
        saveCart();
        updateCartIcon();
        showConfirmationModal(product.produto);
    }
    
    function showPizzaModal() {
        const modal = document.getElementById('pizza-modal');
        const itemsList = document.getElementById('pizza-modal-items');
        
        itemsList.innerHTML = ultimasPizzasAdicionadas.map(pizza => 
            `<li>${pizza.name}</li>`
        ).join('');
        
        modal.style.display = 'flex';
        
        document.getElementById('pizza-no').onclick = function() {
            ultimasPizzasAdicionadas.forEach(pizza => {
                const product = allProducts.find(p => p.id == pizza.id);
                if (product) addItemToCart(product);
            });
            modal.style.display = 'none';
            ultimasPizzasAdicionadas = [];
        };
        
        document.getElementById('pizza-yes').onclick = function() {
            ultimasPizzasAdicionadas.forEach(pizza => {
                carrinho = carrinho.filter(item => item.id != pizza.id);
            });
            
            const pizza1 = ultimasPizzasAdicionadas[0];
            const pizza2 = ultimasPizzasAdicionadas[1];
            
            let price;
            if (PRECO_PIZZA_MEIO_A_MEIO === 'metade') {
                price = (parseFloat(pizza1.price) / 2 + parseFloat(pizza2.price) / 2);
            } else {
                price = Math.max(parseFloat(pizza1.price), parseFloat(pizza2.price));
            }
            
            carrinho.push({
                id: `combo-${Date.now()}`,
                name: `Pizza meio a meio: ${pizza1.name} / ${pizza2.name}`,
                price: price,
                quantity: 1,
                image: pizza1.image
            });
            
            saveCart();
            updateCartIcon();
            showConfirmationModal(`Pizza meio a meio: ${pizza1.name} / ${pizza2.name}`);
            modal.style.display = 'none';
            ultimasPizzasAdicionadas = [];
        };
    }
    
    function removeFromCart(productId) {
        carrinho = carrinho.filter(item => item.id != productId);
        saveCart();
        updateCartIcon();
        showCart();
    }
    
    function updateQuantity(productId, newQuantity) {
        const item = carrinho.find(item => item.id == productId);
        if (item) {
            item.quantity = Math.max(1, newQuantity);
            saveCart();
            showCart();
        }
    }
    
    function saveCart() {
        localStorage.setItem('carrinho', JSON.stringify(carrinho));
    }
    
    function updateCartIcon() {
        const cartIcon = cartLink.querySelector('i');
        let cartCount = cartLink.querySelector('.cart-count');
        const totalItems = carrinho.reduce((total, item) => total + item.quantity, 0);
        
        if (totalItems > 0) {
            if (!cartCount) {
                cartCount = document.createElement('span');
                cartCount.className = 'cart-count';
                cartLink.appendChild(cartCount);
            }
            cartCount.textContent = totalItems;
        } else if (cartCount) {
            cartCount.remove();
        }
    }
    
    function showCart() {
        if (carrinho.length === 0) {
            productsContainer.innerHTML = `
                <div class="cart-container">
                    <h2>Seu Carrinho</h2>
                    <p>Seu carrinho está vazio</p>
                    <div class="cart-actions">
                        <button class="cart-btn continue-shopping" id="empty-cart-continue">Continuar comprando</button>
                    </div>
                </div>
            `;
            
            document.getElementById('empty-cart-continue').addEventListener('click', function() {
                if (currentCategory) {
                    const filteredProducts = allProducts.filter(product => product.categoria === currentCategory);
                    displayProducts(filteredProducts);
                } else {
                    showInitialMessage();
                }
            });
            return;
        }
        
        let cartContent = `
            <div class="cart-container">
                <h2>Seu Carrinho</h2>
                <ul class="cart-items">
        `;
        
        carrinho.forEach(item => {
            cartContent += `
                <li class="cart-item">
                    <img src="${item.image || 'https://via.placeholder.com/80?text=Sem+imagem'}" alt="${item.name}">
                    <div class="cart-item-details">
                        <h3>${item.name}</h3>
                        <p>Preço unitário: R$ ${formatPrice(item.price)}</p>
                        <div class="quantity-control">
                            <button class="quantity-btn minus" data-id="${item.id}">-</button>
                            <span>${item.quantity}</span>
                            <button class="quantity-btn plus" data-id="${item.id}">+</button>
                        </div>
                        <p>Subtotal: R$ ${formatPrice(item.price * item.quantity)}</p>
                    </div>
                    <button class="remove-item" data-id="${item.id}">
                        <i class="fas fa-trash"></i>
                    </button>
                </li>
            `;
        });
        
        const total = carrinho.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        cartContent += `
                </ul>
                <div class="cart-total">Total: R$ ${formatPrice(total)}</div>
                <div class="cart-actions">
                    <button class="cart-btn continue-shopping" id="continue-shopping-btn">Continuar comprando</button>
                    <button class="cart-btn checkout-btn" id="checkout-btn">Finalizar Pedido</button>
                </div>
            </div>
        `;
        
        productsContainer.innerHTML = cartContent;
        
        document.querySelectorAll('.quantity-btn.minus').forEach(btn => {
            btn.addEventListener('click', function() {
                const productId = this.dataset.id;
                const item = carrinho.find(item => item.id == productId);
                if (item && item.quantity > 1) {
                    updateQuantity(productId, item.quantity - 1);
                }
            });
        });
        
        document.querySelectorAll('.quantity-btn.plus').forEach(btn => {
            btn.addEventListener('click', function() {
                const productId = this.dataset.id;
                const item = carrinho.find(item => item.id == productId);
                if (item) {
                    updateQuantity(productId, item.quantity + 1);
                }
            });
        });
        
        document.querySelectorAll('.remove-item').forEach(btn => {
            btn.addEventListener('click', function() {
                const productId = this.dataset.id;
                removeFromCart(productId);
            });
        });
        
        document.getElementById('continue-shopping-btn').addEventListener('click', function() {
            if (currentCategory) {
                const filteredProducts = allProducts.filter(product => product.categoria === currentCategory);
                displayProducts(filteredProducts);
            } else {
                showInitialMessage();
            }
        });
        
        document.getElementById('checkout-btn').addEventListener('click', function() {
            alert('Pedido finalizado com sucesso! Em breve entraremos em contato.');
            carrinho = [];
            saveCart();
            updateCartIcon();
            showCart();
        });
    }
    
    function showConfirmationModal(productName) {
        modalMessage.textContent = `${productName} foi adicionado ao seu carrinho.`;
        modal.style.display = 'flex';
    }
    
    function searchProducts() {
        const searchTerm = searchInput.value.toLowerCase();
        
        if (!searchTerm) {
            if (currentCategory) {
                const filteredProducts = allProducts.filter(product => product.categoria === currentCategory);
                displayProducts(filteredProducts);
            } else {
                showInitialMessage();
            }
            return;
        }
        
        const filteredProducts = allProducts.filter(product => {
            return (
                product.produto.toLowerCase().includes(searchTerm) ||
                product.descricao.toLowerCase().includes(searchTerm) ||
                product.categoria.toLowerCase().includes(searchTerm)
            );
        });
        
        displayProducts(filteredProducts);
    }
    
    // Event listeners
    searchButton.addEventListener('click', searchProducts);
    searchInput.addEventListener('keyup', function(e) {
        if (e.key === 'Enter') searchProducts();
    });
    
    cartLink.addEventListener('click', function(e) {
        e.preventDefault();
        showCart();
    });
    
    homeLink.addEventListener('click', function(e) {
        e.preventDefault();
        if (currentCategory) {
            const filteredProducts = allProducts.filter(product => product.categoria === currentCategory);
            displayProducts(filteredProducts);
        } else {
            showInitialMessage();
        }
    });
    
    continueShoppingBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    goToCartBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        showCart();
    });
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) modal.style.display = 'none';
    });
    
    document.getElementById('pizza-modal').addEventListener('click', function(e) {
        if (e.target === this) {
            this.style.display = 'none';
            ultimasPizzasAdicionadas.forEach(pizza => {
                const product = allProducts.find(p => p.id == pizza.id);
                if (product) addItemToCart(product);
            });
            ultimasPizzasAdicionadas = [];
        }
    });
    
    // Inicialização
    loadProducts();
});
