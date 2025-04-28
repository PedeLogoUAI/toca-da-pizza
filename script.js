const categorias = [
      { 
        imagem: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi19PngdeGEvlU7tI_4UIGqDo5SS_5ZlJd_zk_RcXj0scA_pFAbbL_exAF0kBQ5Uh-xAAUU_-i5QVWJ32xPqcnX2W6ZsCwc4cHygM49ND9UZnJf_HauhyphenhyphenF8UcQbIGGeCXp2LzZAiW8k7Hg5QioUQLQ9fByFSmgv-zmpl7f8DmB0dVj1GXNRgymylEuyJKA/s720/WhatsApp%20Image%202025-04-23%20at%2014.43.41.jpeg",
        descricao: "Pizzas",
        nome: "Pizzas"
      },
      { 
        imagem: "https://images.getrecipekit.com/20250204172400-panuozzo.jpg",
        descricao: "Panuozzos",
        nome: "Panuozzos"
      },
      { 
        imagem: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/66/88/20/cheeseburguer-forneria.jpg",
        descricao: "Hamburgueres",
        nome: "Hamburgueres"
      },
      { 
        imagem: "https://vejasp.abril.com.br/wp-content/uploads/2021/06/montagem4.jpg",
        descricao: "Hot Dogs",
        nome: "Hot Dogs"
      },
      { 
        imagem: "https://st.depositphotos.com/1024749/3937/i/450/depositphotos_39379297-stock-photo-aytos-bulgaria-january-23-2014.jpg",
        descricao: "Bebidas",
        nome: "Bebidas"
      },
      { 
        imagem: "https://cdn6.campograndenews.com.br/uploads/noticias/2020/03/10/24oz6i4b8zwko.jpg",
        descricao: "Promoções e Combos",
        nome: "Promoções e Combos"
      }
    ];

    const produtos = [
            // Categoria: Pizzas
            { categoria: "Pizzas", produto: "Alho Poró", descricao: "Molho de tomate, alho poró, farofa de bacon e geleia de pimienta.", valor: 35.90, quantidade: 0, imagem: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi19PngdeGEvlU7tI_4UIGqDo5SS_5ZlJd_zk_RcXj0scA_pFAbbL_exAF0kBQ5Uh-xAAUU_-i5QVWJ32xPqcnX2W6ZsCwc4cHygM49ND9UZnJf_HauhyphenhyphenF8UcQbIGGeCXp2LzZAiW8k7Hg5QioUQLQ9fByFSmgv-zmpl7f8DmB0dVj1GXNRgymylEuyJKA/s720/WhatsApp%20Image%202025-04-23%20at%2014.43.41.jpeg" },
            { categoria: "Pizzas", produto: "Calabresa", descricao: "Molho de tomate, mussarela, calabresa e cebolla crispy.", valor: 38.90, quantidade: 0, imagem: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi19PngdeGEvlU7tI_4UIGqDo5SS_5ZlJd_zk_RcXj0scA_pFAbbL_exAF0kBQ5Uh-xAAUU_-i5QVWJ32xPqcnX2W6ZsCwc4cHygM49ND9UZnJf_HauhyphenhyphenF8UcQbIGGeCXp2LzZAiW8k7Hg5QioUQLQ9fByFSmgv-zmpl7f8DmB0dVj1GXNRgymylEuyJKA/s720/WhatsApp%20Image%202025-04-23%20at%2014.43.41.jpeg" },
            { categoria: "Pizzas", produto: "Frango com Catupiry", descricao: "Molho de tomate, mussarela, frango desfiado, catupiry e azeitona.", valor: 40.90, quantidade: 0, imagem: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi19PngdeGEvlU7tI_4UIGqDo5SS_5ZlJd_zk_RcXj0scA_pFAbbL_exAF0kBQ5Uh-xAAUU_-i5QVWJ32xPqcnX2W6ZsCwc4cHygM49ND9UZnJf_HauhyphenhyphenF8UcQbIGGeCXp2LzZAiW8k7Hg5QioUQLQ9fByFSmgv-zmpl7f8DmB0dVj1GXNRgymylEuyJKA/s720/WhatsApp%20Image%202025-04-23%20at%2014.43.41.jpeg" },
            { categoria: "Pizzas", produto: "Marguerita", descricao: "Molho de tomate, mussarela, tomate e molho pesto.", valor: 42.90, quantidade: 0, imagem: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi19PngdeGEvlU7tI_4UIGqDo5SS_5ZlJd_zk_RcXj0scA_pFAbbL_exAF0kBQ5Uh-xAAUU_-i5QVWJ32xPqcnX2W6ZsCwc4cHygM49ND9UZnJf_HauhyphenhyphenF8UcQbIGGeCXp2LzZAiW8k7Hg5QioUQLQ9fByFSmgv-zmpl7f8DmB0dVj1GXNRgymylEuyJKA/s720/WhatsApp%20Image%202025-04-23%20at%2014.43.41.jpeg" },
            { categoria: "Pizzas", produto: "Marguerita da Toca", descricao: "Molho de tomate, mussarela, tomates confitados e molho pesto.", valor: 45.90, quantidade: 0, imagem: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi19PngdeGEvlU7tI_4UIGqDo5SS_5ZlJd_zk_RcXj0scA_pFAbbL_exAF0kBQ5Uh-xAAUU_-i5QVWJ32xPqcnX2W6ZsCwc4cHygM49ND9UZnJf_HauhyphenhyphenF8UcQbIGGeCXp2LzZAiW8k7Hg5QioUQLQ9fByFSmgv-zmpl7f8DmB0dVj1GXNRgymylEuyJKA/s720/WhatsApp%20Image%202025-04-23%20at%2014.43.41.jpeg" },
            { categoria: "Pizzas", produto: "Mussarela", descricao: "Molho de tomate, queijo mussarela.", valor: 43.90, quantidade: 0, imagem: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi19PngdeGEvlU7tI_4UIGqDo5SS_5ZlJd_zk_RcXj0scA_pFAbbL_exAF0kBQ5Uh-xAAUU_-i5QVWJ32xPqcnX2W6ZsCwc4cHygM49ND9UZnJf_HauhyphenhyphenF8UcQbIGGeCXp2LzZAiW8k7Hg5QioUQLQ9fByFSmgv-zmpl7f8DmB0dVj1GXNRgymylEuyJKA/s720/WhatsApp%20Image%202025-04-23%20at%2014.43.41.jpeg" },
            { categoria: "Pizzas", produto: "Pepperoni", descricao: "Molho de tomate, mussarela e pepperoni.", valor: 41.90, quantidade: 0, imagem: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi19PngdeGEvlU7tI_4UIGqDo5SS_5ZlJd_zk_RcXj0scA_pFAbbL_exAF0kBQ5Uh-xAAUU_-i5QVWJ32xPqcnX2W6ZsCwc4cHygM49ND9UZnJf_HauhyphenhyphenF8UcQbIGGeCXp2LzZAiW8k7Hg5QioUQLQ9fByFSmgv-zmpl7f8DmB0dVj1GXNRgymylEuyJKA/s720/WhatsApp%20Image%202025-04-23%20at%2014.43.41.jpeg" },
            { categoria: "Pizzas", produto: "Portuguesa", descricao: "Molho de tomate, mussarela, calabresa, cebola, presunto, pimentão, azeitona e ovo cozido.", valor: 30.90, quantidade: 0, imagem: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi19PngdeGEvlU7tI_4UIGqDo5SS_5ZlJd_zk_RcXj0scA_pFAbbL_exAF0kBQ5Uh-xAAUU_-i5QVWJ32xPqcnX2W6ZsCwc4cHygM49ND9UZnJf_HauhyphenhyphenF8UcQbIGGeCXp2LzZAiW8k7Hg5QioUQLQ9fByFSmgv-zmpl7f8DmB0dVj1GXNRgymylEuyJKA/s720/WhatsApp%20Image%202025-04-23%20at%2014.43.41.jpeg" },
            { categoria: "Pizzas", produto: "Presunto", descricao: "Molho de tomate, mussarela e presunto.", valor: 30.90, quantidade: 0, imagem: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi19PngdeGEvlU7tI_4UIGqDo5SS_5ZlJd_zk_RcXj0scA_pFAbbL_exAF0kBQ5Uh-xAAUU_-i5QVWJ32xPqcnX2W6ZsCwc4cHygM49ND9UZnJf_HauhyphenhyphenF8UcQbIGGeCXp2LzZAiW8k7Hg5QioUQLQ9fByFSmgv-zmpl7f8DmB0dVj1GXNRgymylEuyJKA/s720/WhatsApp%20Image%202025-04-23%20at%2014.43.41.jpeg" },
            { categoria: "Pizzas", produto: "Quatro Queijos", descricao: "Molho de tomate, mussarela, gorgonzola, provolone e catupiry.", valor: 30.90, quantidade: 0, imagem: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi19PngdeGEvlU7tI_4UIGqDo5SS_5ZlJd_zk_RcXj0scA_pFAbbL_exAF0kBQ5Uh-xAAUU_-i5QVWJ32xPqcnX2W6ZsCwc4cHygM49ND9UZnJf_HauhyphenhyphenF8UcQbIGGeCXp2LzZAiW8k7Hg5QioUQLQ9fByFSmgv-zmpl7f8DmB0dVj1GXNRgymylEuyJKA/s720/WhatsApp%20Image%202025-04-23%20at%2014.43.41.jpeg" },
            { categoria: "Pizzas", produto: "Romana", descricao: "Molho de tomate, mussarela, calabresa moída e alho torrado.", valor: 30.90, quantidade: 0, imagem: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi19PngdeGEvlU7tI_4UIGqDo5SS_5ZlJd_zk_RcXj0scA_pFAbbL_exAF0kBQ5Uh-xAAUU_-i5QVWJ32xPqcnX2W6ZsCwc4cHygM49ND9UZnJf_HauhyphenhyphenF8UcQbIGGeCXp2LzZAiW8k7Hg5QioUQLQ9fByFSmgv-zmpl7f8DmB0dVj1GXNRgymylEuyJKA/s720/WhatsApp%20Image%202025-04-23%20at%2014.43.41.jpeg" },
            { categoria: "Pizzas", produto: "Velho do Mar", descricao: "Molho de tomate, mussarela, atum, cebola, azeitona e ovo cozido.", valor: 30.90, quantidade: 0, imagem: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi19PngdeGEvlU7tI_4UIGqDo5SS_5ZlJd_zk_RcXj0scA_pFAbbL_exAF0kBQ5Uh-xAAUU_-i5QVWJ32xPqcnX2W6ZsCwc4cHygM49ND9UZnJf_HauhyphenhyphenF8UcQbIGGeCXp2LzZAiW8k7Hg5QioUQLQ9fByFSmgv-zmpl7f8DmB0dVj1GXNRgymylEuyJKA/s720/WhatsApp%20Image%202025-04-23%20at%2014.43.41.jpeg" },
            { categoria: "Pizzas", produto: "Banana com Canela", descricao: "Pizza doce com, mussarela, banana e canela.", valor: 30.90, quantidade: 0, imagem: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi19PngdeGEvlU7tI_4UIGqDo5SS_5ZlJd_zk_RcXj0scA_pFAbbL_exAF0kBQ5Uh-xAAUU_-i5QVWJ32xPqcnX2W6ZsCwc4cHygM49ND9UZnJf_HauhyphenhyphenF8UcQbIGGeCXp2LzZAiW8k7Hg5QioUQLQ9fByFSmgv-zmpl7f8DmB0dVj1GXNRgymylEuyJKA/s720/WhatsApp%20Image%202025-04-23%20at%2014.43.41.jpeg" },
            { categoria: "Pizzas", produto: "Nutella", descricao: "Pizza doce com nutella.", valor: 30.90, quantidade: 0, imagem: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi19PngdeGEvlU7tI_4UIGqDo5SS_5ZlJd_zk_RcXj0scA_pFAbbL_exAF0kBQ5Uh-xAAUU_-i5QVWJ32xPqcnX2W6ZsCwc4cHygM49ND9UZnJf_HauhyphenhyphenF8UcQbIGGeCXp2LzZAiW8k7Hg5QioUQLQ9fByFSmgv-zmpl7f8DmB0dVj1GXNRgymylEuyJKA/s720/WhatsApp%20Image%202025-04-23%20at%2014.43.41.jpeg" },
            { categoria: "Pizzas", produto: "Romeu e Julieta", descricao: "Pizza doce com catupiry e goiabada.", valor: 30.90, quantidade: 0, imagem: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi19PngdeGEvlU7tI_4UIGqDo5SS_5ZlJd_zk_RcXj0scA_pFAbbL_exAF0kBQ5Uh-xAAUU_-i5QVWJ32xPqcnX2W6ZsCwc4cHygM49ND9UZnJf_HauhyphenhyphenF8UcQbIGGeCXp2LzZAiW8k7Hg5QioUQLQ9fByFSmgv-zmpl7f8DmB0dVj1GXNRgymylEuyJKA/s720/WhatsApp%20Image%202025-04-23%20at%2014.43.41.jpeg" },

            // Categoria: Panuozzos
            { categoria: "Panuozzos", produto: "Panuozzo Margherita", descricao: "Pão italiano recheado com molho de tomate, muçarela e manjericão.", valor: 25.90, quantidade: 0, imagem: "https://images.getrecipekit.com/20250204172400-panuozzo.jpg" },
            { categoria: "Panuozzos", produto: "Panuozzo Calabresa", descricao: "Pão italiano recheado com molho de tomate, calabresa e muçarela.", valor: 28.90, quantidade: 0, imagem: "https://images.getrecipekit.com/20250204172400-panuozzo.jpg" },
            { categoria: "Panuozzos", produto: "Panuozzo Frango", descricao: "Pão italiano recheado com frango desfiado, catupiry e muçarela.", valor: 30.90, quantidade: 0, imagem: "https://images.getrecipekit.com/20250204172400-panuozzo.jpg" },
            { categoria: "Panuozzos", produto: "Panuozzo Vegetariano", descricao: "Pão italiano recheado com legumes e muçarela.", valor: 27.90, quantidade: 0, imagem: "https://images.getrecipekit.com/20250204172400-panuozzo.jpg" },
            { categoria: "Panuozzos", produto: "Panuozzo Pepperoni", descricao: "Pão italiano recheado com pepperoni e muçarela.", valor: 32.90, quantidade: 0, imagem: "https://images.getrecipekit.com/20250204172400-panuozzo.jpg" },
            { categoria: "Panuozzos", produto: "Panuozzo Quatro Queijos", descricao: "Pão italiano recheado com quatro queijos.", valor: 33.90, quantidade: 0, imagem: "https://images.getrecipekit.com/20250204172400-panuozzo.jpg" },
            { categoria: "Panuozzos", produto: "Panuozzo Doce", descricao: "Pão italiano recheado com doce de leite e chocolate.", valor: 20.90, quantidade: 0, imagem: "https://images.getrecipekit.com/20250204172400-panuozzo.jpg" },
            { categoria: "Panuozzos", produto: "Panuozzo Portuguesa", descricao: "Pão italiano recheado com presunto, ovos, cebola e muçarela.", valor: 31.90, quantidade: 0, imagem: "https://images.getrecipekit.com/20250204172400-panuozzo.jpg" },

            // Categoria: Hamburgueres
            { categoria: "Hamburgueres", produto: "Cheeseburger", descricao: "Hambúrguer bovino, queijo cheddar, alface, tomate e molho especial.", valor: 22.90, quantidade: 0, imagem: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/66/88/20/cheeseburguer-forneria.jpg" },
            { categoria: "Hamburgueres", produto: "Double Cheeseburger", descricao: "Dois hambúrgueres bovinos, queijo cheddar, alface, tomate e molho especial.", valor: 28.90, quantidade: 0, imagem: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/66/88/20/cheeseburguer-forneria.jpg" },
            { categoria: "Hamburgueres", produto: "Bacon Burger", descricao: "Hambúrguer bovino, queijo cheddar, bacon crocante, alface, tomate e molho especial.", valor: 25.90, quantidade: 0, imagem: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/66/88/20/cheeseburguer-forneria.jpg" },
            { categoria: "Hamburgueres", produto: "Chicken Burger", descricao: "Hambúrguer de frango, queijo cheddar, alface, tomate e molho especial.", valor: 20.90, quantidade: 0, imagem: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/66/88/20/cheeseburguer-forneria.jpg" },
            { categoria: "Hamburgueres", produto: "Veggie Burger", descricao: "Hambúrguer vegetariano, queijo cheddar, alface, tomate e molho especial.", valor: 23.90, quantidade: 0, imagem: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/66/88/20/cheeseburguer-forneria.jpg" },
            { categoria: "Hamburgueres", produto: "BBQ Burger", descricao: "Hambúrguer bovino, queijo cheddar, cebola caramelizada, molho BBQ.", valor: 26.90, quantidade: 0, imagem: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/66/88/20/cheeseburguer-forneria.jpg" },
            { categoria: "Hamburgueres", produto: "Classic Burger", descricao: "Hambúrguer bovino, queijo cheddar, alface, tomate e maionese.", valor: 21.90, quantidade: 0, imagem: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/66/88/20/cheeseburguer-forneria.jpg" },
            { categoria: "Hamburgueres", produto: "Mega Burger", descricao: "Três hambúrgueres bovinos, queijo cheddar, bacon, alface, tomate e molho especial.", valor: 35.90, quantidade: 0, imagem: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/66/88/20/cheeseburguer-forneria.jpg" },

            // Categoria: Hot Dogs
            { categoria: "Hot Dogs", produto: "Simple Dog", descricao: "Salsicha, molho especial e purê.", valor: 15.90, quantidade: 0, imagem: "https://vejasp.abril.com.br/wp-content/uploads/2021/06/montagem4.jpg" },
            { categoria: "Hot Dogs", produto: "Cheese Dog", descricao: "Salsicha, queijo derretido, molho especial e purê.", valor: 18.90, quantidade: 0, imagem: "https://vejasp.abril.com.br/wp-content/uploads/2021/06/montagem4.jpg" },
            { categoria: "Hot Dogs", produto: "Bacon Dog", descricao: "Salsicha, queijo derretido, bacon crocante, molho especial e purê.", valor: 20.90, quantidade: 0, imagem: "https://vejasp.abril.com.br/wp-content/uploads/2021/06/montagem4.jpg" },
            { categoria: "Hot Dogs", produto: "Double Dog", descricao: "Duas salsichas, queijo derretido, molho especial e purê.", valor: 22.90, quantidade: 0, imagem: "https://vejasp.abril.com.br/wp-content/uploads/2021/06/montagem4.jpg" },
            { categoria: "Hot Dogs", produto: "Special Dog", descricao: "Salsicha, queijo derretido, batata palha, molho especial e purê.", valor: 25.90, quantidade: 0, imagem: "https://vejasp.abril.com.br/wp-content/uploads/2021/06/montagem4.jpg" },
            { categoria: "Hot Dogs", produto: "Veggie Dog", descricao: "Salsicha vegetal, queijo derretido, molho especial e purê.", valor: 18.90, quantidade: 0, imagem: "https://vejasp.abril.com.br/wp-content/uploads/2021/06/montagem4.jpg" },
            { categoria: "Hot Dogs", produto: "Chili Dog", descricao: "Salsicha, molho chili, queijo derretido e purê.", valor: 23.90, quantidade: 0, imagem: "https://vejasp.abril.com.br/wp-content/uploads/2021/06/montagem4.jpg" },
            { categoria: "Hot Dogs", produto: "Mega Dog", descricao: "Três salsichas, queijo derretido, bacon, molho especial e purê.", valor: 30.90, quantidade: 0, imagem: "https://vejasp.abril.com.br/wp-content/uploads/2021/06/montagem4.jpg" },

            // Categoria: Bebidas
            { categoria: "Bebidas", produto: "Coca-Cola Lata", descricao: "Refrigerante Coca-Cola em lata (350ml).", valor: 6.50, quantidade: 0, imagem: "https://st.depositphotos.com/1024749/3937/i/450/depositphotos_39379297-stock-photo-aytos-bulgaria-january-23-2014.jpg" },
            { categoria: "Bebidas", produto: "Guaraná Lata", descricao: "Refrigerante Guaraná em lata (350ml).", valor: 6.50, quantidade: 0, imagem: "https://st.depositphotos.com/1024749/3937/i/450/depositphotos_39379297-stock-photo-aytos-bulgaria-january-23-2014.jpg" },
            { categoria: "Bebidas", produto: "Fanta Laranja", descricao: "Refrigerante Fanta Laranja em lata (350ml).", valor: 6.50, quantidade: 0, imagem: "https://st.depositphotos.com/1024749/3937/i/450/depositphotos_39379297-stock-photo-aytos-bulgaria-january-23-2014.jpg" },
            { categoria: "Bebidas", produto: "Água Mineral", descricao: "Água mineral sem gás (500ml).", valor: 3.00, quantidade: 0, imagem: "https://st.depositphotos.com/1024749/3937/i/450/depositphotos_39379297-stock-photo-aytos-bulgaria-january-23-2014.jpg" },
            { categoria: "Bebidas", produto: "Suco de Laranja", descricao: "Suco natural de laranja (300ml).", valor: 8.90, quantidade: 0, imagem: "https://st.depositphotos.com/1024749/3937/i/450/depositphotos_39379297-stock-photo-aytos-bulgaria-january-23-2014.jpg" },
            { categoria: "Bebidas", produto: "Suco de Maracujá", descricao: "Suco natural de maracujá (300ml).", valor: 8.90, quantidade: 0, imagem: "https://st.depositphotos.com/1024749/3937/i/450/depositphotos_39379297-stock-photo-aytos-bulgaria-january-23-2014.jpg" },
            { categoria: "Bebidas", produto: "Red Bull", descricao: "Energético Red Bull (250ml).", valor: 12.90, quantidade: 0, imagem: "https://st.depositphotos.com/1024749/3937/i/450/depositphotos_39379297-stock-photo-aytos-bulgaria-january-23-2014.jpg" },
            { categoria: "Bebidas", produto: "Cerveja Heineken", descricao: "Cerveja Heineken Long Neck (330ml).", valor: 10.90, quantidade: 0, imagem: "https://st.depositphotos.com/1024749/3937/i/450/depositphotos_39379297-stock-photo-aytos-bulgaria-january-23-2014.jpg" },

            // Categoria: Promoções e Combos
            { categoria: "Promoções e Combos", produto: "Combo Pizza + Guaraná", descricao: "Pizza Margherita + Guaraná Lata.", valor: 42.90, quantidade: 0, imagem: "https://cdn6.campograndenews.com.br/uploads/noticias/2020/03/10/24oz6i4b8zwko.jpg" },
            { categoria: "Promoções e Combos", produto: "Combo Double Cheeseburger + Refri", descricao: "Double Cheeseburger + Coca-Cola Lata.", valor: 35.90, quantidade: 0, imagem: "https://cdn6.campograndenews.com.br/uploads/noticias/2020/03/10/24oz6i4b8zwko.jpg" },
            { categoria: "Promoções e Combos", produto: "Combo Mega Dog + Suco", descricao: "Mega Dog + Suco de Laranja.", valor: 45.90, quantidade: 0, imagem: "https://cdn6.campograndenews.com.br/uploads/noticias/2020/03/10/24oz6i4b8zwko.jpg" },
            { categoria: "Promoções e Combos", produto: "Combo Veggie Burger + Guaraná", descricao: "Veggie Burger + Guaraná Lata.", valor: 30.90, quantidade: 0, imagem: "https://cdn6.campograndenews.com.br/uploads/noticias/2020/03/10/24oz6i4b8zwko.jpg" },
            { categoria: "Promoções e Combos", produto: "Combo Panuozzo + Refri", descricao: "Panuozzo Margherita + Coca-Cola Lata.", valor: 35.90, quantidade: 0, imagem: "https://cdn6.campograndenews.com.br/uploads/noticias/2020/03/10/24oz6i4b8zwko.jpg" },
            { categoria: "Promoções e Combos", produto: "Combo Pizza Família", descricao: "Pizza Grande (até 3 sabores) + 2 Refrigerantes.", valor: 89.90, quantidade: 0, imagem: "https://cdn6.campograndenews.com.br/uploads/noticias/2020/03/10/24oz6i4b8zwko.jpg" },
            { categoria: "Promoções e Combos", produto: "Combo Hambúrguer Família", descricao: "3 Hambúrgueres + 3 Refrigerantes.", valor: 79.90, quantidade: 0, imagem: "https://cdn6.campograndenews.com.br/uploads/noticias/2020/03/10/24oz6i4b8zwko.jpg" },
            { categoria: "Promoções e Combos", produto: "Combo Hot Dog Família", descricao: "5 Hot Dogs + 5 Refrigerantes.", valor: 99.90, quantidade: 0, imagem: "https://cdn6.campograndenews.com.br/uploads/noticias/2020/03/10/24oz6i4b8zwko.jpg" }
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
  
  // Variáveis Globais
let categoriaAtual = "";
let pedidoConfirmado = false;

// Função para animar a sacola e tocar som
function animarSacola() {
  const sacolaIcon = document.getElementById('sacola-icon');
  const soundEffect = document.getElementById('sound-effect');
  
  // Adiciona classe de animação
  sacolaIcon.classList.add('jump-animation');
  
  // Toca o som
  soundEffect.currentTime = 0;
  soundEffect.play();
  
  // Remove a classe após a animação terminar
  setTimeout(() => {
    sacolaIcon.classList.remove('jump-animation');
  }, 300);
  
  // Atualiza contador
  atualizarContadorSacola();
}

// Função para atualizar contador da sacola
function atualizarContadorSacola() {
  const totalItens = produtos.reduce((total, prod) => total + prod.quantidade, 0);
  document.getElementById('sacola-counter').textContent = totalItens;
}

// Funções de Controle de Quantidade
function incrementarQuantidade(categoria, produto) {
  const item = produtos.find(p => p.categoria === categoria && p.produto === produto);
  if (item) {
    item.quantidade++;
    animarSacola();
    atualizarExibicao(categoria);
  }
}

function decrementarQuantidade(categoria, produto) {
  const item = produtos.find(p => p.categoria === categoria && p.produto === produto);
  if (item && item.quantidade > 0) {
    item.quantidade--;
    animarSacola();
    atualizarExibicao(categoria);
  }
}

function atualizarExibicao(categoria) {
  if (document.getElementById('pagina-produtos').style.display === 'block') {
    carregarProdutos(categoria);
  }
  if (document.getElementById('pagina-sacola').style.display === 'block') {
    carregarSacola();
  }
}

// Funções Principais
function mostrarPagina(id) {
  document.querySelectorAll('.pagina').forEach(pagina => {
    pagina.style.display = 'none';
  });
  document.getElementById(id).style.display = 'block';
}

function carregarCategorias() {
  const container = document.getElementById('lista-categorias');
  container.innerHTML = '';
  
  categorias.forEach(cat => {
    const div = document.createElement('div');
    div.className = 'categoria-card';
    div.style.backgroundImage = `url(${cat.imagem})`;
    div.innerHTML = `<div class="categoria-label">${cat.descricao}</div>`;
    div.addEventListener('click', () => {
      categoriaAtual = cat.nome;
      carregarProdutos(categoriaAtual);
      mostrarPagina('pagina-produtos');
      document.getElementById('titulo-categoria').textContent = cat.nome;
    });
    container.appendChild(div);
  });
}

function carregarProdutos(categoria) {
  const container = document.getElementById('lista-produtos');
  container.innerHTML = '';
  
  produtos.filter(p => p.categoria === categoria).forEach(prod => {
    const div = document.createElement('div');
    div.className = 'card-cinza';
    div.innerHTML = `
      <div class="produto-card">
        <div class="produto-info">
          <h3 style="font-weight: bold;">${prod.produto}</h3>
          <p>${prod.descricao}</p>
          <p class="preco">R$ ${prod.valor.toFixed(2)}</p>
        </div>
        <div class="produto-imagem" style="background-image: url(${prod.imagem})"></div>
        <div class="botoes-quantidade">
          <button class="btn-quantidade" onclick="decrementarQuantidade('${categoria}', '${prod.produto}')">-</button>
          <span class="quantidade">${prod.quantidade}</span>
          <button class="btn-quantidade" onclick="incrementarQuantidade('${categoria}', '${prod.produto}')">+</button>
        </div>
      </div>
    `;
    container.appendChild(div);
  });
}

function carregarSacola() {
  const container = document.getElementById('itens-sacola');
  const resumo = document.getElementById('resumo-pedido');
  container.innerHTML = '';
  
  const itensSacola = produtos.filter(p => p.quantidade > 0);
  
  if (itensSacola.length === 0) {
    container.innerHTML = '<p>Sua sacola está vazia</p>';
    document.getElementById('btn-finalizar').style.display = 'none';
    resumo.innerHTML = '';
    return;
  }
  
  document.getElementById('btn-finalizar').style.display = 'block';
  let subtotal = 0;
  
  itensSacola.forEach(prod => {
    const div = document.createElement('div');
    div.className = 'card-cinza';
    div.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <div>
          <h3 style="font-weight: bold;">${prod.produto}</h3>
          <p class="preco">R$ ${prod.valor.toFixed(2)}</p>
        </div>
        <div style="display: flex; align-items: center;">
          <button class="btn-quantidade" onclick="decrementarQuantidade('${prod.categoria}', '${prod.produto}')">-</button>
          <span class="quantidade">${prod.quantidade}</span>
          <button class="btn-quantidade" onclick="incrementarQuantidade('${prod.categoria}', '${prod.produto}')">+</button>
        </div>
      </div>
    `;
    container.appendChild(div);
    subtotal += prod.valor * prod.quantidade;
  });
  
  const taxaEntrega = 5.00;
  const total = subtotal + taxaEntrega;
  resumo.innerHTML = `
    <p>Subtotal: R$ ${subtotal.toFixed(2)}</p>
    <p>Taxa de Entrega: R$ ${taxaEntrega.toFixed(2)}</p>
    <p style="font-weight: bold; margin-top: 10px;">Total: R$ ${total.toFixed(2)}</p>
  `;
}

function carregarFinalizacao() {
  const resumo = document.getElementById('resumo-final');
  const itensSacola = produtos.filter(p => p.quantidade > 0);
  let subtotal = itensSacola.reduce((total, prod) => total + (prod.valor * prod.quantidade), 0);
  const taxaEntrega = 5.00;
  const total = subtotal + taxaEntrega;

  resumo.innerHTML = `
    <h2>Resumo do Pedido</h2>
    ${itensSacola.map(prod => `
      <p>${prod.produto} (${prod.quantidade}x) - R$ ${(prod.valor * prod.quantidade).toFixed(2)}</p>
    `).join('')}
    <p><strong>Subtotal:</strong> R$ ${subtotal.toFixed(2)}</p>
    <p><strong>Taxa de Entrega:</strong> R$ ${taxaEntrega.toFixed(2)}</p>
    <p><strong>Total:</strong> R$ ${total.toFixed(2)}</p>
  `;

  document.getElementById('formas-pagamento').innerHTML = `
    <label><input type="radio" name="pagamento" value="Dinheiro"> Dinheiro</label><br>
    <label><input type="radio" name="pagamento" value="Pix"> Pix</label><br>
    <label><input type="radio" name="pagamento" value="Cartão de Crédito"> Cartão de Crédito</label><br>
    <label><input type="radio" name="pagamento" value="Cartão de Débito"> Cartão de Débito</label>
  `;

  const cliente = JSON.parse(localStorage.getItem('cliente')) || {};
  document.getElementById('dados-cliente-content').innerHTML = cliente.nome ? `
    <p><strong>Nome:</strong> ${cliente.nome}</p>
    <p><strong>Telefone:</strong> ${cliente.telefone}</p>
    <p><strong>Endereço:</strong> ${cliente.endereco}</p>
  ` : '<p>Nenhum dado cadastrado</p>';
}

function enviarPedidoWhatsApp() {
  const cliente = JSON.parse(localStorage.getItem('cliente'));
  const formaPagamento = document.querySelector('input[name="pagamento"]:checked');
  
  if (!cliente || !cliente.nome) {
    alert('Por favor, complete seus dados antes de confirmar o pedido');
    mostrarPagina('pagina-dados-cliente');
    return;
  }

  if (!formaPagamento) {
    alert('Selecione uma forma de pagamento');
    return;
  }
  
  const itensSacola = produtos.filter(p => p.quantidade > 0);
  let subtotal = itensSacola.reduce((total, prod) => total + (prod.valor * prod.quantidade), 0);
  const taxaEntrega = 5.00;
  const total = subtotal + taxaEntrega;

  let mensagem = `*Pedido - Toca da Pizza*\n\n`;
  mensagem += `*Itens:*\n${itensSacola.map(p => `- ${p.produto} (${p.quantidade}x) - R$ ${(p.valor * p.quantidade).toFixed(2)}`).join('\n')}\n\n`;
  mensagem += `*Total: R$ ${total.toFixed(2)}*\n`;
  mensagem += `*Forma de Pagamento:* ${formaPagamento.value}\n\n`;
  mensagem += `*Dados do Cliente:*\n`;
  mensagem += `Nome: ${cliente.nome}\n`;
  mensagem += `Telefone: ${cliente.telefone}\n`;
  mensagem += `Endereço: ${cliente.endereco}`;

  const mensagemCodificada = encodeURIComponent(mensagem);
  window.open(`https://wa.me/5531995536361?text=${mensagemCodificada}`, '_blank');

  produtos.forEach(p => p.quantidade = 0);
  atualizarContadorSacola();
  carregarSacola();
  mostrarPagina('pagina-categorias');
  alert('Pedido enviado com sucesso!');
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  mostrarPagina('pagina-carregamento');
  
  setTimeout(() => {
    carregarCategorias();
    mostrarPagina('pagina-categorias');
  }, 2000);

  document.getElementById('nav-voltar').addEventListener('click', (e) => {
    e.preventDefault();
    mostrarPagina('pagina-categorias');
  });

  document.getElementById('nav-perfil').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('horarios').innerHTML = horarios.map(h => `<p>${h}</p>`).join('');
    mostrarPagina('pagina-perfil');
  });

  document.getElementById('sacola-icon').addEventListener('click', () => {
    carregarSacola();
    mostrarPagina('pagina-sacola');
  });

  document.getElementById('btn-finalizar').addEventListener('click', () => {
    carregarFinalizacao();
    mostrarPagina('pagina-finalizar');
  });

  document.getElementById('btn-confirmar').addEventListener('click', (e) => {
    e.preventDefault();
    enviarPedidoWhatsApp();
  });

  document.getElementById('form-cliente').addEventListener('submit', (e) => {
    e.preventDefault();
    const cliente = {
      nome: document.getElementById('nome').value,
      telefone: document.getElementById('telefone').value,
      endereco: document.getElementById('endereco').value
    };
    localStorage.setItem('cliente', JSON.stringify(cliente));
    carregarFinalizacao();
    mostrarPagina('pagina-finalizar');
  });

  document.getElementById('btn-editar-dados').addEventListener('click', (e) => {
    e.preventDefault();
    const cliente = JSON.parse(localStorage.getItem('cliente'));
    if (cliente) {
      document.getElementById('nome').value = cliente.nome;
      document.getElementById('telefone').value = cliente.telefone;
      document.getElementById('endereco').value = cliente.endereco;
    }
    mostrarPagina('pagina-dados-cliente');
  });
});

// Arrays devem ser fornecidas separadamente
// const categorias = [...];
// const produtos = [...];
// const horarios = [...];
