// Funções de Apoio

function verificarHorarioFuncionamento() {
  const agora = new Date();
  const diaSemana = ['domingo', 'segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado'][agora.getDay()];
  const horarioAtual = agora.getHours();
  
  const infoDia = horarios[diaSemana];
  const btnFinalizar = document.getElementById('btn-finalizar');
  const avisoFechado = document.getElementById('aviso-fechado');

  const lojaFechada = !infoDia.aberto || 
                      (infoDia.abertura && horarioAtual < infoDia.abertura) || 
                      (infoDia.fechamento && horarioAtual >= infoDia.fechamento);

  if (lojaFechada) {
    if (!avisoFechado) {
      const aviso = document.createElement('div');
      aviso.id = 'aviso-fechado';
      aviso.className = 'aviso-fechado';
      aviso.innerHTML = 'Estamos fechados! Clique para ver nossos horários.';
      document.body.appendChild(aviso);
      
      aviso.addEventListener('click', () => {
        document.getElementById('nav-perfil').click();
      });
    }
    if (btnFinalizar) {
      btnFinalizar.disabled = true;
      btnFinalizar.textContent = 'Loja Fechada';
    }
  } else {
    if (avisoFechado) avisoFechado.remove();
    if (btnFinalizar) {
      btnFinalizar.disabled = false;
      btnFinalizar.textContent = 'Finalizar Compra';
    }
  }
}

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
  if (item) {
    if (item.quantidade > 1) {
      item.quantidade--;
    } else if (item.quantidade === 1) {
      item.quantidade = 0;
    }
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
     window.scrollTo(0, 0);

    if (id === 'pagina-categorias') {
      const obs = document.getElementById('observacoes-cliente');
      if (obs) obs.value = '';
    }
  }
}

