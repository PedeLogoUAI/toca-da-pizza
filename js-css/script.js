// === PARTE 1: CONFIGURAÇÕES INICIAIS E FUNÇÕES BÁSICAS ===

document.addEventListener('DOMContentLoaded', function () {
    // ELEMENTOS DO DOM
    const searchInput = document.getElementById('search-input');
    const productsContainer = document.getElementById('products-container');
    const categoriesTabs = document.getElementById('categories-tabs');
    const homeLink = document.getElementById('home-link');
    const modal = document.getElementById('confirmation-modal');
    const modalMessage = document.getElementById('modal-message');
    const continueShoppingBtn = document.getElementById('continue-shopping');
    const goToCartBtn = document.getElementById('go-to-cart');
    const floatingCart = document.getElementById('floating-cart');
    const floatingCartCount = document.getElementById('floating-cart-count');

    // URL DA API EXTERNA PARA BUSCAR OS PRODUTOS
    const API_URL = 'https://script.google.com/macros/s/AKfycbwU0J8BjZPTRSxOdQUQMY00e2LzzFv7Rr88uY0BagqMIbdStjwEHC_lhKHg1uZjiV4h/exec'; 

    // VARIÁVEIS GLOBAIS DO SISTEMA
    let allProducts = []; // Armazena todos os produtos carregados da API
    let categories = []; // Lista das categorias disponíveis
    let currentCategory = null; // Categoria atualmente selecionada
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || []; // Carrinho salvo no localStorage
    let ultimasPizzasAdicionadas = []; // Armazena as últimas pizzas adicionadas para combo

    // Variável importante: define como será calculado o preço da pizza "meio a meio"
    // - 'metade': soma metade do valor de cada pizza
    // - 'maior': usa o valor da pizza mais cara
    const PRECO_PIZZA_MEIO_A_MEIO = 'metade'; // ✅ Escreva aqui: 'metade' ou 'maior'

    // FUNÇÃO: formata números como moeda brasileira (R$ 0,00)
    function formatPrice(price) {
        if (!price) return '--';
        const number = typeof price === 'string' ? parseFloat(price.replace(',', '.')) : price;
        return number.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }

    // FUNÇÃO: evita chamadas excessivas de uma função (útil para eventos como digitação)
    function debounce(func, timeout = 300) {
        let timer;
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => { func.apply(this, args); }, timeout);
        };
    }
    
        // FUNÇÃO: carrega os produtos da API e inicializa os elementos da página
    function loadProducts() {
        productsContainer.innerHTML = `
            <div class="loading">
                <div class="loading-spinner"></div>
                <div class="loading-text">Carregando cardápio...</div>
            </div>
        `;
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

    // FUNÇÃO: cria abas de categorias dinamicamente com base nos produtos carregados
    function createCategoryTabs() {
        categoriesTabs.innerHTML = '';
        const allTab = document.createElement('div');
        allTab.className = 'category-tab';
        allTab.textContent = 'Todos';
        allTab.dataset.category = 'all';
        allTab.addEventListener('click', function () {
            document.querySelectorAll('.category-tab').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            currentCategory = null;
            displayProducts(allProducts);
        });
        categoriesTabs.appendChild(allTab);

        categories.forEach(category => {
            const tab = document.createElement('div');
            tab.className = 'category-tab';
            tab.textContent = category;
            tab.dataset.category = category;
            tab.addEventListener('click', function () {
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

    // FUNÇÃO: exibe mensagem inicial pedindo ao usuário que selecione uma categoria
    function showInitialMessage() {
        productsContainer.innerHTML = '<div class="initial-message">Selecione uma categoria para visualizar os produtos</div>';
    }

    // FUNÇÃO: renderiza os produtos no container principal
    function displayProducts(products) {
        if (products.length === 0) {
            productsContainer.innerHTML = '<div class="error">Nenhum produto encontrado.</div>';
            return;
        }
        productsContainer.innerHTML = '';
        const productsGrid = document.createElement('div');
        productsGrid.className = 'products-grid';
        products.forEach(product => {
            const productInCart = carrinho.find(item => item.id === product.id);
            const buttonText = productInCart ? `${productInCart.quantity} no carrinho` : 'Adicionar';
            const buttonClass = productInCart ? 'add-to-cart-button in-cart' : 'add-to-cart-button';
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
                <img src="${product.imagem || 'https://via.placeholder.com/300x180?text=Sem+imagem'}" alt="${product.produto}" class="product-image" loading="lazy">
                <div class="product-info">
                    <h3 class="product-name">${product.produto}</h3>
                    <span class="product-category">${product.categoria}</span>
                    <p class="product-description">${product.descricao}</p>
                    <div class="product-price-container">
                        <div class="product-price">R$ ${formatPrice(product.valor)}</div>
                        <button class="${buttonClass}" data-id="${product.id}">${buttonText}</button>
                    </div>
                </div>
            `;
            productsGrid.appendChild(productCard);
        });
        productsContainer.appendChild(productsGrid);
        document.querySelectorAll('.add-to-cart-button').forEach(button => {
            button.addEventListener('click', function () {
                const productId = this.dataset.id;
                addToCart(productId);
            });
        });
    }

    // FUNÇÃO: adiciona um produto ao carrinho
    function addToCart(productId) {
        const product = allProducts.find(p => p.id == productId);
        if (!product) return;

        // Se for pizza, armazena temporariamente para verificar se é de 2 sabores.
        if (product.categoria.toLowerCase().includes('pizza')) {
            ultimasPizzasAdicionadas.push({
                id: product.id,
                name: product.produto,
                price: product.valor,
                image: product.imagem
            });

            if (ultimasPizzasAdicionadas.length === 2) {
                showPizzaModal(); // Mostra modal de confirmação pizza de 2 sabores.
                return;
            }
        } else {
            ultimasPizzasAdicionadas = []; // Reseta se não for pizza
        }

        addItemToCart(product);
    }

    // FUNÇÃO: adiciona o produto ao carrinho definitivamente
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

        if (currentCategory) {
            const filteredProducts = allProducts.filter(p => p.categoria === currentCategory);
            displayProducts(filteredProducts);
        }
    }

    // FUNÇÃO: mostra modal de confirmação para combinar duas pizzas
    function showPizzaModal() {
        const modal = document.getElementById('pizza-modal');
        const itemsList = document.getElementById('pizza-modal-items');
        itemsList.innerHTML = ultimasPizzasAdicionadas.map(pizza =>
            `<li>${pizza.name}</li>`
        ).join('');
        modal.style.display = 'flex';

        document.getElementById('pizza-no').onclick = function () {
            ultimasPizzasAdicionadas.forEach(pizza => {
                const product = allProducts.find(p => p.id == pizza.id);
                if (product) addItemToCart(product);
            });
            modal.style.display = 'none';
            ultimasPizzasAdicionadas = [];
        };

        document.getElementById('pizza-yes').onclick = function () {
            ultimasPizzasAdicionadas.forEach(pizza => {
                carrinho = carrinho.filter(item => item.id != pizza.id);
            });

            const pizza1 = ultimasPizzasAdicionadas[0];
            const pizza2 = ultimasPizzasAdicionadas[1];
            let price;

            // Aqui usa-se a constante PRECO_PIZZA_MEIO_A_MEIO para calcular o preço
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

            if (currentCategory) {
                const filteredProducts = allProducts.filter(p => p.categoria === currentCategory);
                displayProducts(filteredProducts);
            }
        };
    }
    
        // FUNÇÃO: remove um item do carrinho
    function removeFromCart(productId) {
        carrinho = carrinho.filter(item => item.id != productId);
        saveCart();
        updateCartIcon();
        showCart();

        if (currentCategory) {
            const filteredProducts = allProducts.filter(p => p.categoria === currentCategory);
            displayProducts(filteredProducts);
        }
    }

    // FUNÇÃO: atualiza a quantidade de um item no carrinho
    function updateQuantity(productId, newQuantity) {
        const item = carrinho.find(item => item.id == productId);
        if (item) {
            item.quantity = Math.max(1, newQuantity);
            saveCart();
            updateCartIcon();
            showCart();
        }
    }

    // FUNÇÃO: salva o carrinho no localStorage
    function saveCart() {
        localStorage.setItem('carrinho', JSON.stringify(carrinho));
    }

    // FUNÇÃO: atualiza o ícone do carrinho flutuante com a quantidade de itens
    function updateCartIcon() {
        const totalItems = carrinho.reduce((total, item) => total + item.quantity, 0);
        if (floatingCartCount) {
            floatingCartCount.textContent = totalItems;
            floatingCartCount.style.display = totalItems > 0 ? 'flex' : 'none';
            if (totalItems > 0) {
                floatingCart.classList.add('update');
                setTimeout(() => floatingCart.classList.remove('update'), 500);
            }
        }
    }

    // FUNÇÃO: exibe a tela do carrinho
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
            document.getElementById('empty-cart-continue').addEventListener('click', function () {
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
                    <img src="${item.image || 'https://via.placeholder.com/80?text=Sem+imagem'}" alt="${item.name}" loading="lazy">
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
            btn.addEventListener('click', function () {
                const productId = this.dataset.id;
                const item = carrinho.find(item => item.id == productId);
                if (item && item.quantity > 1) {
                    updateQuantity(productId, item.quantity - 1);
                }
            });
        });

        document.querySelectorAll('.quantity-btn.plus').forEach(btn => {
            btn.addEventListener('click', function () {
                const productId = this.dataset.id;
                const item = carrinho.find(item => item.id == productId);
                if (item) {
                    updateQuantity(productId, item.quantity + 1);
                }
            });
        });

        document.querySelectorAll('.remove-item').forEach(btn => {
            btn.addEventListener('click', function () {
                const productId = this.dataset.id;
                removeFromCart(productId);
            });
        });

        document.getElementById('continue-shopping-btn').addEventListener('click', function () {
            if (currentCategory) {
                const filteredProducts = allProducts.filter(product => product.categoria === currentCategory);
                displayProducts(filteredProducts);
            } else {
                showInitialMessage();
            }
        });

        document.getElementById('checkout-btn').addEventListener('click', function () {
            alert('Pedido finalizado com sucesso! Em breve entraremos em contato.');
            carrinho = [];
            saveCart();
            updateCartIcon();
            showCart();

            if (currentCategory) {
                const filteredProducts = allProducts.filter(p => p.categoria === currentCategory);
                displayProducts(filteredProducts);
            }
        });
    }

    // FUNÇÃO: exibe uma mensagem de confirmação quando um item é adicionado ao carrinho
    function showConfirmationModal(productName) {
        modalMessage.textContent = `${productName} foi adicionado ao seu carrinho.`;
        modal.style.display = 'flex';
    }

    // FUNÇÃO: filtra os produtos conforme o texto digitado no campo de busca
    function searchProducts() {
        const searchTerm = searchInput.value.toLowerCase().trim();
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

    // EVENTOS PRINCIPAIS
    searchInput.addEventListener('input', debounce(searchProducts));
    searchInput.addEventListener('keyup', function (e) {
        if (e.key === 'Enter') searchProducts();
    });

    floatingCart.addEventListener('click', function (e) {
        e.preventDefault();
        showCart();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    homeLink.addEventListener('click', function (e) {
        e.preventDefault();
        if (currentCategory) {
            const filteredProducts = allProducts.filter(product => product.categoria === currentCategory);
            displayProducts(filteredProducts);
        } else {
            showInitialMessage();
        }
    });

    continueShoppingBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    goToCartBtn.addEventListener('click', function () {
        modal.style.display = 'none';
        showCart();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    modal.addEventListener('click', function (e) {
        if (e.target === modal) modal.style.display = 'none';
    });

    document.getElementById('pizza-modal').addEventListener('click', function (e) {
        if (e.target === this) {
            this.style.display = 'none';
            ultimasPizzasAdicionadas.forEach(pizza => {
                const product = allProducts.find(p => p.id == pizza.id);
                if (product) addItemToCart(product);
            });
            ultimasPizzasAdicionadas = [];
        }
    });

    // INICIALIZAÇÃO: carrega os produtos ao abrir a página
    loadProducts();
});
