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

// Funções de Apoio
function animarSacola() {
  const sacolaIcon = document.getElementById('sacola-icon');
  const soundEffect = document.getElementById('sound-effect');
  
  sacolaIcon.classList.add('jump-animation');
  soundEffect.currentTime = 0;
  soundEffect.play();
  
  setTimeout(() => {
    sacolaIcon.classList.remove('jump-animation');
  }, 300);
  
  atualizarContadorSacola();
}

function atualizarContadorSacola() {
  const totalItens = produtos.reduce((total, prod) => total + prod.quantidade, 0);
  document.getElementById('sacola-counter').textContent = totalItens;
}

// Funções de Controle
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
  const pagina = document.getElementById(id);
  if (pagina) {
    pagina.style.display = 'block';
  } else {
    console.error(`Página com ID ${id} não encontrada`);
  }
}

function carregarCategorias() {
  const container = document.getElementById('lista-categorias');
  if (!container) return;
  
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
      const titulo = document.getElementById('titulo-categoria');
      if (titulo) titulo.textContent = cat.nome;
    });
    container.appendChild(div);
  });
}

function carregarProdutos(categoria) {
  const container = document.getElementById('lista-produtos');
  if (!container) return;
  
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
  const btnFinalizar = document.getElementById('btn-finalizar');
  
  if (!container || !resumo || !btnFinalizar) return;
  
  container.innerHTML = '';
  
  const itensSacola = produtos.filter(p => p.quantidade > 0);
  
  if (itensSacola.length === 0) {
    container.innerHTML = '<p>Sua sacola está vazia</p>';
    btnFinalizar.style.display = 'none';
    resumo.innerHTML = '';
    return;
  }
  
  btnFinalizar.style.display = 'block';
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
  const formasPagamento = document.getElementById('formas-pagamento');
  const dadosClienteContent = document.getElementById('dados-cliente-content');
  
  if (!resumo || !formasPagamento || !dadosClienteContent) return;
  
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

  formasPagamento.innerHTML = `
    <label><input type="radio" name="pagamento" value="Dinheiro" required> Dinheiro</label><br>
    <label><input type="radio" name="pagamento" value="Pix"> Pix</label><br>
    <label><input type="radio" name="pagamento" value="Cartão de Crédito"> Cartão de Crédito</label><br>
    <label><input type="radio" name="pagamento" value="Cartão de Débito"> Cartão de Débito</label>
  `;

  const cliente = JSON.parse(localStorage.getItem('cliente')) || {};
  dadosClienteContent.innerHTML = cliente.nome ? `
    <p><strong>Nome:</strong> ${cliente.nome}</p>
    <p><strong>Telefone:</strong> ${cliente.telefone}</p>
    <p><strong>Endereço:</strong> ${cliente.endereco}</p>
  ` : '<p>Nenhum dado cadastrado</p>';

  exibirMediasAvaliacoes();
}

// Funções para Avaliações
function exibirMediasAvaliacoes() {
  const mediaProdutos = document.getElementById('media-produtos');
  const mediaAtendimento = document.getElementById('media-atendimento');
  const mediaAplicativo = document.getElementById('media-aplicativo');
  
  if (mediaProdutos) mediaProdutos.textContent = `Média: ${avaliacoesMedias.produtos.toFixed(1)}`;
  if (mediaAtendimento) mediaAtendimento.textContent = `Média: ${avaliacoesMedias.atendimento.toFixed(1)}`;
  if (mediaAplicativo) mediaAplicativo.textContent = `Média: ${avaliacoesMedias.aplicativo.toFixed(1)}`;
}

