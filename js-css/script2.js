// Sistema de Avaliações (EDITÁVEL)
const avaliacoesMedias = {
  produtos: 3.6,
  atendimento: 4.4,
  aplicativo: 4.8
};

// Sistema de Avaliações do Cliente
const avaliacoesCliente = {
  produtos: 0,
  atendimento: 0,
  aplicativo: 0
};

// Variáveis Globais
let categoriaAtual = "";
let pedidoConfirmado = false;

// Arrays (insira manualmente)
const categorias = [
  {
    id: 1,
    nome: "Pizzas",
    descricao: "Pizzas feita com massa napolitana de fermentação lenta.",
    imagem: "imagens/pizzas.jpeg"
  },
  {
    id: 2,
    nome: "Panuozzos",
    descricao: "Sanduiche italiano feito com massa de pizza diversos sabores.",
    imagem: "imagens/panuozzos.jpg"
  },
  {
    id: 3,
    nome: "Hamburguers",
    descricao: "Hambúrgueres artesanais envoltos em massa de pizza com ingredientes especiais.",
    imagem: "imagens/hamburguers.jpg"
  },
  {
    id: 4,
    nome: "Hot Dogs",
    descricao: "Cachorros-quentes feitos na massa de pizza com recheios variados e extras deliciosos.",
    imagem: "imagens/hotdogs.jpg"
  },
  {
    id: 5,
    nome: "Bebidas",
    descricao: "Refrigerantes, sucos naturais e energéticos.",
    imagem: "imagens/bebidas.jpg"
  },
  {
    id: 6,
    nome: "Promoções e Combos",
    descricao: "Combos especiais com descontos imperdíveis.",
    imagem: "imagens/promocoes.jpg"
  }
];

    const produtos = [
    // Categoria: Pizzas
    { id: 1, categoria: "Pizzas", produto: "Alho Poró", descricao: "Molho de tomate, alho poró, farofa de bacon e geleia de pimienta.", valor: 35.90, quantidade: 0, imagem: "imagens/pizzas.jpeg" },
    { id: 2, categoria: "Pizzas", produto: "Calabresa", descricao: "Molho de tomate, mussarela, calabresa e cebolla crispy.", valor: 38.90, quantidade: 0, imagem: "imagens/pizzas.jpeg" },
    { id: 3, categoria: "Pizzas", produto: "Frango com Catupiry", descricao: "Molho de tomate, mussarela, frango desfiado, catupiry e azeitona.", valor: 40.90, quantidade: 0, imagem: "imagens/pizzas.jpeg" },
    { id: 4, categoria: "Pizzas", produto: "Marguerita", descricao: "Molho de tomate, mussarela, tomate e molho pesto.", valor: 42.90, quantidade: 0, imagem: "imagens/pizzas.jpeg" },
    { id: 5, categoria: "Pizzas", produto: "Marguerita da Toca", descricao: "Molho de tomate, mussarela, tomates confitados e molho pesto.", valor: 45.90, quantidade: 0, imagem: "imagens/pizzas.jpeg" },
    { id: 6, categoria: "Pizzas", produto: "Mussarela", descricao: "Molho de tomate, queijo mussarela.", valor: 43.90, quantidade: 0, imagem: "imagens/pizzas.jpeg" },
    { id: 7, categoria: "Pizzas", produto: "Pepperoni", descricao: "Molho de tomate, mussarela e pepperoni.", valor: 41.90, quantidade: 0, imagem: "imagens/pizzas.jpeg" },
    { id: 8, categoria: "Pizzas", produto: "Portuguesa", descricao: "Molho de tomate, mussarela, calabresa, cebola, presunto, pimentão, azeitona e ovo cozido.", valor: 30.90, quantidade: 0, imagem: "imagens/pizzas.jpeg" },
    { id: 9, categoria: "Pizzas", produto: "Presunto", descricao: "Molho de tomate, mussarela e presunto.", valor: 30.90, quantidade: 0, imagem: "imagens/pizzas.jpeg" },
    { id: 10, categoria: "Pizzas", produto: "Quatro Queijos", descricao: "Molho de tomate, mussarela, gorgonzola, provolone e catupiry.", valor: 30.90, quantidade: 0, imagem: "imagens/pizzas.jpeg" },
    { id: 11, categoria: "Pizzas", produto: "Romana", descricao: "Molho de tomate, mussarela, calabresa moída e alho torrado.", valor: 30.90, quantidade: 0, imagem: "imagens/pizzas.jpeg" },
    { id: 12, categoria: "Pizzas", produto: "Velho do Mar", descricao: "Molho de tomate, mussarela, atum, cebola, azeitona e ovo cozido.", valor: 30.90, quantidade: 0, imagem: "imagens/pizzas.jpeg" },
    { id: 13, categoria: "Pizzas", produto: "Banana com Canela", descricao: "Pizza doce com, mussarela, banana e canela.", valor: 30.90, quantidade: 0, imagem: "imagens/pizzas.jpeg" },
    { id: 14, categoria: "Pizzas", produto: "Nutella", descricao: "Pizza doce com nutella.", valor: 30.90, quantidade: 0, imagem: "imagens/pizzas.jpeg" },
    { id: 15, categoria: "Pizzas", produto: "Romeu e Julieta", descricao: "Pizza doce com catupiry e goiabada.", valor: 30.90, quantidade: 0, imagem: "imagens/pizzas.jpeg" },
    
    // Categoria: Panuozzos
    { id: 16, categoria: "Panuozzos", produto: "Panuozzo Margherita", descricao: "Pão italiano recheado com molho de tomate, muçarela e manjericão.", valor: 25.90, quantidade: 0, imagem: "imagens/panuozzos.jpg" },
    { id: 17, categoria: "Panuozzos", produto: "Panuozzo Calabresa", descricao: "Pão italiano recheado com molho de tomate, calabresa e muçarela.", valor: 28.90, quantidade: 0, imagem: "imagens/panuozzos.jpg" },
    { id: 18, categoria: "Panuozzos", produto: "Panuozzo Frango", descricao: "Pão italiano recheado com frango desfiado, catupiry e muçarela.", valor: 30.90, quantidade: 0, imagem: "imagens/panuozzos.jpg" },
    { id: 19, categoria: "Panuozzos", produto: "Panuozzo Vegetariano", descricao: "Pão italiano recheado com legumes e muçarela.", valor: 27.90, quantidade: 0, imagem: "imagens/panuozzos.jpg" },
    { id: 20, categoria: "Panuozzos", produto: "Panuozzo Pepperoni", descricao: "Pão italiano recheado com pepperoni e muçarela.", valor: 32.90, quantidade: 0, imagem: "imagens/panuozzos.jpg" },
    { id: 21, categoria: "Panuozzos", produto: "Panuozzo Quatro Queijos", descricao: "Pão italiano recheado com quatro queijos.", valor: 33.90, quantidade: 0, imagem: "imagens/panuozzos.jpg" },
    { id: 22, categoria: "Panuozzos", produto: "Panuozzo Doce", descricao: "Pão italiano recheado com doce de leite e chocolate.", valor: 20.90, quantidade: 0, imagem: "imagens/panuozzos.jpg" },
    { id: 23, categoria: "Panuozzos", produto: "Panuozzo Portuguesa", descricao: "Pão italiano recheado com presunto, ovos, cebola e muçarela.", valor: 31.90, quantidade: 0, imagem: "imagens/panuozzos.jpg" },

    // Categoria: Hamburguers
    { id: 24, categoria: "Hamburguers", produto: "Cheeseburger", descricao: "Hambúrguer bovino, queijo cheddar, alface, tomate e molho especial.", valor: 22.90, quantidade: 0, imagem: "imagens/hamburguers.jpg" },
    { id: 25, categoria: "Hamburguers", produto: "Double Cheeseburger", descricao: "Dois hambúrgueres bovinos, queijo cheddar, alface, tomate e molho especial.", valor: 28.90, quantidade: 0, imagem: "imagens/hamburguers.jpg" },
    { id: 26, categoria: "Hamburguers", produto: "Bacon Burger", descricao: "Hambúrguer bovino, queijo cheddar, bacon crocante, alface, tomate e molho especial.", valor: 25.90, quantidade: 0, imagem: "imagens/hamburguers.jpg" },
    { id: 27, categoria: "Hamburguers", produto: "Chicken Burger", descricao: "Hambúrguer de frango, queijo cheddar, alface, tomate e molho especial.", valor: 20.90, quantidade: 0, imagem: "imagens/hamburguers.jpg" },
    { id: 28, categoria: "Hamburguers", produto: "Veggie Burger", descricao: "Hambúrguer vegetariano, queijo cheddar, alface, tomate e molho especial.", valor: 23.90, quantidade: 0, imagem: "imagens/hamburguers.jpg" },
    { id: 29, categoria: "Hamburguers", produto: "BBQ Burger", descricao: "Hambúrguer bovino, queijo cheddar, cebola caramelizada, molho BBQ.", valor: 26.90, quantidade: 0, imagem: "imagens/hamburguers.jpg" },
    { id: 30, categoria: "Hamburguers", produto: "Classic Burger", descricao: "Hambúrguer bovino, queijo cheddar, alface, tomate e maionese.", valor: 21.90, quantidade: 0, imagem: "imagens/hamburguers.jpg" },
    { id: 31, categoria: "Hamburguers", produto: "Mega Burger", descricao: "Três hambúrgueres bovinos, queijo cheddar, bacon, alface, tomate e molho especial.", valor: 35.90, quantidade: 0, imagem: "imagens/hamburguers.jpg" },

    // Categoria: Hot Dogs
    { id: 32, categoria: "Hot Dogs", produto: "Simple Dog", descricao: "Salsicha, molho especial e purê.", valor: 15.90, quantidade: 0, imagem: "imagens/hotdogs.jpg" },
    { id: 33, categoria: "Hot Dogs", produto: "Cheese Dog", descricao: "Salsicha, queijo derretido, molho especial e purê.", valor: 18.90, quantidade: 0, imagem: "imagens/hotdogs.jpg" },
    { id: 34, categoria: "Hot Dogs", produto: "Bacon Dog", descricao: "Salsicha, queijo derretido, bacon crocante, molho especial e purê.", valor: 20.90, quantidade: 0, imagem: "imagens/hotdogs.jpg" },
    { id: 35, categoria: "Hot Dogs", produto: "Double Dog", descricao: "Duas salsichas, queijo derretido, molho especial e purê.", valor: 22.90, quantidade: 0, imagem: "imagens/hotdogs.jpg" },
    { id: 36, categoria: "Hot Dogs", produto: "Special Dog", descricao: "Salsicha, queijo derretido, batata palha, molho especial e purê.", valor: 25.90, quantidade: 0, imagem: "imagens/hotdogs.jpg" },
    { id: 37, categoria: "Hot Dogs", produto: "Veggie Dog", descricao: "Salsicha vegetal, queijo derretido, molho especial e purê.", valor: 18.90, quantidade: 0, imagem: "imagens/hotdogs.jpg" },
    { id: 38, categoria: "Hot Dogs", produto: "Chili Dog", descricao: "Salsicha, molho chili, queijo derretido e purê.", valor: 23.90, quantidade: 0, imagem: "imagens/hotdogs.jpg" },
    { id: 39, categoria: "Hot Dogs", produto: "Mega Dog", descricao: "Três salsichas, queijo derretido, bacon, molho especial e purê.", valor: 30.90, quantidade: 0, imagem: "imagens/hotdogs.jpg" },

    // Categoria: Bebidas
    { id: 40, categoria: "Bebidas", produto: "Coca-Cola Lata", descricao: "Refrigerante Coca-Cola em lata (350ml).", valor: 6.50, quantidade: 0, imagem: "imagens/bebidas.jpg" },
    { id: 41, categoria: "Bebidas", produto: "Guaraná Lata", descricao: "Refrigerante Guaraná em lata (350ml).", valor: 6.50, quantidade: 0, imagem: "imagens/bebidas.jpg" },
    { id: 42, categoria: "Bebidas", produto: "Fanta Laranja", descricao: "Refrigerante Fanta Laranja em lata (350ml).", valor: 6.50, quantidade: 0, imagem: "imagens/bebidas.jpg" },
    { id: 43, categoria: "Bebidas", produto: "Água Mineral", descricao: "Água mineral sem gás (500ml).", valor: 3.00, quantidade: 0, imagem: "imagens/bebidas.jpg" },
    { id: 44, categoria: "Bebidas", produto: "Suco de Laranja", descricao: "Suco natural de laranja (300ml).", valor: 8.90, quantidade: 0, imagem: "imagens/bebidas.jpg" },
    { id: 45, categoria: "Bebidas", produto: "Suco de Maracujá", descricao: "Suco natural de maracujá (300ml).", valor: 8.90, quantidade: 0, imagem: "imagens/bebidas.jpg" },
    { id: 46, categoria: "Bebidas", produto: "Red Bull", descricao: "Energético Red Bull (250ml).", valor: 12.90, quantidade: 0, imagem: "imagens/bebidas.jpg" },
    { id: 47, categoria: "Bebidas", produto: "Cerveja Heineken", descricao: "Cerveja Heineken Long Neck (330ml).", valor: 10.90, quantidade: 0, imagem: "imagens/bebidas.jpg" },

    // Categoria: Promoções e Combos
    { id: 48, categoria: "Promoções e Combos", produto: "Combo Pizza + Guaraná", descricao: "Pizza Margherita + Guaraná Lata.", valor: 42.90, quantidade: 0, imagem: "imagens/promocoes.jpg" },
    { id: 49, categoria: "Promoções e Combos", produto: "Combo Double Cheeseburger + Refri", descricao: "Double Cheeseburger + Coca-Cola Lata.", valor: 35.90, quantidade: 0, imagem: "imagens/promocoes.jpg" },
    { id: 50, categoria: "Promoções e Combos", produto: "Combo Mega Dog + Suco", descricao: "Mega Dog + Suco de Laranja.", valor: 45.90, quantidade: 0, imagem: "imagens/promocoes.jpg" },
    { id: 51, categoria: "Promoções e Combos", produto: "Combo Veggie Burger + Guaraná", descricao: "Veggie Burger + Guaraná Lata.", valor: 30.90, quantidade: 0, imagem: "imagens/promocoes.jpg" },
    { id: 52, categoria: "Promoções e Combos", produto: "Combo Panuozzo + Refri", descricao: "Panuozzo Margherita + Coca-Cola Lata.", valor: 35.90, quantidade: 0, imagem: "imagens/promocoes.jpg" },
    { id: 53, categoria: "Promoções e Combos", produto: "Combo Pizza Família", descricao: "Pizza Grande (até 3 sabores) + 2 Refrigerantes.", valor: 89.90, quantidade: 0, imagem: "imagens/promocoes.jpg" },
    { id: 54, categoria: "Promoções e Combos", produto: "Combo Hambúrguer Família", descricao: "3 Hambúrgueres + 3 Refrigerantes.", valor: 79.90, quantidade: 0, imagem: "imagens/promocoes.jpg" },
    { id: 55, categoria: "Promoções e Combos", produto: "Combo Hot Dog Família", descricao: "5 Hot Dogs + 5 Refrigerantes.", valor: 99.90, quantidade: 0, imagem: "imagens/promocoes.jpg" }
];