function carregarCategorias() {
  const container = document.getElementById('lista-categorias');
  if (!container) return;
  
  container.innerHTML = '';
  
  categorias.forEach(cat => {
    const div = document.createElement('div');
    div.className = 'card-categoria';
    div.innerHTML = `
  <img src="${cat.imagem}" alt="${cat.nome}" class="categoria-imagem">
  <div class="categoria-detalhes">
    <div class="categoria-nome">${cat.nome}</div>
    <div class="categoria-descricao">${cat.descricao || ''}</div> <!-- Nova linha -->
    <button class="btn-adicionar btn-ver">Ver</button>
  </div>
`;
    
    // Evento específico para o botão
    div.querySelector('.btn-ver').addEventListener('click', function() {
      categoriaAtual = cat.nome;
      carregarProdutos(categoriaAtual);
      mostrarPagina('pagina-produtos');
      document.getElementById('titulo-categoria').textContent = cat.nome;
      document.getElementById('descricao-categoria').textContent = cat.descricao || '';
      window.scrollTo(0, 0);
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
    div.className = 'card-produto';
    div.innerHTML = `
      <img src="${prod.imagem}" alt="${prod.produto}" class="produto-imagem">
      <div class="produto-detalhes">
        <div class="produto-nome">${prod.produto}</div>
        <div class="produto-descricao">${prod.descricao}</div>
        <div class="produto-preco">R$ ${prod.valor.toFixed(2)}</div>
        <button class="btn-adicionar" onclick="incrementarQuantidade('${categoria}', '${prod.produto}')">Adicionar</button>
      </div>
    `;
    
    container.appendChild(div);
  });
}

function carregarSacola() {
  const container = document.getElementById('itens-sacola');
  const resumo = document.getElementById('resumo-pedido');
  const btnFinalizar = document.getElementById('btn-finalizar');
  const observacoesContainer = document.querySelector('#pagina-sacola > .card-cinza:nth-of-type(2)');
  
  if (!container || !resumo || !btnFinalizar || !observacoesContainer) return;
  
  container.innerHTML = '';
  
  const itensSacola = produtos.filter(p => p.quantidade > 0);
  
  if (itensSacola.length === 0) {
    container.innerHTML = '<p>Sua sacola está vazia</p>';
    btnFinalizar.style.display = 'none';
    resumo.innerHTML = '';
    observacoesContainer.style.display = 'none';
    return;
  }
  
  btnFinalizar.style.display = 'block';
  observacoesContainer.style.display = 'block';
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
        <div class="quantity-selector">
          <button class="qty-btn" ${prod.quantidade === 0 ? 'style="visibility: hidden;"' : ''}
                  onclick="decrementarQuantidade('${prod.categoria}', '${prod.produto}')">
            <span class="minus-text" ${prod.quantidade === 1 ? 'style="display:none"' : ''}>−</span>
            <span class="trash-icon" ${prod.quantidade === 1 ? 'style="display:block;color:#d32f2f"' : 'style="display:none"'}><i class="fas fa-trash"></i></span>
          </button>
          <input type="number" class="qty-input" value="${prod.quantidade}" min="0" readonly>
          <button class="qty-btn" onclick="incrementarQuantidade('${prod.categoria}', '${prod.produto}')">+</button>
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

function converterMarkdownParaHTML(texto) {
  let html = texto.replace(/(\*\*\*|---)/g, '<br>');
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
             .replace(/\*(.*?)\*/g, '<em>$1</em>')
             .replace(/##/g, '</div><div style="text-align: justify;">');
  html = html.replace('</div>', '');
  html += '</div>';
  return html;
}

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
  const observacoes = document.getElementById('observacoes-cliente').value || "Nenhuma";
  
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

  let mensagem = `*Toca da Pizza*\n\n`;
  mensagem += `*Pedido #${numeroPedido}*\n\n`;
  mensagem += `*Itens:*\n${itensSacola.map(p => `- ${p.produto} (${p.quantidade}x) - R$ ${(p.valor * p.quantidade).toFixed(2)}`).join('\n')}\n\n`;
  mensagem += `*Observações:* ${observacoes}\n\n`;
  mensagem += `*Subtotal: R$ ${subtotal.toFixed(2)}*\n`;
  mensagem += `*Taxa de Entrega: R$ ${taxaEntrega.toFixed(2)}*\n`;
  mensagem += `*Total: R$ ${total.toFixed(2)}*\n\n`;
  mensagem += `*Forma de Pagamento:* ${formaPagamento.value}\n\n`;
  mensagem += `*Dados do Cliente:*\n\n`;
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

function handleFinalizarClick(e) {
  e.preventDefault();
  const btn = e.currentTarget;
  btn.classList.add('ativo');
  setTimeout(() => {
    btn.classList.remove('ativo');
    carregarFinalizacao();
    mostrarPagina('pagina-finalizar');
  }, 200);
}

function handleConfirmarClick(e) {
  e.preventDefault();
  const btn = e.currentTarget;
  btn.classList.add('ativo');
  setTimeout(() => {
    btn.classList.remove('ativo');
    enviarPedidoWhatsApp();
  }, 200);
}

function handleEditarClick(e) {
  e.preventDefault();
  const btn = e.currentTarget;
  btn.classList.add('ativo');
  setTimeout(() => {
    btn.classList.remove('ativo');
    const cliente = JSON.parse(localStorage.getItem('cliente')) || {};
    document.getElementById('nome').value = cliente.nome || '';
    document.getElementById('telefone').value = cliente.telefone || '';
    document.getElementById('endereco').value = cliente.endereco || '';
    mostrarPagina('pagina-dados-cliente');
  }, 200);
}

function handleFormSubmit(e) {
  e.preventDefault();
  const btn = e.currentTarget.querySelector('button[type="submit"]');
  btn.classList.add('ativo');
  setTimeout(() => {
    btn.classList.remove('ativo');
    const cliente = {
      nome: document.getElementById('nome').value,
      telefone: document.getElementById('telefone').value,
      endereco: document.getElementById('endereco').value
    };
    localStorage.setItem('cliente', JSON.stringify(cliente));
    carregarFinalizacao();
    mostrarPagina('pagina-finalizar');
  }, 200);
}

function configurarBotoesComEfeito() {
  document.getElementById('btn-finalizar')?.addEventListener('click', handleFinalizarClick);
  document.getElementById('btn-confirmar')?.addEventListener('click', handleConfirmarClick);
  document.getElementById('btn-editar-dados')?.addEventListener('click', handleEditarClick);
  document.getElementById('form-cliente')?.addEventListener('submit', handleFormSubmit);
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  mostrarPagina('pagina-carregamento');
  
  verificarHorarioFuncionamento();
  setInterval(verificarHorarioFuncionamento, 60000);
  
  setTimeout(() => {
    carregarCategorias();
    mostrarPagina('pagina-categorias');
    configurarAvaliacoes();
    exibirMediasAvaliacoes();
    configurarBotoesComEfeito();
  }, 3000);

  document.getElementById('nav-voltar')?.addEventListener('click', (e) => {
    e.preventDefault();
    mostrarPagina('pagina-categorias');
  });

  document.getElementById('nav-perfil')?.addEventListener('click', (e) => {
    e.preventDefault();
    
    const horariosContainer = document.getElementById('horarios');
    if (horariosContainer) {
      const diasSemana = ['domingo', 'segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado'];
      const nomesDias = {
        domingo: 'Domingo',
        segunda: 'Segunda',
        terca: 'Terça',
        quarta: 'Quarta',
        quinta: 'Quinta',
        sexta: 'Sexta',
        sabado: 'Sábado'
      };
      
      let horariosHTML = '';
      
      diasSemana.forEach(dia => {
        const info = horarios[dia];
        if (info.aberto) {
          horariosHTML += `<p>${nomesDias[dia]} - Aberto de ${info.abertura}h às ${info.fechamento}h.</p>`;
        } else {
          horariosHTML += `<p>${nomesDias[dia]} - Fechado.</p>`;
        }
      });
      
      horariosContainer.innerHTML = horariosHTML;
    }
    
    const perfilPage = document.getElementById('pagina-perfil');
    let descricaoElement = document.getElementById('descricao-perfil');
    
    if (!descricaoElement) {
      descricaoElement = document.createElement('div');
      descricaoElement.id = 'descricao-perfil';
      descricaoElement.className = 'card-cinza';
      
      const cardHorarios = perfilPage.querySelector('.card-cinza');
      cardHorarios.insertAdjacentElement('afterend', descricaoElement);
    }
    
    descricaoElement.innerHTML = converterMarkdownParaHTML(descricaoPerfil);
    
    mostrarPagina('pagina-perfil');
  });

  document.getElementById('sacola-icon')?.addEventListener('click', () => {
    carregarSacola();
    verificarHorarioFuncionamento();
    mostrarPagina('pagina-sacola');
  });
});