function configurarAvaliacoes() {
  document.querySelectorAll('.estrelas-container').forEach(container => {
    const tipo = container.id.replace('estrelas-', '');
    const estrelas = container.querySelectorAll('.estrela');
    
    estrelas.forEach(estrela => {
      estrela.addEventListener('click', () => {
        const valor = parseInt(estrela.dataset.valor);
        avaliacoesCliente[tipo] = valor;
        
        estrelas.forEach(e => {
          e.classList.toggle('ativo', e.dataset.valor <= valor);
        });
        
        const elementoPontuacao = document.getElementById(`pontuacao-${tipo}`);
        if (elementoPontuacao) {
          elementoPontuacao.textContent = `Você avaliou: ${valor} estrela(s)`;
        }
      });
    });
  });
}

function gerarNumeroPedido() {
  const now = new Date();
  const mes = String(now.getMonth() + 1).padStart(2, '0');
  const dia = String(now.getDate()).padStart(2, '0');
  const hora = String(now.getHours()).padStart(2, '0');
  const minuto = String(now.getMinutes()).padStart(2, '0');
  const segundo = String(now.getSeconds()).padStart(2, '0');
  
  const P = avaliacoesCliente.produtos || 3;
  const A = avaliacoesCliente.atendimento || 3;
  const K = avaliacoesCliente.aplicativo || 3;
  
  let compras = localStorage.getItem('compras-cliente') || 0;
  compras = parseInt(compras);
  const W = compras % 10;
  
  return `${mes}${dia}${hora}${minuto}${segundo}${P}${A}${K}${W}`;
}

function incrementarCompras() {
  let compras = localStorage.getItem('compras-cliente') || 0;
  compras = parseInt(compras) + 1;
  localStorage.setItem('compras-cliente', compras);
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
  
  const numeroPedido = gerarNumeroPedido();
  const itensSacola = produtos.filter(p => p.quantidade > 0);
  let subtotal = itensSacola.reduce((total, prod) => total + (prod.valor * prod.quantidade), 0);
  const taxaEntrega = 5.00;
  const total = subtotal + taxaEntrega;

  let mensagem = `*Pedido #${numeroPedido} - Toca da Pizza*\n\n`;
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
  incrementarCompras();
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
    configurarAvaliacoes();
    exibirMediasAvaliacoes();
  }, 3000);

  document.getElementById('nav-voltar')?.addEventListener('click', (e) => {
    e.preventDefault();
    mostrarPagina('pagina-categorias');
  });

  document.getElementById('nav-perfil')?.addEventListener('click', (e) => {
  e.preventDefault();
  
  // Carrega horários
  const horariosContainer = document.getElementById('horarios');
  if (horariosContainer) {
    horariosContainer.innerHTML = horarios.map(h => `<p>${h}</p>`).join('');
  }
  
  // Carrega descrição
  const descricaoContainer = document.getElementById('texto-descricao');
  const cardDescricao = document.getElementById('descricao-loja');
  if (descricaoContainer && cardDescricao) {
    descricaoContainer.innerHTML = descricaoLoja;
    cardDescricao.style.display = 'block'; // Mostra o card que estava escondido
  }
  
  mostrarPagina('pagina-perfil');
});

  document.getElementById('sacola-icon')?.addEventListener('click', () => {
    carregarSacola();
    mostrarPagina('pagina-sacola');
  });

  document.getElementById('btn-finalizar')?.addEventListener('click', () => {
    carregarFinalizacao();
    mostrarPagina('pagina-finalizar');
  });

  document.getElementById('btn-confirmar')?.addEventListener('click', (e) => {
    e.preventDefault();
    enviarPedidoWhatsApp();
  });

  document.getElementById('form-cliente')?.addEventListener('submit', (e) => {
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

  document.getElementById('btn-editar-dados')?.addEventListener('click', (e) => {
    e.preventDefault();
    const cliente = JSON.parse(localStorage.getItem('cliente')) || {};
    document.getElementById('nome').value = cliente.nome || '';
    document.getElementById('telefone').value = cliente.telefone || '';
    document.getElementById('endereco').value = cliente.endereco || '';
    mostrarPagina('pagina-dados-cliente');
  });
});
