document.addEventListener("DOMContentLoaded", () => {
  // Função para carregar os posts favoritados
  function carregarFavoritos() {
    const favoritos = JSON.parse(sessionStorage.getItem('favorito')) || [];

    const container = document.getElementById("favoritosContainer");
    container.innerHTML = ""; // Limpar o conteúdo antes de renderizar

    if (favoritos.length === 0) {
      const mensagem = document.createElement("p");
      mensagem.textContent = "Nenhum post favoritado ainda.";
      container.appendChild(mensagem);
      return;
    }

    // Exibe os posts favoritados
    favoritos.forEach(post => {
      const card = document.createElement("div");
      card.classList.add("card");

      const img = document.createElement("img");
      img.src = post.caminho_imagem || "../img/favoritos.webp";
      img.alt = post.alt_imagem || "Imagem do post";
      img.classList.add("img_post");

      const title = document.createElement("h3");
      title.textContent = post.titulo;

      const text = document.createElement("p");
      text.textContent = post.texto || "Descrição não disponível.";

      // Botão para desfavoritar com alternância de imagem
      const botaoDesfavoritar = document.createElement("button");
      botaoDesfavoritar.classList.add("desfavoritar-botao");

      const iconDesfavoritar = document.createElement("img");
      iconDesfavoritar.src = "../img/desfavoritos.png"; // Caminho inicial da imagem
      iconDesfavoritar.alt = "Desfavoritar";

      botaoDesfavoritar.appendChild(iconDesfavoritar);

      // Alternar imagem do botão ao clicar
      botaoDesfavoritar.addEventListener("click", function() {
        if (iconDesfavoritar.src.includes("desfavoritar.png")) {
          iconDesfavoritar.src = "../img/favoritos.webp"; // Troca para imagem de favoritar
        } else {
          iconDesfavoritar.src = "../img/desfavoritos.png"; // Troca de volta para desfavoritar
        }
        desfavoritarPost(post.id);
      });

      card.appendChild(img);
      card.appendChild(title);
      card.appendChild(text);
      card.appendChild(botaoDesfavoritar);
      container.appendChild(card);
    });
  }

  // Função para remover um post dos favoritos
  function desfavoritarPost(postId) {
    let favoritos = JSON.parse(sessionStorage.getItem('favorito')) || [];
    favoritos = favoritos.filter(post => post.id !== postId); // Filtra o post a ser removido

    sessionStorage.setItem('favorito', JSON.stringify(favoritos));
    carregarFavoritos(); // Atualiza a visualização
  }

  // Carregar os favoritos ao carregar a página
  carregarFavoritos();
});