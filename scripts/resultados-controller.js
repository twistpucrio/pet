
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

    .highlight {
      background-color: #EECFA1;
      font-weight: bold;
      color: black;
    }
  `;
  document.head.appendChild(style);
}

// Função para destacar o termo buscado no texto
function highlightText(text, searchTerm) {
  const regex = new RegExp(`(${searchTerm})`, "gi");
  return text.replace(regex, '<span class="highlight">$1</span>');
}

// Adiciona ou remove um post dos favoritos
function adicionarFavorito(post) {
  const favoritos = JSON.parse(sessionStorage.getItem("favorito")) || [];
  const produtoExistente = favoritos.find((item) => item.id === post.id);

  if (produtoExistente) {
    // Remove dos favoritos
    const novosFavoritos = favoritos.filter((item) => item.id !== post.id);
    sessionStorage.setItem("favorito", JSON.stringify(novosFavoritos));
  } else {
    // Adiciona aos favoritos
    post.favorito = true;
    favoritos.push(post);
    sessionStorage.setItem("favorito", JSON.stringify(favoritos));
  }
}

// Renderiza os posts na página
function renderPosts(posts, searchTerm = "") {
  const container = document.getElementById("postContainer");
  container.innerHTML = "";

  if (posts.length === 0) {
    const noResultsMessage = document.createElement("div");
    noResultsMessage.classList.add("no-results-message");
    noResultsMessage.textContent = "Nenhum resultado encontrado.";
    container.appendChild(noResultsMessage);
    return;
  }

  posts.forEach((post) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.setAttribute("id", post.id);

    const parte_de_cima = document.createElement("div");
    parte_de_cima.classList.add("parte_de_cima");

    const botao = document.createElement("button");
    botao.classList.add("botao");

    const favoritos = JSON.parse(sessionStorage.getItem("favorito")) || [];
    const produtoExistente = favoritos.find((item) => item.id === post.id);

    const imagem_botao = document.createElement("img");
    imagem_botao.src = produtoExistente
      ? "../img/favoritos-selecionado.png"
      : "../img/favoritos.webp";
    imagem_botao.alt = produtoExistente
      ? "Desfavoritar este post"
      : "Adicionar aos favoritos";

    botao.appendChild(imagem_botao);

    botao.addEventListener("click", () => {
      adicionarFavorito(post);
      renderPosts(posts, searchTerm); // Atualiza a exibição dos favoritos
    });

    const tags = document.createElement("p");
    tags.textContent = `${post.tags.join(" ⋆˚✿˖° ")}`;
    tags.classList.add("tags");

    parte_de_cima.appendChild(botao);
    parte_de_cima.appendChild(tags);

    const img = document.createElement("img");
    img.src = post.caminho_imagem || "../img/default.jpg";
    img.alt = post.alt_imagem || "Imagem de post";
    img.classList.add("img_post");

    const title = document.createElement("h3");
    title.innerHTML = searchTerm ? highlightText(post.titulo, searchTerm) : post.titulo;

    const text = document.createElement("p");
    text.innerHTML = searchTerm
      ? highlightText(post.texto || "Descrição do evento disponível no local.", searchTerm)
      : post.texto || "Descrição do evento disponível no local.";

    card.appendChild(parte_de_cima);
    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(text);

    container.appendChild(card);
  });
}

// Filtra os posts pelas tags selecionadas
function filterPostsByTags() {
  const selectedTags = Array.from(
    document.querySelectorAll(".filter-checkbox:checked")
  ).map((checkbox) => checkbox.value);

  const filteredPosts = posts.filter((post) =>
    selectedTags.every((tag) => post.tags.includes(tag))
  );

  renderPosts(filteredPosts);
}

// Realiza a busca de posts por título e texto
function searchPosts(searchTerm) {
  const filteredPosts = posts.filter((post) =>
    post.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.texto.toLowerCase().includes(searchTerm.toLowerCase())
  );
  renderPosts(filteredPosts, searchTerm);
}

// Obtém o termo de pesquisa da URL
function Termo_pesquisado_pela_url() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("search") || "";
}

// Limpa o campo de busca
function limpar_barra_pesquisa() {
  const barra_pesquisa = document.getElementById("searchInput");
  barra_pesquisa.value = "";
}

// Evento principal ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
  addCSS();
  const termo_url = Termo_pesquisado_pela_url();
  renderPosts(posts);

  if (termo_url) {
    const searchInput = document.getElementById("searchInput");
    searchInput.value = termo_url;
    searchPosts(termo_url);
  }

  const checkboxes = document.querySelectorAll(".filter-checkbox");
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", filterPostsByTags);
  });

  const searchInput = document.getElementById("searchInput");
  searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      searchPosts(event.target.value);
    }
  });

  const botao_limpar = document.getElementById("botao-limpar-pesquisa");
  if (botao_limpar) {
    botao_limpar.addEventListener("click", () => {
      limpar_barra_pesquisa();
      renderPosts(posts);
    });
  }
  

  const botao_dog = document.getElementById("botao-barra-pesquisa");
  botao_dog.addEventListener("click", () => {
    searchPosts(searchInput.value);
  })
});