const horarios = {
  domingo: { aberto: true, abertura: 18, fechamento: 23 },
  segunda: { aberto: false },
  terca: { aberto: false },
  quarta: { aberto: true, abertura: 18, fechamento: 23 },
  quinta: { aberto: true, abertura: 18, fechamento: 23 },
  sexta: { aberto: true, abertura: 18, fechamento: 23 },
  sabado: { aberto: true, abertura: 18, fechamento: 23 }
};
    
      const descricaoPerfil = `
##**🍕 A Massa Napolitana: Tradição e Técnica em Cada Pedaço**
***
***
Nossa **massa napolitana** é o coração da autenticidade italiana, preparada com os métodos tradicionais que a tornaram famosa no mundo todo. Elaborada com **farinha italiana "00"**, de moagem fina e baixo teor de glúten, e hidratada com água filtrada, nossa massa é trabalhada em **fermentação lenta** (entre 24 e 48 horas), desenvolvendo um sabor levemente ácido, uma textura aerada e alvéolos irregulares – marca registrada da verdadeira pizza de Nápoles.
***
***
A **textura única** é resultado de um equilíbrio perfeito: fina e suave no centro, mas com uma borda alta e inchada (o famoso *cornicione*), levemente carbonizada em pontos estratégicos. Isso só é possível graças ao **cozimento rápido em altíssima temperatura** (idealmente a quase de 400°C), que garante uma crosta crocante por fora e um interior úmido e macio.
***
***
O segredo está no **toque artesanal**: a massa é **esticada apenas com as mãos** (nunca com rolo), preservando suas bolhas de ar e estrutura irregular. Sem gordura na composição, ela depende exclusivamente da qualidade da farinha, da fermentação controlada e da habilidade do pizzaiolo para atingir a perfeição.
***
***
Leve, digerível e com um **sabor puro e equilibrado**, nossa massa napolitana é uma celebração da simplicidade bem executada. Cada fornada traz o aroma característico do trigo tostado e a leveza que só uma massa feita com tempo, técnica e paixão pode oferecer. **É assim que a Itália se revela em sua forma mais deliciosa!**
***
***
*Observe que não mencionamos recheios, focando apenas nas características técnicas e sensoriais da massa.* 😊**🍕 A Massa Napolitana: Tradição e Técnica em Cada Pedaço**
***
***
**🌯 Panzuotto: A Massa Napolitana em Forma de Obra-Prima**
***
***
Nosso **Panzuotto** leva a mesma massa napolitana artesanal, mas com uma proposta única: uma dobradura perfeita que cria um formato fechado e convidativo. A fermentação lenta garante uma **textura leve e aerada**, enquanto o método de preparo – seja assado em alta temperatura ou frito rapidamente – resulta em uma casca dourada e crocante, com um interior macio e úmido. A massa, esticada manualmente, mantém sua estrutura irregular e alveolada, transformando-se em uma experiência de contrastes: crocância na superfície e nuvem de sabor no interior.
***
***
**🍔 Hamburguer Envolto em Massa Napolitana: A Fusão dos Clássicos**
***
***
Aqui, a tradicional massa napolitana ganha uma nova função: envolver com maestria um hambúrguer em um abraço de farinha e tradição. A mesma **fermentação prolongada** que cria a textura perfeita na pizza agora forma uma capa externa levemente crocante, enquanto o interior permanece incrivelmente macio. O calor do forno faz a massa expandir-se delicadamente, criando uma barreira protetora que mantém todo o vapor e aroma contidos, enquanto desenvolve aquela característica cor dourada com manchas mais escuras – sinal de um cozimento perfeito.
***
***
**🌭 Hot-Dog em Massa Napolitana: Reinterpretando o Clássico**
***
***
Nesta criação, a massa napolitana mostra sua versatilidade ao transformar um ícone da comida rápida em uma experiência gourmet. Esticada com as mãos para manter sua estrutura irregular, a massa subistitui o pão, quando assada, desenvolve uma **superfície levemente crocante** enquanto mantém uma migalha incrivelmente fofa. Os mesmos alvéolos característicos da pizza napolitana aparecem aqui, criando bolsas de ar que tornam cada mordida leve e satisfatória ao mesmo tempo.
***
***
**🧀 Produtos Artesanais**
***
***
Nossos queijos, presuntos, cebola crispy, cebola caramelizada, mostarda e mel, geleia de pimenta, molho pesto, redução de vinagre balsâmico, todos feitos artesanalmente pela "casa" para complementar os tradicionais queijo mussarela e presunto cozido. Os queijos apresentam características únicas de derretimento e sabor, enquanto os frios mantêm seu perfil original, sem aditivos que possam alterar sua essência.
***
***
**Técnica, Tradição e Inovação em Cada Detalhe**
***
***
Desde a fermentação controlada da massa até a seleção criteriosa dos acompanhamentos, cada elemento é pensado para oferecer uma experiência completa. Sem mencionar recheios ou combinações específicas, focamos na excelência de cada componente – porque quando a base é perfeita, o resultado fala por si.##
`;

