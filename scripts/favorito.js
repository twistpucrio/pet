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
        img.src = post.caminho_imagem || "../img/default.jpg";
        img.alt = post.alt_imagem || "Imagem do post";
        img.classList.add("img_post");
  
        const title = document.createElement("h3");
        title.textContent = post.titulo;
  
        const text = document.createElement("p");
        text.textContent = post.texto || "Descrição não disponível.";
  
        // Botão para desfavoritar
        const botaoDesfavoritar = document.createElement("button");
        botaoDesfavoritar.textContent = "Desfavoritar";
        botaoDesfavoritar.classList.add("desfavoritar-botao");
  
        botaoDesfavoritar.addEventListener("click", function() {
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