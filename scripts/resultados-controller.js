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
      height: 100vh;
      text-align: center;
      color: #333;
      font-size: 1.5em;
      font-weight: bold;
    }

    .no-results-message p {
      margin: 0;
      padding: 10px;
    }

    .no-results-message img {
      margin-bottom: 20px;
      width: 100px;
      height: auto;
    }

    .highlight {
      background-color: #EECFA1;
      font-weight: bold;
      color: black;
    }
  `;
  document.head.appendChild(style);
}

function adicionarFavorito(post) {
  const favoritos = JSON.parse(sessionStorage.getItem('favorito')) || [];  
  const produtoExistente = favoritos.find(item => item.id === post.id);

  if (produtoExistente) {
    const novosFavoritos = favoritos.filter(item => item.id !== post.id);
    sessionStorage.setItem('favorito', JSON.stringify(novosFavoritos));
  } else {
    post.favorito = true;
    favoritos.push(post);
    sessionStorage.setItem('favorito', JSON.stringify(favoritos));
  }
}

function renderPosts(posts, searchTerm = "") {
  const container = document.getElementById("postContainer");
  container.innerHTML = "";

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
    botao.classList.add("botao");

    const botaoFavorito = document.createElement("img");
    botaoFavorito.alt = "Imagem de coração para favoritos ou desfavoritar";

    const favoritos = JSON.parse(sessionStorage.getItem('favorito')) || [];
    const produtoExistente = favoritos.find(item => item.id === post.id);

    // Corrigindo os caminhos para favoritar e desfavoritar
    if (produtoExistente) {
      botaoFavorito.src = "../img/favoritos-selecionado.png"; // Ícone para desfavoritar
    } else {
      botaoFavorito.src = "../img/favoritos.webp"; // Ícone para favoritar
    }

    botao.appendChild(botaoFavorito);

    botao.addEventListener('click', function () {
      adicionarFavorito(post);
      renderPosts(posts, searchTerm);
    });

    const tags = document.createElement("p");
    tags.textContent = `${post.tags.join(" ⋆˚✿˖° ")}`;
    tags.classList.add("tags");

    parte_de_cima.appendChild(botao);
    parte_de_cima.appendChild(tags);

    const img = document.createElement("img");
    img.src = post.caminho_imagem || "../img/favoritos.webp";
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

function highlightText(text, searchTerm) {
  const regex = new RegExp(`(${searchTerm})`, 'gi');
  return text.replace(regex, '<span class="highlight">$1</span>');
}

function searchPosts(searchTerm) {
  const filteredPosts = posts.filter((post) =>
    post.titulo.toLowerCase().includes(searchTerm.toLowerCase()) || 
    post.texto.toLowerCase().includes(searchTerm.toLowerCase())
  );
  renderPosts(filteredPosts, searchTerm);
}

document.addEventListener("DOMContentLoaded", () => {
  addCSS();
  renderPosts(posts);

  const searchInput = document.getElementById("searchInput");
  searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      searchPosts(event.target.value);
    }
  });

  // Adicionar a lógica de filtro, se necessário
  const checkboxes = document.querySelectorAll(".filter-checkbox");
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", filterPostsByTags);
  });
});

function filterPostsByTags() {
  const selectedTags = Array.from(document.querySelectorAll(".filter-checkbox:checked")).map(
    (checkbox) => checkbox.value
  );

  const filteredPosts = posts.filter((post) =>
    selectedTags.every((tag) => post.tags.includes(tag))
  );

  renderPosts(filteredPosts);
}