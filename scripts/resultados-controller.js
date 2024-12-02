import { posts } from "../constants/posts.js";

// Função para adicionar CSS diretamente no JavaScript
function addCSS() {
  const style = document.createElement("style");
  style.innerHTML = `
    .parte_de_cima {
        display: flex;
        margin: 10px 0;
        justify-content: space-between;
    }

    .tags {
        background-color: #bcd0cf;
        margin: 10px;
        padding: 10px;
        border-radius: 10px;
    }

    .botao {
      height: 3rem;
      width: 3rem;
      border: none;
      background: none;
      padding: 10px;
      margin: 10px;
    }

    .botao:hover {
      background-color: #bcd0cf;
      border-radius: 20%;
    }

    .img_post {
      border-radius: 10px;
    }
     
    .no-results-message {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh; /* Garantir que ocupe toda a altura da tela */
      text-align: center;
      color: #333;
      font-size: 1.5em;
      font-weight: bold;
    }

    .no-results-message p {
      margin: 0; /* Remove margens extras */
      padding: 10px;
    }

    .no-results-message img {
      margin-bottom: 20px; /* Se quiser um espaço entre a imagem e a mensagem */
      width: 100px; /* Ajuste o tamanho da imagem, se necessário */
      height: auto;
    }

    .highlight {
      background-color: #EECFA1; /* Ilumina a palavra com fundo amarelo */
      font-weight: bold;
      color: black; /* Pode mudar para a cor que preferir */
    }
  `;
  document.head.appendChild(style); // Adiciona o estilo ao <head>
}

function adicionarFavorito(post) {
  const favoritos = JSON.parse(sessionStorage.getItem('favorito')) || [];  
  const produtoExistente = favoritos.find(item => item.id === post.id);

  if (produtoExistente) {
    // Se já está favoritado, removemos da lista
    const novosFavoritos = favoritos.filter(item => item.id !== post.id); 
    sessionStorage.setItem('favorito', JSON.stringify(novosFavoritos)); 
    alert('Produto removido dos favoritos!');
  } else {
    // Se não está favoritado, adicionamos
    post.favorito = true;
    favoritos.push(post); // Adiciona aos favoritos
    sessionStorage.setItem('favorito', JSON.stringify(favoritos)); 
  }
}

function renderPosts(posts, searchTerm = "") {
  const container = document.getElementById("postContainer");
  container.innerHTML = "";

  // Se não houver posts para mostrar
  if (posts.length === 0) {
    const noResultsMessage = document.createElement("div");
    noResultsMessage.classList.add("no-results-message");

    const text = document.createElement("p");
    text.textContent = "Nenhum resultado encontrado.";

    noResultsMessage.appendChild(text);
    container.appendChild(noResultsMessage);
    return;
  }

  posts.forEach((post) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const parte_de_cima = document.createElement("div");
    parte_de_cima.classList.add("parte_de_cima");

    const botao = document.createElement("button");
    const botaoFavorito = document.createElement('button');
    botao.classList.add("botao");

    const tags = document.createElement("p");
    tags.textContent = `${post.tags.join(" ⋆˚✿˖° ")}`;
    tags.classList.add("tags");

    parte_de_cima.appendChild(botao);
    parte_de_cima.appendChild(tags);

    // Verificar se o post já foi favoritado
    const favoritos = JSON.parse(sessionStorage.getItem('favorito')) || [];
    const produtoExistente = favoritos.find(item => item.id === post.id);
    
    // Definir o ícone do botão dependendo de se o post é favorito ou não
    if (produtoExistente) {
      botaoFavorito.src = "../img/desfavoritar.webp"; // Ícone de desfavoritar
      botaoFavorito.alt = "Imagem de coração para desfavoritar.";
    } else {
      botaoFavorito.src = "../img/favoritos.webp"; // Ícone de favoritar
      botaoFavorito.alt = "Imagem de coração para favoritos.";
    }

    botao.appendChild(botaoFavorito);

    // Ao clicar no botão de favoritar/desfavoritar
    botaoFavorito.addEventListener('click', function () {
      adicionarFavorito(post); // Chama a função para adicionar ou remover do favoritos
      renderPosts(posts, searchTerm); // Re-renderiza os posts após a alteração
    });

    const img = document.createElement("img");
    img.src = post.caminho_imagem || "../img/default.jpg";
    img.alt = post.alt_imagem || "Imagem de post";
    img.classList.add("img_post");

    const title = document.createElement("h3");
    title.innerHTML = searchTerm ? highlightText(post.titulo, searchTerm) : post.titulo;

    const text = document.createElement("p");
    text.innerHTML = searchTerm ? highlightText(post.texto || "Descrição do evento disponível no local.", searchTerm) : (post.texto || "Descrição do evento disponível no local.");

    card.appendChild(parte_de_cima);
    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(text);

    container.appendChild(card);
  });
}

function searchPosts(searchTerm) {
  console.log(searchTerm);
  const filteredPosts = posts.filter((post) =>
    post["titulo"].toLowerCase().includes(searchTerm.toLowerCase()) || 
    post["texto"].toLowerCase().includes(searchTerm.toLowerCase())
  );
  renderPosts(filteredPosts, searchTerm); // Passando o termo de busca para destacar
}

document.addEventListener("DOMContentLoaded", () => {
  addCSS(); // Chama a função para adicionar o CSS no carregamento da página
  renderPosts(posts);
});