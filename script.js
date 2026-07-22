// Aguarda o carregamento completo da estrutura do HTML antes de executar o código
document.addEventListener("DOMContentLoaded", () => {

  // 1. CAPTURA DOS ELEMENTOS DO MODAL NO DOM
  const modal = document.getElementById("modal-produto");
  const modalImg = document.getElementById("modal-img");
  const modalTitulo = document.getElementById("modal-titulo");
  const modalDescricao = document.getElementById("modal-descricao-curta");
  const modalDetalhes = document.getElementById("modal-detalhes"); // Elemento do texto longo
  const btnFechar = document.getElementById("btn-fechar");

  // Captura todos os botões que possuem a classe ".btn-saiba-mais"
  const botoesSaibaMais = document.querySelectorAll(".btn-saiba-mais");

  // 2. CONFIGURAÇÃO DO EVENTO DE CLIQUE PARA CADA BOTÃO "SAIBA MAIS"
  botoesSaibaMais.forEach((botao) => {
    botao.addEventListener("click", (e) => {
      // Encontra o container do produto (.card) mais próximo do botão clicado
      const card = e.target.closest(".card");

      // Extrai os dados que já estão dentro do card no HTML
      const imagemSrc = card.querySelector("img").src;
      const tituloText = card.querySelector("h3").innerText;
      const descricaoText = card.querySelector("p").innerText;
      
      // Captura o texto do atributo 'data-detalhes' do HTML (ex: <div class="card" data-detalhes="...">)
      // Se não existir o atributo, usa uma mensagem padrão como garantia (fallback)
      const detalhesTexto = card.dataset.detalhes || "Texto de detalhes não informado para este produto.";

      // Injeta as informações extraídas nos elementos internos do modal
      modalImg.src = imagemSrc;
      modalTitulo.innerText = tituloText;
      modalDescricao.innerText = descricaoText;
      modalDetalhes.innerText = detalhesTexto; // Atualiza o texto dinamicamente

      // Adiciona a classe CSS 'active' para tornar o modal visível na tela
      modal.classList.add("active");
    });
  });

  // 3. FUNÇÃO AUXILIAR PARA FECHAR O MODAL
  const fecharModal = () => {
    modal.classList.remove("active"); // Remove a classe que exibe o modal
  };

  // 4. EVENTOS PARA FECHAR O MODAL

  // Opção 1: Fechar ao clicar no botão de fechar (X)
  btnFechar.addEventListener("click", fecharModal);

  // Opção 2: Fechar ao clicar na área escura (fundo/overlay) fora da caixa do modal
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      fecharModal();
    }
  });

  // Opção 3: Fechar ao pressionar a tecla "Escape" (Esc) do teclado
  document.addEventListener("keydown", (e) => {
    // Verifica se a tecla pressionada foi Esc e se o modal está visível
    if (e.key === "Escape" && modal.classList.contains("active")) {
      fecharModal();
    }
  });
});