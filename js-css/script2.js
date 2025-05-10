// Arrays (insira manualmente)
const categorias = [
      { 
        imagem: "imagens/pizzas.jpeg",
        descricao: "Pizzas",
        nome: "Pizzas"
      },
      { 
        imagem: "imagens/panuozzos.jpg",
        descricao: "Panuozzos",
        nome: "Panuozzos"
      },
      { 
        imagem: "imagens/hamburguers.jpg",
        descricao: "Hamburguers",
        nome: "Hamburguers"
      },
      { 
        imagem: "imagens/hotdogs.jpg",
        descricao: "Hot Dogs",
        nome: "Hot Dogs"
      },
      { 
        imagem: "imagens/bebidas.jpg",
        descricao: "Bebidas",
        nome: "Bebidas"
      },
      { 
        imagem: "imagens/promocoes.jpg",
        descricao: "Promoções e Combos",
        nome: "Promoções e Combos"
      }
    ];

    const produtos = [
            // Categoria: Pizzas
            { categoria: "Pizzas", produto: "Alho Poró", descricao: "Molho de tomate, alho poró, farofa de bacon e geleia de pimienta.", valor: 35.90, quantidade: 0, imagem: "imagens/pizzas.jpeg" },
            { categoria: "Pizzas", produto: "Calabresa", descricao: "Molho de tomate, mussarela, calabresa e cebolla crispy.", valor: 38.90, quantidade: 0, imagem: "imagens/pizzas.jpeg" },
            { categoria: "Pizzas", produto: "Frango com Catupiry", descricao: "Molho de tomate, mussarela, frango desfiado, catupiry e azeitona.", valor: 40.90, quantidade: 0, imagem: "imagens/pizzas.jpeg" },
            { categoria: "Pizzas", produto: "Marguerita", descricao: "Molho de tomate, mussarela, tomate e molho pesto.", valor: 42.90, quantidade: 0, imagem: "imagens/pizzas.jpeg" },
            { categoria: "Pizzas", produto: "Marguerita da Toca", descricao: "Molho de tomate, mussarela, tomates confitados e molho pesto.", valor: 45.90, quantidade: 0, imagem: "imagens/pizzas.jpeg" },
            { categoria: "Pizzas", produto: "Mussarela", descricao: "Molho de tomate, queijo mussarela.", valor: 43.90, quantidade: 0, imagem: "imagens/pizzas.jpeg" },
            { categoria: "Pizzas", produto: "Pepperoni", descricao: "Molho de tomate, mussarela e pepperoni.", valor: 41.90, quantidade: 0, imagem: "imagens/pizzas.jpeg" },
            { categoria: "Pizzas", produto: "Portuguesa", descricao: "Molho de tomate, mussarela, calabresa, cebola, presunto, pimentão, azeitona e ovo cozido.", valor: 30.90, quantidade: 0, imagem: "imagens/pizzas.jpeg" },
            { categoria: "Pizzas", produto: "Presunto", descricao: "Molho de tomate, mussarela e presunto.", valor: 30.90, quantidade: 0, imagem: "imagens/pizzas.jpeg" },
            { categoria: "Pizzas", produto: "Quatro Queijos", descricao: "Molho de tomate, mussarela, gorgonzola, provolone e catupiry.", valor: 30.90, quantidade: 0, imagem: "imagens/pizzas.jpeg" },
            { categoria: "Pizzas", produto: "Romana", descricao: "Molho de tomate, mussarela, calabresa moída e alho torrado.", valor: 30.90, quantidade: 0, imagem: "imagens/pizzas.jpeg" },
            { categoria: "Pizzas", produto: "Velho do Mar", descricao: "Molho de tomate, mussarela, atum, cebola, azeitona e ovo cozido.", valor: 30.90, quantidade: 0, imagem: "imagens/pizzas.jpeg" },
            { categoria: "Pizzas", produto: "Banana com Canela", descricao: "Pizza doce com, mussarela, banana e canela.", valor: 30.90, quantidade: 0, imagem: "imagens/pizzas.jpeg" },
            { categoria: "Pizzas", produto: "Nutella", descricao: "Pizza doce com nutella.", valor: 30.90, quantidade: 0, imagem: "imagens/pizzas.jpeg" },
            { categoria: "Pizzas", produto: "Romeu e Julieta", descricao: "Pizza doce com catupiry e goiabada.", valor: 30.90, quantidade: 0, imagem: "imagens/pizzas.jpeg" },

            // Categoria: Panuozzos
            { categoria: "Panuozzos", produto: "Panuozzo Margherita", descricao: "Pão italiano recheado com molho de tomate, muçarela e manjericão.", valor: 25.90, quantidade: 0, imagem: "imagens/panuozzos.jpg" },
            { categoria: "Panuozzos", produto: "Panuozzo Calabresa", descricao: "Pão italiano recheado com molho de tomate, calabresa e muçarela.", valor: 28.90, quantidade: 0, imagem: "imagens/panuozzos.jpg" },
            { categoria: "Panuozzos", produto: "Panuozzo Frango", descricao: "Pão italiano recheado com frango desfiado, catupiry e muçarela.", valor: 30.90, quantidade: 0, imagem: "imagens/panuozzos.jpg" },
            { categoria: "Panuozzos", produto: "Panuozzo Vegetariano", descricao: "Pão italiano recheado com legumes e muçarela.", valor: 27.90, quantidade: 0, imagem: "imagens/panuozzos.jpg" },
            { categoria: "Panuozzos", produto: "Panuozzo Pepperoni", descricao: "Pão italiano recheado com pepperoni e muçarela.", valor: 32.90, quantidade: 0, imagem: "imagens/panuozzos.jpg" },
            { categoria: "Panuozzos", produto: "Panuozzo Quatro Queijos", descricao: "Pão italiano recheado com quatro queijos.", valor: 33.90, quantidade: 0, imagem: "imagens/panuozzos.jpg" },
            { categoria: "Panuozzos", produto: "Panuozzo Doce", descricao: "Pão italiano recheado com doce de leite e chocolate.", valor: 20.90, quantidade: 0, imagem: "imagens/panuozzos.jpg" },
            { categoria: "Panuozzos", produto: "Panuozzo Portuguesa", descricao: "Pão italiano recheado com presunto, ovos, cebola e muçarela.", valor: 31.90, quantidade: 0, imagem: "imagens/panuozzos.jpg" },

            // Categoria: Hamburguers
            { categoria: "Hamburguers", produto: "Cheeseburger", descricao: "Hambúrguer bovino, queijo cheddar, alface, tomate e molho especial.", valor: 22.90, quantidade: 0, imagem: "imagens/hamburguers.jpg" },
            { categoria: "Hamburguers", produto: "Double Cheeseburger", descricao: "Dois hambúrgueres bovinos, queijo cheddar, alface, tomate e molho especial.", valor: 28.90, quantidade: 0, imagem: "imagens/hamburguers.jpg" },
            { categoria: "Hamburguers", produto: "Bacon Burger", descricao: "Hambúrguer bovino, queijo cheddar, bacon crocante, alface, tomate e molho especial.", valor: 25.90, quantidade: 0, imagem: "imagens/hamburguers.jpg" },
            { categoria: "Hamburguers", produto: "Chicken Burger", descricao: "Hambúrguer de frango, queijo cheddar, alface, tomate e molho especial.", valor: 20.90, quantidade: 0, imagem: "imagens/hamburguers.jpg" },
            { categoria: "Hamburguers", produto: "Veggie Burger", descricao: "Hambúrguer vegetariano, queijo cheddar, alface, tomate e molho especial.", valor: 23.90, quantidade: 0, imagem: "imagens/hamburguers.jpg" },
            { categoria: "Hamburguers", produto: "BBQ Burger", descricao: "Hambúrguer bovino, queijo cheddar, cebola caramelizada, molho BBQ.", valor: 26.90, quantidade: 0, imagem: "imagens/hamburguers.jpg" },
            { categoria: "Hamburguers", produto: "Classic Burger", descricao: "Hambúrguer bovino, queijo cheddar, alface, tomate e maionese.", valor: 21.90, quantidade: 0, imagem: "imagens/hamburguers.jpg" },
            { categoria: "Hamburguers", produto: "Mega Burger", descricao: "Três hambúrgueres bovinos, queijo cheddar, bacon, alface, tomate e molho especial.", valor: 35.90, quantidade: 0, imagem: "imagens/hamburguers.jpg" },

            // Categoria: Hot Dogs
            { categoria: "Hot Dogs", produto: "Simple Dog", descricao: "Salsicha, molho especial e purê.", valor: 15.90, quantidade: 0, imagem: "imagens/hotdogs.jpg" },
            { categoria: "Hot Dogs", produto: "Cheese Dog", descricao: "Salsicha, queijo derretido, molho especial e purê.", valor: 18.90, quantidade: 0, imagem: "imagens/hotdogs.jpg" },
            { categoria: "Hot Dogs", produto: "Bacon Dog", descricao: "Salsicha, queijo derretido, bacon crocante, molho especial e purê.", valor: 20.90, quantidade: 0, imagem: "imagens/hotdogs.jpg" },
            { categoria: "Hot Dogs", produto: "Double Dog", descricao: "Duas salsichas, queijo derretido, molho especial e purê.", valor: 22.90, quantidade: 0, imagem: "imagens/hotdogs.jpg" },
            { categoria: "Hot Dogs", produto: "Special Dog", descricao: "Salsicha, queijo derretido, batata palha, molho especial e purê.", valor: 25.90, quantidade: 0, imagem: "imagens/hotdogs.jpg" },
            { categoria: "Hot Dogs", produto: "Veggie Dog", descricao: "Salsicha vegetal, queijo derretido, molho especial e purê.", valor: 18.90, quantidade: 0, imagem: "imagens/hotdogs.jpg" },
            { categoria: "Hot Dogs", produto: "Chili Dog", descricao: "Salsicha, molho chili, queijo derretido e purê.", valor: 23.90, quantidade: 0, imagem: "imagens/hotdogs.jpg" },
            { categoria: "Hot Dogs", produto: "Mega Dog", descricao: "Três salsichas, queijo derretido, bacon, molho especial e purê.", valor: 30.90, quantidade: 0, imagem: "imagens/hotdogs.jpg" },

            // Categoria: Bebidas
            { categoria: "Bebidas", produto: "Coca-Cola Lata", descricao: "Refrigerante Coca-Cola em lata (350ml).", valor: 6.50, quantidade: 0, imagem: "imagens/bebidas.jpg" },
            { categoria: "Bebidas", produto: "Guaraná Lata", descricao: "Refrigerante Guaraná em lata (350ml).", valor: 6.50, quantidade: 0, imagem: "imagens/bebidas.jpg" },
            { categoria: "Bebidas", produto: "Fanta Laranja", descricao: "Refrigerante Fanta Laranja em lata (350ml).", valor: 6.50, quantidade: 0, imagem: "imagens/bebidas.jpg" },
            { categoria: "Bebidas", produto: "Água Mineral", descricao: "Água mineral sem gás (500ml).", valor: 3.00, quantidade: 0, imagem: "imagens/bebidas.jpg" },
            { categoria: "Bebidas", produto: "Suco de Laranja", descricao: "Suco natural de laranja (300ml).", valor: 8.90, quantidade: 0, imagem: "imagens/bebidas.jpg" },
            { categoria: "Bebidas", produto: "Suco de Maracujá", descricao: "Suco natural de maracujá (300ml).", valor: 8.90, quantidade: 0, imagem: "imagens/bebidas.jpg" },
            { categoria: "Bebidas", produto: "Red Bull", descricao: "Energético Red Bull (250ml).", valor: 12.90, quantidade: 0, imagem: "imagens/bebidas.jpg" },
            { categoria: "Bebidas", produto: "Cerveja Heineken", descricao: "Cerveja Heineken Long Neck (330ml).", valor: 10.90, quantidade: 0, imagem: "imagens/bebidas.jpg" },

            // Categoria: Promoções e Combos
            { categoria: "Promoções e Combos", produto: "Combo Pizza + Guaraná", descricao: "Pizza Margherita + Guaraná Lata.", valor: 42.90, quantidade: 0, imagem: "imagens/promocoes.jpg" },
            { categoria: "Promoções e Combos", produto: "Combo Double Cheeseburger + Refri", descricao: "Double Cheeseburger + Coca-Cola Lata.", valor: 35.90, quantidade: 0, imagem: "imagens/promocoes.jpg" },
            { categoria: "Promoções e Combos", produto: "Combo Mega Dog + Suco", descricao: "Mega Dog + Suco de Laranja.", valor: 45.90, quantidade: 0, imagem: "imagens/promocoes.jpg" },
            { categoria: "Promoções e Combos", produto: "Combo Veggie Burger + Guaraná", descricao: "Veggie Burger + Guaraná Lata.", valor: 30.90, quantidade: 0, imagem: "imagens/promocoes.jpg" },
            { categoria: "Promoções e Combos", produto: "Combo Panuozzo + Refri", descricao: "Panuozzo Margherita + Coca-Cola Lata.", valor: 35.90, quantidade: 0, imagem: "imagens/promocoes.jpg" },
            { categoria: "Promoções e Combos", produto: "Combo Pizza Família", descricao: "Pizza Grande (até 3 sabores) + 2 Refrigerantes.", valor: 89.90, quantidade: 0, imagem: "imagens/promocoes.jpg" },
            { categoria: "Promoções e Combos", produto: "Combo Hambúrguer Família", descricao: "3 Hambúrgueres + 3 Refrigerantes.", valor: 79.90, quantidade: 0, imagem: "imagens/promocoes.jpg" },
            { categoria: "Promoções e Combos", produto: "Combo Hot Dog Família", descricao: "5 Hot Dogs + 5 Refrigerantes.", valor: 99.90, quantidade: 0, imagem: "imagens/promocoes.jpg" }
        ];

    const horarios = [
      "Domingo - Aberto de 18h às 23h.",
      "Segunda - Fechado.",
      "Terça - Fechado.",
      "Quarta - Aberto de 18h às 23h.",
      "Quinta - Aberto de 18h às 23h.",
      "Sexta - Aberto de 18h às 23h.",
      "Sábado - Aberto de 18h às 23h."
    ];
    
      
