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

// Função para destacar a palavra no texto
function highlightText(text, searchTerm) {
  const regex = new RegExp(`(${searchTerm})`, 'gi'); // Regex para encontrar o termo (case-insensitive)
  return text.replace(regex, '<span class="highlight">$1</span>'); // Envolve a palavra encontrada com o <span> para destacar
}

function renderPosts(posts, searchTerm = "") {
  const container = document.getElementById("postContainer");
  container.innerHTML = "";

  // Se não houver posts para mostrar
  if (posts.length === 0) {
    const noResultsMessage = document.createElement("div");
    noResultsMessage.classList.add("no-results-message"); // Adiciona a classe de centralização

    const text = document.createElement("p");
    text.textContent = "Nenhum resultado encontrado.";

    noResultsMessage.appendChild(text);
    container.appendChild(noResultsMessage);
    return;
  }

  posts.forEach((post) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("id", post.id)


    const parte_de_cima = document.createElement("div");
    parte_de_cima.classList.add("parte_de_cima");

    const botao = document.createElement("button");
    const imagem_botao = document.createElement("img");
    botao.classList.add("botao");

    const tags = document.createElement("p");
    tags.textContent = `${post.tags.join(" ⋆˚✿˖° ")}`;
    tags.classList.add("tags");

    parte_de_cima.appendChild(botao);
    parte_de_cima.appendChild(tags);

    imagem_botao.src = "../img/favoritos.webp";
    imagem_botao.alt = "Imagem de coração para favoritos.";
    botao.appendChild(imagem_botao);

    const img = document.createElement("img");
    img.src = post.caminho_imagem || "../img/default.jpg";
    img.alt = post.alt_imagem || "Imagem de post";
    img.classList.add("img_post");

    const title = document.createElement("h3");
    title.innerHTML = searchTerm ? highlightText(post.titulo, searchTerm) : post.titulo; // Destaca a palavra no título

    const text = document.createElement("p");
    text.innerHTML = searchTerm ? highlightText(post.texto || "Descrição do evento disponível no local.", searchTerm) : (post.texto || "Descrição do evento disponível no local."); // Destaca a palavra no texto

    card.appendChild(parte_de_cima);
    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(text);

    container.appendChild(card);
  });
}

function filterPostsByTags() {
  const selectedTags = Array.from(document.querySelectorAll(".filter-checkbox:checked")).map(
    (checkbox) => checkbox.value
  );

  const filteredPosts = posts.filter((post) =>
    selectedTags.every((tag) => post.tags.includes(tag))
  );
  
  renderPosts(filteredPosts);
}

// Function to search posts by title and text
function searchPosts(searchTerm) {
  console.log(searchTerm)
  
  const filteredPosts = posts.filter((post) =>
    post["titulo"].toLowerCase().includes(searchTerm.toLowerCase()) || 
    post["texto"].toLowerCase().includes(searchTerm.toLowerCase())
  );
  renderPosts(filteredPosts, searchTerm); // Passando o termo de busca para destacar
}

function Termo_pesquisado_pela_url() {
  const urlParams = new URLSearchParams(window.location.search);
  console.log(urlParams.get('search'))
  return urlParams.get('search') || ""; 
}

function limpar_barra_pesquisa() {
  let barra_pesquisa = document.getElementById("searchInput");
  barra_pesquisa.value = "";
}

document.addEventListener("DOMContentLoaded", () => {
  addCSS(); // Chama a função para adicionar o CSS no carregamento da página
  renderPosts(posts);
  let termo_url = Termo_pesquisado_pela_url();
  if (termo_url!=""){
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

});


window.addEventListener("load", function () {
  let botao_limpar = document.getElementById("botao-limpar-pesquisa");
  botao_limpar.addEventListener("click",  function() {
    limpar_barra_pesquisa();
  });
});