document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal-produto");
  const modalImg = document.getElementById("modal-img");
  const modalTitulo = document.getElementById("modal-titulo");
  const modalDescricao = document.getElementById("modal-descricao-curta");
  const modalDetalhes = document.getElementById("modal-detalhes"); // Elemento do texto longo
  const btnFechar = document.getElementById("btn-fechar");

  const botoesSaibaMais = document.querySelectorAll(".btn-saiba-mais");

  botoesSaibaMais.forEach((botao) => {
    botao.addEventListener("click", (e) => {
      const card = e.target.closest(".card");

      const imagemSrc = card.querySelector("img").src;
      const tituloText = card.querySelector("h3").innerText;
      const descricaoText = card.querySelector("p").innerText;
      
      // Captura o texto do atributo data-detalhes (ou usa um fallback caso não exista)
      const detalhesTexto = card.dataset.detalhes || "Texto de detalhes não informado para este produto.";

      // Preenche os campos do modal (CARD EXTRA DOS PRODUTOS)
      modalImg.src = imagemSrc;
      modalTitulo.innerText = tituloText;
      modalDescricao.innerText = descricaoText;
      modalDetalhes.innerText = detalhesTexto; // Atualiza o texto dinamicamente

      modal.classList.add("active");
    });
  });

  const fecharModal = () => {
    modal.classList.remove("active");
  };

  btnFechar.addEventListener("click", fecharModal);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      fecharModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      fecharModal();
    }
  });
});