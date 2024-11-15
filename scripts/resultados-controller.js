import { posts } from "../constants/posts.js";

// Função para adicionar CSS diretamente no JavaScript
function addCSS() {
  const style = document.createElement("style");
  style.innerHTML = `
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
  `;
  document.head.appendChild(style); // Adiciona o estilo ao <head>
}

function renderPosts(posts) {
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

    const img = document.createElement("img");
    img.src = post.caminho_imagem || "../img/default.jpg";
    img.alt = post.alt_imagem || "Imagem de post";

    const title = document.createElement("h3");
    title.textContent = post.titulo;

    const text = document.createElement("p");
    text.textContent = post.texto || "Descrição do evento disponível no local.";

    const tags = document.createElement("p");
    tags.textContent = `Tags: ${post.tags.join(", ")}`;

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(text);
    card.appendChild(tags);

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

// Function to search posts by title
function searchPosts(searchTerm) {
  const filteredPosts = posts.filter((post) =>
    post["titulo"].toLowerCase().includes(searchTerm.toLowerCase())
  );
  renderPosts(filteredPosts);
}

document.addEventListener("DOMContentLoaded", () => {
  addCSS(); // Chama a função para adicionar o CSS no carregamento da página
  renderPosts(posts);

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
